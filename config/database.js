const mongoose = require("mongoose");
require("dotenv").config();


/* Replace <username> <password> with your database details */
const dbPassword = process.env.MONGO_DB_PASSWORD;
const dbURI = `mongodb://solomonawuku:${dbPassword}@mongo:27017/database`;
/* const db =  `mongodb+srv://solomonawuku:{dbPassword}@pscluster.hlac4v1.mongodb.net/?retryWrites=true&w=majority&appName=PSCluster`; */
/* mongoose.set("strictQuery", true, "useNewUrlParser", true); */

const connectDB = async () => {
  try {
      await mongoose.connect(dbURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log('MongoDB connected successfully');
  } catch (error) {
      console.error('MongoDB connection failed', error);
      process.exit(1);
  }
};

module.exports = connectDB;
