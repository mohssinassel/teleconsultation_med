// services/doctorService.js
const Doctor = require('../models/doctorModel');

// Create a new doctor
const createDoctor = async (doctorData) => {
  const newDoctor = new Doctor(doctorData);

  try {
    await newDoctor.save();
    return newDoctor;
  } catch (error) {
    throw new Error('Error creating doctor: ' + error.message);
  }
};

// Get all doctors
const getAllDoctors = async () => {
  try {
    return await Doctor.find();
  } catch (error) {
    throw new Error('Error fetching doctors: ' + error.message);
  }
};

// Get a doctor by ID
const getDoctorById = async (id) => {
  try {
    return await Doctor.findById(id);
  } catch (error) {
    throw new Error('Error fetching doctor: ' + error.message);
  }
};

// Update a doctor's availability
const updateDoctorAvailability = async (id, availability) => {
  try {
    return await Doctor.findByIdAndUpdate(id, { availability }, { new: true });
  } catch (error) {
    throw new Error('Error updating doctor availability: ' + error.message);
  }
};

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctorAvailability,
};
