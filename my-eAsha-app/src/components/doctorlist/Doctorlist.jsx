 import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FiSearch,FiMic,FiX,FiChevronDown,FiChevronUp,FiMenu} from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Cardiology from "../../assets/Cardiology.png";
import Doctoricon from "../../assets/Doctoricon.png";
import profile from "../../assets/profile.png";
import specialityimage from "../../assets/specialityimage.png";
import Topbar from "../../pages/Topbar/Topbar";

const mockDoctors = Array(9).fill({
  name: "Dr. Nithish Jagannatham",
  speciality: "Cardiologist",
  experience: "12 Years experience",
  rating: "3.2 / 5",
  fee: "₹500",
  slot: "Today 12:40pm",
  profile: profile,
  specialityicon: specialityimage,
});

const DoctorList = () => {
  const [filterLocation, setFilterLocation] = useState("");
  const [openFilter, setOpenFilter] = useState([]);
  const [selected, setSelected] = useState("video");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({locations: [],fee: [],gender: [],language: [],rating: [],general: [],});
  const [showAllLocations, setShowAllLocations] = useState(false);

  const allLocations = ["Begumpet","Secunderabad","Prakash nagar","Ameerpet","SR Nagar","Madhapur","Gachibowli","Kukatpally","Banjara Hills","Jubilee Hills",];
  const toggleFilter = (section) => {
    setOpenFilter((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => {
      const updated = prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updated };
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({locations: [],fee: [],gender: [],language: [],rating: [],general: [],});
  };

  return (
    <>
      {/* <Topbar/> */}
  
    <div className="container-fluid bg-light min-vh-100">
      <style>{`
        .custom-checkbox {
          appearance: none;width: 24px;height: 24px;border: 1px solid #F7F7F7;border-radius: 6px;background-color: white;cursor: pointer;position: relative;
        }
        .custom-checkbox:checked {
          background-color: #00A99D;border-color: #00A99D;
        }
        .custom-checkbox:checked::after {
          content: '✔';color: white;font-size: 10px;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);
        }
      `}</style>
      {/* Hamburger - mobile only */}
       {/* <button
        className="btn d-md-none position-fixed top-0 start-0 m-3 z-3 bg-white shadow rounded-circle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{ width: "40px", height: "40px", fontSize: "20px", padding: 0 }}>
        {sidebarOpen ? <FiX /> : <FiMenu />}</button> */}
<div
  className={`p-3 bg-white border-end position-fixed top-0 start-0 h-100 overflow-hidden z-2 ${
    sidebarOpen ? "d-block" : "d-none"
  } d-md-block`}
  style={{ width: "360px" }}
>
          {Object.values(selectedFilters).some((arr) => arr.length > 0) && (
          <button type="button" className="mb-4 d-flex align-items-center" onClick={clearAllFilters}
            style={{background: "none",border: "none",padding: "8px 16px",color: "#000",cursor: "pointer",fontSize: "0.87rem", }}>
            <span className="rounded-circle p-2 me-3 d-flex justify-content-center align-items-center"
              style={{backgroundColor: "#F7F7F7",width: "32px",height: "32px",}}>
              <FiX size={16} style={{ color: "#8E8E8E", strokeWidth: "3" }} />
            </span>
            Clear filters
          </button>)}
          {/* All Locations and Nearby */}
          <div className="mb-2">
            {["All Locations", "Nearby"].map((option) => (
              <div className="d-flex align-items-center mb-4">
                <input type="checkbox" id={option} className="custom-checkbox me-2" checked={selectedFilters.general.includes(option)} onChange={() => handleFilterChange("general", option)}/>
                <label htmlFor={option} className="fw-medium mb-0" style={{fontSize:'18px'}}>{option}</label>
              </div>
            ))}
          </div>
          <hr />

          {/* Location Filter */}
          <div className="mb-4" style={{ position: "relative" }}>
            <FiSearch
              style={{position: "absolute",top: "50%",left: "10px",transform: "translateY(-50%)",color: "#aaa",pointerEvents: "none",width:'24px',height:'24px'}}/>
            <input type="text" placeholder="Search" className="form-control mb-2" value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}
              style={{ paddingLeft: "40px", color: "#8E8E8E",borderRadius:'16px',border:'1px solid #F7F7F7',outline:'none',boxShadow:'none' }}/>
          </div>
          <ul className="list-unstyled">
            {(showAllLocations ? allLocations : allLocations.slice(0, 5))
              .filter((loc) =>
                loc.toLowerCase().includes(filterLocation.toLowerCase())
              )
              .map((loc) => (
                <li key={loc} className="d-flex align-items-center mb-4">
                  <input type="checkbox" id={loc} className="me-2 custom-checkbox"checked={selectedFilters.locations.includes(loc)} onChange={() => handleFilterChange("locations", loc)}/>
                     <label htmlFor={loc} style={{ fontSize: '1rem', marginBottom: 0 }}>{loc}</label>
               </li>
              ))}
          </ul>
          <button onClick={() => setShowAllLocations((prev) => !prev)} className="btn btn-link p-0 mb-4 text-decoration-none" style={{ color: "#00A99D",fontSize:'1.12rem' }}>
            {showAllLocations ? "See less..." : "See more..."}
          </button>
          <div>
            <h6 className="d-flex justify-content-between align-items-center mb-4" onClick={() => toggleFilter("fee")} style={{ cursor: "pointer" }}>
              Fee {openFilter === "fee" ? <FiChevronUp style={{ width: "24px", height: "24px" }} /> : <FiChevronDown style={{ width: "24px", height: "24px" }}/>}
            </h6>
            {openFilter.includes("fee") && (
              <ul className="list-unstyled ms-4">
                {["Under ₹500 ","₹500 - ₹600","₹600 - ₹800","₹800 - ₹1000","Above ₹1000",
                ].map((fee) => (
                  <li key={fee} className="d-flex align-items-center mb-4" style={{fontSize:'1.12rem'}}>
                    <input type="checkbox" className="me-2 custom-checkbox" checked={selectedFilters.fee.includes(fee)} onChange={() => handleFilterChange("fee", fee)}/>{fee}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <hr />

          {/* Gender Filter */}
          <div>
            <h6
              className="d-flex justify-content-between align-items-center mb-4"
              onClick={() => toggleFilter("gender")}
              style={{ cursor: "pointer" }}
            >
              Gender{" "}
              {openFilter === "gender" ? <FiChevronUp style={{ width: "24px", height: "24px" }} /> : <FiChevronDown style={{ width: "24px", height: "24px" }}/>}
            </h6>
            {openFilter.includes("gender") && (
              <ul className="list-unstyled ms-4">
                {["Male", "Female"].map((gender) => (
                  <li key={gender} className="d-flex align-items-center mb-4" style={{fontSize:'1.12rem'}}>
                    <input
                      type="checkbox"
                      className="me-2 custom-checkbox "
                      checked={selectedFilters.gender.includes(gender)}
                      onChange={() => handleFilterChange("gender", gender)}
                    />
                    {gender}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <hr />

          {/* Language Filter */}
          <div>
            <h6
              className="d-flex justify-content-between align-items-center mb-4"
              onClick={() => toggleFilter("language")}
              style={{ cursor: "pointer" }}
            >
              Language{" "}
              {openFilter === "language" ? <FiChevronUp style={{ width: "24px", height: "24px" }} /> : <FiChevronDown style={{ width: "24px", height: "24px" }}/>}
            </h6>
            {openFilter.includes("language") && (
              <ul className="list-unstyled ms-4">
                {["Telugu", "English"].map((lang) => (
                  <li key={lang} className="d-flex align-items-center mb-4" style={{fontSize:'1.12rem'}}>
                    <input
                      type="checkbox"
                      className="me-2 custom-checkbox"
                      checked={selectedFilters.language.includes(lang)}
                      onChange={() => handleFilterChange("language", lang)}
                    />
                      {lang}

                  </li>
                ))}
              </ul>
            )}
          </div>
          <hr />

          {/* Rating Filter */}
          <div>
            <h6
              className="d-flex justify-content-between align-items-center mb-4"
              onClick={() => toggleFilter("rating")}
              style={{ cursor: "pointer" }}
            >
              Rating{" "}
              {openFilter === "rating" ? <FiChevronUp style={{ width: "24px", height: "24px" }} /> : <FiChevronDown style={{ width: "24px", height: "24px" }}/>}
            </h6>
            {openFilter.includes("rating") && (
              <ul className="list-unstyled ms-4">
                {["5", "4", "3"].map((rating) => (
                  <li key={rating} className="d-flex align-items-center mb-4" style={{fontSize:'1.12rem'}}>
                    <input
                      type="checkbox"
                      className="me-2 custom-checkbox"
                      checked={selectedFilters.rating.includes(`★${rating}`)}
                      onChange={() => handleFilterChange("rating", `★${rating}`)}
                    />
                    <FaStar size={16} color="#00A99D" className="me-2" />
                          {rating}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <hr />
        </div>
      
      {/* Backdrop (for mobile sidebar) */}
      {sidebarOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 z-1 d-md-none"
          onClick={() => setSidebarOpen(false)}
        />
      )}


<div
        className="p-4"
        style={{ marginLeft: window.innerWidth >= 768 ? "360px" : "0", flex: 1 }}
      >        <a
          href="#"
          className="mb-2 d-block text-decoration-none"
          style={{ color: "#00A99D" }}
        >
          <span className="me-2">←</span>
          <span style={{ textDecoration: "underline" }}>Category</span>
        </a>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center gap-3">
            <img
              src={Cardiology}
              alt="Cardiology Icon"
              width={32}
              height={32}
            />
            <div>
              <h4 className="mb-1">Cardiologist</h4>
              <p className="text-muted mb-0">
                <img src={Doctoricon} className="me-1" />
                Doctors 245
              </p>
            </div>
          </div>
          <div className="position-relative" style={{ width: "350px" }}>
            <input
              type="text"
              placeholder="Find doctor"
              className="form-control ps-5 pe-5 rounded-pill p-2"
            />
            <FiSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
            <FiMic className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
          </div>
        </div>

        <div className="d-flex justify-content-start mt-3 mb-4">
          <div
            className="p-2 rounded-pill d-inline-flex bg-white"
            style={{ border: "2px solid #00A99D" }}
          >
            <button
              style={{
                backgroundColor: selected === "video" ? "#00A99D" : "#ffffff",
                color: selected === "video" ? "white" : "#8E8E8E",
              }}
              className="btn fw-semibold px-4 py-2 rounded-pill"
              onClick={() => setSelected("video")}
            >
              Video Consultant
            </button>
            <button
              style={{
                backgroundColor: selected === "clinic" ? "#00A99D" : "#ffffff",
                color: selected === "clinic" ? "white" : "#8E8E8E",
              }}
              className="btn fw-semibold px-4 py-2 rounded-pill"
              onClick={() => setSelected("clinic")}
            >
              Clinic Visit
            </button>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="row">
          {mockDoctors.map((doc, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm rounded-4 border-0 h-100">
                <div className="card-body px-4 py-4 d-flex flex-column justify-content-between h-100">
                  <div className="d-flex justify-content-end mb-2">
                    <div className="fw-medium small">
                      <FaStar fontSize={12} style={{ color: "#FFC300" }} />{" "}
                      {doc.rating}
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle overflow-hidden bg-light d-flex justify-content-center align-items-center p-2"
                      style={{ width: 60, height: 60 }}
                    >
                      <img
                        src={doc.profile}
                        alt={doc.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="ms-3">
                      <h6 className="fw-bold mb-1">{doc.name}</h6>
                      <div
                        className="fw-medium small"
                        style={{ color: "#00A99D" }}
                      >
                        <img src={doc.specialityicon} className="me-0" />
                        {doc.speciality}{" "}
                        <span style={{ color: "#00A99D" }}>
                          | {doc.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-around align-items-center rounded-pill mb-3 py-1 px-2 "
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #E7E7E7",
                    }}
                  >
                    <div>
                      <div className="fw-semibold">
                        {doc.fee}
                        <span className="fw-medium ms-2">Consultation fee</span>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "1px",
                        height: "40px",
                        backgroundColor: "#E0E0E0",
                      }}
                    ></div>
                    <div className="text-start">
                      <div className="fw-medium">Next slot</div>
                      <div className="fw-medium">{doc.slot}</div>
                    </div>
                  </div>
                  <button
                    className="btn w-100 rounded-pill fw-semibold"
                    style={{ backgroundColor: "#00B2A9", color: "white" }}
                  >
                    Book a slot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
    </>
  );
};

export default DoctorList;
