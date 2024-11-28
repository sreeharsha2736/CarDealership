const Car = require('../models/car');

// Get all cars from the database
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
