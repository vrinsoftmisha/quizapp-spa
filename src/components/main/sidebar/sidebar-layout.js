import { useState } from "react";
import { Outlet } from "react-router-dom";
import { DASHBOARD } from "../../../constant/routes";
import Sidebar from "./sidebar";

const SidebarLayout = () => {
  const [activePage, setActivePage] = useState(DASHBOARD);

  return (
    <>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <Outlet />
    </>
  );
};

export default SidebarLayout;
