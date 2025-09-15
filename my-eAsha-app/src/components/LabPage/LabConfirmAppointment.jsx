import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./Bookslot/BookSlot.css";

import phonePe from "../../assets/confirmappointmenticons/phonepe.svg";
import Hairfall from "../../assets/confirmappointmenticons/Hairfall.png";
import upi from "../../assets/confirmappointmenticons/upi.jpg";
import qrCode from "../../assets/confirmappointmenticons/qr.jpg";
import gpay from "../../assets/confirmappointmenticons/gpay.jpg";
import ArrowRight from "../../assets/cardiologist/arrowRight.png";
import Range from "../../assets/confirmappointmenticons/range.png";
import Notes from "../../assets/confirmappointmenticons/notes.png";

// const LabConfirmAppointment = () => {
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
//       <Row className="">
//         {/* LEFT SIDE */}
//         <Col lg={4} className="pe-lg-5 mb-4 mb-lg-0" style={{width:'750px'}}>
//           <div
//             className="text-start"
//             style={{
//               padding: "0 16px 0 16px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "24px",
//               marginTop:"120px",
//               marginLeft:"40px"
//             }}
//           >
//             <div style={{height:'22px'}}>
//             <Link to="/lab" className="text-decoration-none" style={{color:'#8E8E8E',fontSize:'18px',height:'22px',width:'42px'}}>Tests <span><img src={ArrowRight} height={18} width={18} className="me-2"/></span></Link>
//             <Link to="/lab/panel" className="text-decoration-none" style={{color:'#8E8E8E',fontSize:'18px',height:'22px',width:'111px'}}>Hair Fall Panel <span><img src={ArrowRight} height={18} width={18} lassName="me-2"/></span></Link>
//             <span

//               className="text-decoration-none"
//               style={{
//                 color: "#00A99D",
//                 fontWeight: "400",
//                 height: "22px",
//                 width: "70px",
//               }}
//               // onClick={()=>{navigate('lab/confirm-bookslot')}}
//             >
//               Book slot
//             </span>
//             </div>

//             <div className="mb-3">
//               <div className="d-flex justify-content-center mb-3" >
//                 <img
//                   src={Hairfall}
//                   alt="Hairfall"
//                   width={650}
//                   height={228}
//                   style={{borderTopLeftRadius:'16px',borderTopRightRadius:'16px'}}
//                 />
//               </div>
//               <div width={650} style={{padding:'16 16 16 10'}}>
//               <h2 className="mt-3 mb-0 fw-bold">
//                 Hair Fall Panel
//               </h2>
//               <p style={{fontSize:'14px',color:'#252525'}}><img src={Range} height={5} width={40} className="me-3"/>Most booked</p>
//               <p style={{fontSize:'14px',color:'#252525',height:'34px',width:'580px'}}><b>Tests included:</b>Liver Function Test (LFT), Smear for Malarial Parasite (MP), COVID -19 RT PCR & <span style={{fontSize:'14px',color:'#013A63',textDecoration:'underline'}}>28 Parameter(s) Covered</span></p>
//               <p className="mb-4" style={{color:'#00A99D',fontSize:'18px'}}><img src={Notes}/> Reports in 15.0 Hrs</p>
//               <p style={{fontSize:'24px',fontWeight:'500',color:'#252525',height:'29px'}}>Maheshwari lab</p>
//               <p width={612} style={{fontSize:'18px',color:'#8E8E8E',height:'40px'}}>1-8-31/1, Minister Road Krishna Nagar Colony, Ramgopalpet, Begumpet, Secunderabad, Telangana 500003</p>
//               <p style={{fontSize:'18px',color:'#8E8E8E'}}>4.5km |24min </p>
//               <p style={{fontSize:'31px',fontWeight:'700',color:'#252525'}}><del style={{color:'#8E8E8E',fontSize:'14px'}} className="me-2">₹282.00</del>  ₹253.80</p>

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
//                 navigate("/lab/bookappointment");
//               }}
//             >
//               Change slot
//             </Button>

//             </div>
//           </div>
//         </Col>

