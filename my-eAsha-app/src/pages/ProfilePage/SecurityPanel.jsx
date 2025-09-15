// import React from "react";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import styles from '../../pages/ProfilePage/SecurityPanel.module.css'

// function SecurityAndLogin() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className={` ${styles.mainWrapper}  w-100 `}>
//       <style>
//         {`
//         .custom-input:focus {
//          outline: none !important;
//          box-shadow: none !important;
// }
//         `}
//       </style>
//       <div
//         className={` ${styles.mainContainer}  container d-flex flex-column align-items-start `}
//         style={{
//           width: "617px",
//           paddingTop: "110px",
//           marginLeft: "430px",
//           // marginTop:"10px",
//           // marginRight:"50px",
//           fontFamily: "Urbanist, sans-serif",
//         }}
//       >
//         <h2 className="mb-3 mt-5" style={{ fontWeight: "500" }}>
//           Security and Login
//         </h2>
//         <p className="mb-4" style={{ fontWeight: "400", fontSize: "1.12rem" }}>
//           Manage Credentials
//         </p>

//         <div className={` ${styles.secContainer} d-flex flex-column gap-3`}>
//           {/* Full Name */}
//           <div>
//             <label
//               htmlFor="fullName"
//               className="form-label"
//               style={{ fontSize: "1.12rem" }}
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               className="form-control rounded-pill  custom-input"
//               style={{
//                 border: " 1px solid #8E8E8E",
//                 padding: "10px 24px",
//                 width: "617px",
//               }}
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-3" style={{ position: "relative" }}>
//             <label
//               htmlFor="password"
//               className="form-label"
//               style={{ fontSize: "1.12rem" }}
//             >
//               Password
//             </label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               value="password123"
//               className="form-control rounded-pill  custom-input"
//               style={{
//                 border: "1px solid #8E8E8E",
//                 padding: "10px  24px", // Extra space for icon on right
//                 width: "617px",
//               }}
//               readOnly // Remove if you want it editable
//             />
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               style={{
//                 position: "absolute",
//                 top: "73%",
//                 right: "25px",
//                 transform: "translateY(-50%)",
//                 cursor: "pointer",
//                 color: "#666",
//               }}
//             >
//               {showPassword ? <FiEye size={24} /> : <FiEyeOff size={24} />}
//             </span>
//           </div>
//         </div>

//         <Link
//           to="/change-password"
//           className="mt-4 text-decoration-none d-inline-block"
//           style={{
//             color: "#00A99D",
//             cursor: "pointer",
//             fontSize: "18px",
//           }}
//         >
//           Change password
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default SecurityAndLogin;
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "../../pages/ProfilePage/SecurityPanel.module.css";

function SecurityAndLogin() {
  const [showPassword, setShowPassword] = useState(false);

  // Sidebar toggle states
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 992);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile); // auto-open if desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${styles.mainWrapper} w-100`}>
      <style>
        {`
        .custom-input:focus {
         outline: none !important;
         box-shadow: none !important;
        }
        `}
      </style>

      {/* Sidebar Toggle Button (only for mobile/tablet ≤ 991px) */}
      {isMobile && (
        <button
          className="btn btn-link p-0"
          style={{
            position: "fixed",
            top: "80px",
            left: "15px",
            zIndex: 1050,
          }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Close" : ""}
        </button>
      )}

      {/* Main Container */}
      <div
        className={`${styles.mainContainer} container d-flex flex-column align-items-start`}
        style={{
          width: isMobile ? "100%" : "617px",
          paddingTop: "110px",
          marginLeft: isMobile ? "0" : "430px",
          fontFamily: "Urbanist, sans-serif",
        }}
      >
        <h2 className={` ${styles.secHeader}  mb-3 mt-5`} style={{ fontWeight: "500" }}>
          Security and Login
        </h2>
        <p className="mb-4" style={{ fontWeight: "400", fontSize: "1.12rem" }}>
          Manage Credentials
        </p>

        <div className={`${styles.secContainer} d-flex flex-column gap-3`}>
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="form-label"
              style={{ fontSize: "1.12rem" }}
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="form-control rounded-pill custom-input"
              style={{
                border: "1px solid #8E8E8E",
                padding: "10px 24px",
                width: isMobile ? "100%" : "617px",
              }}
            />
          </div>

          {/* Password */}
          <div className="mb-3" style={{ position: "relative" }}>
            <label
              htmlFor="password"
              className="form-label"
              style={{ fontSize: "1.12rem" }}
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value="password123"
              className="form-control rounded-pill custom-input"
              style={{
                border: "1px solid #8E8E8E",
                padding: "10px 24px",
                width: isMobile ? "100%" : "617px",
              }}
              readOnly
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                top: "73%",
                right: "25px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#666",
              }}
            >
              {showPassword ? <FiEye size={24} /> : <FiEyeOff size={24} />}
            </span>
          </div>
        </div>

        <Link
          to="/change-password"
          className="mt-4 text-decoration-none d-inline-block"
          style={{
            color: "#00A99D",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Change password
        </Link>
      </div>
    </div>
  );
}

export default SecurityAndLogin;
