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
    if (make) filterCriteria.make = { $in: make.split(',') };
    if (model) filterCriteria.model = { $in: model.split(',') };
    if (minPrice) filterCriteria.price = { $gte: parseInt(minPrice, 10) };
    if (maxPrice) {
      filterCriteria.price = filterCriteria.price || {};
      filterCriteria.price.$lte = parseInt(maxPrice, 10);
    }
    if (minKms) filterCriteria.kms = { $gte: parseInt(minKms, 10) };
    if (maxKms) {
      filterCriteria.kms = filterCriteria.kms || {};
      filterCriteria.kms.$lte = parseInt(maxKms, 10);
    }
    if (minYear) filterCriteria.year = { $gte: parseInt(minYear, 10) };
    if (maxYear) {
      filterCriteria.year = filterCriteria.year || {};
      filterCriteria.year.$lte = parseInt(maxYear, 10);
    }

    // Query the cars collection with the filter criteria
    const cars = await Car.find(filterCriteria);
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get distinct makes and models for filters
const getCarMakesAndModels = async (req, res) => {
  try {
    const makes = await Car.distinct('make');
    const models = await Car.distinct('model');
    res.json({ makes, models });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllCars, getFilteredCars, getCarMakesAndModels };
