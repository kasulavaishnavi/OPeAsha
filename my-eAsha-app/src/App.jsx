import React, { useState } from "react";
import ScrollToTop from "./components/commonComponent/ScrollToTop";
import Topbar from "./pages/Topbar/Topbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CategorypageFullPage from "./components/categorypage/CategoryFullPage";
import GeneralHealthcare from "./components/categorypage/Category/GeneralHealthcare";
import Cardiologis from "./components/cardiologist/Cardiologist";
import Orthopedic from "./components/categorypage/Category/Orthopedic";
import Neurologist from "./components/categorypage/Category/Neurologist";
import Ophthalmology from "./components/categorypage/Category/Ophthalmology";
import ENT from "./components/categorypage/Category/ENT";
import Dental from "./components/categorypage/Category/Dental";
import WomenHealth from "./components/categorypage/Category/WomenHealth";
import ChildHealth from "./components/categorypage/Category/ChildHealth";
import SkinBeauty from "./components/categorypage/Category/SkinBeauty";
import MentalHealth from "./components/categorypage/Category/MentalHealth";
import AppointmentPage from "./components/Appointment/AppointmentPage";
import ConfirmAppointment from "./components/Appointment/confirmappointment/ConfirmAppointment";
import Profile from "./pages/ProfilePage/Profile";
import SecurityPanel from "./pages/ProfilePage/SecurityPanel";
import Billing from "./pages/ProfilePage/Billing";
import FamilyPanel from "./pages/ProfilePage//FamilyPanel";
import LegalPanel from "./pages/ProfilePage/LegalPanel";
import ChangePassword from "./pages/ProfilePage/ChangePassword";
import Appointments from "./pages/AppointmentPage/Appointments";
import VirtualAppointment from "./pages/AppointmentPage/VirtualAppointment";
import ReportsPage from "./components/ReportPage/ReportsModel";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/LoginPage/SignUp";
import Forgotpassword from "./pages/LoginPage/Forgotpassword";
import Createpassword from "./pages/LoginPage/Createpassword";
import OTPVerification from "./pages/LoginPage/OTPVerification";
import ContactForm from "./pages/LoginPage/ContactForm";
import ProfileLayout from "./pages/ProfilePage/ProfileLayout";
import Applayout from "./components/Applayout";
import DBoard from "./components/Dashboard/DBoard";
import Dashboard from "./components/categorypage/DashBoard";
import Medication from "./components/Medications/Medication";
import ReportPage from "./components/ReportPage/ReportPage";
import DoctorsMainLayout from "./components/DoctorsMainLayout";
import Cardiologist from "./components/cardiologist/Cardiologist";
import MainContent from "./components/cardiologist/MainContent";
import DoctorsWithSidebarLayout from "./components/DoctorsWithSidebarLayout";
import OrderTracking from "./pages/PharmacyPage/OrderTracking ";
import LabSectionLayout from "./components/LabPage/LabSectionLayout";
import LabTopbarOnlyLayout from "./components/LabPage/LabTopbarLayout";
import LabConfirmAppointment from "./components/LabPage/LabConfirmAppointment";
import LabCardsComponent from "./components/LabPage/LabCardsComponent";
import FullPanel from "./components/LabPage/panel/FullPanel";
import BookSlot from "./components/LabPage/Bookslot/BookSlot";
import HomeSection from "./pages/PharmacyPage/homesec/HomeSection";
import FiltersSidebar from "./pages/PharmacyPage/filters/FilterSidebar";
import PharmacyLayout from "./pages/PharmacyPage/PharmacyLayout";
import MyCart from './pages/PharmacyPage/mycart/MyCart'
import PharmacyDetails from "./pages/PharmacyPage/pharmacydetails/PharmacyDetails";
// import AddAddressModel from './pages/PharmacyPage/addAddress/AddAddressModel'
import SelectedAddressPage from "./pages/PharmacyPage/selectAddress/SelectAddress";
import OrderPayment from './pages/PharmacyPage/confirmpayment/OrderPayment'


// function App() {
//   return (
//     <div className="App">
//       {/* <SignUp/> */}
//       {/* <div className="w-full min-h-screen grid grid-cols-[1fr_1fr] items-center gap-10"> */}

//         {/* <div className="w-full md:w-[calc(100%-300px)] h-screen"> */}
//            <div>
//              <DBoard />
//              {/* <VirtualAppointment/> */}
//              {/* <Billing/> */}
//            </div>
//         {/* </div> */}
//       {/* </div> */}

//       {/* <Payment/> */}
//     </div>
//   );
// }

// export default App;

const clearAllFilters = () => {
  setSelectedFilters({
    locations: [],
    fee: [],
    gender: [],
    language: [],
    rating: [],
    general: [],
  });
};

