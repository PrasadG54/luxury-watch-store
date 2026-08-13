const Appointment = require("../models/appointment");
const Store = require("../models/store");


// ==========================================
// CREATE APPOINTMENT
// ==========================================

const createAppointment = async (req, res) => {
    try {
        const {
            customer,
            guests = [],
            storeId,
            appointmentDate,
            appointmentTime,
        } = req.body;

        // ===============================
        // BASIC VALIDATION
        // ===============================

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

        // ===============================
        // FIND STORE
        // ===============================

        const store = await Store.findById(storeId);

        if (!store) {
            return res.status(404).json({
                success: false,
                message: "Selected store not found.",
            });
        }

        // ===============================
        // GENERATE BOOKING REFERENCE
        // ===============================

        const bookingReference = `LW-${Date.now()}`;

        // ===============================
        // CREATE APPOINTMENT
        // ===============================

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

        // ===============================
        // RESPONSE
        // ===============================

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


// ==========================================
// GET MY APPOINTMENTS
// ==========================================

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


module.exports = {
    createAppointment,
    getMyAppointments,
};