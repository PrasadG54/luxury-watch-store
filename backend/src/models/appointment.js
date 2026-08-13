const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    _id: false,
  }
);

const appointmentSchema = new mongoose.Schema(
  {
    // Logged-in user who created the appointment
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Main customer details
    customer: {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      phone: {
        type: String,
        required: true,
        trim: true,
      },

      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
    },

    // Additional members / guests
    guests: {
      type: [guestSchema],
      default: [],
    },

    // Store snapshot
    store: {
      storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
        required: true,
      },

      name: {
        type: String,
        required: true,
        trim: true,
      },

      address: {
        type: String,
        required: true,
        trim: true,
      },

      city: {
        type: String,
        required: true,
        trim: true,
      },
    },

    // Appointment date
    appointmentDate: {
      type: String,
      required: true,
    },

    // Appointment time
    appointmentTime: {
      type: String,
      required: true,
    },

    // Booking status
    status: {
      type: String,
      enum: ["confirmed", "cancelled"],
      default: "confirmed",
    },

    // Unique booking reference
    bookingReference: {
      type: String,
      required: true,
      unique: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Appointment", appointmentSchema);