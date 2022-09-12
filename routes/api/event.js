// routes/api/users.js
const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



router.post('/', eventsCtrl.create);
router.get('/:id', eventsCtrl.getEventData);
router.put('/updateevent/:id', eventsCtrl.updateTitle)
router.delete('/:id', eventsCtrl.deleteEvent);

module.exports = router;
