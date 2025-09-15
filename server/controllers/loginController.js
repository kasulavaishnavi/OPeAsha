import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { sendOTP } from "../utils/otpHelper.js";

// Helper function to generate JWT token
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const login = async (req, res) => {
  try {
    let { phone_number, password, email } = req.body;

    if ((!phone_number && !email) || !password) {
      return res.status(400).json({
        message: "Phone number or email and password are required",
      });
    }

    let normalizedPhone = null;
    if (phone_number) {
      phone_number = phone_number.trim();
      normalizedPhone = phone_number.replace(/\D/g, "");

      if (normalizedPhone.length === 10)
        normalizedPhone = `+91${normalizedPhone}`;
      else if (
        normalizedPhone.length === 12 &&
        normalizedPhone.startsWith("91")
      )
        normalizedPhone = `+${normalizedPhone}`;
    }

    const searchCondition = email
      ? { email: email.trim().toLowerCase() }
      : { phone_number: normalizedPhone };

    const user = await userModel.findOne(searchCondition);
    if (!user) {
      console.log("User not found in DB");
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.otp_verified) {
      console.log("User OTP not verified");
      return res.status(401).json({
        message: "User registration not verified with OTP",
      });
    }

    const isValid = await bcrypt.compare(password.trim(), user.password);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid login credentials" });
    }

    const token = generateToken({
      id: user._id,
      phone_number: user.phone_number,
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        full_name: user.full_name,
        phone_number: user.phone_number,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
