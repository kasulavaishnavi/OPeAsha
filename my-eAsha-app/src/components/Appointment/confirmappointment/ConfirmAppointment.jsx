import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import '../../components/css/Appointment.css'

import doctorImg from "../../../assets/confirmappointmenticons/doctor.jpg";
import phonePe from "../../../assets/confirmappointmenticons/phonepe.svg";
import gpay from "../../../assets/confirmappointmenticons/gpay.jpg";
import upi from "../../../assets/confirmappointmenticons/upi.jpg";
import qrCode from "../../../assets/confirmappointmenticons/qr.jpg";
import Video from "../../../assets/confirmappointmenticons/video.svg";
import Arrowleft from "../../../assets/confirmappointmenticons/arrow-left.svg";
import Dil from "../../../assets/confirmappointmenticons/dil.svg";
import Star from "../../../assets/confirmappointmenticons/Star.svg";

// const ConfirmAppointment = () => {
//   const [selectedMethod, setSelectedMethod] = useState("UPI");
//   const [selectedUpi, setSelectedUpi] = useState(null);
//   const [changeSlotClicked, setChangeSlotClicked] = useState(false);

//   const navigate = useNavigate();

//   const paymentOptions = ["UPI", "Card", "Net banking"];
//   const upiOptions = [
//     { img: phonePe, label: "PhonePe" },
//     { img: gpay, label: "GPay" },
//     { img: upi, label: "UPI" },
//   ];

//   return (
//     <Container
//       fluid
//       className="p-4"
//       style={{ fontFamily: "Urbanist, sans-serif" }}
//     >
//       <Row className="justify-content-center">
//         {/* LEFT SIDE */}
//         <Col style={{ width: 566, height: 874 }}>
//           <button
//             onClick={() => navigate("/bookappointment")} // Ensure this route is defined
//             className="btn btn-link text-decoration-none mb-3 d-inline-block book-btn"
//             style={{
//                 color: "#00A99D",
//                 fontWeight: "500",
//                 paddingTop:'75px',
//                 height:"22",
//                 width:"88"
//               }}
//           >
//             ← Book appointment
//           </button>

//           <div style={{ width: "410px" }}>
//             <div className="text-center">
//               <img
//                 src={doctorImg}
//                 alt="Doctor"
//                 className="rounded-circle"
//                 width={100}
//                 height={100}
//               />
//             </div>
//           </div>

//           <div className="mt-3" style={{ width: "410px", marginLeft: "40px",top:"150px"}}>
//             <h5 className="fw-bold mb-0">
//               Dr. Nithish Jagannatham <small className="fw-normal">MD, MBBS</small>
//             </h5>
//             <p className="text-muted mb-1">♡ Cardiologist</p>
//             <div className="d-flex align-items-center gap-1 text-muted">
//               <span style={{ color: "#FDCB02", fontSize: "16px" }}>★</span>
//               <span>4.2 / 5</span>
//             </div>

//             <div
//               className="d-flex align-items-center rounded px-2 py-1 mt-4 mb-3"
//               style={{
//                 width: "297px",
//                 height: "52px",
//                 color: "#212529",
//                 gap: "12px",
//               }}
//             >
//               <img src={Video} alt="Video Icon" width={48} height={48} />
//               <div>
//                 <div style={{ fontSize: "14px", fontWeight: 500 }}>
//                   Video consultant
//                 </div>
//                 <div style={{ fontSize: "13px", color: "#6c757d" }}>
//                   23 July 2025 | at 9:30 am IST
//                 </div>
//               </div>
//             </div>

//             <Button
//               variant="outline"
//               className="mb-4"
//               style={{
//                 borderRadius: 28,
//                 color: "#00A99D",
//                 borderColor: "#00A99D",
//                 width: 410,
//                 height: 42,
//                 backgroundColor: changeSlotClicked ? "#EDFFFE" : "transparent",
//               }}
//               onClick={() => {setChangeSlotClicked(true);navigate('/bookappointment');}}

//             >
//               Change slot
//             </Button>

