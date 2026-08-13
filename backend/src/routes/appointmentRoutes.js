const express = require("express");

const {
  createAppointment,
  getMyAppointments,
} = require("../controllers/appointmentController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// ==========================================
// CREATE APPOINTMENT
// ==========================================

router.post("/", protect, createAppointment);


// ==========================================
// GET MY APPOINTMENTS
// ==========================================

router.get("/my", protect, getMyAppointments);


module.exports = router;