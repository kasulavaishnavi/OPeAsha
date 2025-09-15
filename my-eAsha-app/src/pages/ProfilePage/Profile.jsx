// import React, { useState, useRef } from "react";
// import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../App.css";
// import Profile from "../../assets/icons/profile.png";
// import { Outlet, useNavigate } from "react-router-dom";
// import Sidebar from "../../pages/ProfilePage/sidebar";
// // import Topbar from "../Topbar/Topbar";
// import Topbar from "../../pages/Topbar/Topbar";
// import Boy from "../../assets/user.png";

// export default function UserDetailsPanel() {
//   const [gender, setGender] = useState("Male");
//   const [healthTags, setHealthTags] = useState(["High BP", "High BP","High BP"]);
//   const navigate = useNavigate();

//   const handleClick = ()=>{
//     navigate('/profile')
//     // console.log('helo');
    
//   }

//   const refs = Array.from({ length: 9 }).map(() => useRef(null));

//   const handleEnterKey = (e, index) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       if (refs[index + 1]) {
//         refs[index + 1].current.focus();
//       }
//     }
//   };
//   // marginTop:"80px" at 34 line inside
//   return (
//     <div>
//     {/* <Topbar />
//     <Sidebar/> */}
//     <div className="w-100">
//      <Container fluid className="px-5" style={{ fontFamily: "Urbanist, sans-serif",paddingRight:"390px", }}> 
//       <Row>
//         <Col md={{ span: 9, offset: 3 }} className="pt-[7rem] " >
//           <div className="text-end mb-3 ">
//             <Button
//               className="rounded-pill px-4"
//               style={{ backgroundColor: "#00A99D", border: "none", height: "37px" }}
//             >
//               Save Changes
//             </Button>
//           </div>

//           <Form>
//             <div className="d-flex align-items-center mb-4">
//               <div
//                 className="rounded-circle border d-flex align-items-center justify-content-center"
//                 style={{ width: 88, height: 80, backgroundColor: "#F8F8F8" }}
//               >
//                 <img src={Profile} alt="User Icon" width={32} height={32} onClick={handleClick} />
//               </div>

//               <div className="ms-4 w-100">
//                 <Row>
//                   <Col md={4}>
//                     <Form.Label>Full Name</Form.Label>
//                     <Form.Control
//                       className="rounded-pill"
//                       style={{ height: "48px" }}
//                       ref={refs[0]}
//                       onKeyDown={(e) => handleEnterKey(e, 0)}
//                     />
//                   </Col>
//                   <Col md={4}>
//                     <Form.Label>Age</Form.Label>
//                     <Form.Control
//                       className="rounded-pill"
//                       style={{ height: "48px" }}
//                       ref={refs[1]}
//                       onKeyDown={(e) => handleEnterKey(e, 1)}
//                     />
//                   </Col>
//                   <Col md={4}>
//                     <Form.Label>Gender</Form.Label>
//                     <div className="d-flex rounded-pill border overflow-hidden" style={{ height: "48px" }}>
//                       {["Male", "Female", "Intersex"].map((g) => (
//                         <Button
//                           key={g}
//                           variant="light"
//                           onClick={() => setGender(g)}
//                           style={{
//                             backgroundColor: gender === g ? "#00A99D" : "white",
//                             color: gender === g ? "white" : "#252525",
//                             border: "none",
//                             flex: 1,
//                             fontWeight: "500",
//                             borderRadius:"28px"
//                           }}
//                         >
//                           {g}
//                         </Button>
//                       ))}
//                     </div>
//                   </Col>
//                 </Row>
//               </div>
//             </div>

//             <Row className="mb-4">
//               <Col md={4}>
//                 <Form.Label>Phone Number</Form.Label>
//                 <Form.Control
//                   className="rounded-pill"
//                   style={{ height: "48px" }}
//                   ref={refs[2]}
//                   onKeyDown={(e) => handleEnterKey(e, 2)}
//                 />
//               </Col>
//               <Col md={4}>
//                 <Form.Label>Aadhaar Number</Form.Label>
//                 <Form.Control
//                   className="rounded-pill"
//                   style={{ height: "48px" }}
//                   ref={refs[3]}
//                   onKeyDown={(e) => handleEnterKey(e, 3)}
//                 />
//               </Col>
//               <Col md={4}>
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control
//                   className="rounded-pill"
//                   style={{ height: "48px" }}
//                   ref={refs[4]}
//                   onKeyDown={(e) => handleEnterKey(e, 4)}
//                 />
//               </Col>
//             </Row>

//             <Row className="mb-4">
//               <Col md={4}>
//                 <Form.Label>Language Preferred</Form.Label>
//                 <Form.Select
//                   className="rounded-pill"
//                   style={{ height: "48px" }}
//                   ref={refs[5]}
//                   onKeyDown={(e) => handleEnterKey(e, 5)}
//                 >
//                   <option>English</option>
//                   <option>Hindi</option>
//                   <option>Telugu</option>
//                 </Form.Select>
//               </Col>
//             </Row>

