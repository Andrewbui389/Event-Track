// routes/api/users.js
const express = require('express');
const router = express.Router();
const guestCtrl = require('../../controllers/api/guests');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.put('/:eventId/:guestId', guestCtrl.guestUpdate);
router.put('/qrcode/:eventId/:guestId', guestCtrl.qrCheckIn);


module.exports = router;
