// routes/api/users.js
const express = require('express');
const router = express.Router();
const eventsListCtrl = require('../../controllers/api/eventsList');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/list', eventsListCtrl.getData);

module.exports = router;
