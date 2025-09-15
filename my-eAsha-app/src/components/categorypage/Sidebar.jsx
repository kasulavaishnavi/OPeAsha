import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import dashboard from "../../assets/icons/dashboard.svg";
import doctor from "../../assets/icons/doctor.svg";
import appointments from "../../assets/icons/appointments.svg";
import medications from "../../assets/icons/medications.svg";
import lab from "../../assets/icons/lab.svg";
import reports from "../../assets/icons/reports.svg";
import pharmacy from "../../assets/icons/pharmacy.svg";
import close from "../../assets/icons/close.svg";
import open from "../../assets/icons/open.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 992);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [selected, setSelected] = useState(null); // No default selected
  const navigate = useNavigate();
  const location = useLocation();
  const isLabCards = location.pathname === "/lab";

  

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
  // Run once on mount to set initial state safely
  const mobile = window.innerWidth < 992;
  setIsMobile(mobile);
  setIsOpen(!mobile);
}, []);

// 1) Add state & resize effect (put near your other hooks)
const [vw, setVw] = useState(
  typeof window !== "undefined" ? window.innerWidth : 1200
);

useEffect(() => {
  const onResize = () => setVw(window.innerWidth);
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);

// 2) Compute clear breakpoints and sidebarWidth (before return)
const MOBILE_BP = 992;    // you already use this for isMobile
const LAPTOP_BP = 1200;   // change if you prefer 1024 or 1280

let sidebarWidth;
if (!isOpen) {
  sidebarWidth = "110px";
} else if (isMobile) {
  sidebarWidth = "260px";         // mobile open
} else if (vw <= LAPTOP_BP) {
  // laptop range (<=1200)
  sidebarWidth = isLabCards ? "360px" : "257px";
} else {
  // desktop (>1200)
  sidebarWidth = isLabCards ? "360px" : "300px"; // <-- I set 300px as you asked
}

// 3) Compute active line position relative to computed width
const sidebarWidthNum = parseInt(sidebarWidth || "250", 10) || 250;
const activeLineLeft = isMobile
  ? "222px"
  : isOpen
    ? `${Math.max(41, sidebarWidthNum - 30)}px` // 30px from right edge; tweak if needed
    : "41px";



  const menuItems = [
    { icon: dashboard, label: "Dashboard", path:"" },
    { icon: doctor, label: "Doctors",path:"/category" },
    { icon: appointments, label: "Appointments" , path:"/appointment"},
    { icon: medications, label: "Medications" , path:"/medication"},
    { icon: lab, label: "Lab", path: "/lab" },
    { icon: reports, label: "Reports & Scanning's", path:"/reportone"},
    { icon: pharmacy, label: "Pharmacy" , path: "/pharmacy"},
  ];
  
  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div
          style={{
            position: "fixed",
            top: "76px",
            width: "100%",
            height: "100vh",
            backgroundColor: "#fff",
            opacity: 0.98,
            zIndex: 998,
          }}
        />
      )}

      {/*Sidebar */}
      <div
      className="sidebarwidth"
        style={{
          position: "fixed",
          top: isMobile ? (isOpen ? "100px" : "0px") : "77px",
          left: isMobile ? (isOpen ? "0" : "-260px") : "0px",
          // width: isOpen
          //   ? isMobile
          //     ? "260px" // Mobile
          //     : window.innerWidth <= 1200
          //     // ? "280px" // Laptop
          //     ? isLabCards
          //      ? "360px" // 👈 Wider for LabCardsComponent
          //      : "257px" // Laptop default               
          //     :  isLabCards 
          //      ? "360px"
          //      : "320px" // Desktop
          //   : "110px", // When sidebar is closed
           width : sidebarWidth,
          height: "calc(100vh - 78px)",
          backgroundColor: "#fff",
          borderRight: "1px solid #eee",
          padding: isMobile ? (isOpen ? "25px" : "20px") : "40px 0px 0px 57px",
          transition: "left 0.4s ease, width 0.4s ease",
          overflowX: "hidden",
          zIndex: 999,
        }}
      >
        <ol className="list-unstyled m-0 mt-5">
          {menuItems.map((item, index) => {
            const isSelected = selected === item.label; // only mark when selected

            return (
              <li
                key={index}
                onClick={() => {
                  setSelected(item.label);
                  // Uncomment and ensure navigate is defined if you want navigation:
                  navigate(item.path);
                }}
                className={`d-flex align-items-center mb-4 sidebar-item ${
                  isSelected ? "sidebar-active" : ""
                }`}
                style={{
                  marginLeft: "8px",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                {/* Active vertical line */}
                {isSelected && (
                  <div
                    style={{
                      position: "absolute",
                      // left: isMobile ? "222px" : isOpen ? "250px" : "41px",
                      left:activeLineLeft,
                      top: "-7px",
                      width: "4px",
                      height: "32px",
                      borderRadius: "2px",
                      backgroundColor: "#00A99D",
                    }}
                  />
                )}

                <img
                  src={item.icon}
                  alt={item.label}
                  className="sidebar-icon"
                />

                <span
                  className="sidebar-label"
                  style={{
                    marginLeft: "12px",
                    whiteSpace: "nowrap",
                    opacity: isOpen ? 1 : 0,
                    width: isOpen ? "auto" : 0,
                    overflow: "hidden",
                    transition: "opacity 0.4s ease, width 0.4s ease",
                  }}
                >
                  {item.label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      {/*Toggle button */}
      <button
        onClick={toggleSidebar}
        className="toggle-icon-btn"
        title={isOpen ? "Collapse" : "Expand"}
        style={{
          position: "fixed",
          top: "100px",
          left: isMobile ? "29px" : isOpen ? "60px" : "60px",
          background: "transparent",
          border: "none",
          padding: isMobile ? "11px 0px 0px 4px" : "0px",
          transition: "left 0.4s ease",
          zIndex: 2000,
        }}
      >
        {isMobile ? (
          isOpen ? (
            <FiX size={24} color="#333" />
          ) : (
            <FiMenu size={24} color="#333" />
          )
        ) : (
          <img
            src={isOpen ? open : close}
            alt="Toggle Sidebar"
            style={{ width: "40px", height: "40px" }}
          />
        )}
      </button>

      {/* Styles */}
      <style>{`
        .sidebar-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          transition: filter 0.3s ease;
        }

        .sidebar-item {
          cursor: pointer;
          font-size: 16px;
          font-weight: 400;
          color: #252525;
          transition: color 0.3s ease;
        }

        .sidebar-item:hover {
          color: #00A99D;
        }

        .sidebar-item:hover .sidebar-icon {
          filter: brightness(0) saturate(100%) invert(53%) sepia(72%) saturate(455%) hue-rotate(126deg) brightness(95%) contrast(96%);
        }

        .sidebar-active {
          color: #00A99D;
          font-weight: 500;
        }

        .sidebar-active .sidebar-icon {
          filter: brightness(0) saturate(100%) invert(53%) sepia(72%) saturate(455%) hue-rotate(126deg) brightness(95%) contrast(96%);
        }
      `}</style>
    </>
  );
};

export default Sidebar;
