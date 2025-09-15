import React, { useEffect, useState } from "react";
import { FiSearch, FiMic, FiX } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Cardiology from "../../../assets/cardiologist/cardiology.png";
import Doctoricon from "../../../assets/cardiologist/doctoricon.png";
import profile from "../../../assets/cardiologist/profileone.png";
import specialityimage from "../../../assets/cardiologist/life.png";
import arrowright from "../../../assets/cardiologist/arrowRight.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Filter from '../../../assets/filter-icon.svg'
import "../../../components/Doctor Specialist/cardiologist/MainContent.css"
import Search from '../../../assets/confirmappointmenticons/search.svg'
import Mic from '../../../assets/cardiologist/microphone.svg'
import video from '../../../assets/confirmappointmenticons/video.svg'
// import walk from '../../../assets/walking_icon.svg'
// import Star from '../../../assets/icons/star.png'

// const mockDoctors = Array(9).fill({
//   name: "Dr. Nithish Jagannatham",
//   speciality: "Cardiologist",
//   experience: "12 Years experience",
//   rating: "3.2 / 5",
//   fee: "500",
//   slot: "Today 12:40pm",
//   profile: profile,
//   specialityicon: specialityimage,
// });

// const MainContent = ({ selectedFilters, setSelectedFilters, clearAllFilters }) => {
//   const navigate=useNavigate();
//   const [selected, setSelected] = useState("video");

//   const handleRemoveFilter = (category, value) => {
//     setSelectedFilters((prev) => ({
//       ...prev,
//       [category]: prev[category].filter((v) => v !== value),
//     }));
//   };

//   return (
//     <div className="p-4" style={{ marginLeft: window.innerWidth >= 768 ? "360px" : "0", flex: 1}}>
//       <div
        
//         className="mb-2 d-block text-decoration-none d-flex align-items-center"
//         style={{ color: "#00A99D" }}>
//           <Link to="/category" className="text-decoration-none">
//         <span style={{color:'#8E8E8E',fontSize:'18px'}} className="me-2">Category</span>
//         </Link>
//         <span className="me-2" style={{width:'18px',height:'18px'}}><img src={arrowright} /></span>
//         <span style={{ textDecoration: "underline",fontSize:'1.12rem' }}>Category</span>
//       </div>

//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div className="d-flex align-items-center gap-3">
//           <img src={Cardiology} alt="Cardiology Icon" width={32} height={32} />
//           <div>
//             <h2 className="mb-1">Cardiologist</h2>
//             <p className="text-muted mb-0 d-flex" style={{fontSize:'1.12rem'}}>
//               <img src={Doctoricon} className="me-1 mt-1 h-4 w-4" alt="Doctor" />
//               Doctors 245
//             </p>
//           </div>
//         </div>
//         <div className="d-flex align-items-center position-relative" style={{ width: "350px" }}>
//   {/* Search Icon (Left) */}
//   <div className="position-relative" style={{ width: "350px" }}>
//   <input
//     type="text"
//     placeholder="Search"
//     className="form-control mb-2 w-100"
//     style={{
//       paddingLeft: "45px",
//       paddingRight: "40px",
//       color: "#8E8E8E",
//       borderRadius: "16px",
//       border: "1px solid #F7F7F7",
//       outline: "none",
//       boxShadow: "none",
//       height: "42px"
//     }}
//   />

//   {/* Search Icon */}
//   <FiSearch
//     className="position-absolute start-0 ms-3"
//     style={{
//       top: "50%",
//       transform: "translateY(-50%) translateY(-2px)", // tweak for centering
//       color: "#aaa",
//       width: "24px",
//       height: "24px",
//     }}
//   />

//   {/* Mic Icon */}
//   <FiMic
//     className="position-absolute end-0 me-3"
//     style={{
//       top: "50%",
//       transform: "translateY(-50%) translateY(-1px)",
//       color: "#aaa",
//       width: "20px",
//       height: "20px"
//     }}
//   />
// </div>
// </div>




//       </div>

//       {/* Toggle Buttons */}
//       <div className="d-flex justify-content-start mt-3 mb-3">
//         <div
//           className="p-2 rounded-pill d-inline-flex bg-white"
//           style={{ border: "1px solid #00A99D" }}
//         >
//           <button
//             style={{
//               backgroundColor: selected === "video" ? "#00A99D" : "#ffffff",
//               color: selected === "video" ? "white" : "#8E8E8E",
//             }}
//             className="btn fw-semibold px-4 py-2 rounded-pill"
//             onClick={() => setSelected("video")}
//           >
//             Video Consultant
//           </button>
//           <button
//             style={{
//               backgroundColor: selected === "clinic" ? "#00A99D" : "#ffffff",
//               color: selected === "clinic" ? "white" : "#8E8E8E",
//             }}
//             className="btn fw-semibold px-4 py-2 rounded-pill"
//             onClick={() => setSelected("clinic")}
//           >
//             Clinic Visit
//           </button>
//         </div>
//       </div>

