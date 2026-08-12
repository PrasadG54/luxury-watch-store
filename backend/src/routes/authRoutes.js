const express = require("express");

const {
  registerUser,
    verifyEmail,
} = require("../controllers/authController");

const router = express.Router();


// POST /api/auth/register
router.post("/register", registerUser);


// GET /api/auth/verify-email
router.get("/verify/:token", verifyEmail);


module.exports = router;