import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME || "practice-1",
    });

    console.log(`MongoDB connected!`);
  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
