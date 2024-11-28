const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    color: String,
    kms: Number,
    vin: String,
    price: Number,
    images: [String],  // Array for multiple images
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
