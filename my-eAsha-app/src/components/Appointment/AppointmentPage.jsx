import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { BsFillTelephoneFill, BsChatDots } from "react-icons/bs";
import Profile from "../../assets/confirmappointmenticons/doctor.jpg"
import Call from "../../assets/confirmappointmenticons/call.svg"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calender from "../../assets/calendar.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import '../../components/Appointment/AppointmentPage.css';
import AddMemberForm from "../addmemberform/AddMemberForm";
// const AppointmentPage = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [selectedSlot, setSelectedSlot] = useState("09:30 am");
//   const datePickerRef = useRef(null);
//   const [showAddMember, setShowAddMember] = useState(false);
//   const navigate = useNavigate();
// const scrollTargetRef = useRef(null); // 👈 this will mark where we scroll to

// const handleCalendarClick = () => {
//   datePickerRef.current.setOpen(true);

//   // Force scroll down by 150px (adjust as needed)
//   setTimeout(() => {
//     window.scrollTo({
//       top: window.scrollY + 50,
//       behavior: 'smooth',
//     });
//   }, 100);
// };


//   const timeSlots = [
//     "08:30 am",
//     "09:30 am",
//     "10:00 am",
//     "10:30 am",
//     "11:00 am",
//     "11:30 am",
//     "12:30 pm",
//   ];
  

//   return (
//     <Container
//       fluid
//       className="p-4"
//       style={{ fontFamily: "Urbanist, sans-serif"}}
//     >
//       <Row className="align-items-start">
//         {/* Left Column - Doctor Info */}
//         <Col lg={4} className="pe-lg-5 mb-4 mb-lg-0" style={{width:'566px'}}>
//           <div
//             className="text-start"
//             style={{
//               padding: "0 16px 0 16px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "24px",
//               marginTop:"80px",
//               marginLeft:"40px"
//             }}
//           >
//             <Link
//             to="/category/cardiologist"
//               className="text-decoration-none"
//               style={{
//                 color: "#00A99D",
//                 fontWeight: "500",
//                 top: "120",
//                 height: "22",
//                 width: "88",
//               }}
//             >
//               ← Doctors
//             </Link>

//             <div className="mb-3">
//               <div className="d-flex justify-content-center mb-3">
//                 <img
//                   src={Profile}
//                   alt="Doctor"
//                   className="rounded-circle"
//                   height={100}
//                 />
//               </div>
//               <h5 className="mt-3 mb-0 fw-bold">
//                 Dr. Nithish Jagannatham{" "}
//                 <small className="fw-normal">MD, MBBS</small>
//               </h5>
//               <p className="text-muted mb-0">♡ Cardiologist</p>
//               <div className="d-flex align-items-center gap-1 text-muted">
//                 <span style={{ color: "#FDCB02", fontSize: "16px" }}>★</span>
//                 <span>4.2 / 5</span>
//               </div>
//             </div>

//             <div className="d-flex justify-content-between mb-3">
//               <Button
//                 variant="outline"
//                 className="w-100 me-2"
//                 style={{
//                   backgroundColor: "#EDFFFE",
//                   color: "#00A99D",
//                   borderRadius: "28px",
//                   height: "72px",
//                   width: "272px",
//                 }}
//               >
//                 <BsFillTelephoneFill /> Call
//               </Button>
//               {/* <Button
//                 variant="outline"
//                 className="w-100 ms-2"
//                 style={{
//                   backgroundColor: "#EDFFFE",
//                   color: "#00A99D",
//                   borderRadius: "28px",
//                   height: "72px",
//                   width: "272px",
//                 }}
//               >
//                 <BsChatDots /> Book Slot
//               </Button> */}
//             </div>

//             <div>
//               <h6 className="fw-medium">About</h6>
//               <p className="text-muted small">
//                 Dr. Hayes is a board-certified cardiologist with over 15 years
//                 of experience in diagnosing and treating heart conditions.
//               </p>

//               <h6 className="fw-medium">Languages</h6>
//               <p className="text-muted small">English, Hindi, Telugu</p>

//               <h6 className="fw-medium">Areas of Expertise</h6>
//               <div className="d-flex flex-wrap gap-2">
//                 {["General", "Cardiology", "Heart Failure", "Arrhythmias"].map(
//                   (item) => (
//                     <span
//                       key={item}
//                       className="badge bg-light text-dark  rounded-pill"
//                       style={{
//                         width: "81px",
//                         height: "37px",
//                         fontWeight: 400,
//                         paddingTop: "10px",
//                       }}
//                     >
//                       {item}
//                     </span>
//                   )
//                 )}
//               </div>

//               <h6 className="fw-medium mt-3">Certifications</h6>
//               <p className="text-muted small">Board Certified in Cardiology</p>

//               <h6 className="fw-medium">Education & Training</h6>
//               <p className="text-muted small mb-1">
//                 Medical School: University of California, Los Angeles
//               </p>
//               <p className="text-muted small">Residency: City Hospital</p>
//             </div>

//             <div>
//               <h6 className="fw-medium mt-3 mb-2">Reviews</h6>
//               {[1, 2, 3].map((_, index) => (
//                 <div key={index} className="border-bottom pb-3 mb-3">
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="d-flex align-items-center gap-2">
//                       <img
//                         src={`https://i.pravatar.cc/30?img=${index + 1}`}
//                         alt="avatar"
//                         className="rounded-circle"
//                         width={30}
//                         height={30}
//                       />
//                       <strong className="small">Radha Andhira</strong>
//                     </div>
//                     <small className="text-muted">9 October 2024</small>
//                   </div>
//                   <div className="d-flex gap-1 mt-1 mb-1 text-warning small">
//                     {"★".repeat(3)}
//                     {"☆"}
//                   </div>
//                   <p className="text-muted small mb-0">
//                     I was very satisfied with my consultation. The doctor
//                     explained everything clearly and offered effective treatment
//                     recommendations.
//                   </p>
//                   <a
//                     href="#"
//                     className="text-decoration-none small "
//                     style={{ color: "#00A99D" }}
//                   >
//                     See More
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Col>

//         {/* Right Column - Booking */}
//         <Col lg={8}>
//           <div
//             className="mx-auto"
//             style={{
//               maxWidth: 600,
//               height: 604.5,
//               position: "fixed",
//               gap: "24px",
//               left: "702px",
//               top: "158px", //given 158px
//             }}
//           >
//             <h5 className="fw-medium mb-3">Book Appointment</h5>

