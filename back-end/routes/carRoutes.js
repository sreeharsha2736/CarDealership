const express = require('express');
const router = express.Router();
const { getAllCars, getFilteredCars } = require('../controllers/carController');

// Route to get all cars
router.get('/', getAllCars);

// Route to get filtered cars based on price and kms
router.get('/filter', getFilteredCars);

module.exports = router;
