// models/doctorModel.js
const mongoose = require('mongoose');

// Define schema for the Doctor model
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    availability: {
      type: [String], // Array of available slots (e.g., ['9am-10am', '2pm-3pm'])
      default: [],
    },
    contact: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically handle createdAt and updatedAt
);

// Create the Doctor model from the schema
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
