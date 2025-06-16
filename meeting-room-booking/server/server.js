const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Only import the router
const bookingRoutes = require('./routes/bookings');
app.use('/api/bookings', bookingRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log("✅ Server running on port 5000")))
  .catch(err => console.error(err));
