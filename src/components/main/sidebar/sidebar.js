import { useEffect, useState } from "react";
import { ADMIN, USER_TYPE } from "../../../constant";
import {
  ADMIN_DASHBOARD,
  ADMIN_SETTINGS,
  DASHBOARD,
  HOME,
  USER_SETTINGS,
} from "../../../constant/routes";
import NavItem from "./nav-item";

const Sidebar = ({ activePage, setActivePage }) => {
  const userType = localStorage.getItem(USER_TYPE);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (userType === ADMIN) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className="w-60 h-full mt-8 shadow-md px-1 absolute bg-indigo-600">
      <ul className="relative mt-6">
        <li className="relative">
          {isAdmin ? (
            <>
              <NavItem
                activePage={activePage}
                link={ADMIN_DASHBOARD}
                title="Dashboard"
                setActivePage={setActivePage}
              />
              <NavItem
                activePage={activePage}
                link={HOME}
                title="Home"
                setActivePage={setActivePage}
              />
              <NavItem
                activePage={activePage}
                link={ADMIN_SETTINGS}
                title="Settings"
                setActivePage={setActivePage}
              />
            </>
          ) : (
            <>
              <NavItem
                activePage={activePage}
                link={DASHBOARD}
                title="Dashboard"
                setActivePage={setActivePage}
              />
              <NavItem
                activePage={activePage}
                link={HOME}
                title="Home"
                setActivePage={setActivePage}
              />
              <NavItem
                activePage={activePage}
                link={USER_SETTINGS}
                title="Settings"
                setActivePage={setActivePage}
              />
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
