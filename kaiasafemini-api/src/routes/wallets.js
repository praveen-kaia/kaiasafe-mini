var express = require('express');
var router = express.Router();
var service = require("../services/wallets.js");
let logger = require('../helpers/logger.js');

router.post('/', async (req, res) => {
    try {
        let userAddress = res.locals.user.address;
        let name = req.body.name;

        logger.info(userAddress, name)
        
        let walletId = await service.draftWallet(name, userAddress);
        
        return res.status(200).json({success: true, data: {walletId: walletId}});
    } catch(err) {
        logger.error(err.message);
        return res.status(404).json({success: false, message: err.message});
    }
});

router.get('/', async (req, res) => {
    try {
        let userAddress = res.locals.user.address;
        
        let wallets = await service.getWallets(userAddress);
        
        return res.status(200).json({success: true, data: {wallets: wallets}});
    } catch(err) {
        logger.error(err.message);
        return res.status(404).json({success: false, message: err.message});
    }
});

module.exports = router;