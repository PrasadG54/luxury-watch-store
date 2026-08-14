const Appointment = require("../models/appointment");
const Store = require("../models/store");
const User = require("../models/User");
const generateAppointmentPdf = require("../utils/appointmentPdf");
const { sendAppointmentConfirmationEmail } = require("../services/emailService");

const { PassThrough } = require("stream");



// CREATE APPOINTMENT


const createAppointment = async (req, res) => {
    try {
        const {
            customer,
            guests = [],
            storeId,
            appointmentDate,
            appointmentTime,
        } = req.body;


        // BASIC VALIDATION


        if (
            !customer ||
            !customer.name ||
            !customer.phone ||
            !customer.email ||
            !storeId ||
            !appointmentDate ||
            !appointmentTime
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required appointment details.",
            });
        }


        // FIND STORE


        const store = await Store.findById(storeId);

        if (!store) {
            return res.status(404).json({
                success: false,
                message: "Selected store not found.",
            });
        }


        // GENERATE BOOKING REFERENCE


        const bookingReference = `LW-${Date.now()}`;


        // CREATE APPOINTMENT


        const appointment = await Appointment.create({
            user: req.user.userId,

            customer: {
                name: customer.name,
                phone: customer.phone,
                email: customer.email,
            },

            guests,

            store: {
                storeId: store._id,
                name: store.name,
                address: store.address,
                city: store.city,
            },

            appointmentDate,
            appointmentTime,

            status: "confirmed",

            bookingReference,
        });



        // GET REGISTERED USER


        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Registered user not found.",
            });
        }


        // GENERATE PDF BUFFER


        const pdfStream = new PassThrough();
        const pdfChunks = [];

        pdfStream.on("data", (chunk) => {
            pdfChunks.push(chunk);
        });

        const pdfReady = new Promise((resolve, reject) => {
            pdfStream.on("end", resolve);
            pdfStream.on("error", reject);
        });

        pdfStream.setHeader = () => {};

        generateAppointmentPdf(appointment, pdfStream);

        await pdfReady;

        const pdfBuffer = Buffer.concat(pdfChunks);


        // SEND EMAIL WITH PDF


        await sendAppointmentConfirmationEmail(
            user.email,
            user.name,
            appointment,
            pdfBuffer
        );



        // RESPONSE


        res.status(201).json({
            success: true,
            message: "Appointment booked successfully.",
            appointment,
        });

    } catch (error) {
        console.error("Create appointment error:", error);

        res.status(500).json({
            success: false,
            message: "Unable to create appointment.",
        });
    }
};



// GET MY APPOINTMENTS


const getMyAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({
            user: req.user.userId,
        }).sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            count: appointments.length,
            appointments,
        });

    } catch (error) {
        console.error("Get appointments error:", error);

        res.status(500).json({
            success: false,
            message: "Unable to fetch appointments.",
        });
    }
};



// GENERATE APPOINTMENT PDF


const generateAppointmentPdfController = async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      _id: req.params.id,
      user: req.user.userId,
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    generateAppointmentPdf(appointment, res);

  } catch (error) {
    console.error("Generate appointment PDF error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to generate appointment PDF.",
    });
  }
};


// ==========================================
// SEND APPOINTMENT PDF TO EMAIL AGAIN
// ==========================================

const sendAppointmentPdfEmailController = async (req, res) => {
    try {
        // Find appointment belonging to logged-in user
        const appointment = await Appointment.findOne({
            _id: req.params.id,
            user: req.user.userId,
        });

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found.",
            });
        }

        // Find registered user
        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Registered user not found.",
            });
        }

        // ==========================================
        // GENERATE PDF BUFFER
        // ==========================================

        const pdfStream = new PassThrough();
        const pdfChunks = [];

        pdfStream.on("data", (chunk) => {
            pdfChunks.push(chunk);
        });

        const pdfReady = new Promise((resolve, reject) => {
            pdfStream.on("end", resolve);
            pdfStream.on("error", reject);
        });

        pdfStream.setHeader = () => {};

        generateAppointmentPdf(appointment, pdfStream);

        await pdfReady;

        const pdfBuffer = Buffer.concat(pdfChunks);

        // ==========================================
        // SEND EMAIL
        // ==========================================

        await sendAppointmentConfirmationEmail(
            user.email,
            user.name,
            appointment,
            pdfBuffer
        );

        return res.status(200).json({
            success: true,
            message: "Appointment PDF has been sent to your registered email.",
        });

    } catch (error) {
        console.error(
            "Send appointment PDF email error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Unable to send appointment PDF email.",
        });
    }
};


module.exports = {
    createAppointment,
    getMyAppointments,
    generateAppointmentPdfController,
    sendAppointmentPdfEmailController,
};