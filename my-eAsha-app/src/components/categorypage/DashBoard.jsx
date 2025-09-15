import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import generalHealthCare from '../../assets/DBIcons/generalHealthCare.svg'
import cardiologist from '../../assets/DBIcons/cardiologist.svg'
import orthopedic from '../../assets/DBIcons/orthopedic.svg'
import neurologist from '../../assets/DBIcons/neurologist.svg'
import ophthalmology from '../../assets/DBIcons/ophthalmology.svg'
import ent from '../../assets/DBIcons/ent.svg'
import dental from '../../assets/DBIcons/dental.svg'
import womenHealth from '../../assets/DBIcons/womenHealth.svg'
import childHealth from '../../assets/DBIcons/childHealth.svg'
import  skin from '../../assets/DBIcons/skin.svg'
import mentalHealth from '../../assets/DBIcons/mentalHealth.svg'
import doctor from '../../assets/icons/doctor.svg';
import Topbar from "../../pages/Topbar/Topbar";
import styles from "../../components/categorypage/DashBoard.module.css"

const categories = [
  { name: "General healthcare", icon: generalHealthCare, path: "general-healthcare" },
  { name: "Cardiologist", icon: cardiologist, path: "cardiologist" },
  { name: "Orthopedic", icon: orthopedic, path: "orthopedic" },
  { name: "Neurologist", icon: neurologist, path: "neurologist" },
  { name: "Ophthalmology", icon: ophthalmology, path: "ophthalmology" },
  { name: "ENT", icon: ent, path: "ent" },
  { name: "Dental", icon: dental, path: "dental" },
  { name: "Women health", icon: womenHealth, path: "women-health" },
  { name: "Child health", icon: childHealth, path: "child-health" },
  { name: "Skin & Beauty", icon: skin, path: "skin-&-beauty" },
  { name: "Mental health", icon: mentalHealth, path: "mental-health" },
];

