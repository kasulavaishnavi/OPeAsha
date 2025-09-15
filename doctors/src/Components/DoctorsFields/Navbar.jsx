import React from "react";
import { Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/eAshalogo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleUserClick = () => {
  navigate("/doctorprofile"); // ✅ Always go to Registration
};


  return (
    <div className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 border-b border-[#F7F7F7] shadow-sm bg-white z-50">
      {/* Left Section: Logo */}
      <img src={Logo} alt="Logo" className="w-16 h-auto" />

      {/* Right Section: Icons */}
      <div className="flex items-center gap-4 mr-[40px]">
        <button className="p-1 bg-transparent border-none">
          <Bell className="w-6 h-6" />
        </button>

        {/* ✅ Clicking this goes to Registration */}
        <div
          onClick={handleUserClick}
          className="w-10 h-10 bg-[#00A99D] rounded-full flex items-center justify-center cursor-pointer"
        >
          <User className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
