const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Patient registration
router.post('/register', patientController.registerPatient);

// Get patient details by ID
router.get('/:patientId', patientController.getPatientDetails);

module.exports = router;
