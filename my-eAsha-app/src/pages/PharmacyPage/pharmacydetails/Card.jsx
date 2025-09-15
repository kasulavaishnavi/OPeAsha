import React from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import Medicine from "../../../assets/pharmacyicons/Medicine.png"
import Shieldtick from "../../../assets/pharmacyicons/shield-tick.svg"
import Cardtick from "../../../assets/pharmacyicons/card-tick.svg"
import CartIcon from "../../../assets/pharmacyicons/Cart.svg"
// import Number from "../../assets/number.svg";

// const ParacetamolCard = () => {
//   const font = { fontFamily: "Urbanist, sans-serif" };

//   return (
//     <Card
//       style={{
//         maxWidth: "804px",
//         height: "444px",
//         borderRadius: "12px",
//         ...font,
//         // marginTop: "70px",
//         paddingTop:"90px",
//         marginLeft: "60px",
//         padding: "24px",
//         border: "none",
//         position: "relative",
//       }}
//     >
//       {/* Cart with badge */}
//       <div
//         style={{
//           position: "absolute",
//           top: "14px",
//           right: "0px",
//           display: "flex",
//           alignItems: "center",
//           gap: "10px",
//           left:"1290px"
//         }}
//       >
//         <div style={{ position: "relative", width: "38px", height: "38px" }}>
//           <Image src={CartIcon} alt="Cart" style={{ width: "38px", height: "38px" }} />
//           <div
//             style={{
//               position: "absolute",
//               top: "-5px",
//               left: "22px",
//               backgroundColor: "#00A99D",
//               borderRadius: "50%",
//               width: "20px",
//               height: "20px",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               color: "white",
//               fontSize: "12px",
//               fontWeight: 600,
//             }}
//           >
//             2
//           </div>
//         </div>
//         <span style={{ color: "#00A99D", fontWeight: 500, fontSize: "31px" }}>Cart</span>
//       </div>

//       <Row>
//         {/* Left: Product images */}
//         <Col md={5}>
//           <Image
//             src={Medicine}
//             fluid
//             style={{ borderRadius: "8px", width: "354px", height: "318px" }}
//           />

//           {/* Scrollable thumbnails */}
//           <div
//             style={{
//               display: "flex",
//               overflowX: "auto",
//               gap: "12px",
//               marginTop: "16px",
//               paddingBottom: "6px",
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//               WebkitOverflowScrolling: "touch",
//             }}
//           >
//             <style>
//               {`::-webkit-scrollbar { display: none; }`}
//             </style>
//             <Image src={Medicine} rounded style={{ width: "76px", height: "81px", flexShrink: 0 }} />
//             <Image src={Medicine} rounded style={{ width: "76px", height: "81px", flexShrink: 0 }} />
//             <Image src={Medicine} rounded style={{ width: "76px", height: "81px", flexShrink: 0 }} />
//           </div>
//         </Col>

//         {/* Right: Product details */}
//         <Col
//           md={7}
//           style={{
//             height: "444px",
//             paddingTop: "40px",
//             paddingLeft: "24px",
//           }}
//         >
//           <h5 style={{ fontWeight: 600, fontSize: "31px", width: "431px" }}>
//             Paracetamol Tablets IP 500 mg
//           </h5>
//           <p style={{ fontSize: "24px", fontWeight: 400, color: "#333", marginBottom: "4px" }}>
//             Pharmed Ltd
//           </p>
//           <p style={{ fontSize: "24px", fontWeight: 400, color: "#555", marginBottom: "12px" }}>
//             Strip of 15 units
//           </p>

//           {/* Price section */}
//           <div className="d-flex align-items-end gap-3 mb-2">
//             <div className="d-flex flex-column">
//               <span style={{ fontSize: "24px" }}>
//                 MRP{" "}
//                 <span
//                   style={{
//                     textDecoration: "line-through",
//                     color: "#999",
//                     fontSize: "16px",
//                     lineHeight: "1",
//                   }}
//                 >
//                   ₹700
//                 </span>
//               </span>
//               <h3 style={{ margin: 0, fontWeight: 600, fontSize: "48px" }}>₹500</h3>
//             </div>
//             <span
//               style={{
//                 backgroundColor: "#1F405E",
//                 color: "#fff",
//                 borderRadius: "12px",
//                 padding: "4px 0px 5px 10px",
//                 fontSize: "24px",
//                 fontWeight: 500,
//                 height: "39px",
//                 width: "105px",
//                 marginBottom: "10px",
//               }}
//             >
//               20% Off
//             </span>
//           </div>

//           {/* Add to cart button */}
//           <Button
//             style={{
//               backgroundColor: "#00A99D",
//               border: "none",
//               fontWeight: 400,
//               fontSize: "14px",
//               borderRadius: "28px",
//               marginTop: "10px",
//               width: "180px",
//               height: "40px",
//             }}
//           >
//             Add to cart
//           </Button>

//           {/* Delivery Info */}
//           <div className="mt-3 d-flex align-items-center">
//             <span style={{ fontSize: "18px", fontWeight: 400, color: "#333" }}>
//               Get it by <strong style={{ fontWeight: 600 }}>Tomorrow 5th Aug</strong>
//             </span>
//             <Button
//               size="sm"
//               style={{
//                 marginLeft: "10px",
//                 backgroundColor: "#077E8C1A",
//                 color: "#333",
//                 border: "none",
//                 borderRadius: "12px",
//                 padding: "2px 10px",
//                 fontSize: "18px",
//                 fontWeight: 400,
//                 width: "152px",
//                 height: "42px",
//               }}
//             >
//               500035 <span style={{ color: "#0099AD" }}>Change</span>
//             </Button>
//           </div>

