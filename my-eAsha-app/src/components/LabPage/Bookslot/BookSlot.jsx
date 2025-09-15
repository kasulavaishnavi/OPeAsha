import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { BsFillTelephoneFill, BsChatDots } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calender from "../../../assets/icons/calendar.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Bookslot/BookSlot.css'
import Hairfall from "../../../assets/confirmappointmenticons/Hairfall.png"
import AddMemberForm from "../../addmemberform/AddMemberForm";
import  ArrowRight  from '../../../assets/cardiologist/arrowRight.png';
import Range from "../../../assets/confirmappointmenticons/range.png";
import Notes from "../../../assets/confirmappointmenticons/notes.png"

const BookSlot = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState("09:30 am");
  const datePickerRef = useRef(null);
  const [showAddMember, setShowAddMember] = useState(false);
const scrollTargetRef = useRef(null);
 // 👈 this will mark where we scroll to
 const [dependents,setDependents]=useState([
  { name: "Manoj Malhotrea", sex: "Male", age: 21 },
  { name: "Riya Sharma", sex: "Female", age: 24 },
  { name: "Kunal Verma", sex: "Male", age: 18 },
  { name: "Priya Iyer", sex: "Female", age: 30 },
 ])

 const handleAddDependent = (newDep) => {
  setDependents([newDep, ...dependents]); // add at the top
  setShowAddMember(false);
};


