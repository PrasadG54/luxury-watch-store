const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const User = require("../models/User");
const { sendVerificationEmail } = require("../services/emailService");


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

        await sendVerificationEmail(
            user.email,
            user.name,
            verificationToken
        );


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


// VERIFY EMAIL

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    // Check if token exists
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Verification token is required",
      });
    }

    // Find user using verification token
    const user = await User.findOne({
      verificationToken: token,
    });

    // Token does not exist
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification link",
      });
    }

    // Check token expiry
    if (
      !user.verificationTokenExpiry ||
      user.verificationTokenExpiry < new Date()
    ) {
      return res.status(400).json({
        success: false,
        message: "Verification link has expired",
      });
    }

    // Already verified
    if (user.isVerified) {
      return res.status(200).json({
        success: true,
        message: "Email is already verified",
      });
    }

    // Verify user
    user.isVerified = true;

    // Remove verification token after successful verification
    user.verificationToken = null;
    user.verificationTokenExpiry = null;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });

  } catch (error) {
    console.error("Verify email error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while verifying email",
    });
  }
};


// LOGIN USER

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();

    // Find user
    const user = await User.findOne({
      email: normalizedEmail,
    });

    // User not found
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check email verification
    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message: "Please verify your email before logging in",
      });
    }

    // Create JWT
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // Successful login
    return res.status(200).json({
      success: true,
      message: "Login successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
      },
    });

  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};


// GET CURRENT USER

const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
      .select("-password -verificationToken -verificationTokenExpiry");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
      },
    });

  } catch (error) {
    console.error("Get current user error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


module.exports = {
    registerUser,
    verifyEmail,
    loginUser,
    getCurrentUser,
};