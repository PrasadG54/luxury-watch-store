const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const emailRoutes = require("./routes/emailRoutes");

const app = express();


// MIDDLEWARE

app.use(cors());
app.use(express.json());
app.use("/api", emailRoutes);


// ROOT ROUTE

app.get("/", (req, res) => {
  res.json({
    message: "Luxury Watch Store API is running",
  });
});


// AUTH ROUTES

app.use("/api/auth", authRoutes);

console.log("Email test route loaded");


module.exports = app;