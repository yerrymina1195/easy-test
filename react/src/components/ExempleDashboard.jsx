import React from "react";
import { BiMenuAltLeft, BiSolidSun, BiLogOut } from "react-icons/bi";
import {
  AiOutlineHome,
  AiOutlineBell,
} from "react-icons/ai";
import { PiUsersThreeThin, PiUsersThin } from "react-icons/pi";
import {
  HiOutlineShoppingBag,
  HiOutlineBookmarkSquare,
  HiOutlineTag,
  HiBellSlash,
  HiMoon,
  HiComputerDesktop,
} from "react-icons/hi2";

import { IoFlashOutline } from "react-icons/io5";

import {Link, NavLink , Outlet } from "react-router-dom";
import InputSearch from "./InputSearch";
import IconNotification from "./IconNotification";
import axiosClient from "../axios.js";
import { Navigate} from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const ExempleDashboard = () => {
  const { userToken,setCurrentUser,setUserToken,loading} =
  useStateContext();
  
  const logout = (e) => {
    e.preventDefault();
    axiosClient.post("/logout").then((res) => {
      setCurrentUser({});
      setUserToken(null);
    });
  };

if (!userToken) {
  return <Navigate to="/" />;
}
  // className={({ isActive }) => (isActive ? activeLink : normalLink)}
  const inactive='flex items-center group/nav p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group';
  const active='flex items-center group/nav p-2 text-amber-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group';
  return (
    <>{loading?(<div wire:loading class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
	<div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
	<h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
	<p class="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
</div>):(
  
    <div>
      {/* Barre de navigation */}
      <nav class="fixed top-0 z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                {/* <span class="sl-only"></span> */}
                <BiMenuAltLeft className="w-6 h-6" />
              </button>
              <Link className="flex ml-2 md:mr-24" to={'/dashbord'}>
                <span class="self-center hidden md:block text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Filament Demo
                </span>
              </Link>
            </div>
            <div class="flex items-center">
              <div class="flex items-center ml-3">
                <div className="flex gap-3 items-center justify-center">
                  <InputSearch />
                  <div class="text-center ">
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
                    class="flex text-sm mr-3 bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-placement="left"
                    data-dropdown-toggle="dropdown-user"
                    data-dropdown-offset-distance="-30"
                    data-dropdown-offset-skidding="110"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  class="z-30 hidden px-3 rounded-lg my-4 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div
                    class="px-4 py-3 gap-3 flex items-center justify-items-center"
                    role="none"
                  >
                    <img
                      class="w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                    <p
                      class="text-sm text-gray-500 dark:text-white"
                      role="none"
                    >
                      Neil Sims
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
                        class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                      >
                        <div class="px-3 py-2">
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
                        class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                      >
                        <div class="px-3 py-2">
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
                        class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                      >
                        <div class="px-3 py-2">
                          <p>Enable system theme</p>
                        </div>
                        <div data-popper-arrow></div>
                      </div>
                    </div>
                  </div>
                  <button className="flex py-3 gap-3 items-center justify-items-center" onClick={(e)=>logout(e)}>
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
        class="fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
        tabindex="-1"
        aria-labelledby="drawer-right-label"
      >
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close menu</span>
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

      {/* Side Barre */}
      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 md:z-20 z-50 w-64 h-screen pt-20 transition-transform -translate-x-full  sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto  dark:bg-gray-800">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-transparent dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <NavLink  to={"/dashbord"} className={({ isActive }) => (isActive ? active : inactive)}>
              <p className="flex items-center gap-3 my-5 mx-3 group/nav ">
                <span>
                  <AiOutlineHome className="w-6 h-6  group-hover/nav:text-amber-600" />
                </span>
                <span className="  group-hover/nav:text-amber-600">
                  Dashboard
                </span>
              </p>
            </NavLink >
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500  dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span className="mx-4   text-gray-600">Shop</span>
                {/* <IoIosArrowDown class="w-5 h-5 rotate-180 shrink-0" /> */}
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              class="hidden"
              aria-labelledby="accordion-flush-heading-1"
            >
              <div class="  dark:border-gray-700">
                <ul class="space-y-2 font-medium">
                  <li>
                    <NavLink 
                      to={"/produits"}
                      className={({ isActive }) => (isActive ? active : inactive)}                    >
                      <IoFlashOutline className="w-6 h-6 group-hover/nav:text-amber-600" />
                      <span class="ml-3 flex-1  whitespace-nowrap text-gray-800  group-hover/nav:text-amber-600">
                        Product
                      </span>
                      <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-amber-600 bg-amber-100 rounded-full dark:bg-amber-900 dark:text-amber-300">
                        19
                      </span>
                    </NavLink >
                  </li>
                  <li>
                    <NavLink 
                      to={"/customers"}
                      className={({ isActive }) => (isActive ? active : inactive)}                    >
                      <PiUsersThreeThin className="w-6 h-6  group-hover/nav:text-amber-600" />
                      <span class="flex-1 ml-3 whitespace-nowrap  group-hover/nav:text-amber-600">
                        Customers
                      </span>
                    </NavLink >
                  </li>
                  <li>
                    <NavLink 
                      to={"/categories"}
                      className={({ isActive }) => (isActive ? active : inactive)}
                    >
                      <HiOutlineShoppingBag className="w-6 h-6  group-hover/nav:text-amber-600" />
                      <span class="flex-1 ml-3 whitespace-nowrap group-hover/nav:text-amber-600">
                        Orders
                      </span>
                      <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-amber-600 bg-amber-100 rounded-full dark:bg-amber-900 dark:text-amber-300">
                        194
                      </span>
                    </NavLink >
                  </li>
                  <li>
                    <NavLink 
                      to={"/categories"}
                      className={({ isActive }) => (isActive ? active : inactive)}                    >
                      <HiOutlineTag className="w-6 h-6  group-hover/nav:text-amber-600" />
                      <span class="flex-1 ml-3 whitespace-nowrap group-hover/nav:text-amber-600">
                        Categories
                      </span>
                    </NavLink >
                  </li>
                  <li>
                    <NavLink 
                      to={"/brands"}
                      className={({ isActive }) => (isActive ? active : inactive)}                    >
                      <HiOutlineBookmarkSquare className="w-6 h-6  group-hover/nav:text-amber-600" />
                      <span class="flex-1 ml-3 whitespace-nowrap group-hover/nav:text-amber-600">
                        Brands
                      </span>
                    </NavLink >
                  </li>
                </ul>
              </div>
            </div>

            {/* <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500  dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="true"
                aria-controls="accordion-flush-body-2"
              >
                <span>Blog</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-2"
              class="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div class="  dark:border-gray-700">
                <ul class="space-y-2 font-medium">
                  <li>
                    <NavLink 
                      to={"/"}
                      class="flex items-center group/nav p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <AiOutlineFileText className="w-6 h-6 text-gray-500 group-hover/nav:text-amber-600" />
                      <span class="flex-1 ml-3 whitespace-nowrap group-hover/nav:text-amber-600">
                        Post
                      </span>
                    </NavLink >
                  </li>
                  <li>
                    <NavLink 
                      to={"/"}
                      class="flex items-center group/nav p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <BiArchive className="w-6 h-6 text-gray-500 group-hover/nav:text-amber-600" />
                      <span class="flex-1 ml-3 whitespace-nowrap group-hover/nav:text-amber-600">
                        Categories
                      </span>
                    </NavLink >
                  </li>
                  <li>
                    <NavLink 
                      to={"/"}
                      class="flex items-center group/nav p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <PiUsersThin className="w-6 h-6 text-gray-500 group-hover/nav:text-amber-600" />
                      <span class="flex-1 ml-3 whitespace-nowrap group-hover/nav:text-amber-600">
                        Authors
                      </span>
                    </NavLink >
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </aside>
      {/* Side Barre */}

      {/* Contenue */}
      <div class="p-4 sm:ml-64">
        <div class="p-4  rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
      {/* contenue */}
    </div>)}
      </>
  );
};

export default ExempleDashboard;
