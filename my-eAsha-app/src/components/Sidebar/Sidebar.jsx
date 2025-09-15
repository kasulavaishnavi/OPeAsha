import React, { useEffect, useState } from "react";
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


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 992);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [selected, setSelected] = useState(null); 
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
   
    const mobile = window.innerWidth < 992;
    setIsMobile(mobile);
    setIsOpen(!mobile);
  }, []);

  const menuItems = [
    { icon: dashboard, label: "Dashboard" },
    { icon: doctor, label: "Doctors" },
    { icon: appointments, label: "Appointments" },
    { icon: medications, label: "Medications" },
    { icon: lab, label: "Lab" },
    { icon: reports, label: "Reports & Scanning's" },
    { icon: pharmacy, label: "Pharmacy" },
  ];

  return (
    <>
  
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

  
      <div
        className="sidebar-wrapper"
        style={{
          position: "fixed",
          top: isMobile ? (isOpen ? "100px" : "0px") : "77px",
          left: isMobile ? (isOpen ? "0" : "-260px") : "0px",
          width: isOpen
            ? isMobile
              ? "260px" 
              : window.innerWidth <= 1200
              ? "280px" 
              : "350px" 
            : "110px", 

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
            const isSelected = selected === item.label; 

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

      <button
        onClick={toggleSidebar}
        className="toggleIconbtn"
        title={isOpen ? "Collapse" : "Expand"}
        style={{
          position: "fixed",
          top: "63px",
          left: isMobile ? "19px" : isOpen ? "60px" : "60px",
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
            src={isOpen ? close : open}
            alt="Toggle Sidebar"
            style={{ width: "40px", height: "40px" }}
          />
        )}
      </button>

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