//             <div className="bg-light p-3 rounded mb-4">
//               <h6 className="fw-medium mb-2">Patient details</h6>
//               <p className="mb-0 text-muted small">
//                 Vamshi reddy | Age: 24 | Sex - M<br />
//                 Weight - 75 | Height - 5.7
//               </p>
//               <a
//                 href="#"
//                 className="d-block mt-2 small text-decoration-none"
//                 style={{ color: "#00A99D" }}
//               >
//                 Change patient
//               </a>
//             </div>

//             <div
//               className="text-muted small"
//               style={{ width: "352px", height: "156px" }}
//             >
//               <div className="d-flex justify-content-between">
//                 <span>Total</span>
//                 <span>₹ 600.00</span>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <span>Platform fee</span>
//                 <span>₹ 00.00</span>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <span>Other taxes</span>
//                 <span>₹ 00.00</span>
//               </div>
//               <hr style={{ borderTop: "1px solid #dee2e6" }} />

//               <div className="d-flex justify-content-between fw-bold text-dark">
//                 <span>Grand total</span>
//                 <span>₹ 600.00</span>
//               </div>
//             </div>
//           </div>
//         </Col>

//         {/* RIGHT SIDE */}
//         <Col
//           style={{
//             width: 827,
//             height: 874,
//             padding: "0 0px",
//             left: "702px",
//             top: "135px",
//             position: "fixed",
//           }}
//         >
//           <h4 className="fw-medium mb-2 mt-2">Confirm Appointment</h4>
//           <p className="text-muted mb-4" style={{ width: "509px" }}>
//             Confirm your slot by providing us with your payment information
//           </p>

//           <div style={{ width: 410, marginTop: 10 }}>
//             <h5 className="fw-medium mb-3">Payment method</h5>

//             <div
//               className="d-flex gap-2 align-items-center justify-content-between rounded-pill px-3 mb-4"
//               style={{
//                 width: 357,
//                 height: 62,
//                 border: "1px solid #00A99D",
//                 backgroundColor: "#fff",
//               }}
//             >
//               {paymentOptions.map((method, idx) => (
//                 <Button
//                   key={idx}
//                   variant={selectedMethod === method}
//                   style={{
//                     width:
//                       method === "Net banking"
//                         ? 143
//                         : method === "Card"
//                         ? 88
//                         : 74,
//                     height: 42,
//                     fontSize: 14,
//                     borderRadius: 50,
//                     backgroundColor:
//                       selectedMethod === method ? "#00A99D" : "transparent",
//                     color: selectedMethod === method ? "#fff" : "#00A99D",
//                   }}
//                   onClick={() => setSelectedMethod(method)}
//                 >
//                   {method}
//                 </Button>
//               ))}
//             </div>

//             {/* UPI Options */}
//             <div className="d-flex align-items-center gap-4 mb-4">
//               {upiOptions.map((option, i) => {
//                 const isSelected = selectedUpi === i;
//                 return (
//                   <div
//                     key={i}
//                     className="text-center"
//                     style={{
//                       width: isSelected ? 113 : 88,
//                       height: isSelected ? 129 : 90,
//                       fontSize: 12,
//                       cursor: "pointer",
//                       backgroundColor: isSelected ? "#E6F8F7" : "transparent",
//                       borderRadius: isSelected ? 28 : 8,
//                       padding: 24,
//                       gap: 8,
//                     }}
//                     onClick={() => setSelectedUpi(i)}
//                   >
//                     <div
//                       className="border rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
//                       style={{
//                         width: 48,
//                         height: 48,
//                         borderRadius: 28,
//                         backgroundColor: "#fff",
//                         border: "1px solid #ccc",
//                       }}
//                     >
//                       <img src={option.img} alt={option.label} width={24} />
//                     </div>
//                     <div
//                       className="text-muted"
//                       style={{ color: isSelected ? "#00A99D" : "#6c757d" }}
//                     >
//                       {option.label}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <p className="text-muted">Scan this QR using your PhonePe mobile</p>
//             <img src={qrCode} alt="QR Code" width={150} height={150} />
//           </div>
//         </Col>
//       </Row>

      
//     </Container>
//   );
// };

