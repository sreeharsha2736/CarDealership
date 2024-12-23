const Car = require('../models/Car');

// Get all cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get filtered cars based on query parameters
const getFilteredCars = async (req, res) => {
  try {
    const {
      make,
      model,
      minPrice,
      maxPrice,
      minKms,
      maxKms,
      minYear,
      maxYear,
    } = req.query;

    const filterCriteria = {};

    // Build the filter object dynamically based on query parameters
    if (make) {
      filterCriteria.make = { $in: make.split(',') }; // Split comma-separated makes into an array
    }
    if (model) {
      filterCriteria.model = { $in: model.split(',') }; // Split comma-separated models into an array
    }
    if (minPrice) {
      filterCriteria.price = { $gte: minPrice };
    }
    if (maxPrice) {
      filterCriteria.price = filterCriteria.price || {};
      filterCriteria.price.$lte = maxPrice;
    }
    if (minKms) {
      filterCriteria.kms = { $gte: minKms };
    }
    if (maxKms) {
      filterCriteria.kms = filterCriteria.kms || {};
      filterCriteria.kms.$lte = maxKms;
    }
    if (minYear) {
      filterCriteria.year = { $gte: minYear };
    }
    if (maxYear) {
      filterCriteria.year = filterCriteria.year || {};
      filterCriteria.year.$lte = maxYear;
    }

    // Query the cars collection with the filter criteria
    const cars = await Car.find(filterCriteria);
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get car details by VIN
const getCarDetails = async (req, res) => {
  try {
    const { vin } = req.params;
    const car = await Car.findOne({ vin });

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllCars, getFilteredCars, getCarDetails };
