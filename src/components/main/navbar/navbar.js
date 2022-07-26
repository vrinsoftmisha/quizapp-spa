import { useState } from "react";

const Navbar = () => {
  const [isOpenProfile, setOpenProfile] = useState(false);

  const handleSignOut = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <nav className="bg-indigo-600 theme-top-nav absolute top-0 left-0 w-full z-10 bg-white lg:flex-row lg:flex-nowrap lg:justify-start flex items-center">
      <div className="h-12 w-full mx-aut0 items-center flex justify-between lg:flex-nowrap flex-wrap">
        <div
          className={
            "text-white flex-shrink-0 flex items-center w-full lg:flex lg:w-auto flex-grow duration-300 transition-all ease-in-out lg:h-auto-important"
          }
        >
          <img
            className="pl-3 block h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
          />

          <span className="flex font-bold text-xl items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out">
            Quiz App
          </span>

          <div className="mr-3 absolute flex right-0 inset-y-0">
            <div>
              <button
                type="button"
                className="mt-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => setOpenProfile(!isOpenProfile)}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
            {isOpenProfile ? (
              <div
                className="origin-top-right mt-12 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <span
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </span>
                <span
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </span>
                <span
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                  onClick={handleSignOut}
                >
                  Sign out
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
