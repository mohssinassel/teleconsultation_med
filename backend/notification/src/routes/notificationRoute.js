// routes/notificationRoutes.js
const express = require('express');
const notificationController = require('../controllers/notificationController');

const router = express.Router();

// Route to create a new notification
router.post('/add', notificationController.createNotification);

// Route to get all notifications
router.get('/:notificationId', notificationController.getAllNotifications);

// Route to update the status of a notification
router.patch('/notifications/:id', notificationController.updateNotificationStatus);

module.exports = router;
