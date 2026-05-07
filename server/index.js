import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_SECURE = process.env.SMTP_SECURE === "true";
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.warn(
    "Missing SMTP configuration. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS in your environment."
  );
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { fullName, companyName, phone, email, message } = req.body;

  if (!fullName || !phone || !message) {
    return res.status(400).json({ error: "Full name, phone, and message are required." });
  }

  const mailOptions = {
    from: `Zamda Health Contact Form <${SMTP_USER}>`,
    to: "admin@zamdahealth.com",
    subject: `New contact request from ${fullName}`,
    text: `Full Name: ${fullName}\nCompany Name: ${companyName || "N/A"}\nPhone: ${phone}\nEmail: ${email || "N/A"}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return res.status(500).json({ error: "Unable to send email." });
  }
});

const PORT = Number(process.env.PORT || 4000);
app.listen(PORT, () => {
  console.log(`Contact server running on http://localhost:${PORT}`);
});
