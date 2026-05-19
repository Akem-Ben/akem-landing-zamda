// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const SMTP_HOST = process.env.SMTP_HOST;
// const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
// const SMTP_SECURE = process.env.SMTP_SECURE === "true";
// const SMTP_USER = process.env.SMTP_USER;
// const SMTP_PASS = process.env.SMTP_PASS;
// const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@zamdahealth.com";

// if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
//   console.error(
//     "Missing SMTP configuration. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS in your environment."
//   );
//   process.exit(1);
// }

// const transporter = nodemailer.createTransport({
//   host: SMTP_HOST,
//   port: SMTP_PORT,
//   secure: SMTP_SECURE,
//   auth: {
//     user: SMTP_USER,
//     pass: SMTP_PASS,
//   },
// });

// // Verify the SMTP connection
// transporter.verify((error, success) => {
//   if (error) {
//     console.error("SMTP connection error:", error);
//   } else {
//     console.log("SMTP connection verified successfully");
//   }
// });

// app.post("/api/contact", async (req, res) => {
//   const { fullName, companyName, phone, email, message } = req.body;

//   if (!fullName || !phone || !message) {
//     return res.status(400).json({ error: "Full name, phone, and message are required." });
//   }

//   const mailOptions = {
//     from: `Zamda Health Contact Form <${SMTP_USER}>`,
//     to: ADMIN_EMAIL,
//     subject: `New contact request from ${fullName}`,
//     text: `Full Name: ${fullName}\nCompany Name: ${companyName || "N/A"}\nPhone: ${phone}\nEmail: ${email || "N/A"}\n\nMessage:\n${message}`,
//   };

//   try {
//     const result = await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully:", result.messageId);
//     return res.status(200).json({ success: true });
//   } catch (error) {
//     console.error("Failed to send email:", error.message || error);
//     console.error("Full error details:", error);
//     return res.status(500).json({ error: "Unable to send email.", details: error.message });
//   }
// });

// const PORT = Number(process.env.PORT || 4000);
// app.listen(PORT, () => {
//   console.log(`Contact server running on http://localhost:${PORT}`);
// });





require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/*
   FRONTEND WILL SEND DATA HERE
*/
app.post("/send-message", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      countryCode,
      company,
      message,
    } = req.body;

    // Send request to Zamda API
    const response = await axios.post(
      `${process.env.ZAMDA_API}/v1/contact`,
      {
        fullName,
        email,
        phone,
        countryCode,
        company,
        message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
      data: response.data,
    });

  } catch (error) {
    console.log(
      error.response?.data || error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to send message",
      error: error.response?.data || error.message,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