//             <div className="mb-3">
//               {[1, 2].map((_, idx) => (
//                 <div
//                   key={idx}
//                   className="d-flex justify-content-between align-items-center p-3 rounded-pill mb-3 border"
//                 >
//                   <div>
//                     <div className="fw-medium">Manoj malhotrea</div>
//                     <div className="text-muted small">
//                       Age - 21 | Sex - Male
//                     </div>
//                   </div>
//                   <Form.Check
//                     type="radio"
//                     name="patient"
//                     defaultChecked={idx === 5}
//                     style={{ borderColor: "#00A99D" }}
//                   />
//                 </div>
//               ))}
//               <a href="#" onClick={(e)=>{
//                    e.preventDefault();
//                    setShowAddMember(true);}}
//                     style={{ color: "#00A99D", fontSize: "0.9rem" }}>
//                 Add dependent
//               </a>
//             </div>

//             <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
//               <div className="d-flex gap-3">
//                 {[...Array(7)].map((_, i) => {
//                   const isWednesday = i === 2;
//                   return (
//                     <div
//                       key={i}
//                       className="text-center rounded"
//                       style={{
//                         width: 40,
//                         backgroundColor: isWednesday
//                           ? "#00A99D"
//                           : "transparent",
//                         color: isWednesday ? "#fff" : "#000",
//                         padding: "6px 5px",
//                       }}
//                     >
//                       <div>
//                         {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
//                       </div>
//                       <div>{i + 1}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//               <div className="d-flex flex-column align-items-center gap-0 text-muted  mt-2 mt-sm-0">
//                 <img
//                   src={Calender}
//                   alt="calendar"
//                   style={{ width: 32, height: 32, cursor: "pointer" }}
//                     onClick={handleCalendarClick}

//                 />
//                 <div
//                   style={{
//                     fontSize: "14px",
//                     fontWeight: 500,
//                     color: "#252525",
//                     top:457,
                    
//                   }}
//                 >
//                   {startDate.toLocaleDateString("en-GB", {
//                     day: "numeric",
//                     month: "long",
//                     year: "numeric",
//                   })}
//                 </div>

//                 <DatePicker
//                   ref={datePickerRef}
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   minDate={new Date()}
//                   popperPlacement="bottom-start"
//                   popperClassName="custom-datepicker-popper"
//                   calendarClassName="calendar-wrapper"
//                   showPopperArrow={false}
//                   customInput={
//                     <div
//                       style={{
//                         cursor: "pointer",
//                         color: "#333",
//                         minWidth: 100,
//                         display: "none",
//                       }}
//                       onClick={handleCalendarClick}

//                     >
//                       {startDate.toLocaleDateString("en-US", {
//                         month: "long",
//                         year: "numeric",
//                       })}
//                     </div>
//                   }
//                 />
//               </div>
//             </div>

//             <div className="d-flex flex-wrap gap-3 mb-3">
//               {timeSlots.map((slot) => (
//                 <div
//                   key={slot}
//                   className="px-3 py-2 rounded-pill"
//                   style={{
//                     backgroundColor:
//                       selectedSlot === slot ? "#00A99D" : "#F0F0F0",
//                     color: selectedSlot === slot ? "white" : "black",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => setSelectedSlot(slot)}
//                 >
//                   {slot}
//                 </div>
//               ))}
//             </div>

//             <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 mb-3">
//               <div
//                 className="d-flex align-items-center gap-2 px-3 py-2 border rounded-pill w-100"
//                 style={{ color: "#00A99D", border: "1px solid #00A99D" }}
//               >
//                 <span>
//                   {startDate.toLocaleDateString("en-GB", {
//                     day: "numeric",
//                     month: "long",
//                     year: "numeric",
//                   })}
//                 </span>
//                 <div
//                   style={{ width: 1, height: 20, backgroundColor: "#00A99D" }}
//                 ></div>
//                 <span>{selectedSlot}</span>
//               </div>

//               <Button
//                 style={{
//                   backgroundColor: "#00A99D",
//                   borderColor: "#00A99D",
//                   borderRadius: 999,
//                   padding: "6px 16px",
//                   minWidth: 102,
//                 }}
//                 onClick={() => navigate("/category/confirmappointment")}
//               >
//                 Book slot
//               </Button>
//             </div>
//           </div>
//           <div ref={scrollTargetRef} style={{ height: "100px" }}></div>

//         </Col>
//       </Row>
//       {showAddMember && (
//   <>
//     {/* Black backdrop */}
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         zIndex: 1000,
//       }}
//     ></div>
//      {/* AddMemberForm overlay */}
//     <div
//       style={{
//         position: "fixed",
//         top: 50,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: 1001,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <AddMemberForm onClose={() => setShowAddMember(false)} />
//     </div>
//   </>
// )}

//     </Container>
//   );
// };

// export default AppointmentPage;


// import React, { useState, useRef,useEffect } from "react";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";
// import { BsFillTelephoneFill, BsChatDots } from "react-icons/bs";
// import Profile from "../../assets/doctor.jpg"
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Calender from "../../assets/calendar.svg";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import './AppointmentPage.css';
// import Call from "../../assets/call.svg";
// import AddMemberForm from "./AddMemberForm.jsx";
// const AppointmentPage = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [selectedSlot, setSelectedSlot] = useState("09:30 am");
//   const datePickerRef = useRef(null);
//   const [showAddMember, setShowAddMember] = useState(false);
//   const navigate = useNavigate();
// const scrollTargetRef = useRef(null); 

// const handleCalendarClick = () => {
//   datePickerRef.current.setOpen(true);

//   // Force scroll down by 150px (adjust as needed)
//   setTimeout(() => {
//     window.scrollTo({
//       top: window.scrollY + 50,
//       behavior: 'smooth',
//     });
//   }, 100);
// };


//   const timeSlots = [
//     "08:30 am",
//     "09:30 am",
//     "10:00 am",
//     "10:30 am",
//     "11:00 am",
//     "11:30 am",
//     "12:30 pm",
//   ];

//    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

  

//   return (
//     <Container
//       fluid
//       className="p-4 doctor-details-container main-container"
//       style={{ fontFamily: "Urbanist, sans-serif"}}
//     >
//       <Row className="align-items-start doctor-info">
//         {/* Left Column - Doctor Info */}
//         <Col xs={12} lg={4} className="pe-lg-5 mb-4 mb-lg-0 doctor-details" >
//           <div
//             className="text-start"
//             style={{
//               padding: "0 16px 0 16px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "24px",
//               marginTop:"80px",
//               marginLeft:"40px"
//             }}
//           >
//             <Link
//             to="/category/cardiologist"
//               className="text-decoration-none"
//               style={{
//                 color: "#00A99D",
//                 fontWeight: "500",
//                 top: "120",
//                 height: "22",
//                 width: "88",
//               }}
//             >
//               ← Doctors
//             </Link>

