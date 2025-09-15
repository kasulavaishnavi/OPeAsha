import React from "react";
import Topbar from "../../pages/Topbar/Topbar";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../categorypage/Sidebar";

function LabTopbarLayout() {
//   const location = useLocation();
//   const hideSidebarRoutes = ["/lab/bookslot", "/lab/confirm-bookslot"];
//   const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div>
      <Topbar />
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LabTopbarLayout;