//         {/* RIGHT SIDE */}
//         <Col
//           style={{
//             width: 750,
//             height: 874,
//             padding: "0 0px",
//             left: "802px",
//             top: "166px",
//             position: "fixed",
//           }}
//         >
//           <h4 className="fw-medium mb-2" >Confirm Appointment</h4>
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
//             <div className="upi-container mb-2" style={{width:'403px',height:'129px'}}>
//   {/* UPI Options */}
//             <div className="upi-highlight" style={{transform:`translateX(${selectedUpi * 145}px)`}}></div>
//             <div className="d-flex align-items-center gap-4 mb-4" >
//               {upiOptions.map((option, i) => {
//                 const isSelected = selectedUpi === i;
//                 return (
//                   <div
//   key={i}
//   className="text-center"
//   style={{
//     width: 96,
//     height: 120,
//     fontSize: 12,
//     cursor: "pointer",
//     backgroundColor: isSelected ? "#EDFFFE" : "#fff",
//     borderRadius: 28,
//     border: "1px solid",
//     borderColor: isSelected ? "#00A99D" : "transparent",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//      // smooth transition
//   }}
//   onClick={() => setSelectedUpi(i)}
// >
//                     <div
//                       className="border rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
//                       style={{
//                         width: 48,
//                         height: 48,
//                         borderRadius: 80,
//                         backgroundColor: "#fff",
//                         border: "1px solid #F7F7F7",
//                         flexShrink:0
//                       }}
//                     >
//                       <img src={option.img} alt={option.label} width={48} />
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
//             </div>

//             <p className="text-muted">Scan this QR using your PhonePe mobile</p>
//             <img src={qrCode} alt="QR Code" width={200} height={200} />
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LabConfirmAppointment;