//             <div className="mb-3 doctor-img-data">
//               <div className="d-flex justify-content-center mb-3">
//                 <img
//                   src={Profile}
//                   alt="Doctor"
//                   className="rounded-circle appointment-image"
//                   height={100}
//                 />
//               </div>
//               <div className="doctor-data">
//               <h5 className="mt-3 mb-0 fw-bold">
//                 Dr. Nithish Jagannatham{" "}
//                 <small className="fw-normal">MD, MBBS</small>
//               </h5>
//               <p className="text-muted mb-0">♡ Cardiologist</p>
//               <div className="d-flex align-items-center gap-1 text-muted">
//                 <span style={{ color: "#FDCB02", fontSize: "16px" }}>★</span>
//                 <span>4.2 / 5</span>
//               </div></div>
//             </div>

//             <div className="d-flex justify-content-between mb-3 button-group-mobile">
//               <Button
//                 variant="outline"
//                 className="w-100 me-2 call-btn"
//                 style={{
//                   backgroundColor: "#EDFFFE",
//                   color: "#00A99D",
//                   borderRadius: "28px",
//                   height: "72px",
//                   width: "272px",
//                   display: "flex",
//                     alignItems: "center",   
//                     justifyContent: "center",
//                     gap:'10px'
//                 }}
//               >
//                 <img src={Call} className="align-items-center" /> Call
//               </Button>

// <button
//   className="message-btn"
//   onClick={() => {
//     if (isMobile && scrollTargetRef.current) {
//       scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }}
// >
//   Book Appointment
// </button>
//               {/* <Button
//                 variant="outline"
//                 className="w-100 ms-2"
//                 style={{
//                   backgroundColor: "#EDFFFE",
//                   color: "#00A99D",
//                   borderRadius: "28px",
//                   height: "72px",
//                   width: "272px",
//                 }}
//               >
//                 <BsChatDots /> Book Slot
//               </Button> */}
//             </div>

//             <div className="heading">
//               <h6 className="fw-medium">About</h6>
//               <p className="text-muted small">
//                 Dr. Hayes is a board-certified cardiologist with over 15 years
//                 of experience in diagnosing and treating heart conditions.
//               </p>

//               <h6 className="fw-medium">Languages</h6>
//               <p className="text-muted small">English, Hindi, Telugu</p>

//               <h6 className="fw-medium">Areas of Expertise</h6>
//               <div className="d-flex flex-wrap gap-2">
//                 {["General", "Cardiology", "Heart Failure", "Arrhythmias"].map(
//                   (item) => (
//                     <span
//                       key={item}
//                       className="badge bg-light text-dark  rounded-pill"
//                       style={{
//                         width: "81px",
//                         height: "37px",
//                         fontWeight: 400,
//                         paddingTop: "10px",
//                       }}
//                     >
//                       {item}
//                     </span>
//                   )
//                 )}
//               </div>

//               <h6 className="fw-medium mt-3">Certifications</h6>
//               <p className="text-muted small">Board Certified in Cardiology</p>

//               <h6 className="fw-medium">Education & Training</h6>
//               <p className="text-muted small mb-1">
//                 Medical School: University of California, Los Angeles
//               </p>
//               <p className="text-muted small">Residency: City Hospital</p>
//             </div>

//             <div className="heading-reviews">
//               <h6 className="fw-medium mt-3 mb-2">Reviews</h6>
//               {[1, 2, 3].map((_, index) => (
//                 <div key={index} className="border-bottom pb-3 mb-3">
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="d-flex align-items-center gap-2">
//                       <img
//                         // src={https://i.pravatar.cc/30?img=${index + 1}}
//                         alt="avatar"
//                         className="rounded-circle"
//                         width={30}
//                         height={30}
//                       />
//                       <strong className="small">Radha Andhira</strong>
//                     </div>
//                     <small className="text-muted">9 October 2024</small>
//                   </div>
//                   <div className="d-flex gap-1 mt-1 mb-1 text-warning small">
//                     {"★".repeat(3)}
//                     {"☆"}
//                   </div>
//                   <p className="text-muted small mb-0">
//                     I was very satisfied with my consultation. The doctor
//                     explained everything clearly and offered effective treatment
//                     recommendations.
//                   </p>
//                   <a
//                     href="#"
//                     className="text-decoration-none small "
//                     style={{ color: "#00A99D" }}
//                   >
//                     See More
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Col>

//         {/* Right Column - Booking */}
//         <Col xs={12} lg={8} className="appointment-section" >
//           <div
//               ref={scrollTargetRef}
//             className="mx-auto appointment-div"
//             style={{
//               maxWidth: isMobile ? "100%" : "600px",
//               height: 604.5,
//         position: isMobile ? "static" : "fixed",
//               gap: "24px",
//               left: isMobile ? "auto" : "702px",
//         top: isMobile ? "auto" : "158px",
//             }}
//           >
//             <h5 className="fw-medium mb-3">Book Appointment</h5>

//             <div className="mb-3">
//               {[1, 2].map((_, idx) => (
//                 <div
//                   key={idx}
//                   className="d-flex justify-content-between align-items-center p-3 rounded-pill mb-3 border dependent"
//                 >
//                   <div >
//                     <div className="fw-medium">Manoj malhotrea</div>
//                     <div className="text-muted small">
//                       Age - 21 | Sex - Male
//                     </div>
//                   </div>
//                   <Form.Check
//                     type="radio"
//                     name="patient"
//                     defaultChecked={isMobile ? idx === 2 : idx === 5}
//                     style={{ borderColor: "#00A99D" }}
//                   />
//                 </div>
//               ))}
//               <a href="#" onClick={(e)=>{
//                    e.preventDefault();
//                    setShowAddMember(true);}}
//                     style={{ color: "#00A99D", fontSize: "0.9rem" }}>
//                 Add dependent
//               </a>
//             </div>

// <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap calendar-days-container">
//   {isMobile ? (
//     <>

//       <div className="d-flex flex-column align-items-center gap-0 text-muted mt-0 ">
//         <img
//           src={Calender}
//           alt="calendar"
//           style={{ width: 18, height: 18, cursor: "pointer" }}
//           onClick={handleCalendarClick}
//         />
//         <div
//           style={{
//             fontSize: "14px",
//             fontWeight: 500,
//             color: "#252525",
//           }}
//         >
//           {startDate.toLocaleDateString("en-GB", {
//             day: "numeric",
//             month: "long",
//             year: "numeric",
//           })}
//         </div>

