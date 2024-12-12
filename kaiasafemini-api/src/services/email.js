const logger = require("../helpers/logger");
const db = require("../models");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { Web3, getPublicKeyFromPrivate } = require("@kaiachain/web3js-ext");
const jose = require("jose");
const web3 = new Web3();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Mailgun",
  host: "smtp.mailgun.org",
  port: 587,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD
  }
})

let service = {};

service.sendEmail = async (_email, _link) => {
  // logger.info(process.env.NODEMAILER_EMAIL,process.env.NODEMAILER_PASSWORD )
  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: _email,
    subject: 'Sending Email using Node.js',
    html: `<b>KaiaSafe Mini Invitation Received</b> <br/>
    Invitation Link: ${_link}
    `
  }

  const info = await transporter.sendMail(mailOptions);

  if(info && info.messageId) {
    logger.info(`Email sent: `, info.messageId)
  } else {
    logger.info(`Error: `, error);
    throw new Error("Problem while sending invitation")
  }

};

module.exports = service;