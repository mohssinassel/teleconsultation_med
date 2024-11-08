
const express = require('express');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.use('/api/users', userRoutes);

module.exports = app;
