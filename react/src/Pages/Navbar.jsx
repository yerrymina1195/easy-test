import { GrNotification } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { LuLaptop2 } from "react-icons/lu";
import { GoSignOut } from "react-icons/go";

import InputSearch from "../components/InputSearch";
import IconNotification from "../components/IconNotification";
import { useState } from "react";
import logo from "../assets/react.svg";
function Navbar() {
  const [openDropDown, setopenDropDown] = useState(false);
  const [btnText, setbtnText] = useState("DropDown");

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Filament Demo
          </span>
        </a>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <InputSearch />
            </li>
            <li>
              <IconNotification number={0} icon={<GrNotification />} />
            </li>
            <li className="position-relative">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                type="button"
                onClick={() => {
                  setopenDropDown(!openDropDown);
                }}
              >
                <img className="h-8 w-8 rounded-full " src={logo} alt="" />
              </button>
              {openDropDown && (
                <div className="absolute flex flex-col m-4 right-10 text-slate-500 bg-white divide-y  z-20 shadow-lg min-w-[180px] rounded-lg items-center">
                  <span
                    className="pl-4 p-2 hover:bg-blue-100 w-[90%] my-1 mx-1 rounded-lg grid place-items-start"
                    onClick={() => {
                      setbtnText(" Option No 1");
                    }}
                  >
                    <div className="flex  justify-center">
                      <div className="pt-1 me-3">
                        <CgProfile />
                      </div>
                      <div>Demo User</div>
                    </div>
                  </span>
                  <span
                    className="pl-4 p-2 hover:bg-blue-100 w-[90%] my-1 mx-1 rounded-lg"
                    onClick={() => {
                      setbtnText(" Option No 2");
                    }}
                  >
                    <div className="flex justify-center">
                      <div className="p-5">
                        <CiLight />
                      </div>
                      <div className="p-5">
                        <MdDarkMode />
                      </div>
                      <div className="p-5">
                        <LuLaptop2 />
                      </div>
                    </div>
                  </span>
                  <span
                    className="pl-4 p-2 hover:bg-blue-100 w-[90%] my-1 mx-1 rounded-lg grid place-items-start"
                    onClick={() => {
                      setbtnText(" Option No 3");
                    }}
                  >
                    <div className="flex  justify-center">
                      <div className="pt-1 me-3">
                        <GoSignOut />
                      </div>
                      <div>Sign Out</div>
                    </div>
                  </span>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