// export default ConfirmAppointment;


// const ConfirmAppointment = () => {
//   const [selectedMethod, setSelectedMethod] = useState("UPI");
//   const [selectedUpi, setSelectedUpi] = useState(null);
//   const [changeSlotClicked, setChangeSlotClicked] = useState(false);

//   const navigate = useNavigate();

//   const paymentOptions = ["UPI", "Card", "Net banking"];
//   const upiOptions = [
//     { img: phonePe, label: "PhonePe" },
//     { img: gpay, label: "GPay" },
//     { img: upi, label: "UPI" },
//   ];

//   return (
//     <Container
//       fluid
//       className="p-4"
//       style={{ fontFamily: "Urbanist, sans-serif" }}
//     >
//       <Row className="justify-content-center">
//         {/* LEFT SIDE */}
//         <Col style={{ width: 566, height: 874 }}>
//           <button
//             onClick={() => navigate(-1)}
//             className="btn btn-link text-decoration-none mb-3 d-inline-block book-btn"
//             style={{
//               color: "#00A99D",
//               fontWeight: "500",
//               fontSize: "18px",
//               marginLeft: "64pxpx",
//               paddingTop: "75px",
//             }}
//           >
//             <img
//               src={Arrowleft}
//               alt="Back"
//               style={{
//                 width: "24px",
//                 height: "24px",
//                 marginRight: "8px",
//                 verticalAlign: "middle",
//               }}
//             />
//             Book appointment
//           </button>

//           <div style={{ width: "410px" }}>
//             <div className="text-center">
//               <img
//                 src={doctorImg}
//                 alt="Doctor"
//                 className="rounded-circle"
//                 width={100}
//                 height={100}
//               />
//             </div>
//           </div>

//           <div
//             className="mt-3"
//             style={{ width: "410px", paddingLeft: "64px", top: "150px" }}
//           >
//             <h5 className="fw-bold mb-1">
//               Dr. Nithish Jagannatham{" "}
//               <small className="fw-normal">MD, MBBS</small>
//             </h5>
//             <p
//               className="text-muted mb-1 d-flex align-items-center"
//               style={{ gap: "8px" }}
//             >
//               <img
//                 src={Dil}
//                 alt="Specialty"
//                 style={{ width: "18px", height: "18px" }}
//               />
//               Cardiologist
//             </p>
//             <div className="d-flex align-items-center gap-1 text-muted">
//               <img
//                 src={Star}
//                 style={{ width: "16px", height: "16px" }}
//                 alt="Rating"
//               />
//               <span>4.2 / 5</span>
//             </div>

//             <div
//               className="d-flex align-items-center rounded  py-1 mt-4 mb-3"
//               style={{
//                 width: "297px",
//                 height: "52px",
//                 color: "#212529",
//                 gap: "15px",
//               }}
//             >
//               <img src={Video} alt="Video Icon" width={48} height={48} />
//               <div>
//                 <div style={{ fontSize: "14px", fontWeight: 500 }}>
//                   Video consultant
//                 </div>
//                 <div style={{ fontSize: "13px", color: "#6c757d" }}>
//                   23 July 2025 | at 9:30 am IST
//                 </div>
//               </div>
//             </div>

//             <Button
//               variant="outline"
//               className="mb-4"
//               style={{
//                 borderRadius: 28,
//                 color: "#00A99D",
//                 borderColor: "#00A99D",
//                 width: 410,
//                 height: 42,
//                 backgroundColor: changeSlotClicked ? "#EDFFFE" : "transparent",
//               }}
//               onClick={() => {
//                 setChangeSlotClicked(true);
//                 navigate("/bookappointment");
//               }}
//             >
//               Change slot
//             </Button>

