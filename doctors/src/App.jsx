import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginPage from "./Components/LoginPage/LoginPage";
import SignUp from "./Components/LoginPage/SignUp";
import OTPVerification from "./Components/LoginPage/OTPVerification";
import Forgotpassword from "./Components/LoginPage/Forgotpassword";
import Createpassword from "./Components/LoginPage/Createpassword";
import ContactForm from "./Components/LoginPage/ContactForm";
import Registration from "./Components/Registration/Registration";

// Doctors Layout (your sidebar + navbar + doctor pages)
import DoctorsLayout from "./Components/DoctorsFields/DoctorsLayout";
import OtpRegister from "./Components/LoginPage/OtpRegister";
import ForgotOtp from "./Components/LoginPage/ForgotOtp";
import DoctorProfilePage from "./Components/DoctorsFields/DoctorProfile";

// ✅ Protected Route
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");
  return token ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/create-password" element={<Createpassword />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/otp-register" element={<OtpRegister/>}/>
        <Route path="/forgot-otp" element={<ForgotOtp/>}/>
        <Route path="/doctorprofile" element={<DoctorProfilePage/>}/>

        {/* Doctor routes (protected) */}
        <Route
          path="/doctor/*"
          element={
            <ProtectedRoute>
              <DoctorsLayout />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
