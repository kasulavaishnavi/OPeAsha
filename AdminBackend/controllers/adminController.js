
import generateToken from "../utils/generateToken.js";
import Admin from "../models/Admin.js";
import mongoose from "mongoose";
import { addTokenToBlacklist } from "../utils/tokenBlacklist.js";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

import sendEmail from "../utils/sendEmail.js";

// Register Admin
export const registerAdmin = async (req, res) => {
  const { username, mobileNo, email, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({ username, mobileNo, email, password });
    res.status(201).json({ message: "Admin registered successfully", admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login Admin
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = generateToken(admin._id, "admin");

    res.status(200).json({
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Logout Admin
export const logoutAdmin = async (req, res) => {
  try {
    let token = req.headers["authorization"];
    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authorized" });
    }
    token = token.split(" ")[1];

    addTokenToBlacklist(token);
    res.json({ message: "Logout successful. Token is now invalid." });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const usersCollection = req.usersDB.collection("users");
    const users = await usersCollection.find({}).toArray();
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const usersCollection = req.usersDB.collection("users");
    const { id } = req.params;
    const user = await usersCollection.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const usersCollection = req.usersDB.collection("users");
    const { id } = req.params;
    const result = await usersCollection.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    if (result.deletedCount === 0)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all doctors
export const getAllDoctors = async (req, res) => {
  try {
    const doctorsCollection = req.doctorsDB.collection("doctors");
    const doctors = await doctorsCollection.find({}).toArray();
    res.status(200).json({ doctors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get doctor by ID
export const getDoctorById = async (req, res) => {
  try {
    const doctorsCollection = req.doctorsDB.collection("doctors");
    const { id } = req.params;
    const doctor = await doctorsCollection.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.status(200).json({ doctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete doctor by ID
export const deleteDoctor = async (req, res) => {
  try {
    const doctorsCollection = req.doctorsDB.collection("doctors");
    const { id } = req.params;
    const result = await doctorsCollection.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    if (result.deletedCount === 0)
      return res.status(404).json({ message: "Doctor not found" });
    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Verify doctor
export const verifyDoctor = async (req, res) => {
  const doctorId = req.params.id;

  try {
    const doctorCollection = req.doctorsDB.collection("doctors");
    const adminVerifiedCollection = req.adminDB.collection("verifiedDoctors");

    const doctor = await doctorCollection.findOne({
      _id: new ObjectId(doctorId),
    });
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    const username = doctor.mobile;
    const randomPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    await doctorCollection.updateOne(
      { _id: new ObjectId(doctorId) },
      { $set: { isApproved: true, username, password: hashedPassword } }
    );

    await adminVerifiedCollection.insertOne({
      doctorId: doctor._id,
      name: doctor.name,
      phone: doctor.mobile,
      username,
      password: hashedPassword,
      verifiedAt: new Date(),
    });

    if (!doctor.email) {
      return res.status(400).json({ message: "Doctor does not have an email" });
    }

    const emailSubject = "Your Doctor Portal Login Credentials";
    const emailText = `
Hello Dr. ${doctor.name},

Your account has been verified by the admin. Here are your login credentials:

Username: ${username}
Password: ${randomPassword}

Please log in and change your password after first login.

Regards,
Healthcare App Team
    `;

    await sendEmail(doctor.email, emailSubject, emailText);

    res.json({
      success: true,
      message:
        "Doctor verified, credentials created, saved in DB, and emailed to doctor",
      loginCredentials: { username, password: randomPassword },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all verified doctors
export const getAllVerifiedDoctors = async (req, res) => {
  try {
    const verifiedDoctorsCollection = req.adminDB.collection("verifiedDoctors");
    const verifiedDoctors = await verifiedDoctorsCollection.find({}).toArray();

    res.status(200).json({
      success: true,
      count: verifiedDoctors.length,
      data: verifiedDoctors,
    });
  } catch (error) {
    console.error("Error fetching verified doctors:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch verified doctors",
      error: error.message,
    });
  }
};