//             <div className="bg-light p-3 rounded mb-4">
//               <h6 className="fw-medium mb-2">Patient details</h6>
//               <p className="mb-0 text-muted small">
//                 Vamshi reddy | Age: 24 | Sex - M<br />
//                 Weight - 75 | Height - 5.7
//               </p>
//               <a
//                 href="#"
//                 className="d-block mt-2 small text-decoration-none"
//                 style={{ color: "#00A99D" }}
//               >
//                 Change patient
//               </a>
//             </div>

//             <div
//               className="text-muted small"
//               style={{ width: "352px", height: "156px" }}
//             >
//               <div className="d-flex justify-content-between">
//                 <span>Total</span>
//                 <span>₹ 600.00</span>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <span>Platform fee</span>
//                 <span>₹ 00.00</span>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <span>Other taxes</span>
//                 <span>₹ 00.00</span>
//               </div>
//               <hr style={{ borderTop: "1px solid #dee2e6" }} />

//               <div className="d-flex justify-content-between fw-bold text-dark">
//                 <span>Grand total</span>
//                 <span>₹ 600.00</span>
//               </div>
//             </div>
//           </div>
//         </Col>

//         {/* RIGHT SIDE */}
//         <Col
//           style={{
//             width: 827,
//             height: 874,
//             padding: "0 0px",
//             left: "702px",
//             top: "135px",
//             position: "fixed",
//           }}
//         >
//           <h4 className="fw-medium mb-2 mt-2">Confirm Appointment</h4>
//           <p className="text-muted mb-4" style={{ width: "509px" }}>
//             Confirm your slot by providing us with your payment information
//           </p>

//           <div style={{ width: 410, marginTop: 10 }}>
//             <h5 className="fw-medium mb-3">Payment method</h5>

//             <div
//               className="d-flex gap-2 align-items-center justify-content-between rounded-pill px-3 mb-4"
//               style={{
//                 width: 357,
//                 height: 62,
//                 border: "1px solid #00A99D",
//                 backgroundColor: "#fff",
//               }}
//             >
//               {paymentOptions.map((method, idx) => (
//                 <Button
//                   key={idx}
//                   variant={selectedMethod === method}
//                   style={{
//                     width:
//                       method === "Net banking"
//                         ? 143
//                         : method === "Card"
//                         ? 88
//                         : 74,
//                     height: 42,
//                     fontSize: 14,
//                     borderRadius: 50,
//                     backgroundColor:
//                       selectedMethod === method ? "#00A99D" : "transparent",
//                     color: selectedMethod === method ? "#fff" : "#00A99D",
//                   }}
//                   onClick={() => setSelectedMethod(method)}
//                 >
//                   {method}
//                 </Button>
//               ))}
//             </div>

//             {/* UPI Options */}
//             <div className="upi-container mb-4">
//               {/* Sliding Highlight */}
//               <div
//                 className="upi-highlight"
//                 style={{
//                   transform: `translateX(${selectedUpi * 145}px)`, // 113px width + ~32px gap
//                 }}
//               ></div>

//               {upiOptions.map((option, i) => (
//                 <div
//                   key={i}
//                   className="upi-box"
//                   onClick={() => setSelectedUpi(i)}
//                 >
//                   <div className="upi-box-inner">
//                     <div
//                       className="d-flex align-items-center justify-content-center mx-auto mb-2"
//                       style={{
//                         width: 48,
//                         height: 48,
//                         borderRadius: 80,
//                         border: "1px solid #F7F7F7",
//                       }}
//                     >
//                       <img src={option.img} alt={option.label} />
//                     </div>
//                     <div
//                       className="text-muted"
//                       style={{
//                         color: selectedUpi === i ? "#00A99D" : "#212529",
//                       }}
//                     >
//                       {option.label}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <p className="text-muted">Scan this QR using your PhonePe mobile</p>
//             <img src={qrCode} alt="QR Code" width={150} height={150} />
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ConfirmAppointment;


// import React, { useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// import doctorImg from "../assets/doctor.png";
// import phonePe from "../assets/phonepe.svg";
// import gpay from "../assets/gpay.png";
// import upi from "../assets/upi.svg";
// import qrCode from "../assets/qr.png";
// import Video from "../assets/video.svg";
// import Arrowleft from "../assets/arrow-left.svg";
// import Dil from "../assets/dil.svg";
// import Star from "../assets/Star.svg";
// import "../Confirm.css";

