const Patient = require('../models/patientModel'); // MongoDB model for Patient

// Register a new patient
const registerPatient = async (patientData) => {
  try {
    const { name, age, contact_details, medical_history } = patientData;

    // Check if the patient already exists by contact details (email or phone)
    const existingPatient = await Patient.findOne({ contact_details });
    if (existingPatient) {
      throw new Error('Patient with this contact already exists');
    }

    // Create a new patient instance
    const newPatient = new Patient({
      name,
      age,
      contact_details,
      medical_history
    });

    // Save the patient data to the database
    await newPatient.save();
    return newPatient;
  } catch (err) {
    throw new Error(`Error registering patient: ${err.message}`);
  }
};

// Get patient details by ID
const getPatientDetails = async (patientId) => {
  try {
    const patient = await Patient.findById(patientId);
    if (!patient) {
      throw new Error('Patient not found');
    }
    return patient;
  } catch (err) {
    throw new Error(`Error fetching patient details: ${err.message}`);
  }
};

// Update patient details (e.g., contact info, medical history)
const updatePatientDetails = async (patientId, updatedData) => {
  try {
    const patient = await Patient.findByIdAndUpdate(patientId, updatedData, { new: true });
    if (!patient) {
      throw new Error('Patient not found');
    }
    return patient;
  } catch (err) {
    throw new Error(`Error updating patient details: ${err.message}`);
  }
};

// Delete a patient (optional, for administrative purposes)
const deletePatient = async (patientId) => {
  try {
    const patient = await Patient.findByIdAndDelete(patientId);
    if (!patient) {
      throw new Error('Patient not found');
    }
    return { message: 'Patient deleted successfully' };
  } catch (err) {
    throw new Error(`Error deleting patient: ${err.message}`);
  }
};

module.exports = {
  registerPatient,
  getPatientDetails,
  updatePatientDetails,
  deletePatient
};
