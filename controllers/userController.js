import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    // 1. Extract and validate required fields from request body
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    // 2. Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists!" });
    }

    // 3. Hash the user's password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create a new user with the hashed password
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // 5. Send success response with essential user info (excluding password)
    return res.status(201).json({
      message: "User registered successfully!",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};
