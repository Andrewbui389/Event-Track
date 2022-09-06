// routes/api/users.js
const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/eventsList');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', eventsCtrl.getData);

module.exports = router;
