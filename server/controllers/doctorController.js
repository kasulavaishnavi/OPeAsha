import Doctor from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// -------------------- Doctor Registration --------------------
export const registerDoctor = async (req, res) => {
  try {
    // Your registration logic
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const resendDoctorOtp = async (req, res) => {
  try {
    // Resend OTP logic
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyDoctorOtp = async (req, res) => {
  try {
    // Verify OTP logic
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------- Login / Logout --------------------
export const loginDoctor = async (req, res) => {
  try {
    // Login logic
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logoutDoctor = async (req, res) => {
  try {
    // Logout logic
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------- Doctor Profile --------------------
export const getDoctorProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.doctor.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDoctorProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.doctor.id, req.body, {
      new: true,
    });
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------- Filter / Get by ID / Delete --------------------
export const filterDoctors = async (req, res) => {
  try {
    // Filter logic
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const toggleDoctorActive = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.doctor.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    doctor.isActive = !doctor.isActive;
    await doctor.save();
    res.json({ message: "Doctor status updated", isActive: doctor.isActive });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------- OTP / Password --------------------
export const requestLoginOTP = async (req, res) => {
  try {
    // OTP request logic
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const resendLoginOTP = async (req, res) => {
  try {
    // Resend login OTP logic
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyLoginOTP = async (req, res) => {
  try {
    // Verify login OTP logic
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const requestForgotPasswordOTP = async (req, res) => {
  try {
    // Forgot password OTP logic
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const resendForgotPasswordOTP = async (req, res) => {
  try {
    // Resend forgot password OTP logic
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyForgotPasswordOTP = async (req, res) => {
  try {
    // Verify forgot password OTP logic
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const doctor = await Doctor.findByIdAndUpdate(req.doctor.id, {
      password: hash,
    });
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
