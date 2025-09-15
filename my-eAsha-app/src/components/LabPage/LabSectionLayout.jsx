import React, { useState } from 'react'
import Topbar from '../../pages/Topbar/Topbar'
import { Outlet, useLocation } from 'react-router-dom'
// import Sidebar from '../../pages/ProfilePage/sidebar';
import Sidebar from '../categorypage/Sidebar';
// import Sidebar from '../components/categorypage/Sidebar';

// import Sidebar from '../components/categorypage/Sidebar';

function LabSectionLayout() {
   const location = useLocation();

  // Define routes where sidebar should be hidden
  // const hideSidebarRoutes = ["/lab/bookslot", "/lab/confirm-bookslot"];
  // const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <>
    
      <Topbar/>
      <Sidebar/> 
      {/* {shouldHideSidebar && <Sidebar/>} */}
      <div>
        <Outlet/>
      </div>
      
    </>
  )
}

export default LabSectionLayout