function App() {
  const [selectedFilters, setSelectedFilters] = useState({
    locations: [],
    fee: [],
    gender: [],
    language: [],
    rating: [],
    general: [],
  });

  return (
    <>
      <ScrollToTop />
      {/* <Topbar /> */}
      {/* <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="/profile/payment-and-billing" element={<Billing />} />
            <Route path="/profile/family-members" element={<FamilyPanel />} /> */}

      <div className="">
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route index element={<DBoard />} />
            <Route path="/category" element={<Dashboard />} />
            <Route path="/appointment" element={<Appointments />} />
            <Route path="/medication" element={<Medication />} />
            <Route path="/reportone" element={<ReportPage />} />
            <Route path="/pharmacy"  element={<HomeSection/>}/>
            
           
         

            {/* <Route element={<LabTopbarOnlyLayout />}>
             <Route path="bookslot" element={<BookSlot />} />
             <Route
                  path="confirm-bookslot"
                  element={<LabConfirmAppointment />}
                /> */}

            {/* <Route path="bookslot" element={<BookSlot />} />
              <Route
                path="confirm-bookslot"
                element={<LabConfirmAppointment />}
              /> */}
            {/* </Route> */}
          </Route>
           <Route path="/ordertracking" element={<OrderTracking />} />
            <Route path="lab" element={<LabSectionLayout />}>
              <Route index element={<LabCardsComponent />} />
              <Route path="panel" element={<FullPanel />} />
            </Route>

          <Route path="lab" element={<LabTopbarOnlyLayout />}>
            <Route path="bookslot" element={<BookSlot />} />
            <Route
              path="confirm-bookslot"
              element={<LabConfirmAppointment />}
            />
          </Route>
          {/* <Route path="/" element={<CategorypageFullPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/create-password" element={<Createpassword />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/contact" element={<ContactForm />} />
          {/* <Route path="/add-member" element={<AddMemberForm />} /> */}
          {/* <Route path="/category" element={<CategorypageFullPage />} /> */}

          
            <Route  path="/pharmacy" element={<PharmacyLayout/>}>
                    <Route index element={<HomeSection/>}   />
                    <Route path="filter" element={<FiltersSidebar/>}/>
                    <Route path="details" element={<PharmacyDetails/>}/>
                    <Route path="mycart" element={<MyCart/>}/>
                    <Route path="address" element={<SelectedAddressPage/>}/>
                    <Route path="payment"  element={<OrderPayment/>}/>
            </Route>

           {/* </Route> */}
          {/* <Route path="category" element={<DoctorsMainLayout />}>
            <Route path="general-healthcare" element={<GeneralHealthcare />} />
            <Route
              path="cardiologist"
              element={
                <MainContent
                  selectedFilters={selectedFilters}
                  setSelectedFilters={setSelectedFilters}
                  clearAllFilters={clearAllFilters}
                />
              }
            />
            <Route path="orthopedic" element={<Orthopedic />} />
            <Route path="neurologist" element={<Neurologist />} />
            <Route path="ophthalmology" element={<Ophthalmology />} />
            <Route path="ent" element={<ENT />} />
            <Route path="dental" element={<Dental />} />
            <Route path="women-health" element={<WomenHealth />} />
            <Route path="child-health" element={<ChildHealth />} />
            <Route path="skin-&-beauty" element={<SkinBeauty />} />
            <Route path="mental-health" element={<MentalHealth />} />

            <Route path="bookappointment" element={<AppointmentPage />} />
            <Route path="confirmappointment" element={<ConfirmAppointment />} />
          </Route> */}
          <Route path="category" element={<DoctorsMainLayout />}>
            {/* wrap specialty routes in sidebar layout */}
            <Route element={<DoctorsWithSidebarLayout />}>
              <Route
                path="general-healthcare"
                element={<GeneralHealthcare />}
              />
              <Route
                path="cardiologist"
                element={
                  <MainContent
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    clearAllFilters={clearAllFilters}
                  />
                }
              />
              <Route path="orthopedic" element={<Orthopedic />} />
              <Route path="neurologist" element={<Neurologist />} />
              <Route path="ophthalmology" element={<Ophthalmology />} />
              <Route path="ent" element={<ENT />} />
              <Route path="dental" element={<Dental />} />
              <Route path="women-health" element={<WomenHealth />} />
              <Route path="child-health" element={<ChildHealth />} />
              <Route path="skin-&-beauty" element={<SkinBeauty />} />
              <Route path="mental-health" element={<MentalHealth />} />
            </Route>

            {/* these two still use DoctorsMainLayout (Topbar) but skip the sidebar */}
            <Route path="bookappointment" element={<AppointmentPage />} />
            <Route path="confirmappointment" element={<ConfirmAppointment />} />
          </Route>

          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/virtual-appointment" element={<VirtualAppointment />} />
          

          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="/profile/payment-and-billing" element={<Billing />} />
            <Route path="/profile/family-members" element={<FamilyPanel />} />
            <Route
              path="/profile/security-and-login"
              element={<SecurityPanel />}
            />
            <Route path="/profile/legal" element={<LegalPanel />} />
            <Route path="/profile/appointment" element={<Appointments />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