const handleCalendarClick = () => {
  datePickerRef.current.setOpen(true);

  // Force scroll down by 150px (adjust as needed)
  setTimeout(() => {
    window.scrollTo({
      top: window.scrollY + 50,
      behavior: 'smooth',
    });
  }, 100);
};


  const timeSlots = [
    "08:30 am",
    "09:30 am",
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
    "12:30 pm",
  ];

   const navigate=useNavigate();
   const handleConfirmBookSlot = () => {
    navigate('/lab/confirm-bookslot'); // ✅ goes to the nested route
  };
  

  return (
    <Container
      fluid
      className="p-4 mr-4"
      style={{ fontFamily: "Urbanist, sans-serif"}}
    >
      <Row className="align-items-start">
        {/* Left Column - Doctor Info */}
        <Col lg={4} className="pe-lg-5 mb-4 mb-lg-0 " style={{width:'780px'}}>
          <div
            className="text-start"
            style={{
              padding: "0 16px 0 16px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              marginTop:"100px",
              marginLeft:"40px"
            }}
          >
            <div style={{height:'22px'}} className="d-flex align-items-center w-100">
            <Link to="/labs" className="text-decoration-none d-flex align-items-center " style={{color:'#8E8E8E',fontSize:'18px',height:'22px',width:'68px'}}>Tests <span><img src={ArrowRight} height={18} width={18} className="me-2"/></span></Link>
            <Link to="/labs/panel" className="text-decoration-none d-flex align-items-center" style={{color:'#8E8E8E',fontSize:'18px',height:'22px',width:'131px'}}>Hair Fall Panel <span><img src={ArrowRight} height={18} width={18} lassName="me-2"/></span></Link>
            <span
              className="text-decoration-none"
              style={{
                color: "#00A99D",
                fontWeight: "400",
                height: "25px",
                width: "70px",
              }}
            >
              Book slot
            </span>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-center mb-3" >
                <img
                  src={Hairfall}
                  alt="Hairfall"
                  width={650}
                  height={228}
                  style={{borderTopLeftRadius:'16px',borderTopRightRadius:'16px'}}
                />
              </div>
              <div width={650} style={{padding:'16 16 16 10'}}>
              <h2 className="mt-3 mb-0 fw-bold">
                Hair Fall Panel 
              </h2>
              <p style={{fontSize:'14px',color:'#252525'}}><img src={Range} height={5} width={40} className="me-3"/>Most booked</p>
              <p style={{fontSize:'14px',color:'#252525',height:'34px',width:'580px'}}><b>Tests included:</b>Liver Function Test (LFT), Smear for Malarial Parasite (MP), COVID -19 RT PCR & <span style={{fontSize:'14px',color:'#013A63',textDecoration:'underline'}}>28 Parameter(s) Covered</span></p>
              <p className="mb-4" style={{color:'#00A99D',fontSize:'18px'}}><img src={Notes}/> Reports in 15.0 Hrs</p>
              <p style={{fontSize:'24px',fontWeight:'500',color:'#252525',height:'29px'}}>Maheshwari lab</p>
              <p width={612} style={{fontSize:'18px',color:'#8E8E8E',height:'40px'}}>1-8-31/1, Minister Road Krishna Nagar Colony, Ramgopalpet, Begumpet, Secunderabad, Telangana 500003</p>
              <p style={{fontSize:'18px',color:'#8E8E8E'}}>4.5km |24min </p>
              <p style={{fontSize:'31px',fontWeight:'700',color:'#252525'}}><del style={{color:'#8E8E8E',fontSize:'14px'}} className="me-2">₹282.00</del>  ₹253.80</p>
              
            </div>
            

            </div>
          </div>
        </Col>

        {/* Right Column - Booking */}
        <Col lg={8}>
          <div
            className="mx-auto"
            style={{
              maxWidth: 650,
              height: 604.5,
              position: "fixed",
              gap: "24px",
              left: "802px",
              top: "166px", //given 158px
            }}
          >
            <h2 className="fw-medium mb-3">Book Slot</h2>

            <div className="mb-3">
              <div
  style={{
    display: "flex",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    gap: "16px",
    paddingBottom: "12px",
    scrollbarWidth:'none'
  }}
>
  {Array.from({ length: Math.ceil(dependents.length / 2) }).map((_, colIndex) => {
    const colItems = dependents.slice(colIndex * 2, colIndex * 2 + 2);

    return (
      <div
        key={colIndex}
        style={{
          minWidth: "320px",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection:'column',
          gap: "16px",
        }}
      >
        {colItems.map((dep, idx) => (
          <div
            key={idx}
            className="p-3 "
            style={{
              width: "300px",
              height: "72px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border:'1px solid #F7F7F7',
              borderRadius:'28px'
            }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div>
            <div className="fw-medium" style={{fontSize:'18px',color:'#494949'}}>{dep.name}</div>
            <div style={{fontSize:'14px',color:'#8E8E8E'}}>
              Age - {dep.age} | Sex - {dep.sex}
            </div></div>
            <Form.Check
                                type="radio"
                                name="patient"
                                style={{ borderColor: "#00A99D",transform:'scale(1.3)' }}
                              />
            </div>

          </div>
        ))}
      </div>
    );
  })}
</div>

              <a href="#" onClick={(e)=>{
                   e.preventDefault();
                   setShowAddMember(true);
                  }}
                    style={{ color: "#00A99D", fontSize: '18px' }}
                    >
                Add dependent
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
              <div className="d-flex gap-3">
                {[...Array(7)].map((_, i) => {
                  const isWednesday = i === 2;
                  return (
                    <div
                      key={i}
                      className="text-center rounded"
                      style={{
                        width: 40,
                        backgroundColor: isWednesday
                          ? "#00A99D"
                          : "transparent",
                        color: isWednesday ? "#fff" : "#000",
                        padding: "6px 5px",
                      }}
                    >
                      <div>
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                      </div>
                      <div>{i + 1}</div>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex flex-column align-items-center gap-0 text-muted  mt-2 mt-sm-0">
                <img
                  src={Calender}
                  alt="calendar"
                  style={{ width: 32, height: 32, cursor: "pointer" }}
                    onClick={handleCalendarClick}

                />
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#252525",
                    top:457,
                    
                  }}
                >
                  {startDate.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>

                <DatePicker
                  ref={datePickerRef}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                  popperPlacement="bottom-start"
                  popperClassName="custom-datepicker-popper"
                  calendarClassName="calendar-wrapper"
                  showPopperArrow={false}
                  customInput={
                    <div
                      style={{
                        cursor: "pointer",
                        color: "#333",
                        minWidth: 100,
                        display: "none",
                      }}
                      onClick={handleCalendarClick}

                    >
                      {startDate.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  }
                />
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3 mb-3">
              {timeSlots.map((slot) => (
                <div
                  key={slot}
                  className="px-3 py-2 rounded-pill"
                  style={{
                    backgroundColor:
                      selectedSlot === slot ? "#00A99D" : "#F0F0F0",
                    color: selectedSlot === slot ? "white" : "black",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedSlot(slot)}
                >
                  {slot}
                </div>
              ))}
            </div>

            <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 mb-3">
              <div
                className="d-flex align-items-center gap-2 px-3 py-2 border rounded-pill w-100"
                style={{ color: "#00A99D", border: "1px solid #00A99D" }}
              >
                <span>
                  {startDate.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <div
                  style={{ width: 1, height: 20, backgroundColor: "#00A99D" }}
                ></div>
                <span>{selectedSlot}</span>
              </div>

              <Button
                style={{
                  backgroundColor: "#00A99D",
                  borderColor: "#00A99D",
                  borderRadius: 999,
                  padding: "6px 16px",
                  minWidth: 102,
                }}
                onClick={handleConfirmBookSlot}
                
              >
                Book slot
              </Button>
            </div>
          </div>
          <div ref={scrollTargetRef} style={{ height: "100px" }}></div>

        </Col>
      </Row>
      {showAddMember && (
  <>
    {/* Black backdrop */}
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
    ></div>
     {/* AddMemberForm overlay */}
    <div
      style={{
        position: "fixed",
        top: 50,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1001,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AddMemberForm onClose={() => setShowAddMember(false)} onAddDependent={handleAddDependent}/>
    </div>
  </>
)}

    </Container>
  );
};

export default BookSlot;
