const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // User's full name
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // User's email address
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // Hashed password
    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    // Email verification status
    isVerified: {
      type: Boolean,
      default: false,
    },

    // Temporary email verification token
    verificationToken: {
      type: String,
      default: null,
    },

    // Verification token expiry time
    verificationTokenExpiry: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);