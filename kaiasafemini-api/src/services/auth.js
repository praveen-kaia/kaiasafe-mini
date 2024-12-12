const logger = require("../helpers/logger");
const db = require("../models");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { Web3, getPublicKeyFromPrivate } = require("@kaiachain/web3js-ext");
const jose = require("jose");
const web3 = new Web3();

let service = {};

const WEB3AUTH_JWKS = "https://api-auth.web3auth.io/jwks"; // for socials
service.login = async (idToken, appPubKey) => {
  const jwks = jose.createRemoteJWKSet(new URL(WEB3AUTH_JWKS));
  const jwtDecoded = await jose.jwtVerify(idToken, jwks, {
    algorithms: ["ES256"],
  });

  if (
    jwtDecoded.payload.wallets
      .find((x) => x.type === "web3auth_app_key")
      .public_key.toLowerCase() === appPubKey.toLowerCase()
  ) {
    const address = web3.utils.keccak256(appPubKey);
    const kaiaAddress = "0x" + address.slice(-40);
    let user = await db.users.findOne({
      where: { address: kaiaAddress.toLowerCase() },
    });
    console.log(kaiaAddress);
    if (!user) {
      user = await db.users.create({
        name: jwtDecoded.payload.name || "",
        email: jwtDecoded.payload.email,
        address: kaiaAddress.toLowerCase(),
        publicAddress: appPubKey.toLowerCase(),
        isActive: true,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      user = user.toJSON();
    }
    const token = jwt.sign(
      {
        address: kaiaAddress,
        userId: user.id,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY }
    );
    return token;
  } else {
    logger.error("Not authorized");
    throw new Error("Not authorized");
  }
};

module.exports = service;
