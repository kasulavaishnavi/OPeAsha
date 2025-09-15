import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// import Topbar from "./Topbar";
import Topbar from "../../pages/Topbar/Topbar";
import Sidebar from './Sidebar';
import Dashboard from './DashBoard';
import DBoard from '../Dashboard/DBoard';
import Appointments from '../../pages/AppointmentPage/Appointments';


// import GeneralHealthcare from './Category/GeneralHealthcare';
// import Orthopedic from './Category/Orthopedic';
// import Neurologist from './Category/Neurologist';
// import Ophthalmology from './Category/Ophthalmology';
// import ENT from './Category/ENT';
// import Dental from './Category/Dental';
// import WomenHealth from './Category/WomenHealth';
// import ChildHealth from './Category/ChildHealth';
// import SkinBeauty from './Category/SkinBeauty';
// import MentalHealth from './Category/MentalHealth';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Cardiologist from '../cardiologist/Cardiologist';

const CategorypageFullPage = () => {
  const location = useLocation();

  // Show Sidebar only on Dashboard route ("/")
  // const showSidebar = location.pathname === "/" || location.pathname === "/category";

  return (
    <div className="vh-100 d-flex flex-column">
      {/* Topbar always visible */}
      <Topbar />

      {/* Sidebar + Main Content */}
      <div className="d-flex flex-grow-1 flex-column">
        {/* {showSidebar && <Sidebar />} */}
        <Sidebar/>

        {/* Routes render here */}
        {/* <div className="flex-grow-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/category/general-healthcare" element={<GeneralHealthcare />} />
            <Route path="/category/cardiologist" element={<Cardiologist/>} />
            <Route path="/category/orthopedic" element={<Orthopedic />} />
            <Route path="/category/neurologist" element={<Neurologist />} />
            <Route path="/category/ophthalmology" element={<Ophthalmology />} />
            <Route path="/category/ent" element={<ENT />} />
            <Route path="/category/dental" element={<Dental />} />
            <Route path="/category/women-health" element={<WomenHealth />} />
            <Route path="/category/child-health" element={<ChildHealth />} />
            <Route path="/category/skin-&-beauty" element={<SkinBeauty />} />
            <Route path="/category/mental-health" element={<MentalHealth />} />
          </Routes>
        </div> */}
        <DBoard/>
      
        <Appointments/>
      </div>
    </div>
  );
};

// // const App = () => (
// //   <Router>
// //     <AppContent />
// //   </Router>
// );

export default CategorypageFullPage;
