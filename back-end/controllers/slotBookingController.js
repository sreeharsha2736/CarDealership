const SlotBooking = require('../models/slotBooking');

// Controller for handling slot booking
exports.bookSlot = async (req, res) => {
  const { name, email, phone, preferredDateTime, carModel, carMake, carVin, carPrice } = req.body;

  // Validate date and time
  const now = new Date();
  const preferredDateTimeObj = new Date(preferredDateTime);
  if (preferredDateTimeObj <= now) {
    return res.status(400).json({ message: 'Please select a future date and time.' });
  }

  // Create new booking
  const booking = new SlotBooking({
    name,
    email,
    phone,
    preferredDateTime: preferredDateTimeObj,
    carModel,
    carMake,
    carVin,
    carPrice,
  });

  try {
    // Save the booking to the database
    await booking.save();
    res.status(201).json({ message: 'Booking successfully made for test drive!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was an error processing your request. Please try again.' });
  }
};
