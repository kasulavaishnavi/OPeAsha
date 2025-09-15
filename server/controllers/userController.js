import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import docModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";
import { v2 as cloudinary } from "cloudinary";
import razorpay from "razorpay";
import { sendOTP } from "../utils/otpHelper.js";

// Helper to generate random OTP
const generateOTP = () => Math.floor(1000 + Math.random() * 9000);

// ==================== Registration ====================
const registerUserWithOTP = async (req, res) => {
  try {
    let { name, email, password, dob, gender } = req.body;

    if (!name || !email || !password || !dob || !gender)
      return res.json({ success: false, message: "All fields are required" });

    if (!validator.isEmail(email))
      return res.json({ success: false, message: "Invalid email" });
    if (password.length < 8)
      return res.json({ success: false, message: "Password too short" });

    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res.json({ success: false, message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();
    const expires = new Date(Date.now() + 10 * 60 * 1000);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      dob,
      gender,
      registration_otp: { code: otp, expires },
    });

    await newUser.save();
    await sendOTP({ verifyBy: "email", email, otp });

    res.json({ success: true, message: "OTP sent to email", userId: newUser._id });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Verify Registration OTP
const verifyRegistrationOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp)
      return res.json({ success: false, message: "Email and OTP required" });

    const user = await userModel.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const registrationOtp = user.registration_otp;
    if (!registrationOtp || registrationOtp.expires < Date.now())
      return res.json({ success: false, message: "OTP expired or not requested" });

    if (Number(registrationOtp.code) !== Number(otp))
      return res.json({ success: false, message: "Invalid OTP" });

    user.otp_verified = true;
    user.registration_otp = null;
    await user.save();

    res.json({ success: true, message: "Registration verified successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Resend Registration OTP
const resendRegistrationOTP = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.json({ success: false, message: "Email required" });

    const user = await userModel.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const otp = generateOTP();
    const expires = new Date(Date.now() + 10 * 60 * 1000);
    user.registration_otp = { code: otp, expires };
    await user.save();

    await sendOTP({ verifyBy: "email", email, otp });
    res.json({ success: true, message: "OTP resent to email" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ==================== Login ====================
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.json({ success: false, message: "Email and password required" });

    const user = await userModel.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ==================== Forgot Password ====================
const forgotPasswordOTP = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.json({ success: false, message: "Email required" });

    const user = await userModel.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const otp = generateOTP();
    const expires = new Date(Date.now() + 10 * 60 * 1000);
    user.forgot_password_otp = { code: otp, expires, verified: false };
    await user.save();

    await sendOTP({ verifyBy: "email", email, otp });
    res.json({ success: true, message: "OTP sent to email" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const verifyForgotPasswordOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.json({ success: false, message: "Email and OTP required" });

    const user = await userModel.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const stored = user.forgot_password_otp;
    if (!stored || stored.expires < Date.now())
      return res.json({ success: false, message: "OTP expired or not requested" });

    if (Number(stored.code) !== Number(otp))
      return res.json({ success: false, message: "Invalid OTP" });

    user.forgot_password_otp.verified = true;
    await user.save();

    res.json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email || !newPassword)
      return res.json({ success: false, message: "Email and newPassword required" });

    const user = await userModel.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    if (!user.forgot_password_otp?.verified)
      return res.json({ success: false, message: "OTP not verified" });

    user.password = await bcrypt.hash(newPassword, 10);
    user.forgot_password_otp = null;
    await user.save();

    res.json({ success: true, message: "Password reset successful" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Send Login OTP
const sendLoginOTP = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.json({ success: false, message: "Email required" });

    const user = await userModel.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const otp = generateOTP();
    const expires = new Date(Date.now() + 10 * 60 * 1000);
    user.login_otp = { code: otp, expires };
    await user.save();

    await sendOTP({ verifyBy: "email", email, otp });
    res.json({ success: true, message: "Login OTP sent to email" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Verify Login OTP
const verifyLoginOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.json({ success: false, message: "Email and OTP required" });

    const user = await userModel.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const loginOtp = user.login_otp;
    if (!loginOtp || loginOtp.expires < Date.now())
      return res.json({ success: false, message: "OTP expired or not requested" });

    if (Number(loginOtp.code) !== Number(otp))
      return res.json({ success: false, message: "Invalid OTP" });

    user.login_otp = null;
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token, message: "Login successful" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Resend Login OTP
const resendLoginOTP = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.json({ success: false, message: "Email required" });

    const user = await userModel.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const otp = generateOTP();
    const expires = new Date(Date.now() + 10 * 60 * 1000);
    user.login_otp = { code: otp, expires };
    await user.save();

    await sendOTP({ verifyBy: "email", email, otp });
    res.json({ success: true, message: "Login OTP resent to email" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ==================== Profile ====================
const getProfile = async (req, res) => {
  try {
    const { userID } = req.body;
    const userData = await userModel.findById(userID).select("-password");
    res.json({ success: true, userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userID, name, address, dob, gender } = req.body;
    const imageFile = req.file;

    if (!name || !address || !dob || !gender)
      return res.json({ success: false, message: "Data Missing" });

    await userModel.findByIdAndUpdate(userID, {
      name,
      address: JSON.parse(address),
      dob,
      gender,
    });

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
      const imageURL = imageUpload.secure_url;
      await userModel.findByIdAndUpdate(userID, { image: imageURL });
    }

    res.json({ success: true, message: "Profile updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ==================== Appointments ====================
const bookAppoint = async (req, res) => {
  try {
    const { userID, docID, slotDate, slotTime } = req.body;

    const docData = await docModel.findById(docID).select("-password");
    if (!docData.available) return res.json({ success: false, message: "Doctor not available" });

    let slotsBooked = docData.slotsBooked || {};

    if (slotsBooked[slotDate]?.includes(slotTime))
      return res.json({ success: false, message: "Slot not available" });

    slotsBooked[slotDate] = slotsBooked[slotDate] ? [...slotsBooked[slotDate], slotTime] : [slotTime];

    const userData = await userModel.findById(userID).select("-password");
    delete docData.slotsBooked;

    const appointmentData = {
      userID,
      docID,
      userData,
      docData,
      amount: docData.fee,
      slotDate,
      slotTime,
      date: Date.now(),
    };

    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();

    await docModel.findByIdAndUpdate(docID, { slotsBooked });
    res.json({ success: true, message: "Appointment booked" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listAppointment = async (req, res) => {
  try {
    const { userID } = req.body;
    const appointments = await appointmentModel.find({ userID });
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const cancelAppointment = async (req, res) => {
  try {
    const { userID, appointmentID } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentID);

    if (appointmentData.userID.toString() !== userID)
      return res.json({ success: false, message: "Unauthorized action" });

    await appointmentModel.findByIdAndUpdate(appointmentID, { cancelled: true });

    const { docID, slotDate, slotTime } = appointmentData;
    const docData = await docModel.findById(docID);
    let slotsBooked = docData.slotsBooked;
    slotsBooked[slotDate] = slotsBooked[slotDate].filter((e) => e !== slotTime);
    await docModel.findByIdAndUpdate(docID, { slotsBooked });

    res.json({ success: true, message: "Appointment cancelled" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ==================== Payments ====================
let razorpayIns;

// Initialize Razorpay only if keys exist
if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  const Razorpay = await import("razorpay"); // dynamic import for ESM
  razorpayIns = new Razorpay.default({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
}

const payment = async (req, res) => {
  try {
    const { appointmentID } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentID);

    if (!appointmentData || appointmentData.cancelled)
      return res.json({ success: false, message: "Appointment cancelled" });

    // If Razorpay not configured, simulate an order
    if (!razorpayIns) {
      const fakeOrder = {
        id: "order_test_123",
        amount: appointmentData.amount * 100,
        currency: process.env.CURRENCY || "INR",
        receipt: appointmentID,
        status: "created",
      };
      return res.json({ success: true, order: fakeOrder, message: "Payment gateway not configured" });
    }

    const options = {
      amount: appointmentData.amount * 100,
      currency: process.env.CURRENCY,
      receipt: appointmentID,
    };

    const order = await razorpayIns.orders.create(options);
    res.json({ success: true, order });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;

    // If Razorpay not configured, simulate a successful payment
    if (!razorpayIns) {
      await appointmentModel.findByIdAndUpdate(razorpay_order_id, { payment: true });
      return res.json({ success: true, message: "Payment simulated as successful" });
    }

    const orderInfo = await razorpayIns.orders.fetch(razorpay_order_id);

    if (orderInfo.status === "paid") {
      await appointmentModel.findByIdAndUpdate(orderInfo.receipt, { payment: true });
      res.json({ success: true, message: "Payment successful" });
    } else {
      res.json({ success: false, message: "Payment failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  registerUserWithOTP,
  verifyRegistrationOTP,
  resendRegistrationOTP,
  userLogin,
  forgotPasswordOTP,
  verifyForgotPasswordOTP,
  resetPassword,
  getProfile,
  updateUser,
  bookAppoint,
  listAppointment,
  cancelAppointment,
  payment,
  verifyPayment,
   sendLoginOTP,
  verifyLoginOTP,
  resendLoginOTP,

};