const LabConfirmAppointment = () => {
  const [selectedMethod, setSelectedMethod] = useState("UPI");
  const [selectedUpi, setSelectedUpi] = useState(null);
  const [changeSlotClicked, setChangeSlotClicked] = useState(false);

  const navigate = useNavigate();

  const paymentOptions = ["UPI", "Card", "Net banking"];
  const upiOptions = [
    { img: phonePe, label: "PhonePe" },
    { img: gpay, label: "GPay" },
    { img: upi, label: "UPI" },
  ];

  return (
    <Container
      fluid
      className="p-4"
      style={{ fontFamily: "Urbanist, sans-serif" }}
    >
      <Row className="">
        {/* LEFT SIDE */}
        <Col lg={4} className="pe-lg-5 mb-4 mb-lg-0" style={{ width: "750px" }}>
          <div
            className="text-start "
            style={{
              padding: "0 16px 0 16px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              marginTop: "100px",
              marginLeft: "40px",
            }}
          >
            <div style={{ height: "22px" }} className="d-flex align-items-center w-100 ">
              <Link
                to="/lab"
                className="text-decoration-none d-flex align-items-center"
                style={{
                  color: "#8E8E8E",
                  fontSize: "18px",
                  height: "22px",
                  width: "68px",
                }}
              >
                Tests{" "}
                <span>
                  <img
                    src={ArrowRight}
                    height={18}
                    width={18}
                    className="me-2 d-flex"
                  />
                </span>
              </Link>
              <Link
                to="/lab/panel"
                className="text-decoration-none d-flex align-items-center"
                style={{
                  color: "#8E8E8E",
                  fontSize: "18px",
                  height: "22px",
                  width: "131px",
                }}
              >
                Hair Fall Panel{" "}
                <span>
                  <img
                    src={ArrowRight}
                    height={18}
                    width={18}
                    lassName="me-2"
                  />
                </span>
              </Link>
              <span
                className="text-decoration-none"
                style={{
                  color: "#00A99D",
                  fontWeight: "400",
                  height: "25px",
                  width: "70px",
                }}
                // onClick={()=>{navigate('lab/confirm-bookslot')}}
              >
                Book slot
              </span>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-center mb-3">
                <img
                  src={Hairfall}
                  alt="Hairfall"
                  width={650}
                  height={228}
                  style={{
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                  }}
                />
              </div>
              <div width={650} style={{ padding: "16 16 16 10" }}>
                <h2 className="mt-3 mb-0 fw-bold">Hair Fall Panel</h2>
                <p style={{ fontSize: "14px", color: "#252525" }}>
                  <img src={Range} height={5} width={40} className="me-3" />
                  Most booked
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#252525",
                    height: "34px",
                    width: "580px",
                  }}
                >
                  <b>Tests included:</b>Liver Function Test (LFT), Smear for
                  Malarial Parasite (MP), COVID -19 RT PCR &{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#013A63",
                      textDecoration: "underline",
                    }}
                  >
                    28 Parameter(s) Covered
                  </span>
                </p>
                <p
                  className="mb-4"
                  style={{ color: "#00A99D", fontSize: "18px" }}
                >
                  <img src={Notes} /> Reports in 15.0 Hrs
                </p>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "#252525",
                    height: "29px",
                  }}
                >
                  Maheshwari lab
                </p>
                <p
                  width={612}
                  style={{ fontSize: "18px", color: "#8E8E8E", height: "40px" }}
                >
                  1-8-31/1, Minister Road Krishna Nagar Colony, Ramgopalpet,
                  Begumpet, Secunderabad, Telangana 500003
                </p>
                <p style={{ fontSize: "18px", color: "#8E8E8E" }}>
                  4.5km |24min{" "}
                </p>
                <p
                  style={{
                    fontSize: "31px",
                    fontWeight: "700",
                    color: "#252525",
                  }}
                >
                  <del
                    style={{ color: "#8E8E8E", fontSize: "14px" }}
                    className="me-2"
                  >
                    ₹282.00
                  </del>{" "}
                  ₹253.80
                </p>
              </div>
              <Button
                variant="outline"
                className="mb-4"
                style={{
                  borderRadius: 28,
                  color: "#00A99D",
                  borderColor: "#00A99D",
                  width: 410,
                  height: 42,
                  backgroundColor: changeSlotClicked
                    ? "#EDFFFE"
                    : "transparent",
                }}
                onClick={() => {
                  setChangeSlotClicked(true);
                  navigate("/lab/bookappointment");
                }}
              >
                Change slot
              </Button>
            </div>
          </div>
        </Col>

        {/* RIGHT SIDE */}
        <Col
          style={{
            width: 750,
            height: 874,
            padding: "0 0px",
            left: "802px",
            top: "126px",
            position: "fixed",
          }}
        >
          <h4 className="fw-medium mb-2">Confirm Appointment</h4>
          <p className="text-muted mb-4" style={{ width: "509px" }}>
            Confirm your slot by providing us with your payment information
          </p>

          <div style={{ width: 410, marginTop: 10 }}>
            <h5 className="fw-medium mb-3">Payment method</h5>

            <div
              className="d-flex gap-2 align-items-center justify-content-between rounded-pill px-3 mb-4"
              style={{
                width: 357,
                height: 62,
                border: "1px solid #00A99D",
                backgroundColor: "#fff",
              }}
            >
              {paymentOptions.map((method, idx) => (
                <Button
                  key={idx}
                  variant={selectedMethod === method}
                  style={{
                    width:
                      method === "Net banking"
                        ? 143
                        : method === "Card"
                        ? 88
                        : 74,
                    height: 42,
                    fontSize: 14,
                    borderRadius: 50,
                    backgroundColor:
                      selectedMethod === method ? "#00A99D" : "transparent",
                    color: selectedMethod === method ? "#fff" : "#00A99D",
                  }}
                  onClick={() => setSelectedMethod(method)}
                >
                  {method}
                </Button>
              ))}
            </div>

            {/* UPI Options */}
            <div
              className="upi-container mb-2"
              style={{ width: "403px", height: "129px" }}
            >
              {/*sliding highlight */}
              <div
                className="upi-highlight"
                style={{ transform: `translateX(${selectedUpi * 145}px)` }}
              ></div>
              {upiOptions.map((option, i) => (
                <div
                  key={i}
                  className="upi-box"
                  onClick={() => setSelectedUpi(i)}
                >
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
                      className="text-muted"
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
            <img src={qrCode} alt="QR Code" width={200} height={200} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LabConfirmAppointment;
