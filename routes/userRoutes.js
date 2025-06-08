import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

// POST @api /api/users/register
router.post("/register", registerUser);

export default router;
