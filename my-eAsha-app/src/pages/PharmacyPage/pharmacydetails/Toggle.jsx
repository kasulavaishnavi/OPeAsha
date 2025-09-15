import React, { useState } from "react";
import About from "../../../assets/pharmacyicons/About.png"
import TestTube from "../../../assets/pharmacyicons/TestTube.svg"
import Message from "../../../assets/pharmacyicons/message-question.svg"
import Health from "../../../assets/pharmacyicons/Health.svg"

// export default function TestTabs() {
//   const [activeTab, setActiveTab] = useState("about");

//   const tabs = [
//     { key: "Description", label: "Product Description", icon: About, target: "Description" },
//     { key: "uses", label: "Key Uses", icon: Health, target: "uses" },
//     { key: "howtouse", label: "How to use", icon: TestTube, target: "howtouse" },
//     { key: "info", label: "Safety Information", icon: TestTube, target: "howtouse" },
//     { key: "faq", label: "FAQs", icon: Message, target: "faq" },
//   ];

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <div
//       className="d-flex justify-content-between"
//       style={{
//         width: "1360px",
//         marginLeft: "45px",
//         fontFamily: "'Urbanist', sans-serif",
//         borderRadius: "999px",
//         backgroundColor: "#fff",
//         padding: "8px",
//         border: "1px solid #00A99D",
//         marginTop: "40px",
//       }}
//     >
//       {tabs.map((tab) => {
//         const isActive = activeTab === tab.key;
//         return (
//           <div
//             key={tab.key}
//             onClick={() => {
//               setActiveTab(tab.key);
//               scrollToSection(tab.target);
//             }}
//             className="d-flex align-items-center justify-content-center"
//             style={{
//               flex: 1,
//               padding: "10px 16px",
//               borderRadius: "999px",
//               cursor: "pointer",
//               color: isActive ? "#fff" : "#333",
//               backgroundColor: isActive ? "#00A99D" : "transparent",
//               fontWeight: isActive ? 500 : 400,
//               transition: "all 0.3s ease",
//               gap: "8px",
//               fontSize: "18px",
//             }}
//           >
//             <img
//               src={tab.icon}
//               alt={tab.label}
//               style={{
//                 width: "24px",
//                 height: "24px",
//                 filter: isActive ? "brightness(0) invert(1)" : "none",
//               }}
//             />
//             {tab.label}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

export default function TestTabs() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { key: "Description", label: "Product Description", icon: About, target: "Description" },
    { key: "uses", label: "Key Uses", icon: Health, target: "uses" },
    { key: "howtouse", label: "How to use", icon: TestTube, target: "howtouse" },
    { key: "info", label: "Safety Information", icon: TestTube, target: "howtouse" },
    { key: "faq", label: "FAQs", icon: Message, target: "faq" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="test-tabs-container"
      style={{
        width: "1360px",
        marginLeft: "45px",
        fontFamily: "'Urbanist', sans-serif",
        borderRadius: "999px",
        backgroundColor: "#fff",
        padding: "8px",
        border: "1px solid #00A99D",
        marginTop: "40px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <div
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              scrollToSection(tab.target);
            }}
            className="d-flex align-items-center justify-content-center"
            style={{
              flexShrink: 0,
              padding: "10px 16px",
              borderRadius: "999px",
              cursor: "pointer",
              color: isActive ? "#fff" : "#333",
              backgroundColor: isActive ? "#00A99D" : "transparent",
              fontWeight: isActive ? 500 : 400,
              transition: "all 0.3s ease",
              gap: "8px",
              fontSize: "18px",
              whiteSpace: "nowrap",
            }}
          >
            <img
              src={tab.icon}
              alt={tab.label}
              style={{
                width: "24px",
                height: "24px",
                filter: isActive ? "brightness(0) invert(1)" : "none",
              }}
            />
            {tab.label}
          </div>
        );
      })}
      <style>
        {`
          @media (max-width: 1024px) {
            .test-tabs-container {
              width: 100% !important;
              margin-left: 20px !important;
              overflow-x: auto;
              white-space: nowrap;
              scrollbar-width: thin;
              scrollbar-color: #00A99D transparent;
              justify-content: center !important;
            }
            .test-tabs-container::-webkit-scrollbar {
              height: 6px;
            }
            .test-tabs-container::-webkit-scrollbar-thumb {
              background-color: #00A99D;
              border-radius: 999px;
            }
            .test-tabs-container::-webkit-scrollbar-track {
              background: transparent;
            }
          }
        `}
      </style>
    </div>
  );
}