//         <DatePicker
//           ref={datePickerRef}
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           minDate={new Date()}
//           popperPlacement="bottom-start"
//           popperClassName="custom-datepicker-popper"
//           calendarClassName="calendar-wrapper"
//           showPopperArrow={false}
//           customInput={
//             <div
//               style={{
//                 cursor: "pointer",
//                 color: "#333",
//                 minWidth: 100,
//                 display: "none",
//               }}
//               onClick={handleCalendarClick}
//             >
//               {startDate.toLocaleDateString("en-US", {
//                 month: "long",
//                 year: "numeric",
//               })}
//             </div>
//           }
//         />
//       </div>

//       <div className="d-flex gap-1.5">
//         {[...Array(7)].map((_, i) => {
//           const isWednesday = i === 2;
//           return (
//             <div
//               key={i}
//               className="text-center rounded"
//               style={{
//                 width: 40,
//                 backgroundColor: isWednesday ? "#00A99D" : "transparent",
//                 color: isWednesday ? "#fff" : "#000",
//                 padding: "6px 0px",
//               }}
//             >
//               <div>
//                 {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
//               </div>
//               <div>{i + 1}</div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   ) : (
//     <>
//       <div className="d-flex gap-3">
//         {[...Array(7)].map((_, i) => {
//           const isWednesday = i === 2;
//           return (
//             <div
//               key={i}
//               className="text-center rounded"
//               style={{
//                 width: 40,
//                 backgroundColor: isWednesday ? "#00A99D" : "transparent",
//                 color: isWednesday ? "#fff" : "#000",
//                 padding: "6px 5px",
//               }}
//             >
//               <div>
//                 {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
//               </div>
//               <div>{i + 1}</div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="d-flex flex-column align-items-center gap-0 text-muted mt-2 mt-sm-0">
//         <img
//           src={Calender}
//           alt="calendar"
//           style={{ width: 32, height: 32, cursor: "pointer" }}
//           onClick={handleCalendarClick}
//         />
//         <div
//           style={{
//             fontSize: "14px",
//             fontWeight: 500,
//             color: "#252525",
//           }}
//         >
//           {startDate.toLocaleDateString("en-GB", {
//             day: "numeric",
//             month: "long",
//             year: "numeric",
//           })}
//         </div>

//         <DatePicker
//           ref={datePickerRef}
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           minDate={new Date()}
//           popperPlacement="bottom-start"
//           popperClassName="custom-datepicker-popper"
//           calendarClassName="calendar-wrapper"
//           showPopperArrow={false}
//           customInput={
//             <div
//               style={{
//                 cursor: "pointer",
//                 color: "#333",
//                 minWidth: 100,
//                 display: "none",
//               }}
//               onClick={handleCalendarClick}
//             >
//               {startDate.toLocaleDateString("en-US", {
//                 month: "long",
//                 year: "numeric",
//               })}
//             </div>
//           }
//         />
//       </div>
//     </>
//   )}
// </div>

//             <div className="d-flex flex-wrap gap-3 mb-3 slot-section">
//               {timeSlots.map((slot) => (
//                 <div
//                   key={slot}
//                   className="px-3 py-2 rounded-pill slot-time"
//                   style={{
//                     backgroundColor:
//                       selectedSlot === slot ? "#00A99D" : "#F0F0F0",
//                     color: selectedSlot === slot ? "white" : "black",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => setSelectedSlot(slot)}
//                 >
//                   {slot}
//                 </div>
//               ))}
//             </div>

//             <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 mb-3 book-button">
//               <div
//                 className="d-flex align-items-center gap-2 px-3 py-2 border rounded-pill w-100 book-time"
//                 style={{ color: "#00A99D", border: "1px solid #00A99D" }}
//               >
//                 <span>
//                   {startDate.toLocaleDateString("en-GB", {
//                     day: "numeric",
//                     month: "long",
//                     year: "numeric",
//                   })}
//                 </span>
//                 <div
//                   style={{ width: 1, height: 20, backgroundColor: "#00A99D" }}
//                 ></div>
//                 <span>{selectedSlot}</span>
//               </div>

//               <Button
//                 style={{
//                   backgroundColor: "#00A99D",
//                   borderColor: "#00A99D",
//                   borderRadius: 999,
//                   padding: "6px 16px",
//                   minWidth: 102,
//                 }}
//                 onClick={() => navigate("/category/confirmappointment")}
//               >
//                 Book slot
//               </Button>
//             </div>
//           </div>
//           <div ref={scrollTargetRef} style={{ height: "100px" }}></div>

//         </Col>
//       </Row>
//       {showAddMember && (
//   <>
//     {/* Black backdrop */}
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         zIndex: 1000,
//       }}
//     ></div>
//      {/* AddMemberForm overlay */}
//     <div
//       style={{
//         position: "fixed",
//         top: 50,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: 1001,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <AddMemberForm onClose={() => setShowAddMember(false)} />
//     </div>
//   </>
// )}

//     </Container>
//   );
// };

// export default AppointmentPage;

// import React, { useState, useRef,useEffect } from "react";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";
// import { BsFillTelephoneFill, BsChatDots } from "react-icons/bs";
// import Profile from "../../assets/doctor.jpg"
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Calender from "../../assets/calendar.svg";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import './AppointmentPage.css';
// import Call from "../../assets/call.svg";
// import AddMemberForm from "./AddMemberForm.jsx";
// const AppointmentPage = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [selectedSlot, setSelectedSlot] = useState("09:30 am");
//   const datePickerRef = useRef(null);
//   const [showAddMember, setShowAddMember] = useState(false);
//   const navigate = useNavigate();
//   const [selectedDateIndex, setSelectedDateIndex] = useState(null);

// const scrollTargetRef = useRef(null); 

// const handleCalendarClick = () => {
//   datePickerRef.current.setOpen(true);

//   // Force scroll down by 150px (adjust as needed)
//   setTimeout(() => {
//     window.scrollTo({
//       top: window.scrollY + 50,
//       behavior: 'smooth',
//     });
//   }, 100);
// };


//   const timeSlots = [
//     "08:30 am",
//     "09:30 am",
//     "10:00 am",
//     "10:30 am",
//     "11:00 am",
//     "11:30 am",
//     "12:30 pm",
//   ];

//    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

  

