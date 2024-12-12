const logger = require("../helpers/logger");
const db = require("../models");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { Web3, getPublicKeyFromPrivate } = require("@kaiachain/web3js-ext");
const jose = require("jose");
const web3 = new Web3();

let service = {};

service.draftWallet = async (_name, _userAddress) => {

  let user = await db.users.findOne({
    where: { address: _userAddress.toLowerCase() },
  });

  if (user) {
    user = await user.toJSON();
    
    let wallet = await db.wallets.create({
      name: _name,
      address: "",
      status: "draft",
      createdById: user.id,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });

    wallet = await wallet.toJSON();

    await db.walletSigners.create({
      walletId: wallet.id,
      userId: user.id
    })

    return wallet.id;
  } else {
    throw new Error("Not Authorized. Please contact Admin");
  }

};

service.updateWalletThreshold = async (_threshold, _walletId, _userAddress) => {

  let user = await db.users.findOne({
    where: { address: _userAddress.toLowerCase() },
  });

  if (user) {
    user = await user.toJSON();
      // threshold can be update only in draft by checking preconditions
    await db.wallets.update({
      threshold: _threshold
    }, {where: {
      status: "draft",
      walletId: walletId,
      createdById: user.id
    }});
  } else {
    throw new Error("Not Authorized. Please contact Admin");
  }

};

service.getWallets = async (_userAddress) => {

  let user = await db.users.findOne({
    where: { address: _userAddress.toLowerCase() },
  });

  if (user) {
    user = await user.toJSON();

    let wallets = await db.wallets.findAll({
      raw: true,
      include: [
          {model: db.walletSigners,
            where: {
              userId: user.id
            }
          }
      ],
      order: [
          ['id', 'ASC'],
      ]
  });

  console.log(wallets)

    return wallets;
  } else {
    throw new Error("Not Authorized. Please contact Admin");
  }

};
module.exports = service;
