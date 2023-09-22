import React, { useEffect, useState } from "react";
import InputSearch from "./InputSearch";
import { Link } from "react-router-dom";
import IconNotification from "./IconNotification";
import { BiLogOut, BiMenuAltLeft, BiSolidSun } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import { HiBellSlash, HiComputerDesktop, HiMoon } from "react-icons/hi2";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios.js";

const Navbar = (props) => {
  const { currentUser, setCurrentUser, setUserToken, updatecategorie } =
    useStateContext();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  // console.log(currentUser);
  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    await axiosClient.get(`/categorie`).then(({ data }) => {
      updatecategorie(data);
    });
  };
  useEffect(() => {
    if (currentUser) {
      const nameWords = currentUser?.name?.split(" ");

      const firstLetterOfFirstName = nameWords[0].charAt(0);
      setFirstName(firstLetterOfFirstName);
      // console.log({ firstLetterOfFirstName });

      const lastWordIndex = nameWords.length - 1;
      const lastWord = nameWords[lastWordIndex];
      const firstLetterOfLastName = lastWord.charAt(0);
      setLastName(firstLetterOfLastName);
    }
  }, [currentUser]);
  const logout = (e) => {
    e.preventDefault();
    axiosClient.post("/logout").then((res) => {
      setCurrentUser(null);
      setUserToken(null, null);
      localStorage.clear();
    });
  };

  return (
    <div>
      <nav
        className="fixed top-0 z-30 w-full bg-white border-b border-gray-200 
      dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                className="text-black border lg:hidden border-black font-medium
          rounded-lg text-sm px-1 py-1 mr-2 mb-2 hover:bg-gray-100 
          dark:text-gray-400 dark:hover:bg-gray-700
          dark:focus:ring-gray-600"
                type="button"
                data-drawer-target="drawer-Side"
                data-drawer-show="drawer-Side"
                aria-controls="drawer-Side"
              >
                <BiMenuAltLeft className="w-6 h-6" />
              </button>
              <Link className="flex ml-2" to={"/dashbord"}>
                <span
                  className="self-center hidden md:hidden lg:block text-lg font-bold 
                whitespace-nowrap dark:text-white"
                >
                  Filament Demo
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div className="flex gap-3 items-center justify-center">
                  <InputSearch />
                  <div className="text-center ">
                    <button
                      type="button"
                      data-drawer-target="drawer-right-example"
                      data-drawer-show="drawer-right-example"
                      data-drawer-placement="right"
                      aria-controls="drawer-right-example"
                    >
                      <IconNotification
                        number={0}
                        icon={<AiOutlineBell className="w-6 h-6" />}
                        className="mx-3"
                      />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="flex text-sm mr-3 bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-placement="left"
                    data-dropdown-toggle="dropdown-user"
                    data-dropdown-offset-distance="-30"
                    data-dropdown-offset-skidding="110"
                  >
                    <span className="sr-only">Open user menu</span>
                    {currentUser?.name ? (
                      <div className="w-7 h-7 rounded-full text-sm uppercase font-bold flex items-center justify-center bg-black text-white">
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </button>
                </div>
                <div
                  className="z-30 hidden px-3 rounded-lg my-4 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div
                    className="px-4 py-3 gap-3 flex items-center justify-items-center"
                    role="none"
                  >
                    {currentUser?.name ? (
                      <div className="w-7 h-7 rounded-full text-sm uppercase font-bold flex items-center justify-center bg-black text-white">
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                      </div>
                    ) : (
                      ""
                    )}
                    <p
                      className="text-sm text-gray-500 dark:text-white"
                      role="none"
                    >
                      {currentUser?.name}
                    </p>
                  </div>
                  <div className="py-3 gap-3 px-1 flex items-center justify-evenly">
                    <div className="hover:bg-gray-100 hover:rounded-md px-4 py-2">
                      <button
                        data-popover-target="popover-default"
                        type="button"
                      >
                        <BiSolidSun className="w-5 h-5 text-gray-400 hover:text-amber-500" />
                      </button>
                      <div
                        data-popover
                        id="popover-default"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                      >
                        <div className="px-3 py-2">
                          <p>Enable light theme</p>
                        </div>
                        <div data-popper-arrow></div>
                      </div>
                    </div>
                    <div className="hover:bg-gray-100 hover:rounded-md px-4 py-2">
                      <button
                        data-popover-target="popover-default-1"
                        type="button"
                      >
                        <HiMoon className="w-5 h-5 text-gray-400 hover:text-amber-500" />
                      </button>
                      <div
                        data-popover
                        id="popover-default-1"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                      >
                        <div className="px-3 py-2">
                          <p>Enable dark theme</p>
                        </div>
                        <div data-popper-arrow></div>
                      </div>
                    </div>
                    <div className="hover:bg-gray-100 hover:rounded-md px-4 py-2">
                      <button
                        data-popover-target="popover-default-2"
                        type="button"
                      >
                        <HiComputerDesktop className="w-5 h-5 text-gray-400 hover:text-amber-500" />
                      </button>
                      <div
                        data-popover
                        id="popover-default-2"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                      >
                        <div className="px-3 py-2">
                          <p>Enable system theme</p>
                        </div>
                        <div data-popper-arrow></div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="flex py-3 gap-3 items-center justify-items-center"
                    onClick={(e) => logout(e)}
                  >
                    <BiLogOut className="text-gray-400 w-5 h-5" />
                    <span className="text-sm text-gray-500">Sign out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Barre de navigation */}
      {/* OFF canva */}
      <div
        id="drawer-right-example"
        className="fixed bottom-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="mt-3 grid place-content-center place-items-center">
          <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
            <HiBellSlash className="w-6 h-6 text-gray-500" />
          </div>
          <h3 className="text-gray-900">No notifications</h3>
          <p className="text-gray-600 text-sm">Please check again later.</p>
        </div>
      </div>
      {/* OFF canva */}
    </div>
  );
};

export default Navbar;
