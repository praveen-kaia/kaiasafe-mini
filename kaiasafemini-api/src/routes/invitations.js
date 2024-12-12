var express = require('express');
var router = express.Router();
var service = require("../services/invitations.js");
let logger = require('../helpers/logger.js');

router.post('/', async (req, res) => {
    try {
        let userAddress = res.locals.user.address;
        let walletId = req.body.walletId;
        let email = req.body.email;

        // logger.info(userAddress, name)

        // validation if walletid belongs to userAddress
        // TODO
        
        await service.sendInvitation(walletId, email, userAddress);
        
        return res.status(200).json({success: true, message: "Invitation sent successfully"});
    } catch(err) {
        logger.error(err.message);
        return res.status(404).json({success: false, message: err.message});
    }
});

module.exports = router;