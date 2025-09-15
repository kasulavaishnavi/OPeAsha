import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 992);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [selected, setSelected] = useState(null); // No default selected

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

  const menuItems = [
    { icon: "/icons/dashboard.svg", label: "Dashboard" },
    { icon: "/icons/doctor.svg", label: "Doctors" },
    { icon: "/icons/appointments.svg", label: "Appointments" },
    { icon: "/icons/medications.svg", label: "Medications" },
    { icon: "/icons/lab.svg", label: "Lab" },
    { icon: "/icons/reports.svg", label: "Reports & Scanning's" },
    { icon: "/icons/pharmacy.svg", label: "Pharmacy" },
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
        style={{
          position: "fixed",
          top: isMobile ? (isOpen ? "100px" : "0px") : "77px",
          left: isMobile ? (isOpen ? "0" : "-260px") : "0px",
          width: isOpen
            ? isMobile
              ? "260px" // Mobile
              : window.innerWidth <= 1200
              ? "280px" // Laptop
              : "320px" // Desktop
            : "110px", // When sidebar is closed

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
                onClick={() => setSelected(item.label)}
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
                      left: isMobile ? "222px" : isOpen ? "250px" : "41px",
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
            src={isOpen ? "/icons/close.svg" : "/icons/open.svg"}
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