//       {/* Selected Filters */}
//       {/* Selected Filters */}
// <div className="d-flex flex-wrap align-items-center mb-4">
//   {/* Show Clear Filters button only if total selected filters >= 2 */}
//   {Object.values(selectedFilters || {}).flat().length >= 2 && (
//     <span
//       className="badge rounded-pill text-bg-light me-2 mb-2 d-inline-flex align-items-center px-3 py-2"
//       style={{
//         fontSize: "0.85rem",
//         cursor: "pointer",
//       }}
//       onClick={clearAllFilters}
//     >
//       Clear filters
//       <FiX className="ms-2" />
//     </span>
//   )}

//   {/* Render individual selected filter badges */}
//   {Object.entries(selectedFilters).map(([category, values]) =>
//     values.map((value, idx) => (
//       <span
//         key={`${category}-${value}-${idx}`}
//         className="badge rounded-pill text-bg-light me-2 mb-2 d-inline-flex align-items-center px-3 py-2"
//         style={{ fontSize: "0.87rem" }}
//       >
//         {value}
//         <FiX
//           className="ms-2 cursor-pointer"
//           role="button"
//           onClick={() => handleRemoveFilter(category, value)}
//         />
//       </span>
//     ))
//   )}
// </div>


//       {/* Doctor Cards */}
//       <div className="row">
//         {mockDoctors.map((doc, index) => (
//           <div key={index} className="col-md-4 col-sm-6 mb-4">
//             <div className="card shadow-sm rounded-4 border-0 h-100">
//               <div className="card-body px-4 py-4 d-flex flex-column justify-content-between h-100">
//                 <div className="d-flex justify-content-end mb-2">
//                   <div style={{fontSize:'0.87rem'}}>
//                     <FaStar fontSize={12} style={{ color: "#FFC300" }} /> {doc.rating}
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center mb-3">
//                   <div
//                     className="rounded-circle overflow-hidden bg-light d-flex justify-content-center align-items-center p-2"
//                     style={{ width: 60, height: 60 }}
//                   >
//                     <img
//                       src={doc.profile}
//                       alt={doc.name}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                       }}
//                     />
//                   </div>
//                   <div className="ms-3">
//                     <p className="fw-bold mb-1" style={{fontSize:'18px'}}>{doc.name}</p>
//                     <div  style={{ color: "#00A99D",fontSize:'14px' }}>
//                       <img src={doc.specialityicon} className="me-1" alt="Speciality" />
//                       {doc.speciality} <span> | {doc.experience}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="d-flex justify-content-around align-items-center rounded-pill mb-3 py-1 px-2"
//                   style={{
//                     backgroundColor: "#ffffff",
//                     border: "1px solid #E7E7E7",
//                   }}
//                 >
//                   <div>
//                     <div className="fw-bold" style={{fontSize:'18px'}}>
//                     <span className="fw-light" style={{fontSize: '16px'}}>₹</span>{doc.fee}                   
//                      <span className=" ms-2 fw-normal" style={{fontSize:'14px'}}>Consultation fee</span>
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       width: "1px",
//                       height: "40px",
//                       backgroundColor: "#E0E0E0",
//                     }}
//                   ></div>
//                   <div className="text-start" style={{fontSize:'14px'}}>
//                     <div >Next slot</div>
//                     <div >{doc.slot}</div>
//                   </div>
//                 </div>
//                 <button
//                   className="btn w-100 rounded-pill "
//                   style={{ backgroundColor: "#00B2A9", color: "white",fontSize:'14px' }}
//                     onClick={() => navigate("/category/bookappointment")}

//                 >
                  
//                   Book a slot
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainContent;

// import React, { useState, useEffect } from "react";
// import { FiX } from "react-icons/fi";
// import { FaFilter, FaBars } from "react-icons/fa";
// import Star from '../../../assets/Star.png';
// import Search from '../../../assets/search-normal.png';
// import Mic from '../../../assets/microphone.png';
// import Cardiology from "../../../assets/Cardiology.png";
// import Doctoricon from "../../../assets/doctoricon.png";
// import profile from "../../../assets/profile.png";
// import specialityimage from "../../../assets/specialityimage.png";
// import arrowright from "../../../assets/arrow-right.png";
// import { Link, useNavigate } from "react-router-dom";
// import video from '../../../assets/video.png';
// import walk from '../../../assets/walking.png';
// import Filter from '../../../assets/filter.svg'
// import '../../cardiologist/cardiologist/MainContent.css';

