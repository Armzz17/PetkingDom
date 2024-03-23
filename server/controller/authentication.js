import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    // Extract user data from the request body
    const { username, email, password, address } = req.body;

    // Check if the user already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res
        .status(400)
        .json({ message: "User with this username already exists" });
    }

    // Create a new user document
    const newUser = new User({
      username,
      email,
      password,
      address, // Be sure to hash the password before saving it to the database
    });

    // Save the new user to the database
    await newUser.save();

    // You can generate and send a JWT token here if user registration is successful
    const token = jwt.sign({ userId: newUser._id }, "your-secret-key-here", {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    // Return the list of users as a JSON response
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id; // Get the user ID from the URL parameters

    // Check if the user with the provided ID exists
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the user
    await User.findByIdAndRemove(userId);

    res.status(204).json(); // Respond with a 204 No Content status to indicate successful deletion
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
