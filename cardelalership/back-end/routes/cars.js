const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Route definitions
router.get('/', carController.getAllCars);
router.get('/:id', carController.getCarById);
router.post('/', carController.addCar);

module.exports = router;
