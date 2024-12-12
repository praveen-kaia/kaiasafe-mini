let lib = {};
const Web3 = require('web3');
var web3 = new Web3();
const path = require('path');
const Caver = require('caver-js')
const caver = new Caver();

lib.isValidAddress = (_address) => {
    return Web3.utils.isAddress(_address)
}

lib.codeToId = (code) => {
    return Web3.utils.keccak256(
        Web3.utils.encodePacked(
            {value: code, type: 'string'}
        )
    );
}

lib.recover = (message, _signature, _provider) => {
    let signedAddress = "";
    if(_provider == "metamask") {
        signedAddress =  web3.eth.accounts.recover(message, _signature);
    } else if(_provider == "kaikas") {
        signedAddress = caver.klay.accounts.recover(message, _signature);
    } 
    return signedAddress;
}

lib.loadProviderIntoCache = async () => {
    global.providers = {baobab: null, cypress: null};
    let baobabRpcUrl = global.settings['RPC_URL'+'-'+'baobab'];
    global.providers.baobab = new Web3(new Web3.providers.HttpProvider(baobabRpcUrl));
    let cypressRpcUrl = global.settings['RPC_URL'+'-'+'cypress'];
    global.providers.cypress = new Web3(new Web3.providers.HttpProvider(cypressRpcUrl));
}

const getContract = (_provider, _contractAddress, _abi) => {
    return new _provider.eth.Contract(_abi, _contractAddress)
}

lib.mint = async (_privateKey, _receiver, _network, _contractAddress, _abi, _templateId, _eventId, _code, _isNTT=false) => {
    let provider = global.providers[_network];
    const account = provider.eth.accounts.privateKeyToAccount(_privateKey);
    provider.eth.accounts.wallet.add(account);
    provider.eth.defaultAccount = account.address;
    if(_templateId == 1) {
        const contract = await getContract(provider, _contractAddress, _abi)
        let _gasPrice = await provider.eth.getGasPrice();
        let gasAmount = await contract.methods
            .drop(_code, _receiver)
            .estimateGas({from: account.address, gas: global.settings['GAS_LIMIT'+'-'+_network]});
        const tx = await contract.methods
            .drop(_code, _receiver)
            .send({ from: account.address, gas: gasAmount, gasPrice: _gasPrice })
        return tx;
    } else if(_templateId == 2 || _templateId == 3) {
        const contract = await getContract(provider, _contractAddress, _abi)
        let _gasPrice = await provider.eth.getGasPrice();
        let gasAmount = await contract.methods
            .safeMint(_eventId, _receiver, _isNTT)
            .estimateGas({from: account.address, gas: global.settings['GAS_LIMIT'+'-'+_network]});
        const tx = await contract.methods
            .safeMint(_eventId, _receiver, _isNTT)
            .send({ from: account.address, gas: gasAmount, gasPrice: _gasPrice })
        
        return tx;
    } else {
        throw new Error("Not a valid Template");
    }
    
}

lib.getCollectables = async (_privateKey, _address, _network, _contractAddress, _abi) => {
    let provider = global.providers[_network];
    const account = provider.eth.accounts.privateKeyToAccount(_privateKey);
    provider.eth.accounts.wallet.add(account);
    provider.eth.defaultAccount = account.address

    const contract = await getContract(provider, _contractAddress, _abi)
    let _gasPrice = await provider.eth.getGasPrice();

    let gasAmount = await contract.methods
        .balanceOf(_address)
        .estimateGas({from: account.address, gas: global.settings['GAS_LIMIT'+'-'+_network]});
    const balance = await contract.methods
        .balanceOf(_address)
        .call({ from: account.address, gas: gasAmount, gasPrice: _gasPrice })

    let tokenIds = [];
    for(let i=0; i<balance; i++) {
        gasAmount = await contract.methods
        .tokenDetailsOfOwnerByIndex(_address, i)
        .estimateGas({from: account.address, gas: global.settings['GAS_LIMIT'+'-'+_network]});

        const {tokenId, eventId} = await contract.methods
            .tokenDetailsOfOwnerByIndex(_address, i)
            .call({ from: account.address, gas: gasAmount, gasPrice: _gasPrice });
        tokenIds.push({tokenId, eventId});
    }

    let tokenMetadata = [];
    for(let i=0; i<tokenIds.length; i++) {
        let data = await fetch(global.settings['POAP_METADATA_API'+'-'+_network]+"/"+tokenIds[i].eventId+"/"+tokenIds[i].tokenId)
        .then(response => response.json());
        data.tokenId = tokenIds[i];
        tokenMetadata.push(data);
    }

    return tokenMetadata;
}

