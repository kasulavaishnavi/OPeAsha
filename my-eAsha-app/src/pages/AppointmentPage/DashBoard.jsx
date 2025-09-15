import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import generalHealthCare from '../../assets/DBIcons/generalHealthCare.svg'
import cardiologist from '../../assets/DBIcons/cardiologist.svg'
import orthopedic from '../../assets/DBIcons/orthopedic.svg'
import neurologist from '../../assets/DBIcons/neurologist.svg'
import ophthalmology from '../../assets/DBIcons/ophthalmology.svg'
import ent from '../../assets/DBIcons/ent.svg'
import dental from '../../assets/DBIcons/dental.svg'
import womenHealth from '../../assets/DBIcons/womenHealth.svg'
import childHealth from '../../assets/DBIcons/childHealth.svg'
import  skin from '../../assets/DBIcons/skin.svg'
import mentalHealth from '../../assets/DBIcons/mentalHealth.svg'
import doctor from '../../assets/icons/doctor.svg';



const categories = [
  { name: "General healthcare", icon: generalHealthCare , path: "general-healthcare" },
  { name: "Cardiologist", icon: cardiologist, path: "cardiologist" },
  { name: "Orthopedic", icon: orthopedic, path: "orthopedic" },
  { name: "Neurologist", icon:  neurologist, path: "neurologist" },
  { name: "Ophthalmology", icon: ophthalmology, path: "ophthalmology" },
  { name: "ENT", icon: ent, path: "ent" },
  { name: "Dental", icon: dental, path: "dental" },
  { name: "Women health", icon: womenHealth, path: "women-health" },
  { name: "Child health", icon: childHealth, path: "child-health" },
  { name: "Skin & Beauty", icon: skin , path: "skin-&-beauty" },
  { name: "Mental health", icon: mentalHealth, path: "mental-health" },
];

const Dashboard = () => {
  const [marginLeft, setMarginLeft] = useState("0px");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  
  // console.log(generalHealthCare)
  // console.log(categories.icon)
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setMarginLeft(window.innerWidth >= 992 ? "300px" : "0px");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (path) => {
    navigate(`/category/${path}`);
  };
  

  return (
    <div
       className="position-relative"
      style={{
        marginLeft: marginLeft,
        marginTop: isMobile ? "66px" : "60px",
        height: "100vh",
        overflow: "hidden",
        padding: isMobile ? "0 16px" : "42px 0px 0px 42px",
      }}
    >
  
      <h2 
        className="fw-medium mb-4 ms-4 ms-lg-0"
        style={{
          position: isMobile ? "fixed" : "static",
          top: isMobile ? "77px" : "auto",
          left: isMobile ? "44%" : "auto",
          transform: isMobile ? "translateX(-50%)" : "none",
          backgroundColor: isMobile ? "white" : "transparent",
          width: isMobile ? "100%" : "auto",
          padding: isMobile ? "32px 0 16px 66px" : "0",
          borderTop:"1px",
          zIndex: 0,
        }}
      >
        Categories
      </h2>

      <div className="row" style={{ marginTop: isMobile ? "89px" : "0" }}>
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="col-12 col-sm-6 col-md-4 mb-3"
            style={{ maxWidth: "380px", cursor: "pointer" }}
            onClick={() => handleCategoryClick(cat.path)}
          >
           
            <div
              className="p-3 bg-white"
              style={{
                border: "1px solid #dee2e6",
                // borderColor:"1px solid #dee2e6",
                borderRadius: "18px",
                maxWidth: isMobile ? "100%" : "380px",
                paddingRight: "8px",
              }}
            >
              <div className="d-flex align-items-center">
                <div
                  style={{
                    background: "#e6feff",
                    marginRight: "10px",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <img
                    src={cat.icon}
                    alt={cat.name}
                    style={{ width: "48px", height: "48px" }}
                  /> */}
                  
                </div>
                <div>
                  <div className="fw-bold" style={{ fontSize: "18px" }}>
                    {cat.name}
                  </div>
                  <div className="d-flex align-items-center mt-1">
                    <img
                      src={doctor}
                      alt="Doctor"
                      style={{
                        width: "16px",
                        height: "16px",
                        marginRight: "6px",
                      }}
                    />
                    <small className="text-muted" style={{ fontSize: "14px" }}>
                      Doctors 245
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