//           {/* Trust Badges */}
//           <div className="d-flex gap-3 mt-3" style={{ fontSize: "18px", height: "44px" }}>
//             <div
//               style={{
//                 backgroundColor: "#077E8C1A",
//                 borderRadius: "12px",
//                 padding: "6px 10px",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "15px",
//               }}
//             >
//               <Image src={Shieldtick} width={24} height={24} alt="Genuine" />
//               <span style={{ color: "#1F405E", width: "120px" }}>100% Genuine</span>
//             </div>
//             <div
//               style={{
//                 backgroundColor: "#077E8C1A",
//                 borderRadius: "12px",
//                 padding: "6px 10px",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "6px",
//               }}
//             >
//               <Image src={Cardtick} width={24} height={24} alt="Secure" />
//               <span style={{ color: "#1F405E", width: "200px" }}>Safe & Secure Payment</span>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Card>
//   );
// };

// export default ParacetamolCard;



const ParacetamolCard = () => {
  const font = { fontFamily: "Urbanist, sans-serif" };

  return (
    <>
      <style>
  {`
    /* Desktop only (min-width: 992px for Bootstrap's lg breakpoint) */
    @media (min-width: 992px) {
      .main-content {
        flex-wrap: nowrap !important;
        align-items: flex-start !important;
      }
      .product-img {
        max-width: 40% !important;
      }
      .product-details {
        max-width: 60% !important;
      }
    }

    @media (max-width: 768px) {
      /* Keep your existing mobile responsiveness untouched */
      .main-content {
        flex-wrap: wrap !important;
      }

      .product-img {
        max-width: 100% !important;
      }

      .product-details {
        max-width: 100% !important;
      }

      .product-details h5 {
        font-size: 16px;
      }

      .product-details p,
      .product-details span {
        font-size: 12px;
      }

      .product-details button {
        width: 100%;
        max-width: 140px;
        font-size: 12px;
      }
    }
  `}
</style>


      <Card
        style={{
          maxWidth: "804px",
          borderRadius: "12px",
          ...font,
          padding: "24px",
          border: "none",
        }}
      >
        <Row
          className="main-content"
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          {/* Left: Product images */}
          <Col className="product-img" md={4} style={{ flex: "0 0 auto" }}>
            <Image
              src={Medicine}
              fluid
              style={{
                borderRadius: "8px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            {/* Scrollable thumbnails */}
            <div
              style={{
                display: "flex",
                overflowX: "auto",
                gap: "12px",
                marginTop: "16px",
                paddingBottom: "6px",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {[...Array(3)].map((_, idx) => (
                <Image
                  key={idx}
                  src={Medicine}
                  rounded
                  style={{
                    width: "76px",
                    height: "81px",
                    flexShrink: 0,
                    objectFit: "cover",
                  }}
                />
              ))}
            </div>
          </Col>

          {/* Right: All product info + delivery + trust badges */}
          <Col className="product-details" md={8}>
            <h5 style={{ fontWeight: 600, fontSize: "20px" }}>
              Paracetamol Tablets IP 500 mg
            </h5>
            <p style={{ fontSize: "14px", color: "#333", marginBottom: "4px" }}>
              Pharmed Ltd
            </p>
            <p style={{ fontSize: "14px", color: "#555", marginBottom: "12px" }}>
              Strip of 15 units
            </p>

            {/* Price */}
            <div className="d-flex align-items-center gap-3 mb-3">
              <div>
                <span style={{ fontSize: "14px" }}>
                  MRP{" "}
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#999",
                      fontSize: "14px",
                    }}
                  >
                    ₹700
                  </span>
                </span>
                <h3 style={{ margin: 0, fontWeight: 600, fontSize: "24px" }}>
                  ₹500
                </h3>
              </div>
              <span
                style={{
                  backgroundColor: "#1F405E",
                  color: "#fff",
                  borderRadius: "20px",
                  padding: "4px 8px",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                20% Off
              </span>
            </div>

            {/* Add to cart */}
            <Button
              style={{
                backgroundColor: "#00A99D",
                border: "none",
                fontWeight: 500,
                fontSize: "14px",
                borderRadius: "28px",
                width: "140px",
                height: "36px",
              }}
            >
              Add to cart
            </Button>

            {/* Delivery info */}
            <div className="mt-3 d-flex align-items-center gap-2">
              <span style={{ fontSize: "14px", color: "#333" }}>
                Get it by <strong>Tomorrow 5th Aug</strong>
              </span>
              <Button
                size="sm"
                style={{
                  backgroundColor: "#077E8C1A",
                  color: "#333",
                  border: "none",
                  borderRadius: "12px",
                  padding: "4px 8px",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                500035 <span style={{ color: "#0099AD" }}>Change</span>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="d-flex gap-3 mt-3" style={{ fontSize: "14px" }}>
              <div
                style={{
                  backgroundColor: "#077E8C1A",
                  borderRadius: "12px",
                  padding: "4px 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Image src={Shieldtick} width={20} height={20} alt="Genuine" />
                <span style={{ color: "#1F405E" }}>100% Genuine</span>
              </div>
              <div
                style={{
                  backgroundColor: "#077E8C1A",
                  borderRadius: "12px",
                  padding: "4px 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Image src={Cardtick} width={20} height={20} alt="Secure" />
                <span style={{ color: "#1F405E" }}>Safe & Secure Payment</span>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ParacetamolCard; 