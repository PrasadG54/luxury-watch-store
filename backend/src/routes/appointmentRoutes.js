const express = require("express");

const {
  createAppointment,
  getMyAppointments,
    generateAppointmentPdfController,
    sendAppointmentPdfEmailController,
} = require("../controllers/appointmentController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// CREATE APPOINTMENT

router.post("/", protect, createAppointment);


// GET MY APPOINTMENTS

router.get("/my", protect, getMyAppointments);


router.get( "/:id/pdf", protect, generateAppointmentPdfController );


router.post( "/:id/send-pdf", protect, sendAppointmentPdfEmailController );


module.exports = router;