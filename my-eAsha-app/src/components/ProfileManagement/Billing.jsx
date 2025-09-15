// import React from "react";
// import styles from "../../components/ProfileManagement/Billing.module.css";


// function Billing() {
//   return (
//     <div className="w-full mt-5 h-screen flex justify-center">
//       <div className="w-[620px] h-[75px]">
//         <div className="w-full h-full bg-white rounded-lg flex items-center justify-center flex-col">
//           <h2
//             className={styles.headerTwo}
           
//           >
//             Payment and Billing
//           </h2>
//           <p
//             className={styles.paraOne}
//           >
//             Update your Payments method and billing details{" "}
//           </p>
//         </div>
//         <div className="w-full">
//           <div className="flex flex-col gap-2">
//             <label htmlFor="creditCard" className={styles.commnLabel}>
//               Credit card Number
//             </label>
//             <input type="text" className={styles.commonInput} />
//           </div>
//           <div>
//             <div className="flex flex-col gap-2">
//               <label htmlFor="cvv" className={styles.commnLabel}>
//                 CVV
//               </label>
//               <input type="text" className={styles.commonInput} />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label htmlFor="expiry" className={styles.commnLabel}>
//                 Expiry Date
//               </label>
//               <input type="text" className={styles.commonInput} />
//             </div>
//             <div>
//               <img src="" alt="" />
//               <img src="" alt="" />
//               <img src="" alt="" />
//               <img src="" alt="" />
//             </div>
//           </div>
//         </div>

//         <div>
//           <form action="">
//             <h2 className={styles.headerTwo}>Billing Details</h2>
//             <div className="w-full flex flex-col gap-2">
//               <label htmlFor="name" className={styles.commnLabel}>Full Name</label>
//               <input type="text" id="name" className={styles.commonInput} />
//             </div>
//             <div className="w-full flex flex-col gap-2">
//               <label htmlFor="address" className={styles.commnLabel}>Address</label>
//               <input type="text" id="address" className={styles.commonInput} />
//             </div>
//             <div className="w-full flex ">
//               <div className="w-[50%] flex flex-col gap-2">
//                 <label htmlFor="Apt" className={styles.commnLabel}>Apt/suit</label>
//                 <input type="text" id="Apt" className={styles.cmnInputOne}/>
//               </div>
//               <div className="w-[50%] flex flex-col gap-2">
//                 <label htmlFor="city" className={styles.commnLabel}>City</label>
//                 <input type="text" id="city" className={styles.cmnInputOne} />
//               </div>
//             </div>
//             <div className="w-full grid grid-cols-2 gap-2">
//               <div className="flex flex-col  gap-2">
//                 <label htmlFor="state" className={styles.commnLabel}>State</label>
//                 <select name="states" id="state" className={styles.cmnInputOne}>
//                   <option value="state1">State 1</option>
//                   <option value="state2">State 2</option>
//                   <option value="state3">State 3</option>
//                 </select>
//               </div>
//               <div className="w-full flex flex-col gap-2">
//                 <label htmlFor="zip" className={styles.commnLabel}>Zip Code</label>
//                 <input type="text" id="zip" className={styles.cmnInputOne} />
//               </div>
//             </div>
//             <div className="w-full flex justify-start gap-2 mt-3">
//               <button className={styles.btnOne}>Cancel</button>
//               <button className={styles.btnTwo}>Add</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Billing;


import React from "react";
import styles from "./Billing.module.css";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg"; 
import discover from "../../assets/discover.svg";
import cibamerica from "../../assets/cibamerica.svg";

function Billing() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <h2 className={styles.headerTwo}>Payment and Billing</h2>
        <p className={styles.paraOne}>
          Update your Payments method and billing details
        </p>

        <div className={styles.section}>
          <label htmlFor="creditCard" className={styles.commnLabel}>
            Credit Card Number
          </label>
          <input
            id="creditCard"
            type="text"
            className={`${styles.commonInput} ${styles.fullInput}`}
          />
        </div>

        <div className={`${styles.section} ${styles.row}`}>
          <div className={styles.field}>
            <label htmlFor="cvv" className={styles.commnLabel}>
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              className={`${styles.commonInput} ${styles.halfInput}`}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="expiry" className={styles.commnLabel}>
              Expiry Date
            </label>
            <input
              id="expiry"
              type="text"
              placeholder="Exp Date (mm/yyyy)"
              className={`${styles.commonInput} ${styles.halfInput}`}
            />
          </div>
        </div>

        <div className={styles.cardLogos}>
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="Mastercard" />
          <img src={discover} alt="Discover" />
          <img src={cibamerica} alt="Amex" />
        </div>
      </div>

      <form className={styles.card}>
        <h2 className={styles.headerTwo}>Billing Details</h2>

        <div className={styles.section}>
          <label htmlFor="name" className={styles.commnLabel}>
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className={`${styles.commonInput} ${styles.fullInput}`}
          />
        </div>

        <div className={styles.section}>
          <label htmlFor="address" className={styles.commnLabel}>
            Address
          </label>
          <input
            id="address"
            type="text"
            className={`${styles.commonInput} ${styles.fullInput}`}
          />
        </div>

        <div className={`${styles.section} ${styles.row}`}>
          <div className={styles.field}>
            <label htmlFor="apt" className={styles.commnLabel}>
              Apt/Suite
            </label>
            <input
              id="apt"
              type="text"
              className={`${styles.commonInput} ${styles.halfInput}`}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="city" className={styles.commnLabel}>
              City
            </label>
            <input
              id="city"
              type="text"
              className={`${styles.commonInput} ${styles.halfInput}`}
            />
          </div>
        </div>

        <div className={`${styles.section} ${styles.row}`}>
          <div className={styles.field}>
            <label htmlFor="state" className={styles.commnLabel}>
              State
            </label>
            <select
              id="state"
              className={`${styles.commonInput} ${styles.halfInput}`}
            >
              <option>State 1</option>
              <option>State 2</option>
              <option>State 3</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="zip" className={styles.commnLabel}>
              Zip Code
            </label>
            <input
              id="zip"
              type="text"
              className={`${styles.commonInput} ${styles.halfInput}`}
            />
          </div>
        </div>

        <div className={styles.buttonRow}>
          <button type="button" className={styles.btnOne}>
            Cancel
          </button>
          <button type="submit" className={styles.btnTwo}>
            Add
          </button>
        </div>

        <p className={styles.noTransactions}>No recent transaction.</p>
      </form>
    </div>
  );
}

export default Billing;