const ConfirmAppointment = () => {
  const [selectedMethod, setSelectedMethod] = useState("UPI");
  const [selectedUpi, setSelectedUpi] = useState(null);
  const [changeSlotClicked, setChangeSlotClicked] = useState(false);
  const [showPaymentMobile, setShowPaymentMobile] = useState(false);

  const navigate = useNavigate();

  const paymentOptions = ["UPI", "Card", "Net banking"];
  const upiOptions = [
    { img: phonePe, label: "PhonePe" },
    { img: gpay, label: "GPay" },
    { img: upi, label: "UPI" },
  ];

  return (
    <Container fluid className="p-4" style={{ fontFamily: "Urbanist, sans-serif" }}>
      <style>
        {`
          /* Desktop + Tablet Large (fixed right content) */
          @media (min-width: 1025px) {
            .right-content {
              width: 827px;
              height: 874px;
              padding: 0;
              left: 702px;
              top: 135px;
              position: fixed;
            }
          }

          /* Mobile + Tablet Small */
          @media (max-width: 1024px) {
            .right-content {
              display: none;
            }
            .right-content.visible {
              display: block;
              position: static;
              width: 98%;
              height: auto;
              margin-top: 80px;
            }
          }
        `}
      </style>

      <Row className="justify-content-center">
        {/* LEFT SIDE */}
        <Col
          style={{ width: 566, height: "auto" }}
          className={`${showPaymentMobile ? "d-none d-lg-block" : ""}`}
        >
          <button
            onClick={() => navigate(-1)}
            className="btn btn-link d-flex align-items-lg-center text-decoration-none mb-3 d-inline-block book-btn"
            style={{
              color: "#00A99D",
              fontWeight: "500",
              fontSize: "18px",
              paddingTop: "75px",
              marginLeft:"15px"
            }}
          >
            <img
              src={Arrowleft}
              alt="Back"
              style={{
                width: "24px",
                height: "24px",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            />
            Book appointment
          </button>

          <div style={{ width: "540px" }} className="d-flex align-items-center justify-content-center">
            <img
              src={doctorImg}
              alt="Doctor"
              className="rounded-circle"
              width={100}
              height={100}
            />
          </div>

          <div style={{ width: "520px", paddingLeft: "64px", top: "150px",overflow:"hidden" }} className="mt-3 lg:w-[570px]">
            <h5 className="fw-bold d-flex align-items-center justify-content-between mb-1">
              Dr. Nithish Jagannatham <small className="fw-normal">MD, MBBS</small>
            </h5>
            <p className="text-muted mb-1 d-flex align-items-center" style={{ gap: "8px" }}>
              <img src={Dil} alt="Specialty" style={{ width: "18px", height: "18px" }} />
              Cardiologist
            </p>
            <div className="d-flex align-items-center gap-1 text-muted">
              <img src={Star} style={{ width: "16px", height: "16px" }} alt="Rating" />
              <span>4.2 / 5</span>
            </div>

            <div
              className="d-flex align-items-center rounded py-1 mt-4 mb-3"
              style={{
                width: "297px",
                height: "52px",
                gap: "15px",
              }}
            >
              <img src={Video} alt="Video Icon" width={48} height={48} />
              <div>
                <div style={{ fontSize: "14px", fontWeight: 500 }}>Video consultant</div>
                <div style={{ fontSize: "13px", color: "#6c757d" }}>
                  23 July 2025 | at 9:30 am IST
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="mb-4"
              style={{
                borderRadius: 28,
                color: "#00A99D",
                borderColor: "#00A99D",
                width: 414,
                height: 42,
                backgroundColor: changeSlotClicked ? "#EDFFFE" : "transparent",
              }}
              onClick={() => {
                setChangeSlotClicked(true);
                navigate("/bookappointment");
              }}
            >
              Change slot
            </Button>

            <div className="bg-light p-3 w-[410px] rounded mb-4">
              <h6 className="fw-medium mb-2">Patient details</h6>
              <p className="mb-0 text-muted small">
                Vamshi reddy | Age: 24 | Sex - M<br />
                Weight - 75 | Height - 5.7
              </p>
              <a href="#" className="d-block mt-2 small text-decoration-none" style={{ color: "#00A99D" }}>
                Change patient
              </a>
            </div>

            <div className="text-muted small" style={{ width: "410px", height: "156px" }}>
              <div className="d-flex justify-content-between">
                <span>Total</span>
                <span>₹ 600.00</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Platform fee</span>
                <span>₹ 00.00</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Other taxes</span>
                <span>₹ 00.00</span>
              </div>
              <hr style={{ borderTop: "1px solid #dee2e6" }} />
              <div className="d-flex justify-content-between fw-bold text-dark">
                <span>Grand total</span>
                <span>₹ 600.00</span>
              </div>
            </div>

            {/* Mobile/Tablet Toggle Button */}
            <div className="mt-4 d-lg-none w-[410px]">
              <Button
                style={{
                  width: "100%",
                  borderRadius: 28,
                  backgroundColor: "#00A99D",
                  borderColor: "#00A99D",
                  color: "#fff",
                  height: 45,
                  fontSize: 16,
                }}
                onClick={() => setShowPaymentMobile(true)}
              >
                Proceed to Payment
              </Button>
            </div>
          </div>
        </Col>

        {/* RIGHT SIDE */}
        <Col className={`right-content ${showPaymentMobile ? "visible d-lg-block" : ""}`}>
          <h4 className="fw-medium mb-2 mt-2">Confirm Appointment</h4>
          <p className="text-muted mb-4" style={{ maxWidth: "509px" }}>
            Confirm your slot by providing us with your payment information
          </p>

          <div style={{ width: 410, marginTop: 10 }}>
            <h5 className="fw-medium mb-3">Payment method</h5>
            <div
              className="d-flex gap-2 sm:w-[382px] align-items-center justify-content-between rounded-pill px-3 mb-4"
              style={{
                width: 380,
                height: 62,
                border: "1px solid #00A99D",
                backgroundColor: "#fff",
              }}
            >
              {paymentOptions.map((method, idx) => (
                <Button
                  key={idx}
                  variant="light"
                  style={{
                    width: method === "Net banking" ? 143 : method === "Card" ? 88 : 74,
                    height: 42,
                    fontSize: 14,
                    borderRadius: 50,
                    backgroundColor: selectedMethod === method ? "#00A99D" : "transparent",
                    color: selectedMethod === method ? "#fff" : "#00A99D",
                  }}
                  onClick={() => setSelectedMethod(method)}
                >
                  {method}
                </Button>
              ))}
            </div>

            {/* UPI Options */}
            <div className="upi-container mb-4">
              <div
                className="upi-highlight"
                style={{
                  transform: `translateX(${(selectedUpi ?? 0) * 145}px)`,
                }}
              ></div>

              {upiOptions.map((option, i) => (
                <div key={i} className="upi-box" onClick={() => setSelectedUpi(i)}>
                  <div className="upi-box-inner">
                    <div
                      className="d-flex align-items-center justify-content-center mx-auto mb-2"
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 80,
                        border: "1px solid #F7F7F7",
                      }}
                    >
                      <img src={option.img} alt={option.label} />
                    </div>
                    <div
                      style={{
                        color: selectedUpi === i ? "#00A99D" : "#212529",
                      }}
                    >
                      {option.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted">Scan this QR using your PhonePe mobile</p>
            <img src={qrCode} alt="QR Code" width={150} height={150} />

            {/* Back Button for Mobile/Tablet */}
            <div className="mt-4 d-lg-none">
              <Button
                variant="outline"
                style={{
                  width: "98%",
                  borderRadius: 28,
                  backgroundColor: "#00A99D",
                  borderColor: "#00A99D",
                  color: "#FFFFFF",
                  height: 45,
                  fontSize: 18,
                }}
               
              >
                payXXX0597
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmAppointment;
