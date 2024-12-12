const mongoose = require('mongoose');

// SlotBooking Schema
const slotBookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // Ensuring 10-digit phone number
  },
  preferredDateTime: {
    type: Date,
    required: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  carMake: {
    type: String,
    required: true,
  },
  carVin: {
    type: String,
    required: true,
  },
  carPrice: {
    type: Number,
    required: true,
  },
});

// SlotBooking Model
const SlotBooking = mongoose.model('SlotBooking', slotBookingSchema);

module.exports = SlotBooking;