//   return (
//     <Container
//       fluid
//       className="p-4 doctor-details-container main-container"
//       style={{ fontFamily: "Urbanist, sans-serif"}}
//     >
//       <Row className="align-items-start doctor-info">
//         {/* Left Column - Doctor Info */}
//         <Col xs={12} lg={4} className="pe-lg-5 mb-4 mb-lg-0 doctor-details" >
//           <div
//             className="text-start"
//             style={{
//               padding: "0 16px 0 16px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "24px",
//               marginTop:"80px",
//               marginLeft:"40px"
//             }}
//           >
//             <Link
//             to="/category/cardiologist"
//               className="text-decoration-none"
//               style={{
//                 color: "#00A99D",
//                 fontWeight: "500",
//                 top: "120",
//                 height: "22",
//                 width: "88",
//               }}
//             >
//               ← Doctors
//             </Link>

//             <div className="mb-3 doctor-img-data">
//               <div className="d-flex justify-content-center mb-3">
//                 <img
//                   src={Profile}
//                   alt="Doctor"
//                   className="rounded-circle appointment-image"
//                   height={100}
//                 />
//               </div>
//               <div className="doctor-data">
//               <h5 className="mt-3 mb-0 fw-bold">
//                 Dr. Nithish Jagannatham{" "}
//                 <small className="fw-normal">MD, MBBS</small>
//               </h5>
//               <p className="text-muted mb-0">♡ Cardiologist</p>
//               <div className="d-flex align-items-center gap-1 text-muted">
//                 <span style={{ color: "#FDCB02", fontSize: "16px" }}>★</span>
//                 <span>4.2 / 5</span>
//               </div></div>
//             </div>

//             <div className="d-flex justify-content-between mb-3 button-group-mobile">
//               <Button
//                 variant="outline"
//                 className="w-100 me-2 call-btn"
//                 style={{
//                   backgroundColor: "#EDFFFE",
//                   color: "#00A99D",
//                   borderRadius: "28px",
//                   height: "72px",
//                   width: "272px",
//                   display: "flex",
//                     alignItems: "center",   
//                     justifyContent: "center",
//                     gap:'10px'
//                 }}
//               >
//                 <img src={Call} className="align-items-center" /> Call
//               </Button>

// <button
//   className="message-btn"
//   onClick={() => {
//     if (isMobile && scrollTargetRef.current) {
//       scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }}
// >
//   Book Appointment
// </button>
//               {/* <Button
//                 variant="outline"
//                 className="w-100 ms-2"
//                 style={{
//                   backgroundColor: "#EDFFFE",
//                   color: "#00A99D",
//                   borderRadius: "28px",
//                   height: "72px",
//                   width: "272px",
//                 }}
//               >
//                 <BsChatDots /> Book Slot
//               </Button> */}
//             </div>

//             <div className="heading">
//               <h6 className="fw-medium">About</h6>
//               <p className="text-muted small">
//                 Dr. Hayes is a board-certified cardiologist with over 15 years
//                 of experience in diagnosing and treating heart conditions.
//               </p>

//               <h6 className="fw-medium">Languages</h6>
//               <p className="text-muted small">English, Hindi, Telugu</p>

//               <h6 className="fw-medium">Areas of Expertise</h6>
//               <div className="d-flex flex-wrap gap-2">
//                 {["General", "Cardiology", "Heart Failure", "Arrhythmias"].map(
//                   (item) => (
//                     <span
//                       key={item}
//                       className="badge bg-light text-dark  rounded-pill"
//                       style={{
//                         width: "81px",
//                         height: "37px",
//                         fontWeight: 400,
//                         paddingTop: "10px",
//                       }}
//                     >
//                       {item}
//                     </span>
//                   )
//                 )}
//               </div>

//               <h6 className="fw-medium mt-3">Certifications</h6>
//               <p className="text-muted small">Board Certified in Cardiology</p>

//               <h6 className="fw-medium">Education & Training</h6>
//               <p className="text-muted small mb-1">
//                 Medical School: University of California, Los Angeles
//               </p>
//               <p className="text-muted small">Residency: City Hospital</p>
//             </div>

//             <div className="heading-reviews">
//               <h6 className="fw-medium mt-3 mb-2">Reviews</h6>
//               <div className="review-Container pl-0 pb-2 d-flex gap-2 justify-content-between">
//                      <input type="text" placeholder="Write review" className="border rounded-5 p-2 w-100 outline-none outline-[#8E8E8E]"/>
//                      <button className="btn border rounded-5 bg-[#8E8E8E] pl-2" style={{backgroundColor:'#8E8E8E', color:"white"}}>Post</button>
//               </div>
//               {[1, 2, 3].map((_, index) => (
//                 <div key={index} className="border-bottom pb-3 mb-3">
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="d-flex align-items-center gap-2">
//                       <img
//                         src={`https://i.pravatar.cc/30?img=${index + 1}`}
//                         alt="avatar"
//                         className="rounded-circle"
//                         width={30}
//                         height={30}
//                       />
//                       <strong className="small">Radha Andhira</strong>
//                     </div>
//                     <small className="text-muted">9 October 2024</small>
//                   </div>
//                   <div className="d-flex gap-1 mt-1 mb-1 text-warning small">
//                     {"★".repeat(3)}
//                     {"☆"}
//                   </div>
//                   <p className="text-muted small mb-0">
//                     I was very satisfied with my consultation. The doctor
//                     explained everything clearly and offered effective treatment
//                     recommendations.
//                   </p>
//                   <a
//                     href="#"
//                     className="text-decoration-none small "
//                     style={{ color: "#00A99D" }}
//                   >
//                     See More
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Col>

//         {/* Right Column - Booking */}
//         <Col xs={12} lg={8} className="appointment-section" >
//           <div
//               ref={scrollTargetRef}
//             className="appointment-div  mx-auto "
//             style={{
//               maxWidth: isMobile ? "100%" : "600px",
//               height: 604.5,
//         position: isMobile ? "static" : "fixed",
//               gap: "24px",
//               // left: isMobile ? "auto" : "502px",
//         top: isMobile ? "auto" : "158px",
//             }}
//           >
//             <h5 className="fw-medium mb-3">Book Appointment</h5>

//             <div className="mb-3">
//               {[1, 2].map((_, idx) => (
//                 <div
//                   key={idx}
//                   className="d-flex justify-content-between align-items-center p-3 rounded-pill mb-3 border dependent"
//                 >
//                   <div >
//                     <div className="fw-medium">Manoj malhotrea</div>
//                     <div className="text-muted small">
//                       Age - 21 | Sex - Male
//                     </div>
//                   </div>
//                   <Form.Check
//                     type="radio"
//                     name="patient"
//                     defaultChecked={isMobile ? idx === 2 : idx === 5}
//                     style={{ borderColor: "#00A99D" }}
//                   />
//                 </div>
//               ))}
//               <a href="#" onClick={(e)=>{
//                    e.preventDefault();
//                    setShowAddMember(true);}}
//                     style={{ color: "#00A99D", fontSize: "0.9rem" }}>
//                 Add dependent
//               </a>
//             </div>

