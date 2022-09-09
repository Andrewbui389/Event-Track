// routes/api/users.js
const express = require('express');
const router = express.Router();
const guestCtrl = require('../../controllers/api/guests');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.get('/updateguest/checkin/:eventId/:guestId', guestCtrl.qrCheck)
router.put('/:eventId/:guestId', guestCtrl.guestUpdate);


module.exports = router;
