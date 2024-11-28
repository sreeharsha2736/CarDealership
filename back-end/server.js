const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const carRoutes = require('./routes/cars');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/cars', carRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