// <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap calendar-days-container">
//   {isMobile ? (
//     <>

//       <div className="d-flex flex-column align-items-center gap-0 text-muted mt-0 ">
//         <img
//           src={Calender}
//           alt="calendar"
//           style={{ width: 18, height: 18, cursor: "pointer" }}
//           onClick={handleCalendarClick}
//         />
//         <div
//           style={{
//             fontSize: "14px",
//             fontWeight: 500,
//             color: "#252525",
//           }}
//         >
//           {startDate.toLocaleDateString("en-GB", {
//             day: "numeric",
//             month: "long",
//             year: "numeric",
//           })}
//         </div>

//         <DatePicker
//           ref={datePickerRef}
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           minDate={new Date()}
//           popperPlacement="bottom-start"
//           popperClassName="custom-datepicker-popper"
//           calendarClassName="calendar-wrapper"
//           showPopperArrow={false}
//           customInput={
//             <div
//               style={{
//                 cursor: "pointer",
//                 color: "#333",
//                 minWidth: 100,
//                 display: "none",
//               }}
//               onClick={handleCalendarClick}
//             >
//               {startDate.toLocaleDateString("en-US", {
//                 month: "long",
//                 year: "numeric",
//               })}
//             </div>
//           }
//         />
//       </div>

//       <div className="d-flex gap-1.5">
//         {/* {[...Array(7)].map((_, i) => {
//           const isWednesday = i === 2;
//           return (
//             <div
//               key={i}
//               className="text-center rounded"
//               style={{
//                 width: 40,
//                 backgroundColor: isWednesday ? "#00A99D" : "transparent",
//                 color: isWednesday ? "#fff" : "#000",
//                 padding: "6px 0px",
//               }}
//             >
//               <div>
//                 {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
//               </div>
//               <div>{i + 1}</div>
//             </div>
//           );
//         })} */}
//         {
//           [...Array(7)].map((_, i) => {
//   const isWednesday = i === 2;
//   const isSelected = selectedDateIndex === i;
//   return (
//     <div
//       key={i}
//       className="text-center rounded"
//       style={{
//         width: 40,
//         backgroundColor: isWednesday ? "#00A99D" : "transparent",
//         color: isWednesday ? "#fff" : "#000",
//         padding: "6px 0px",
//       }}
//        onClick={() => {
//   setSelectedDateIndex(i);
//   const newDate = new Date();
//   newDate.setDate(newDate.getDate() + i);
//   setStartDate(newDate);
// }}
//     >
//       <div>
//         {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
//       </div>
//       <div>{i + 1}</div>
//     </div>
//   );
// })

//         }
//       </div>
//     </>
//   ) : (
//     <>
//       <div className="d-flex gap-3">
//         {/* {[...Array(7)].map((_, i) => {
//           const isWednesday = i === 2;
//           return (
//             <div
//               key={i}
//               className="text-center rounded"
//               style={{
//                 width: 40,
//                 backgroundColor: isWednesday ? "#00A99D" : "transparent",
//                 color: isWednesday ? "#fff" : "#000",
//                 padding: "6px 5px",
//               }}
//             >
//               <div>
//                 {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
//               </div>
//               <div>{i + 1}</div>
//             </div>
//           );
//         })} */}
//         {
//           [...Array(7)].map((_, i) => {
            
//   const isSelected = selectedDateIndex === i;
//   return (
//     <div
//       key={i}
//       className="text-center rounded"
//       style={{
//         width: 40,
//         backgroundColor: isSelected ? "#00A99D" : "transparent",
//         color: isSelected ? "#fff" : "#000",
//         padding: "6px 0px",
//         cursor: "pointer"
//       }}
//       onClick={() => setSelectedDateIndex(i)}
//     >
//       <div>
//         {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
//       </div>
//       <div>{i+1}</div>
//     </div>
//   );
// })

//         }
//       </div>

//       <div className="d-flex flex-column align-items-center gap-0 text-muted mt-2 mt-sm-0">
//         <img
//           src={Calender}
//           alt="calendar"
//           style={{ width: 32, height: 32, cursor: "pointer" }}
//           onClick={handleCalendarClick}
//         />
//         <div
//           style={{
//             fontSize: "14px",
//             fontWeight: 500,
//             color: "#252525",
//           }}
//         >
//           {startDate.toLocaleDateString("en-GB", {
//             day: "numeric",
//             month: "long",
//             year: "numeric",
//           })}
//         </div>

//         <DatePicker
//           ref={datePickerRef}
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           minDate={new Date()}
//           popperPlacement="bottom-start"
//           popperClassName="custom-datepicker-popper"
//           calendarClassName="calendar-wrapper"
//           showPopperArrow={false}
//           customInput={
//             <div
//               style={{
//                 cursor: "pointer",
//                 color: "#333",
//                 minWidth: 100,
//                 display: "none",
//               }}
//               onClick={handleCalendarClick}
//             >
//               {startDate.toLocaleDateString("en-US", {
//                 month: "long",
//                 year: "numeric",
//               })}
//             </div>
//           }
//         />
//       </div>
//     </>
//   )}
// </div>

//             <div className="d-flex flex-wrap gap-3 mb-3 slot-section">
//               {timeSlots.map((slot) => (
//                 <div
//                   key={slot}
//                   className="px-3 py-2 rounded-pill slot-time"
//                   style={{
//                     backgroundColor:
//                       selectedSlot === slot ? "#00A99D" : "#F0F0F0",
//                     color: selectedSlot === slot ? "white" : "black",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => setSelectedSlot(slot)}
//                 >
//                   {slot}
//                 </div>
//               ))}
//             </div>

//             <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 mb-3 book-button">
//               <div
//                 className="d-flex align-items-center gap-2 px-3 py-2 border rounded-pill w-100 book-time"
//                 style={{ color: "#00A99D", border: "1px solid #00A99D" }}
//               >
//                 <span>
//                   {startDate.toLocaleDateString("en-GB", {
//                     day: "numeric",
//                     month: "long",
//                     year: "numeric",
//                   })}
//                 </span>
//                 <div
//                   style={{ width: 1, height: 20, backgroundColor: "#00A99D" }}
//                 ></div>
//                 <span>{selectedSlot}</span>
//               </div>

//               <Button
//                 style={{
//                   backgroundColor: "#00A99D",
//                   borderColor: "#00A99D",
//                   borderRadius: 999,
//                   padding: "6px 16px",
//                   minWidth: 102,
//                 }}
//                 onClick={() => navigate("/category/confirmappointment")}
//               >
//                 Book slot
//               </Button>
//             </div>
//           </div>
//           <div ref={scrollTargetRef} style={{ height: "100px" }}></div>

