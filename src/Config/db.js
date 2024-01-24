const mongoose = require('mongoose');
const connectionString = 'mongodb://127.0.0.1:27017/TpcDb';

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    // Handle the error here, such as throwing it or logging it
  }
};

module.exports = connectDB;