const mongoose = require('mongoose');

// Define the Car Schema
const carSchema = new mongoose.Schema({
  vin: { type: String, required: true, unique: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  kms: { type: Number, required: true },
  price: { type: Number, required: true },
  images: [String] // Array of image URLs
});

// Create the Car model
const Car = mongoose.model('Car', carSchema);

module.exports = Car;
