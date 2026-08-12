const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const User = require("../models/User");


// REGISTER USER


const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;


    // Validate required fields


    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }


    // Check password confirmation


    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }


    // Validate password length


    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }


    // Normalize email


    const normalizedEmail = email.toLowerCase().trim();


    // Check if user already exists


    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }


    // Hash password


    const hashedPassword = await bcrypt.hash(password, 12);


    // Generate email verification token


    const verificationToken = crypto.randomBytes(32).toString("hex");

    const verificationTokenExpiry =
      Date.now() + 15 * 60 * 1000; // 15 minutes


    // Create user


    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      isVerified: false,
      verificationToken,
      verificationTokenExpiry,
    });


    // Response


    return res.status(201).json({
      success: true,
      message:
        "Account created successfully. Please verify your email.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
      },
    });

  } catch (error) {

    console.error("Register error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while creating account",
    });
  }
};


module.exports = {
  registerUser,
};