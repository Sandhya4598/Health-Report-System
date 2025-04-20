const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const reportRoutes = require("./routes/reportRoutes");

dotenv.config();

const app = express(); // ✅ use 'app' instead of 'server'

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.mongo)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/reports", reportRoutes);

// Server
const port = 5000;
app.listen(port, () => {
  console.log("Server started and running on port " + port);
});
