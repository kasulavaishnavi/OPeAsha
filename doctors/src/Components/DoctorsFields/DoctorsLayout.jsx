import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import CalendarAndSlots from "./SetAvailability";
import BookingHistory from "./History";
import Prescription from "./Prescription";
import Ratings from "./Ratings";
import Profile from "./Profile";
import DoctorProfilePage from "./DoctorProfile";
// import Registration from "../Registration/Registration";
 // ✅ correct path

const App = () => {
  return (
    <div className="font-urbanist h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <div className="hidden lg:block w-60 bg-white border-r">
          <Sidebar />
        </div>
        <div className="flex-1 p-4 overflow-y-auto pt-[56px] sm:pt-[64px] md:pt-[72px] lg:pt-4">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/availability" element={<CalendarAndSlots />} />
            <Route path="/bookings" element={<BookingHistory />} />
            <Route path="/prescriptions" element={<Prescription />} />
            <Route path="/reviews" element={<Ratings />} />
            <Route path="/profile" element={<Profile />} />

            {/* ✅ Registration Page */}
            {/* <Route path="/registration" element={<Registration />} /> */}
            <Route path="/doctorprofile" element={<DoctorProfilePage />} />
          </Routes>
        </div>
      </div>
      <div className="lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
