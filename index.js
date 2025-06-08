import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 1000;
app.listen(PORT, (req, res) => {
  console.log(`Server started at ${PORT}`);
});
