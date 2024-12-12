const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/carRoutes');
const slotBookingRoutes = require('./routes/slotBookingRoutes');

// Load environment variables
dotenv.config();

// Create an instance of the Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// API routes
app.use('/api/cars', carRoutes);
app.use('/api/book-slot', slotBookingRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Car Dealership API!');
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
