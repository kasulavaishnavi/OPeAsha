import express from "express";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";
import {
  getProfile,
  // registerUser,
  updateUser,
  userLogin,
  bookAppoint,
  listAppointment,
  cancelAppointment,
  payment,
  verifyPayment,
  // OTP related controllers
  registerUserWithOTP,
  verifyRegistrationOTP,
  resendRegistrationOTP,
  sendLoginOTP,
  verifyLoginOTP,
  resendLoginOTP,
  forgotPasswordOTP,
  verifyForgotPasswordOTP,
  resetPassword,
} from "../controllers/userController.js";

const userRouter = express.Router();

// === Standard Auth Routes ===
// userRouter.post("/userRegister", registerUser); // normal registration
userRouter.post("/userLogin", userLogin); // normal login
userRouter.get("/getProfile", authUser, getProfile);
userRouter.post("/updateUser", upload.single("image"), authUser, updateUser);

// === Appointment Routes ===
userRouter.post("/bookAppointment", authUser, bookAppoint);
userRouter.get("/appointments", authUser, listAppointment);
userRouter.post("/cancelAppointment", authUser, cancelAppointment);

// === Payment Routes ===
userRouter.post("/userPayment", authUser, payment);
userRouter.post("/verifyPayment", authUser, verifyPayment);

// === OTP-Based Auth Routes ===
// Registration OTP
userRouter.post("/registerOTP", registerUserWithOTP);
userRouter.post("/verifyRegistrationOTP", verifyRegistrationOTP);
userRouter.post("/resendRegistrationOTP", resendRegistrationOTP);

// Login OTP
userRouter.post("/sendLoginOTP", sendLoginOTP);
userRouter.post("/verifyLoginOTP", verifyLoginOTP);
userRouter.post("/resendLoginOTP", resendLoginOTP);

// Forgot Password OTP
userRouter.post("/forgotPasswordOTP", forgotPasswordOTP);
userRouter.post("/verifyForgotPasswordOTP", verifyForgotPasswordOTP);
userRouter.post("/resetPassword", resetPassword);

export default userRouter;
