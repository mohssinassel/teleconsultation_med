// services/notificationService.js
const Notification = require('../models/notificationModel');

// Create a new notification
const createNotification = async (message) => {
  const newNotification = new Notification({ message });

  try {
    await newNotification.save();
    return newNotification;
  } catch (error) {
    throw new Error('Error creating notification: ' + error.message);
  }
};

// Get all notifications
const getAllNotifications = async () => {
  try {
    return await Notification.find();
  } catch (error) {
    throw new Error('Error fetching notifications: ' + error.message);
  }
};

// Update notification status
const updateNotificationStatus = async (id, status) => {
  try {
    return await Notification.findByIdAndUpdate(id, { status }, { new: true });
  } catch (error) {
    throw new Error('Error updating notification status: ' + error.message);
  }
};

module.exports = {
  createNotification,
  getAllNotifications,
  updateNotificationStatus,
};