//         </Col>
//       </Row>
//       {showAddMember && (
//   <>
//     {/* Black backdrop */}
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         zIndex: 1000,
//       }}
//     ></div>
//      {/* AddMemberForm overlay */}
//     <div
//       style={{
//         position: "fixed",
//         top: 50,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: 1001,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <AddMemberForm onClose={() => setShowAddMember(false)} />
//     </div>
//   </>
// )}

//     </Container>
//   );
// };


// export default AppointmentPage;


export default function AppointmentPage() {
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });
  const [selectedSlot, setSelectedSlot] = useState("09:30 am");
  const datePickerRef = useRef(null);
  const [showAddMember, setShowAddMember] = useState(false);
  const navigate = useNavigate();
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const scrollTargetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1020);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1020);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const timeSlots = [
    "08:30 am",
    "09:30 am",
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
    "12:30 pm",
  ];

  // Set selected date index from a given date (difference from today)
  const dateToIndex = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    const diff = Math.round((d - today) / 86400000); // days difference
    return diff >= 0 && diff < 7 ? diff : null;
  };

  // Unified handler for when date is chosen (from datepicker or clicks)
  const handleDateChange = (date) => {
    if (!date) return;
    const normalized = new Date(date);
    normalized.setHours(0, 0, 0, 0);
    setStartDate(normalized);
    const idx = dateToIndex(normalized);
    setSelectedDateIndex(idx === null ? null : idx);
  };

  // Open the datepicker and nudge the viewport so the popper sits a little higher
  const handleCalendarClick = () => {
    if (datePickerRef.current) datePickerRef.current.setOpen(true);

    // small delay to let popper calculate position then nudge scroll up
    setTimeout(() => {
      // Scroll up slightly so popup doesn't go off-screen or appear too low
      window.scrollBy({ top: -120, behavior: "smooth" });
    }, 120);
  };

  // Helper to build the 7-day list starting from today
  const buildWeekDays = () => {
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      days.push(d);
    }
    return days;
  };

  const weekDays = buildWeekDays();

  return (
    <Container
      fluid
      className="p-4 doctor-details-container main-container"
      style={{ fontFamily: "Urbanist, sans-serif" }}
    >
      <Row className="doctor-info">
        {/* Left column (kept mostly unchanged) */}
        <Col xs={12} lg={4} className="pe-lg-5 mb-4 mb-lg-0 doctor-details">
          <div
            className="colInsideContainer md:ml-[0%]"
            style={{ padding: "0 16px",width: "100%",  display: "flex", flexDirection: "column", gap: "24px", marginTop: "80px", marginLeft: "40px" }}
          >
            <a href="/category/cardiologist" className="font-normal text-[18px]" style={{ color: "#00A99D", fontWeight: "500" }}>← Doctors</a>

            <div className="mb-3 doctor-img-data w-100 ">
              <div className="d-flex justify-content-center w-100  bottom-2 mb-3">
                <img src={Profile} alt="Doctor" className="rounded-circle appointment-image" height={100} />
              </div>
              <div className="doctor-data d-flex flex-column gap-2">
                <h5 className="mt-3 mb-0 fw-bold text-[22px] ">Dr. Nithish Jagannatham <small className="fw-medium text-[18px]">MD, MBBS</small></h5>
                <p className="text-muted fw-medium text-[18px] mb-0">♡ Cardiologist</p>
                <div className="d-flex align-items-center fw-medium text-[18px] gap-1 text-muted"><span style={{ color: "#FDCB02", fontSize: "16px" }}>★</span><span>4.2 / 5</span></div>
              </div>
            </div>

            <div className="d-flex w-100 justify-content-between mb-3 button-group-mobile">
              <Button variant="outline" className="w-100 fw-normal text-[18px] call-btn" style={{ backgroundColor: "#EDFFFE", color: "#00A99D", borderRadius: "28px", height: "72px", width: "272px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <img src={Call} alt="call" className="h-8 w-8 text-[18px]" /> <span className="fw-normal text-[20px]">Call</span>
              </Button>

              {/* <button className="message-btn" onClick={() => { if (isMobile && scrollTargetRef.current) scrollTargetRef.current.scrollIntoView({ behavior: "smooth" }); }}>
                Book Appointment
              </button> */}
            </div>

            {/* About, Languages, Expertise, Reviews... (kept unchanged) */}
            <div className="heading w-100">
              <h6 className="fw-bold w-100" style={{fontSize:"18px", fontWeight:"bold"}}>About</h6>
              <p className="text-muted small w-100" style={{fontSize:"17px", fontWeight:"normal"}}>Dr. Hayes is a board-certified cardiologist with over 15 years of experience in diagnosing and treating heart conditions.</p>

              <h6 className="fw-bold" style={{fontSize:"18px", fontWeight:"normal"}}>Languages</h6>
              <p className="text-muted small" style={{fontSize:"17px", fontWeight:"normal"}}>English, Hindi, Telugu</p>

              <h6 className="fw-bold" style={{fontSize:"18px", fontWeight:"normal"}}>Areas of Expertise</h6>
              <div className="d-flex flex-wrap gap-3"style={{fontSize:"18px", fontWeight:"normal"}}> 
                {['General','Cardiology','Heart Failure','Arrhythmias'].map(item => (
                  <span key={item} className="badge bg-light text-dark rounded-pill" style={{ width: '81px', height: '37px', fontWeight: 400, paddingTop: '10px' }}>{item}</span>
                ))}
              </div>

              <h6 className="fw-bold mt-3" style={{fontSize:"18px", fontWeight:"normal"}}>Certifications</h6>
              <p className="text-muted small" style={{fontSize:"17px", fontWeight:"normal"}}>Board Certified in Cardiology</p>

              <h6 className="fw-bold" style={{fontSize:"18px", fontWeight:"normal"}}>Education & Training</h6>
              <p className="text-muted small mb-1" style={{fontSize:"17px", fontWeight:"normal"}}>Medical School: University of California, Los Angeles</p>
              <p className="text-muted small" style={{fontSize:"17px", fontWeight:"normal"}}>Residency: City Hospital</p>
            </div>

            <div className="heading-reviews">
              <h6 className="fw-bold mt-3 mb-2" style={{fontSize:"18px", fontWeight:"normal"}}>Reviews</h6>
              <div className="review-Container pl-0 pb-2 d-flex gap-3 justify-content-between">
                <input type="text" placeholder="Write review" className="border rounded-5 p-2 w-100" />
                <button className="btn border rounded-5" style={{backgroundColor: "#8E8E8E", color:'white'}} >Post</button>
              </div>

              {[1,2,3].map((_, index) => (
                <div key={index} className="border-bottom pb-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img src={`https://i.pravatar.cc/30?img=${index+1}`} alt="avatar" className="rounded-circle" width={30} height={30} />
                      <strong className="small">Radha Andhira</strong>
                    </div>
                    <small className="text-muted">9 October 2024</small>
                  </div>
                  <div className="d-flex gap-1 mt-1 mb-1 text-warning small">{"★".repeat(3)}{"☆"}</div>
                  <p className="text-muted small mb-0" style={{fontSize:"16px", fontWeight:"normal"}}>I was very satisfied with my consultation. The doctor explained everything clearly and offered effective treatment recommendations.</p>
                  <a href="#" className="text-decoration-none small" style={{ color: '#00A99D' }}>See More</a>
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* Right Column - Booking (main changes kept here) */}
          <Col xs={12} lg={8} className="appointment-section"
            style={{display:"flex", alignItems: "center", justifyContent:"center"}}
          >
            <div
              ref={scrollTargetRef}
              className="appointment-div mx-auto fixed lg:static md-w-[400px] sm:w-[100%] lg:w-[600px]"
              style={{
                // maxWidth: isMobile ? "100%" : "600px",
                height: 604.5,
                position: isMobile ? "static" : "fixed",
                top: isMobile ? "auto" : "60px",
                gap: "24px",
              }}
            >
              <h5 className="fw-medium mb-3">Book Appointment</h5>

              <div className="mb-3">
                {[1,2].map((_, idx) => (
                  <div key={idx} className="d-flex justify-content-between align-items-center p-3 rounded-pill mb-3 border dependent">
                    <div>
                      <div className="fw-medium">Manoj malhotrea</div>
                      <div className="text-muted small">Age - 21 | Sex - Male</div>
                    </div>
                    <Form.Check type="radio" name="patient" defaultChecked={idx === 0} />
                  </div>
                ))}
                <a href="#" onClick={(e) => { e.preventDefault(); setShowAddMember(true); }} style={{ color: '#00A99D', fontSize: '0.9rem' }}>Add dependent</a>
              </div>

              {/* Calendar / days area: unified logic for desktop and mobile */}
              <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap calendar-days-container">
                {isMobile ? (
                  <>
                    <div className="d-flex flex-column align-items-center gap-0 text-muted mt-0">
                      <img src={Calender} alt="calendar" style={{ width: 18, height: 18, cursor: 'pointer' }} onClick={handleCalendarClick} />
                      <div style={{ fontSize: '14px', fontWeight: 500, color: '#252525' }}>{startDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</div>

                      <DatePicker
                        ref={datePickerRef}
                        selected={startDate}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        popperPlacement="top-start"
                        popperClassName="custom-datepicker-popper"
                        calendarClassName="calendar-wrapper"
                        showPopperArrow={false}
                        popperModifiers={[
                          { name: 'offset', options: { offset: [0, -10] } },
                          { name: 'preventOverflow', options: { altAxis: true } },
                        ]}
                        customInput={<div style={{ display: 'none' }} />}
                      />
                    </div>

                    <div className="d-flex gap-2">
                      {weekDays.map((day, i) => {
                        const isSelected = day.toDateString() === startDate.toDateString();
                        return (
                          <div key={i} className="text-center rounded" style={{ width: 40, backgroundColor: isSelected ? '#00A99D' : 'transparent', color: isSelected ? '#fff' : '#000', padding: '6px 0px', cursor: 'pointer' }} onClick={() => handleDateChange(day)}>
                            <div>{["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][day.getDay()]}</div>
                            <div>{day.getDate()}</div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex gap-3">
                      {weekDays.map((day, i) => {
                        const isSelected = day.toDateString() === startDate.toDateString();
                        return (
                          <div key={i} className="text-center rounded" style={{ width: 40, backgroundColor: isSelected ? '#00A99D' : 'transparent', color: isSelected ? '#fff' : '#000', padding: '6px 5px', cursor: 'pointer' }} onClick={() => handleDateChange(day)}>
                            <div>{["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][day.getDay()]}</div>
                            <div>{day.getDate()}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="d-flex flex-column align-items-center gap-0 text-muted mt-2 mt-sm-0">
                      <img src={Calender} alt="calendar" style={{ width: 32, height: 32, cursor: 'pointer' }} onClick={handleCalendarClick} />
                      <div style={{ fontSize: '14px', fontWeight: 500, color: '#252525' }}>{startDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</div>

                      <DatePicker
                        ref={datePickerRef}
                        selected={startDate}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        popperPlacement="top-start"
                        popperClassName="custom-datepicker-popper"
                        calendarClassName="calendar-wrapper"
                        showPopperArrow={false}
                        popperModifiers={[
                          { name: 'offset', options: { offset: [0, -10] } },
                          { name: 'preventOverflow', options: { altAxis: true } },
                        ]}
                        customInput={<div style={{ display: 'none' }} />}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Time slots */}
              <div className="d-flex flex-wrap gap-3 mb-3 slot-section">
                {timeSlots.map((slot) => (
                  <div key={slot} className="px-3 py-2 rounded-pill slot-time" style={{ backgroundColor: selectedSlot === slot ? '#00A99D' : '#F0F0F0', color: selectedSlot === slot ? 'white' : 'black', cursor: 'pointer' }} onClick={() => setSelectedSlot(slot)}>
                    {slot}
                  </div>
                ))}
              </div>

              <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 mb-3 book-button">
                <div className="d-flex align-items-center gap-2 px-3 py-2 border rounded-pill w-100 book-time" style={{ color: '#00A99D', border: '1px solid #00A99D' }}>
                  <span>{startDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <div style={{ width: 1, height: 20, backgroundColor: '#00A99D' }} />
                  <span>{selectedSlot}</span>
                </div>

                <Button style={{ backgroundColor: '#00A99D', borderColor: '#00A99D', borderRadius: 999, padding: '6px 16px', minWidth: 102 }} onClick={() => navigate('/category/confirmappointment')}>
                  Book slot
                </Button>
              </div>
            </div>

            <div ref={scrollTargetRef} style={{ height: '100px' }} />
          </Col>
        </Row>

      {showAddMember && (
        <>
          <div className='outerAddmember' style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000 }} />
          <div style={{ position: 'fixed', top: 50, left: 0, width: '100vw', height: '100vh', zIndex: 1001, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AddMemberForm onClose={() => setShowAddMember(false)} />
          </div>
        </>
      )}
    </Container>
  );
}
