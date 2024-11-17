// routes/doctorRoutes.js
const express = require('express');
const doctorController = require('../controllers/doctorController');

const router = express.Router();

// Route to create a new doctor
router.post('/register', doctorController.createDoctor);

// Route to get all doctors
router.get('/doctors', doctorController.getAllDoctors);

// Route to get a specific doctor by ID
router.get('/:id', doctorController.getDoctorById);

// Route to update a doctor's availability
router.patch('/:id/availability', doctorController.updateDoctorAvailability);

module.exports = router;