//             <h5 className="mb-3 mt-4">Personal Information</h5>
//             <Row className="mb-4">
//               <Col md={4}>
//                 <Form.Label>Height (cm)</Form.Label>
//                 <Form.Control
//                   className="rounded-pill"
//                   style={{ height: "48px" }}
//                   ref={refs[6]}
//                   onKeyDown={(e) => handleEnterKey(e, 6)}
//                 />
//               </Col>
//               <Col md={4}>
//                 <Form.Label>Weight (kg)</Form.Label>
//                 <Form.Control
//                   className="rounded-pill"
//                   style={{ height: "48px" }}
//                   ref={refs[7]}
//                   onKeyDown={(e) => handleEnterKey(e, 7)}
//                 />
//               </Col>
//             </Row>

//             <Form.Group className="mb-3">
//               <Form.Label>Existing Health Conditions</Form.Label>
//               <Form.Control
//                 className="rounded-pill"
//                 placeholder="e.g. BP, measles, influenza"
//                 style={{ width: "470px", height: "48px" }}
//                 ref={refs[8]}
//                 onKeyDown={(e) => handleEnterKey(e, 8)}
//               />
//               <div className="d-flex gap-2 mt-3 flex-wrap">
//                 {healthTags.map((tag, index) => (
//                   <Badge
//                     key={index}
//                     bg="none"
//                     text="dark"
//                     className="rounded-pill px-3 py-3 border"
//                     style={{
//                       height: "48px",
//                       fontWeight: 400,
//                       fontSize: "16px",
//                       backgroundColor: "#F0F0F0",
//                       width:'130px',
                      
//                     }}
//                   >
//                     {tag} <span style={{ cursor: "pointer", marginLeft: 8 }}>×</span>
//                   </Badge>
//                 ))}
//               </div>
//             </Form.Group>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
   
//     </div>
//     {/* <Outlet/> */}
//    </div>
//   );
// }


// import React, { useState, useRef, useEffect } from "react";
// import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Profile from "../../assets/profile.svg";
// import Boy from "../../assets/user.png";


// Custom hook to check if device is mobile/tablet (<= 1024px)
// function useIsMobileOrTablet() {
//   const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth < 1024);
//   useEffect(() => {
//     const handleResize = () => setIsMobileOrTablet(window.innerWidth < 1024);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return isMobileOrTablet;
// }

import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Profile from "../../assets/profile.svg";
import Boy from "../../assets/user.png";
import styles from "../../pages/ProfilePage/Profile.module.css"


// Custom hook to check if device is mobile/tablet (<= 1024px)
function useIsMobileOrTablet() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth < 1024);
  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobileOrTablet;
}

