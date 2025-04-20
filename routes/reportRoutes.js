// routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const Report = require('../models/report'); // adjust path if needed

router.post('/upload', async (req, res) => {
  const { email,username,password,age,images} = req.body;

  try {
    const report = new Report({
      email,
      username,
      password,
      age,
      images, // base64 image array
    });

    await report.save();
    res.status(201).json({ message: "Report saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save report" });
  }
});

module.exports = router; // ✅ EXPORT router
