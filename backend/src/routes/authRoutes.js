const express = require("express");

const {
  registerUser,
    verifyEmail,
    loginUser,
    getCurrentUser,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// POST /api/auth/register
router.post("/register", registerUser);


// GET /api/auth/verify-email
router.get("/verify/:token", verifyEmail);


// POST /api/auth/login
router.post("/login", loginUser);


// GET /api/auth/me
router.get("/me", protect, getCurrentUser);



module.exports = router;