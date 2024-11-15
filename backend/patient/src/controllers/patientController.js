const patientService = require('../services/patientService');

// Register a new patient
exports.registerPatient = async (req, res) => {
  const { name, age, contact_details, medical_history } = req.body;
  try {
    const patientData = { name, age, contact_details, medical_history };
    const newPatient = await patientService.registerPatient(patientData);
    res.status(201).json({
      message: 'Patient registered successfully',
      patient: newPatient
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get patient details by ID
exports.getPatientDetails = async (req, res) => {
  const { patientId } = req.params;
  try {
    const patient = await patientService.getPatientDetails(patientId);
    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update patient details (e.g., contact info, medical history)
exports.updatePatientDetails = async (req, res) => {
  const { patientId } = req.params;
  const updatedData = req.body;
  try {
    const updatedPatient = await patientService.updatePatientDetails(patientId, updatedData);
    res.status(200).json({
      message: 'Patient details updated successfully',
      patient: updatedPatient
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a patient
exports.deletePatient = async (req, res) => {
  const { patientId } = req.params;
  try {
    const response = await patientService.deletePatient(patientId);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
