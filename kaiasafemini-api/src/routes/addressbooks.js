var express = require('express');
var router = express.Router();
var service = require("../services/wallets.js");
let logger = require('../helpers/logger.js');

// get addressbook based on userId and also get list
router.get('/addressBooks', async (req, res) => {
    try {
        let userAddress = res.locals.user.address;
        let result = await service.getAddressBooks(userAddress);
        return res.status(200).json({success: true, data: {addressBookContacts: result.addressBookContacts,
             otherContacts: result.otherContacts}});
    } catch(err) {
        logger.error(err.message);
        return res.status(404).json({success: false, message: err.message});
    }
});

module.exports = router;