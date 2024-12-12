var express = require('express');
var router = express.Router();
var service = require("../services/auth.js");
var invitationService = require("../services/invitations.js");
let logger = require('../helpers/logger');
// var clientService = require("../../services/client/index.js");

router.get('/health', async (req, res) => {
    try {
        return res.status(200).json({status: "UP", success: true});
    } catch(err) {
        return res.status(404).json({status: "DOWN", success: false});
    }
})

router.get('/version', async (req, res) => {
    try {
        return res.status(200).json({data: { version: "1.0.0" }, success: true});
    } catch(err) {
        return res.status(404).json({success: false});
    }
});

router.post('/login', async (req, res) => {
    try {
        let idToken = req.headers.authorization?.split(' ')[1];
        let appPubKey = req.body.appPubKey || "";

        let token = await service.login(idToken, appPubKey);
        return res.status(200).json({success: true, data: {token: token}});
    } catch(err) {
        logger.error(err.message);
        return res.status(404).json({success: false, message: err.message});
    }
});

// accept
router.post('/accept', async (req, res) => {
    try {
        let idToken = req.headers.authorization?.split(' ')[1];
        let appPubKey = req.body.appPubKey || "";
        let invitationToken = req.body.invitationToken || ""; // may not need any invitationCode

        await invitationService.acceptInvitation(idToken, appPubKey, invitationToken);
        return res.status(200).json({success: true, message: "Invitation accepted successfully"});
    } catch(err) {
        logger.error(err.message);
        return res.status(404).json({success: false, message: err.message});
    }
});

module.exports = router;