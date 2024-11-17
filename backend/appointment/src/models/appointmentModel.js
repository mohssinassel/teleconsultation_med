// models/appointmentModel.js
const mongoose = require('mongoose');

// Define schema for the Appointment model
const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Scheduled', 'Completed', 'Cancelled'],
      default: 'Scheduled',
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true } // Automatically handle createdAt and updatedAt
);

// Create the Appointment model from the schema
const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
