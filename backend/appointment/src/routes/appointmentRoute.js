// routes/appointmentRoutes.js
const express = require('express');
const appointmentController = require('../controllers/appointmentController');

const router = express.Router();

// Route to create a new appointment
router.post('/add', appointmentController.createAppointment);

// Route to get all appointments
router.get('/appointments', appointmentController.getAllAppointments);

// Route to update an appointment status
router.patch('/:id/status', appointmentController.updateAppointmentStatus);

// Route to get a specific appointment by ID
router.get('/:id', appointmentController.getAppointmentById);


module.exports = router;
