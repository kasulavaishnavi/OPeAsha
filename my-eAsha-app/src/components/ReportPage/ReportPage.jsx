import React from "react";
import { Modal, Button, Row, Col, Card } from "react-bootstrap";
import document from "../../assets/document-text.png";
import styles from '../../components/ReportPage/ReportPage.module.css'

const reports = {
  Today: [
    { title: "Blood test" },
    { title: "CT Scan" },
    { title: "MRI" },
    { title: "Prescription" },
    { title: "Diabetes" },
  ],
  Yesterday: [{ title: "Blood test" }, { title: "CT Scan" }, { title: "MRI" }],
  "24 June 2023": [
    { title: "Blood test" },
    { title: "CT Scan" },
    { title: "MRI" },
  ],
};

const ReportCard = ({ title }) => (
  <Card
    className={`cardsContainer ${styles.cardsContainer} mb-3`}
    style={{
      width: "100%",
      height: "102px",
      borderRadius: "28px",
      border: "1px solid #F7F7F7",
      padding: "16px 24px 16px 16px",
      boxShadow: "0px 1px 6px rgba(0,0,0,0.05)",
    }}
  >
    <Row className={`${styles.cardRow} h-100 w-100`}>
      <Col xs={2} className="d-flex align-items-center justify-content-center">
        <img src={document} height={40} width={40} alt="document" />
      </Col>
      <Col xs={10} className={`${styles.reportcardCol}`}>
        <div
          className="fw-medium"
          style={{ fontSize: "18px", color: "#252525" }}
        >
          {title}
        </div>
        <div
          className="text-regular"
          style={{ fontSize: "14px", color: "#6B7582" }}
        >
          Shylaja Lab, Hyderabad, Telangana
        </div>
        <div
          className="text-regular"
          style={{ fontSize: "14px", color: "#6B7582" }}
        >
          25 Jan 2025, 241 KB
        </div>
      </Col>
    </Row>
  </Card>
);


function ReportPage() {
    return (
    <div className= {`${styles.outerMainDiv}`}>
      <div
      style={{
        // marginTop:'120px',
        marginLeft:'352px',
        paddingTop:"120px",
        minHeight: "100vh",
        // width:"100%"
      }}
      className={`${styles.mainContainer}`}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className={`${styles.headerOne}  fw-medium mb-2`} style={{ color: "#252525" }}>
          Reports & Scanning's
        </h2>
      </div>

      {Object.entries(reports).map(([section, items]) => (
        <div key={section} className={` ${styles.cardContainer} mb-4`} style={{ width: "98%" }}>
          <h4 className={` ${styles.headerFour} fw-medium mb-3`} style={{ color: "#494949" }}>
            {section}
          </h4>
          <Row xs={1} sm={2} lg={3} className={`${styles.rowContainer}`}>
            {items.map((item, idx) => (
              <Col key={idx} className={`${styles.colContainer}`}>
                <ReportCard title={item.title} />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
    </div>
  );


//   return (
//     <>
//       <style>
//         {`
//           .custom-radius .modal-content {
//             border-radius: 28px !important;
//             background-color: white;
//             width: 100%;
//             max-width: 1080px;
//             max-height: 724px;
//             overflow-y: auto;
//           }

//           .close-button {
//             background-color: #F7F7F7;
//             height: 49px;
//             border-radius: 28px;
//             padding: 10px 16px;
//             border: none;
//             outline: none;
//             box-shadow: none;
//             display: flex;
//             align-items: center;
//             gap: 10px;
//             color: #252525;
//             font-size: 14px;
//           }

//           .close-button:hover {
//             background-color: #e0e0e0;
//           }

//           /* Optional scrollbar hide for Chrome */
//           .custom-radius .modal-content::-webkit-scrollbar {
//             width: 0px;
//             background: transparent;
//           }
//         `}
//       </style>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         size="xl"
//         centered
//         scrollable
//         dialogClassName="custom-radius"
//       >
//         <div style={{ padding: "40px 40px 0 40px" }}>
//           {/* Header */}
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h2 className="fw-medium m-0" style={{ color: "#252525" }}>
//               Click on the files to copy the link
//             </h2>
//             <Button onClick={handleClose} className="close-button">
//               <span>Close</span>
//               <span style={{ fontSize: "18px", fontWeight: "bold" }}>✕</span>
//             </Button>
//           </div>

//           {/* Sectioned Report Display */}
//           {Object.entries(reports).map(([section, items]) => (
//             <div key={section} className="mb-4">
//               <h4 className="fw-medium mb-3" style={{ color: "#494949" }}>
//                 {section}
//               </h4>
//               <Row xs={1} sm={2} md={3} lg={3}>
//                 {items.map((item, idx) => (
//                   <Col key={idx}>
//                     <ReportCard title={item.title} />
//                   </Col>
//                 ))}
//               </Row>
//             </div>
//           ))}
//         </div>
//       </Modal>
//     </>
//   );
}

export default ReportPage;
