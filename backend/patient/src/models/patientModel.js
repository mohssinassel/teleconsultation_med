const mongoose = require('mongoose');

// Define schema for a Patient
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  contact_details: { type: String, required: true },
  medical_history: { type: String, required: false }
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