const Dashboard = () => {
  const [marginLeft, setMarginLeft] = useState("0px");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setMarginLeft(window.innerWidth >= 992 ? "310px" : "0px");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (path) => {
    navigate(`/category/${path}`);
  };

  return (
    <div>
      {/* <Topbar/> */}
      <div
      className= {`${styles.mainContainer} position-relative w-[70%]`}
      style={{
        marginLeft: marginLeft,
        marginTop: isMobile ? "66px" : "0px",
        height: "100vh",
        overflow: "hidden",
        padding: isMobile ? "0 16px" : "115px 0px 0px 42px",
      }}
    >
      <h2 
        className="fw-medium mb-4 ms-4 ms-lg-0"
        style={{
          position: isMobile ? "fixed" : "static",
          top: isMobile ? "77px" : "auto",
          left: isMobile ? "44%" : "auto",
          transform: isMobile ? "translateX(-50%)" : "none",
          backgroundColor: isMobile ? "white" : "transparent",
          width: isMobile ? "100%" : "auto",
          padding: isMobile ? "32px 0 16px 66px" : "0",
          borderTop:"1px",
          zIndex: 0,
        }}
      >
        Doctor Specialist
      </h2>

      <div className={`row ${styles.rowContainer}`} style={{ marginTop: isMobile ? "89px" : "0" }}>
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className={`${styles.colContainer}  col-12 col-sm-6 col-md-4 mb-3`}
            style={{ maxWidth: "480px", cursor: "pointer" }}
            onClick={() => handleCategoryClick(cat.path)}
          >
            <div
              className="p-3 bg-white"
              style={{
                border: "1px solid #F7F7F7",
                borderRadius: "18px",
                maxWidth: isMobile ? "100%" : "480px",
                paddingRight: "8px",
              }}
            >
              <div className="d-flex align-items-center">
                <div
                  style={{
                    background: "#e6feff",
                    marginRight: "10px",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    style={{ width: "48px", height: "48px" }}
                  />
                </div>
                <div>
                  <div className="fw-bold" style={{ fontSize: "18px" }}>
                    {cat.name}
                  </div>
                  <div className="d-flex align-items-center mt-1">
                    <img
                      src={doctor}
                      alt="Doctor"
                      style={{
                        width: "16px",
                        height: "16px",
                        marginRight: "6px",
                      }}
                    />
                    <small className="text-muted" style={{ fontSize: "14px" }}>
                      Doctors 245
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;

// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// let categories = [
//   { name: "General healthcare", icon: "generalHealthCare.svg", path: "general-healthcare" },
//   { name: "Cardiologist", icon: "cardiologist.svg", path: "cardiologist" },
//   { name: "Orthopedic", icon: "orthopedic.svg", path: "orthopedic" },
//   { name: "Neurologist", icon: "neurologist.svg", path: "neurologist" },
//   { name: "Ophthalmology", icon: "ophthalmology.svg", path: "ophthalmology" },
//   { name: "ENT", icon: "ent.svg", path: "ent" },
//   { name: "Dental", icon: "dental.svg", path: "dental" },
//   { name: "Women health", icon: "womenHealth.svg", path: "women-health" },
//   { name: "Child health", icon: "childHealth.svg", path: "child-health" },
//   { name: "Skin & Beauty", icon: "skin.svg", path: "skin-&-beauty" },
//   { name: "Mental health", icon: "mentalHealth.svg", path: "mental-health" },
// ];

// categories = categories.sort((a, b) => a.name.localeCompare(b.name));

// const Dashboard = () => {
//   const [marginLeft, setMarginLeft] = useState("0px");
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeChar, setActiveChar] = useState(null);
//   const navigate = useNavigate();

//   const refsByAlphabet = useRef({});
//   const containerRef = useRef(null);

//   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//   useEffect(() => {
//     document.body.style.overflowX = "hidden";
//     return () => (document.body.style.overflowX = "auto");
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//       setMarginLeft(window.innerWidth >= 992 ? "300px" : "0px");
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const onScroll = () => {
//       if (!isMobile || !containerRef.current) return;
//       const scrollTop = containerRef.current.scrollTop;
//       for (let i = 0; i < categories.length; i++) {
//         const el = refsByAlphabet.current[categories[i].name.charAt(0).toUpperCase()];
//         if (el && el.offsetTop - 100 <= scrollTop) {
//           setActiveChar(categories[i].name.charAt(0).toUpperCase());
//         }
//       }
//     };

//     if (isMobile && containerRef.current) {
//       containerRef.current.addEventListener("scroll", onScroll);
//       return () => containerRef.current.removeEventListener("scroll", onScroll);
//     }
//   }, [isMobile]);

//   const handleCategoryClick = (path) => {
//     // navigate(/category/${path});
//     handleCategoryClick(cat.path)
//   };

//   const handleAlphabetClick = (char) => {
//     setActiveChar(char);
//     const index = alphabet.indexOf(char);
//     for (let i = index; i < alphabet.length; i++) {
//       const el = refsByAlphabet.current[alphabet[i]];
//       if (el && el.scrollIntoView) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//         break;
//       }
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="position-relative"
//       style={{
//         marginLeft: marginLeft,
//         marginTop: isMobile ? "66px" : "60px",
//         minHeight: "100vh",
//         overflowX: "hidden",
//         overflowY: "auto",
//         padding: isMobile ? "0 16px" : "42px 0px 0px 42px",
//       }}
//     >
//       <h2
//         className="fw-medium mb-4 ms-4 ms-lg-0"
//         style={{
//           position: isMobile ? "fixed" : "static",
//           top: isMobile ? "77px" : "auto",
//           left: isMobile ? "44%" : "auto",
//           transform: isMobile ? "translateX(-50%)" : "none",
//           backgroundColor: isMobile ? "white" : "transparent",
//           width: isMobile ? "100%" : "auto",
//           padding: isMobile ? "32px 0 16px 66px" : "0",
//           zIndex: 0,
//         }}
//       >
//         Doctors
//       </h2>

//       {/* A–Z Sidebar (only on mobile) */}
//       {isMobile && (
//         <div
//           style={{
//             position: "fixed",
//             top: "155px",
//             right: "6px",
//             zIndex: 10,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "4px",
//             userSelect: "none", // prevent copying
//           }}
//         >
//           {alphabet.map((char) => (
//             <span
//               key={char}
//               style={{
//                 fontSize: "14px",
//                 lineHeight: "14px",
//                 cursor: "pointer",
//                 color: activeChar === char ? "#00A99D" : "#8E8E8E",
//                 fontWeight: activeChar === char ? 600 : 400,
//               }}
//               onClick={() => handleAlphabetClick(char)}
//             >
//               {char}
//             </span>
//           ))}
//         </div>
//       )}

//       <div className="row" style={{ marginTop: isMobile ? "89px" : "0" }}>
//         {categories.map((cat, index) => {
//           const firstChar = cat.name.charAt(0).toUpperCase();
//           return (
//             <div
//               key={index}
//               className="col-12 col-sm-6 col-md-4 mb-3"
//               style={{
//                 maxWidth: isMobile ? "95%" : "380px",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleCategoryClick(cat.path)}
//               ref={(el) => {
//                 if (!refsByAlphabet.current[firstChar]) {
//                   refsByAlphabet.current[firstChar] = el;
//                 }
//               }}
//             >
//               <div
//                 className="p-3 bg-white"
//                 style={{
//                   border: "1px solid #F7F7F7",
//                   borderRadius: "18px",
//                   maxWidth: "100%",
//                   padding: isMobile ? "12px" : "20px",
//                 }}
//               >
//                 <div className="d-flex align-items-center">
//                   <div
//                     style={{
//                       background: "#e6feff",
//                       marginRight: "10px",
//                       width: isMobile ? "38px" : "40px",
//                       height: isMobile ? "36px" : "40px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       borderRadius: "8px",
//                     }}
//                   >
//                     <img
//                       // src={/DashboardIcons/${cat.icon}}
//                       alt={cat.name}
//                       style={{
//                         width: isMobile ? "36px" : "48px",
//                         height: isMobile ? "36px" : "48px",
//                       }}
//                     />
//                   </div>
//                   <div>
//                     <div
//                       className="fw-bold"
//                       style={{ fontSize: isMobile ? "16px" : "18px" }}
//                     >
//                       {cat.name}
//                     </div>
//                     <div className="d-flex align-items-center mt-1">
//                       <img
//                         src="/DashboardIcons/doctor.svg"
//                         alt="Doctor"
//                         style={{
//                           width: "16px",
//                           height: "16px",
//                           marginRight: "6px",
//                         }}
//                       />
//                       <small
//                         className="text-muted"
//                         style={{ fontSize: isMobile ? "12px" : "14px" }}
//                       >
//                         Doctors 245
//                       </small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;