export default function UserDetailsPanel() {
  const [gender, setGender] = useState("Male");
  const [healthTags, setHealthTags] = useState(["High BP", "High BP", "High BP"]);
  const refs = Array.from({ length: 9 }).map(() => useRef(null));
  const isMobileOrTablet = useIsMobileOrTablet();

  // Profile image state
  const [profileImage, setProfileImage] = useState(Boy);
  const fileInputRef = useRef(null);

  const handleEnterKey = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (refs[index + 1]) refs[index + 1].current.focus();
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };
 

  return (
    
    
    <Container
      fluid
      className="px-3 px-md-5"
      style={{
        fontFamily: "Urbanist, sans-serif",
        paddingRight: "0px",
        // marginTop: "20px",
      }}
    >
      <Row className={`${styles.rowContainer}`}>
        <Col md={{ span: 9, offset: 3 }} className={` ${styles.colContainer} pt-[6.5rem]`}>

          {/* ✅ Mobile & Tablet Profile Image with Change Photo */}
          {isMobileOrTablet && (
            <div
              className="d-flex justify-content-end align-items-end mb-1 px-2"
              style={{ marginTop: "-50px",paddingLeft:"0px" }}
            >
              <div
                className="rounded-circle border d-flex align-items-center justify-content-center"
                style={{ width: 72, height: 72 }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  {/* Profile Image */}
                  <img
                    src={profileImage}
                    alt="Profile Icon"
                    width={72}
                    height={72}
                    style={{ display: "block", objectFit: "cover" }}
                  />

                  {/* Change Photo Overlay */}
                  <div
                    onClick={handleImageClick}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "50%",
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      color: "#fff",
                      fontWeight: "500",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Change photo
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ✅ Desktop Save button - hide on mobile/tablet */}
          {!isMobileOrTablet && (
            <div className="d-flex justify-content-end mb-3">
              <Button
                className="rounded-pill px-4"
                style={{
                  backgroundColor: "#00A99D",
                  border: "none",
                  height: "37px",
                }}
              >
                Save Changes
              </Button>
            </div>
          )}

          {/* ✅ Form starts */}
          <Form>
            <div className="d-flex flex-md-row align-items-md-center mb-4" style={{ paddingleft: "40px" }}>
              {/* Desktop profile image - hide on mobile/tablet */}
              {!isMobileOrTablet && (
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle border d-flex align-items-center justify-content-center"
                    style={{
                      width: 88,
                      height: 80,
                      backgroundColor: "#F8F8F8",
                      overflow: "hidden",
                      cursor: "pointer"
                    }}
                    onClick={handleImageClick}
                  >
                    <img
                      src={profileImage}
                      alt="User Icon"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </div>
              )}

              <div className="ms-md-4 w-100 mt-3 mt-md-0">
                <Row>
                  <Col xs={8} md={4} className="mb-3">
                    <Form.Label className="mb-1">Full Name</Form.Label>
                    <Form.Control
                      className="rounded-pill"
                      style={{ height: "48px" }}
                      ref={refs[0]}
                      onKeyDown={(e) => handleEnterKey(e, 0)}
                    />
                  </Col>
                  <Col xs={4} md={4} className="mb-3">
                    <Form.Label className="mb-1">Age</Form.Label>
                    <Form.Control
                      className="rounded-pill"
                      style={{ height: "48px" }}
                      ref={refs[1]}
                      onKeyDown={(e) => handleEnterKey(e, 1)}
                    />
                  </Col>
                  <Col xs={12} md={4} className="mb-3">
                    <Form.Label className="mb-1">Gender</Form.Label>
                    <div
                      className="d-flex rounded-pill border overflow-hidden w-100"
                      style={{ height: "48px" }}
                    >
                      {["Male", "Female", "Intersex"].map((g) => (
                        <Button
                          key={g}
                          variant="light"
                          onClick={() => setGender(g)}
                          style={{
                            backgroundColor: gender === g ? "#00A99D" : "white",
                            color: gender === g ? "white" : "#252525",
                            border: "none",
                            flex: 1,
                            fontWeight: "500",
                            borderRadius: "28px",
                          }}
                        >
                          {g}
                        </Button>
                      ))}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            {/* More form fields */}
            <Row className="mb-4">
              <Col xs={12} md={4} className="mb-3">
                <Form.Label className="mb-1">Phone Number</Form.Label>
                <Form.Control
                  placeholder="+91"
                  className="rounded-pill"
                  style={{ height: "48px" }}
                  ref={refs[2]}
                  onKeyDown={(e) => handleEnterKey(e, 2)}
                />
              </Col>
              <Col xs={12} md={4} className="mb-3">
                <Form.Label className="mb-1">Aadhaar Number</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  style={{ height: "48px" }}
                  ref={refs[3]}
                  onKeyDown={(e) => handleEnterKey(e, 3)}
                />
              </Col>
              <Col xs={12} md={4} className="mb-3">
                <Form.Label className="mb-1">Address</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  style={{ height: "48px" }}
                  ref={refs[4]}
                  onKeyDown={(e) => handleEnterKey(e, 4)}
                />
              </Col>
            </Row>

            <Row className="mb-4">
              <Col xs={12} md={4} className="mb-3">
                <Form.Label className="mb-1">Language Preferred</Form.Label>
                <Form.Select
                  className="rounded-pill"
                  style={{ height: "48px" }}
                  ref={refs[5]}
                  onKeyDown={(e) => handleEnterKey(e, 5)}
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Telugu</option>
                </Form.Select>
              </Col>
            </Row>

            <h5 className="mb-3 mt-4">Personal Information</h5>
            <Row className="mb-4">
              <Col xs={6} md={4} className="mb-3">
                <Form.Label className="mb-1">Height</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  style={{ height: "48px" }}
                  ref={refs[6]}
                  onKeyDown={(e) => handleEnterKey(e, 6)}
                />
              </Col>
              <Col xs={6} md={4} className="mb-3">
                <Form.Label className="mb-1">Weight</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  style={{ height: "48px" }}
                  ref={refs[7]}
                  onKeyDown={(e) => handleEnterKey(e, 7)}
                />
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label className="mb-1">Existing Health Conditions</Form.Label>
              <Form.Control
                className="rounded-pill"
                placeholder="e.g. BP, measles, influenza"
                style={{ width: "100%", maxWidth: "470px", height: "48px" }}
                ref={refs[8]}
                onKeyDown={(e) => handleEnterKey(e, 8)}
              />
              <div className={` ${styles.healthtagsContainer} d-flex gap-2 mt-3 flex-wrap justify-content-start`}>
                {healthTags.map((tag, index) => (
                  <Badge
                    key={index}
                    bg="none"
                    text="dark"
                    className="rounded-pill px-3 py-3 border"
                    style={{
                      minWidth: "110px",
                      height: "48px",
                      fontWeight: 400,
                      fontSize: "16px",
                      backgroundColor: "#F0F0F0",
                    }}
                  >
                    {tag} <span style={{ cursor: "pointer", marginLeft: 8 }}>X</span>
                  </Badge>
                ))}
              </div>
            </Form.Group>

            {/* Mobile/Tablet Save Button */}
            {isMobileOrTablet && (
              <div className="text-center mt-4">
                <Button
                  className={`${styles.btnIcon} rounded-pill px-3`}
                  style={{
                    backgroundColor: "#00A99D",
                    border: "none",
                    height: "58px",
                    width: "347px",
                  }}
                >
                  Save Changes
                </Button>
              </div>
            )}
          </Form>
          
        </Col>
      </Row>
    </Container>
  );
}
