// models/notificationModel.js
const mongoose = require('mongoose');

// Define schema for the Notification model
const notificationSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['unread', 'read'],
      default: 'unread',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // Automatically handle createdAt and updatedAt
);

// Create the Notification model from the schema
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
