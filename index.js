import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

const PORT = process.env.PORT || 1000;
app.listen(PORT, (req, res) => {
  console.log(`Server started at ${PORT}`);
});
