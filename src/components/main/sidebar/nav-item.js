import { Link } from "react-router-dom";

const NavItem = ({ activePage, link, svgIcon, title, setActivePage }) => (
  <Link
    onClick={() => setActivePage(title)}
    to={link}
    className={`flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-100 hover:bg-indigo-500 transition duration-300 ease-in-out ${
      activePage === title ? "bg-indigo-800" : ""
    }`}
  >
    {svgIcon}
    <div className="font-bold pl-3">{title}</div>
  </Link>
);

export default NavItem;
