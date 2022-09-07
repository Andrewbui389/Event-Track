// routes/api/users.js
const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', eventsCtrl.create);

module.exports = router;
