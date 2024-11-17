
// app.js
const express = require('express');
const { DB,PORT } = require('../config/app_config');
// require('/app/logger/logger');
const doctorRoutes = require('./routes/doctorRoute');
const mongoose = require('mongoose');

// dotenv.config(); // Load environment variables from .env file

const app = express();

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION!!!  shutting down ...');
  console.log(`${err.name}, ${err.message}, ${err.stack}`);
  process.exit(1);
});


mongoose.set('strictQuery', true);

// Connect the database
mongoose
  .connect(DB, { useNewUrlParser: true })
  .then((con) => {
    console.log('DB Connected Successfully! 😊');
  })
  .catch((err) => {
    console.log('DB Connection Failed! \n\tException : ' + err);
  }); //Now all the errors of mongo will be handled by the catch block

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('DB Connection Disconnected! 😢');
});




// Middleware to parse incoming JSON
app.use(express.json());

// Use the doctor routes
app.use('/', doctorRoutes);

// Start the server

const expServer = app.listen(PORT, async () => {
  console.log(`Doctor running on port ${PORT} 👌`);
});

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Our backend app Side 😒',
  });
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION!!!  shutting down ...');
  console.log(`${err.name}, ${err.message}, ${err.stack}`);
  expServer.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED. Shutting down gracefully');
  expServer.close(() => {
    mongoose.connection.close(false, () => {
      console.log('💥 Process terminated!');
    });
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT RECEIVED. Shutting down gracefully');
  expServer.close(() => {
    mongoose.connection.close(false, () => {
      console.log('💥 Process terminated!');
    });
  });
});