const mockDoctors = Array(9).fill({
  name: "Dr. Nithish Jagannatham",
  speciality: "Cardiologist",
  experience: "12 Years experience",
  rating: "3.2 / 5",
  fee: "500",
  slot: "Today 12:40pm",
  profile: profile,
  specialityicon: specialityimage,
});

const MainContent = ({ selectedFilters, setSelectedFilters, clearAllFilters, onToggleSidebar }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("video");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1439);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 1439);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRemoveFilter = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].filter((v) => v !== value),
    }));
  };

  return (
    <div className="p-4 main-contents" style={{ flex: 1, }}>
      {/* ... your existing header, search, toggles etc. remain unchanged ... */}
      <div
        className="mb-2 d-flex text-decoration-none navigations"
        style={{ color: "#00A99D" }}>
          <span>
          <Link to="/category" className="text-decoration-none">
        <span style={{color:'#8E8E8E',fontSize:'18px'}} className="me-2">Category</span>
        </Link></span>
        <span className="me-2" style={{width:'18px',height:'18px',marginTop:'7px'}}><img src={arrowright} /></span>
        <span style={{ textDecoration: "underline",fontSize:'1.12rem' }}>Orthopedic</span>
      </div>

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className=" d-none  align-items-center gap-3 text">
          <img src={Cardiology} alt="Cardiology Icon" width={32} height={32} />
          <div>
            <h2 className="mb-1">Orthopedic</h2>
            <p className="text-muted mb-0 d-flex" style={{fontSize:'1.12rem'}}>
              <img src={Doctoricon} height={18} width={18} className="me-1" alt="Doctor" />
              Doctors 245
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3 position-relative filters-with-search" style={{ width: "370px" }}>
     {/* Hamburger icon - only on mobile */}
  <button 
    className="btn filters d-flex border border-gray-300" 
    style={{ background: "transparent", border: "1px solid #F7F7F7" , borderRadius: "28px", padding: "10px 24px 10px 10px", }}
    onClick={onToggleSidebar}
  >
    <img src={Filter} height={18} width={18}/>
    <span className="ms-2">Filters</span>
  </button>
    {/* Search Icon (Left) */}
  <div className="position-relative flex-grow-1 ">
  <input
    type="text"
    placeholder="Find doctor"
    className="form-control mb-2 mt-1 w-100 searchbar outline-none outline-gray-300"
    style={{
      paddingLeft: "45px",
      paddingRight: "40px",
      paddingTop: "18px",
      paddingBottom: "18px",
      color: "#8E8E8E",
      borderRadius: "23px",
      // border: "1px solid #F7F7F7",
      // outline: "1px solid grey",
      boxShadow: "none",
      height: "45px"
    }}
  />

  {/* Search Icon */}
  <img src={Search} alt="Search Icon"
    className="position-absolute start-0 ms-3"
    style={{
      top: "50%",
      transform: "translateY(-50%) translateY(-2px)", // tweak for centering
      color: "#aaa",
      width: "24px",
      height: "24px",
    }}
  />

  {/* Mic Icon */}
  <img src={Mic} alt="Mic Icon"
    className="position-absolute end-0 me-3"
    style={{
      top: "50%",
      transform: "translateY(-50%) translateY(-1px)",
      color: "#aaa",
      width: "24px",
      height: "24px"
    }}
  />
</div>
</div>

      </div>

      {/* Toggle Buttons */}
      <div className="d-flex justify-content-center mt-3 mb-3 outer-toggle">
        <div
          className="p-2 rounded-pill d-flex align-items-center bg-white toggle-buttons-container"
          style={{ border: "1px solid #00A99D" }}
        >
          <button
            style={{
              backgroundColor: selected === "video" ? "#00A99D" : "#ffffff",
              color: selected === "video" ? "white" : "#8E8E8E",
            }}
            className="btn fw-semibold px-4 py-2 rounded-pill d-flex"
            onClick={() => setSelected("video")}
          >
            <span className="me-2"><img src={video} height={24} width={24} className="toggle-images"/></span>
            Video Consultant
          </button>
          <button
            style={{
              backgroundColor: selected === "clinic" ? "#00A99D" : "#ffffff",
              color: selected === "clinic" ? "white" : "#8E8E8E",
            }}
            className="btn1 fw-semibold  rounded-pill d-flex"
            onClick={() => setSelected("clinic")}
          >
            <span className="me-1 ps-4"><img src={walk} height={14} width={24} className="toggle-images"/></span>
            Clinic Visit
          </button>
        </div>
      </div>

      {/* Selected Filters */}
      {/* Selected Filters */}
<div className="d-flex flex-wrap align-items-center mb-4">
  {/* Show Clear Filters button only if total selected filters >= 2 */}
  {Object.values(selectedFilters).flat().length >= 2 && (
    <span
      className="badge rounded-pill text-bg-light me-2 mb-2 d-inline-flex align-items-center px-3 py-2"
      style={{
        fontSize: "0.85rem",
        cursor: "pointer",
      }}
      onClick={clearAllFilters}
    >
      Clear filters
      <FiX className="ms-2" />
    </span>
  )}

  {/* Render individual selected filter badges */}
  {Object.entries(selectedFilters).map(([category, values]) =>
    values.map((value, idx) => (
      <span
        key={`${category}-${value}-${idx}`}
        className="badge rounded-pill text-bg-light me-2 mb-2 d-inline-flex align-items-center px-3 py-2"
        style={{ fontSize: "0.87rem" }}
      >
        {value}
        <FiX
          className="ms-2 cursor-pointer"
          role="button"
          onClick={() => handleRemoveFilter(category, value)}
        />
      </span>
    ))
  )}
</div>


      {/* Doctor Cards */}


      <div className="row">
        {mockDoctors.map((doc, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4">
            <div className="card shadow-sm rounded-4 border-0 h-100">
              <div className="card-body px-4 py-4 d-flex flex-column justify-content-between h-100">

                {isMobileView ? (
                  <>
                    {/* Profile image and rating side-by-side */}
                    <div className="d-flex align-items-center mb-2 justify-content-between">
                      <div
                        className="doctor-profile rounded-circle overflow-hidden bg-light d-flex justify-content-center align-items-center p-2"
                        style={{ width: 40, height: 40 }}
                      >
                        <img
                          src={doc.profile}
                          alt={doc.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <div
                        style={{ fontSize: "0.87rem" }}
                        className="d-flex align-items-center"
                      >
                        <img
                          src={Star}
                          height={16}
                          width={16}
                          style={{ color: "#FFC300", marginRight: 6 }}
                          alt="star"
                        />
                        {doc.rating}
                      </div>
                    </div>

                    {/* Doctor name and speciality below */}
                    <div className="ms-1">
                      <p className="fw-bold mb-1 doctor-name" style={{ fontSize: "18px" }}>
                        {doc.name}
                      </p>
                      <div
                        style={{ color: "#00A99D", fontSize: "14px" }}
                        className="d-flex speciality mb-3"
                      >
                        <img
                          src={doc.specialityicon}
                          className="me-1"
                          alt="Speciality"
                        />
                        {doc.speciality} <span className="ms-1"> | {doc.experience}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Desktop: rating on top */}
                    <div className="doctor-rating d-flex justify-content-end mb-2">
                      <div style={{ fontSize: "0.87rem" }} className="d-flex">
                        <img
                          src={Star}
                          height={16}
                          width={16}
                          style={{ color: "#FFC300" }}
                          alt="star"
                        />{" "}
                        {doc.rating}
                      </div>
                    </div>
                    {/* Desktop: profile + name + speciality row */}
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="doctor-profile rounded-circle overflow-hidden bg-light d-flex justify-content-center align-items-center p-2"
                        style={{ width: 60, height: 60 }}
                      >
                        <img
                          src={doc.profile}
                          alt={doc.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <div className="ms-3">
                        <p className="fw-bold mb-1 doctor-name" style={{ fontSize: "18px" }}>
                          {doc.name}
                        </p>
                        <div
                          style={{ color: "#00A99D", fontSize: "14px" }}
                          className="d-flex speciality"
                        >
                          <img
                            src={doc.specialityicon}
                            className="me-1"
                            alt="Speciality"
                          />
                          {doc.speciality} <span className="ms-1"> | {doc.experience}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* The rest of your card: consultation fee, slot, and book button */}
                <div
                  className="d-flex justify-content-around align-items-center rounded-pill mb-3 py-1 px-2 fee-details"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #E7E7E7",
                  }}
                >
                  <div className="consultation-fee-box">
                    <div className="fw-bold" style={{ fontSize: "18px" }}>
                      <span className="fw-light" style={{ fontSize: "16px" }}>₹</span><span className="fee">{doc.fee}</span>
                      <span className=" ms-2 fw-normal" style={{ fontSize: "14px" }}>Consultation fee</span>
                    </div>
                  </div>
                  <div className="vertical-line"
                    style={{
                      width: "1px",
                      height: "40px",
                      backgroundColor: "#E0E0E0",
                    }}
                  ></div>
                  <div className="text-start next-slot-box" style={{ fontSize: "14px" }}>
                    <div>Next slot</div>
                    <div> {doc.slot}</div>
                  </div>
                </div>

                <button
                  className="btn w-100 rounded-pill"
                  style={{ backgroundColor: "#00B2A9", color: "white", fontSize: '14px' }}
                  onClick={() => navigate("/category/bookappointment")}
                >
                  Book a slot
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