lib.getTokenById =  async (_privateKey, _tokenId, _network, _contractAddress, _abi) => {
    let provider = global.providers[_network];
    const account = provider.eth.accounts.privateKeyToAccount(_privateKey);
    provider.eth.accounts.wallet.add(account);
    provider.eth.defaultAccount = account.address

    const contract = await getContract(provider, _contractAddress, _abi)
    let _gasPrice = await provider.eth.getGasPrice();

    let gasAmount = await contract.methods
        .ownerOf(_tokenId)
        .estimateGas({from: account.address, gas: global.settings['GAS_LIMIT'+'-'+_network]});
    const owner = await contract.methods
        .ownerOf(_tokenId)
        .call({ from: account.address, gas: gasAmount, gasPrice: _gasPrice });
    
    gasAmount = await contract.methods
        .tokenEvent(_tokenId)
        .estimateGas({from: account.address, gas: global.settings['GAS_LIMIT'+'-'+_network]});
    const eventId = await contract.methods
        .tokenEvent(_tokenId)
        .call({ from: account.address, gas: gasAmount, gasPrice: _gasPrice });

    let data = await fetch(global.settings['POAP_METADATA_API'+'-'+_network]+"/"+ eventId+"/"+_tokenId)
        .then(response => response.json());
    data.tokenId = _tokenId;
    data.owner = owner;
    data.eventId = eventId;
    return data;
}

// lib.getMintedDateForTokenId = async (_privateKey, _tokenId, _eventId, _network, _contractAddress, _abi) => {
//     let provider = global.providers[_network];
//     const account = provider.eth.accounts.privateKeyToAccount(_privateKey);
//     provider.eth.accounts.wallet.add(account);
//     provider.eth.defaultAccount = account.address

//     const contract = await getContract(provider, _contractAddress, _abi)

//     let events = await contract.getPastEvents('EventToken', {
//         filter: {eventId: parseInt(_eventId), tokenId: parseInt(_tokenId)}, // Using an array means OR: e.g. 20 or 23
//         fromBlock: 0,
//         toBlock: 'latest'
//     });
//     let mintedAt = "";
//     if(events && events.length > 0) {
//         let blockNumber = events[0].blockNumber;
//         let block = await provider.eth.getBlock(blockNumber);
//         mintedAt = block.timestamp;
//     }
//     if(!mintedAt) {
//         throw new Error("EventToken not found");
//     }
//     return mintedAt;
// }

lib.getTokenIdByHash = async (_hash, _network) => {
    let provider = global.providers[_network];
    let txnObj = await provider.eth.getTransactionReceipt(_hash);
    if(txnObj && txnObj.logs) {
        let eventData = txnObj.logs.filter(logData => logData.topics.length == 3)[0];
        return provider.utils.hexToNumberString(eventData.topics[2]);
    } else {
        return '';
    }

}

// airdrop
lib.userClaimed = async (_privateKey,  _eventId, _address, _network, _contractAddress, _abi) => {
    let provider = global.providers[_network];
    const account = provider.eth.accounts.privateKeyToAccount(_privateKey);
    provider.eth.accounts.wallet.add(account);
    provider.eth.defaultAccount = account.address

    const contract = await getContract(provider, _contractAddress, _abi);
    const status = await contract.methods
        .userClaimed(_address)
        .call();
    return status;
}

lib.isValidCode = async (_privateKey,  _code, _network, _contractAddress, _abi) => {
    let provider = global.providers[_network];
    const account = provider.eth.accounts.privateKeyToAccount(_privateKey);
    provider.eth.accounts.wallet.add(account);
    provider.eth.defaultAccount = account.address

    const contract = await getContract(provider, _contractAddress, _abi);
    
    return await contract.methods.isValid(_code).call()
}

module.exports = lib;