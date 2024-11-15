



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Import routes
const patientRoutes = require('./routes/patientRoute');

// Use routes
app.use('/', patientRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/patient', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB:", err));

// Start the server
const PORT = 8001 ;
app.listen(PORT, () => {
  console.log(`Patient service is running on port ${PORT}`);
});

app.use('/', (req, res,next) => {

    return res.status(200).json({
        "msj": 'Patient is working'
    });
});
