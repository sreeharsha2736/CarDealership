const express = require('express');
const router = express.Router();
const { bookSlot } = require('../controllers/slotBookingController');

// Route for booking a slot
router.post('/', bookSlot);

module.exports = router;
