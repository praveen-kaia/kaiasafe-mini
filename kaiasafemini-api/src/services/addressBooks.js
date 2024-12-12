const logger = require("../helpers/logger");
const db = require("../models");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { Web3, getPublicKeyFromPrivate } = require("@kaiachain/web3js-ext");
const jose = require("jose");
const web3 = new Web3();

let service = {};

service.getAddressBooks = async (_userAddress) => {

  let user = await db.users.findOne({
    where: { address: _userAddress.toLowerCase() },
  });

  if (!user) {
    
    return {addressBookContacts: [], otherContacts: []};
  } else {
    throw new Error("Not Authorized. Please contact Admin");
  }

};

service.addAddressBook = async () => {
  
};

module.exports = service;
