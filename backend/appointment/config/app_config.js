const { join } = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: join(__dirname, '../.env') });

exports.PORT = process.env.PORT || '8003'
exports.DB = process.env.MONGO_URL
exports.logFilePath = join(__dirname, '../logs');