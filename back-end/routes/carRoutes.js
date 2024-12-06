const express = require('express');
const router = express.Router();
const { getAllCars, getFilteredCars, getCarDetails } = require('../controllers/carController');

// Route to get all cars
router.get('/', getAllCars);

// Route to get filtered cars based on price and kms
router.get('/filter', getFilteredCars);

// Route to get a single car based on vin
router.get('/:vin', getCarDetails);

module.exports = router;
