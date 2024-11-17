// services/appointmentService.js
const Appointment = require('../models/appointmentModel');

// Create a new appointment
const createAppointment = async (appointmentData) => {
  const newAppointment = new Appointment(appointmentData);

  try {
    await newAppointment.save();
    return newAppointment;
  } catch (error) {
    throw new Error('Error creating appointment: ' + error.message);
  }
};

// Get all appointments
const getAllAppointments = async () => {
  try {
    return await Appointment.find().populate('patientId doctorId');
  } catch (error) {
    throw new Error('Error fetching appointments: ' + error.message);
  }
};

// Get an appointment by ID
const getAppointmentById = async (id) => {
  try {
    return await Appointment.findById(id).populate('patientId doctorId');
  } catch (error) {
    throw new Error('Error fetching appointment: ' + error.message);
  }
};

// Update an appointment status
const updateAppointmentStatus = async (id, status) => {
  try {
    return await Appointment.findByIdAndUpdate(id, { status }, { new: true });
  } catch (error) {
    throw new Error('Error updating appointment status: ' + error.message);
  }
};

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointmentStatus,
};
