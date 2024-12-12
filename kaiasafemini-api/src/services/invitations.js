const logger = require("../helpers/logger");
const db = require("../models");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { Web3, getPublicKeyFromPrivate } = require("@kaiachain/web3js-ext");
const jose = require("jose");
const web3 = new Web3();
const emailService = require("./email");
const WEB3AUTH_JWKS = "https://api-auth.web3auth.io/jwks"; // for socials

let service = {};

service.acceptInvitation = async (_idToken, _appPubKey, _invitationToken) => {
  // check if invitation is valid
  var decoded = jwt.verify(_invitationToken, process.env.JWT_INVITE_SECRET);
  if (!decoded) {
    throw new Error("Invitation expired or not valid");
  }

  // TODO check if invitation is till pending in the invitations
  logger.info();
  let invitation = await db.invitations.findOne({
    where: { inviteCode: decoded.inviteCode.toLowerCase(), status: "pending" },
  });

  if (!invitation) {
    throw new Error("Invitation doesnt match or not valid");
  }
  invitation = await invitation.toJSON();

  const jwks = jose.createRemoteJWKSet(new URL(WEB3AUTH_JWKS));
  const jwtDecoded = await jose.jwtVerify(_idToken, jwks, {
    algorithms: ["ES256"],
  });

  logger.info(invitation.email);
  logger.info(jwtDecoded.payload.email);
  if (invitation.inviteeEmail !== jwtDecoded.payload.email) {
    throw new Error("Not Authorized");
  }

  if (
    jwtDecoded.payload.wallets
      .find((x) => x.type === "web3auth_app_key")
      .public_key.toLowerCase() === _appPubKey.toLowerCase()
  ) {
    const address = web3.utils.keccak256(_appPubKey);
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
        publicAddress: _appPubKey.toLowerCase(),
        isActive: true,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      user = user.toJSON();
    }
    // 1. update the invitation code here
    // 2. Add the invited person to walletsigners
    // skip below process if done already TODO
    await db.walletSigners.create({
      walletId: invitation.walletId,
      userId: user.id,
    });

    await db.invitations.update(
      { status: "accepted" },
      { where: { inviteCode: decoded.inviteCode.toLowerCase() } }
    );
  }
};

service.getInvitations = async () => {};

service.sendInvitation = async (_walletId, _email, _userAddress) => {
  let inviteCode = uuidv4();
  let user = await db.users.findOne({
    where: { address: _userAddress.toLowerCase() },
  });

  if (user) {
    user = await user.toJSON();

    logger.info("Adding invitations");

    await db.invitations.create({
      inviteCode: inviteCode, // invitationCode is not required
      inviteeEmail: _email,
      sentAt: Date.now(),
      status: "pending",
      inviterId: user.id,
      walletId: _walletId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    const token = jwt.sign(
      {
        inviteCode: inviteCode,
      },
      process.env.JWT_INVITE_SECRET,
      { expiresIn: process.env.JWT_INVITE_EXPIRY }
    );

    // send email to receiver
    logger.info("http://localhost:3000/invite?token=" + token);
    emailService.sendEmail(
      _email,
      "http://localhost:3000/invite?token=" + token
    );
  } else {
    throw new Error("Not Authorized. Please contact Admin");
  }
};

module.exports = service;
