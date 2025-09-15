import React, { useState } from "react";
import VirtualDoc from "../../assets/VirtualDoc.png";
import camera from "../../assets/icons/camera.svg";
import patient from "../../assets/patient.png";
import IconB from "../../assets/icons/IconB.svg";
import IconBOne from "../../assets/icons/IconBOne.svg";
import IconBTwo from "../../assets/icons/IconBTwo.svg";
import IconBThree from "../../assets/icons/IconBThree.svg";
import IconBFive from "../../assets/IconBFive.svg";
import mediaIcon from "../../assets/mediaicon.png";
import send from "../../assets/send.png";
import UploadPopup from "./OnClosePopup";

const callIcons = [
  {
    iconurl: IconB,
  },
  {
    iconurl: IconBOne,
  },
  {
    iconurl: IconBTwo,
  },
  {
    iconurl: IconBThree,
  },
  {
    iconurl: IconBFive,
  },
];

function VirtualAppointment() {
  const [showUpload, setShowUpload] = useState(false);

  const handleClosePopup = () => {
    setShowUpload(!showUpload);
  };

  return (
    <div
      className="container p-2 d-flex gap-5"
      //  style={{ overflowX: "hidden" }}
      style={{ overflow: "hidden", maxWidth: "100%", height: "100vh" }}
    >
      <div
        className="position-relative d-flex flex-column gap-2 align-items-center"
        style={{ width: "945px" }}
      >
        <img
          src={VirtualDoc}
          alt="docImage"
          className="h-full w-full"
          style={{ borderRadius: "28px", padding: "0px 0px 0px" }}
        />
        <div className=" d-flex flex-column align-items-end">
          <img
            src={camera}
            alt=""
            className="position-absolute top-5 right-5"
          />
          <img
            src={patient}
            alt=""
            className="position-absolute bottom-1 right-1"
          />
        </div>
        <div
          className="d-flex align-items-center justify-content-center gap-2"
          style={{
            height: "68px",
            width: "385px",
            borderRadius: "75px",
            padding: "10px 24px",
            backgroundColor: "#f1f1f1",
          }}
        >
          {callIcons.map((icon, ind) => {
            return <img src={icon.iconurl} alt="" key={ind} />;
          })}
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          color: "white",
          width: "390px",
          borderRadius: "30px",
          padding: "20px",
          fontFamily: "'Urbanist', sans-serif",
          position: "relative",
          height: "650px",
          overflow: "hidden",
        }}
        className="border mx-auto"
      >
        <div className="d-flex flex-column text-black align-items-start mb-4">
          <h2
            style={{
              fontWeight: "700",
              marginBottom: "0",
              fontSize: "24px",
              color: "#494949",
            }}
          >
            Jackob jone{" "}
            <span style={{ color: "limegreen", marginBottom: "" }}>●</span>
          </h2>
          <p style={{ color: "#8E8E8E", fontSize: "16px", fontWeight: "400" }}>
            MD. Physiotherapist
          </p>
        </div>

        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column align-items-start">
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#f1f1f1",
                marginBottom: "5px",
                // overflowY: "auto",
                maxHeight: "500px", // adjust to fit your input height
                paddingRight: "5px",
              }}
            ></div>
            <p
              className=""
              style={{ fontWeight: "400", fontSize: "14px", color: "#494949" }}
            >
              Jackob jone
            </p>
            <div
              style={{
                backgroundColor: "#f1f1f1",
                color: "#494949",
                borderRadius: "25px",
                padding: "10px 20px",
                maxWidth: "250px",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              Hey Mahitha
            </div>
            <div
              style={{
                backgroundColor: "#f1f1f1",
                color: "#494949",
                borderRadius: "25px",
                padding: "10px 20px",
                maxWidth: "280px",
                marginTop: "5px",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              Share your document link
            </div>
          </div>

          <div className="d-flex flex-column align-items-end">
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#f1f1f1",
                marginBottom: "5px",
              }}
            ></div>
            <p
              className="text-[#494949] font-normal"
              style={{ fontWeight: "400", fontSize: "14px" }}
            >
              Mahitha
            </p>
            <div
              style={{
                backgroundColor: "#f1f1f1",
                color: "#222",
                borderRadius: "25px",
                padding: "10px 20px",
                maxWidth: "250px",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              Hello Jackob
            </div>
            <div
              style={{
                backgroundColor: "#f1f1f1",
                color: "#222",
                borderRadius: "25px",
                padding: "10px 20px",
                maxWidth: "200px",
                marginTop: "5px",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              I’m sharing
            </div>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "white",
                marginTop: "5px",
              }}
            ></div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between position-absolute start-0 bottom-0 w-100 px-3 pb-3">
          <div
            className="d-flex align-items-center w-100"
            style={{
              backgroundColor: "#f8f8f8",
              borderRadius: "40px",
              padding: "8px 16px",
            }}
          >
            <button
              className="btn p-0 border-0 bg-transparent"
              style={{ marginRight: "10px" }}
              onClick={handleClosePopup}
            >
              <img
                src={mediaIcon}
                alt="Attach"
                style={{ width: "20px", height: "20px" }}
              />
            </button>
            <input
              type="text"
              placeholder="Type here..."
              className="form-control border-0 shadow-none"
              style={{
                backgroundColor: "transparent",
                color: "#555",
                fontSize: "16px",
                fontWeight: "400",
                outline: "none",
              }}
            />
            <button
              className="btn d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#00b4a8",
                width: "55px",
                height: "45px",
                borderRadius: "50%",
                padding: "0",
                marginLeft: "10px",
              }}
            >
              <img src={send} alt="Send" />
            </button>
          </div>
          {showUpload && <UploadPopup onClose={handleClosePopup} />}
        </div>
      </div>
    </div>
  );
}

export default VirtualAppointment;
