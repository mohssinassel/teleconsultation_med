// controllers/notificationController.js
const notificationService = require('../services/notificationService');

// Create a new notification
const createNotification = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: 'Message is required' });
  }

  try {
    const newNotification = await notificationService.createNotification(message);
    res.status(201).json(newNotification);
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ message: error.message });
  }
};

// Get all notifications
const getAllNotifications = async (req, res) => {
  try {
    const notifications = await notificationService.getAllNotifications();
    res.status(200).json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ message: error.message });
  }
};

// Update notification status
const updateNotificationStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['unread', 'read'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status. Use "unread" or "read".' });
  }

  try {
    const updatedNotification = await notificationService.updateNotificationStatus(id, status);
    if (!updatedNotification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json(updatedNotification);
  } catch (error) {
    console.error('Error updating notification:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNotification,
  getAllNotifications,
  updateNotificationStatus,
};
