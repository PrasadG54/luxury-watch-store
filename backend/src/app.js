const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(cors());
app.use(express.json());


// =====================================================
// ROOT ROUTE
// =====================================================

app.get("/", (req, res) => {
  res.json({
    message: "Luxury Watch Store API is running",
  });
});


// =====================================================
// AUTH ROUTES
// =====================================================

app.use("/api/auth", authRoutes);


module.exports = app;