import React, { useState } from "react";
import Topbar from "../pages/Topbar/Topbar";
import Sidebar from "../components/cardiologist/Sidebar";
import { Outlet } from "react-router-dom";
import MainContent from "./cardiologist/MainContent";

function DoctorsMainLayout() {

  // const [selectedFilters, setSelectedFilters] = useState({
  //   locations: [],
  //   fee: [],
  //   gender: [],
  //   language: [],
  //   rating: [],
  //   general: [],
  // });

 
  return (
    <>
      <Topbar />
      {/* <div className="d-flex" style={{ paddingTop: "75px" }}>
        <Sidebar
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div> */}
      <Outlet />
    </>
  );
}

export default DoctorsMainLayout;
