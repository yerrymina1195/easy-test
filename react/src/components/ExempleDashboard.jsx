import React, { useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { PiUsersThreeThin } from "react-icons/pi";
import {
  HiOutlineShoppingBag,
  HiOutlineBookmarkSquare,
  HiOutlineTag,
} from "react-icons/hi2";

import { IoFlashOutline } from "react-icons/io5";

import { NavLink } from "react-router-dom";
import axiosClient from "../axios.js";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Contenue from "./Contenue";
import Navbar from "./Navbar";

const ExempleDashboard = () => {
  const { userToken, loading, updatecategorie } = useStateContext();
  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    await axiosClient.get(`/categorie`).then(({ data }) => {
      updatecategorie(data);
    });
  };

  if (!userToken) {
    return <Navigate to="/" />;
  }
  // className={({ isActive }) => (isActive ? activeLink : normalLink)}
  const inactive =
    "flex items-center group/nav p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group";
  const active =
    "flex items-center group/nav p-2 text-amber-600 rounded-lg dark:text-white bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 group";
  return (
    <>
      {loading ? (
        <div
          wire:loading
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
        >
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          <h2 className="text-center text-white text-xl font-semibold">
            Loading...
          </h2>
          <p className="w-1/3 text-center text-white">
            This may take a few seconds, please don't close this page.
          </p>
        </div>
      ) : (
        <div>
          {/* Barre de navigation */}
          <Navbar />
          {/* Barre de navigation */}

          {/* Side Barre */}
          <aside
            id="logo-sidebar"
            className="fixed bg-[#F9FAFB] top-0 left-0 md:z-20 z-50 w-64 h-screen pt-20 transition-transform -translate-x-full  sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 pb-4 overflow-y-auto  dark:bg-gray-800">
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-transparent dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400"
              >
                <NavLink
                  to={"/dashbord"}
                  className={({ isActive }) => (isActive ? active : inactive)}
                >
                  <p className="flex items-center gap-3 my-5 mx-3 group/nav ">
                    <span>
                      <AiOutlineHome className="w-6 h-6  group-hover/nav:text-amber-600" />
                    </span>
                    <span className="  group-hover/nav:text-amber-600">
                      Dashboard
                    </span>
                  </p>
                </NavLink>
                <h2 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500  dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span className="mx-4   text-gray-600">Shop</span>
                    <svg
                      data-accordion-icon
                      className="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-1"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div className="  dark:border-gray-700">
                    <ul className="space-y-2 font-medium">
                      <li>
                        <NavLink
                          to={"/produits"}
                          className={({ isActive }) =>
                            isActive ? active : inactive
                          }
                        >
                          <IoFlashOutline className="w-6 h-6 group-hover/nav:text-amber-600" />
                          <span className="ml-3 flex-1  whitespace-nowrap   group-hover/nav:text-amber-600">
                            Product
                          </span>
                          <span className="inline-flex items-center justify-center w-5 h-3 px-4 py-3 ml-3 text-sm font-medium text-amber-600 bg-amber-100 rounded-md dark:bg-amber-900 dark:text-amber-300">
                            19
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/customers"}
                          className={({ isActive }) =>
                            isActive ? active : inactive
                          }
                        >
                          <PiUsersThreeThin className="w-6 h-6  group-hover/nav:text-amber-600" />
                          <span className="flex-1 ml-3 whitespace-nowrap  group-hover/nav:text-amber-600">
                            Customers
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/order"}
                          className={({ isActive }) =>
                            isActive ? active : inactive
                          }
                        >
                          <HiOutlineShoppingBag className="w-6 h-6  group-hover/nav:text-amber-600" />
                          <span className="flex-1 ml-3 whitespace-nowrap group-hover/nav:text-amber-600">
                            Orders
                          </span>
                          <span className="inline-flex items-center justify-center w-5 h-3 px-4 py-3 ml-3 text-sm font-medium text-amber-600 bg-amber-100 rounded-md dark:bg-amber-900 dark:text-amber-300">
                            194
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/categories"}
                          className={({ isActive }) =>
                            isActive ? active : inactive
                          }
                        >
                          <HiOutlineTag className="w-6 h-6  group-hover/nav:text-amber-600" />
                          <span className="flex-1 ml-3 whitespace-nowrap group-hover/nav:text-amber-600">
                            Categories
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/brands"}
                          className={({ isActive }) =>
                            isActive ? active : inactive
                          }
                        >
                          <HiOutlineBookmarkSquare className="w-6 h-6  group-hover/nav:text-amber-600" />
                          <span className="flex-1 ml-3 whitespace-nowrap group-hover/nav:text-amber-600">
                            Brands
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500  dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="true"
                aria-controls="accordion-flush-body-2"
              >
                <span>Blog</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-2"
              className="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="  dark:border-gray-700">
                <ul className="space-y-2 font-medium">
                  <li>
                    <NavLink 
                      to={"/"}
                      className="flex items-center group/nav p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <AiOutlineFileText className="w-6 h-6 text-gray-500 group-hover/nav:text-amber-600" />
                      <span className="flex-1 ml-3 whitespace-nowrap group-hover/nav:text-amber-600">
                        Post
                      </span>
                    </NavLink >
                  </li>
                  <li>
                    <NavLink 
                      to={"/"}
                      className="flex items-center group/nav p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <BiArchive className="w-6 h-6 text-gray-500 group-hover/nav:text-amber-600" />
                      <span className="flex-1 ml-3 whitespace-nowrap group-hover/nav:text-amber-600">
                        Categories
                      </span>
                    </NavLink >
                  </li>
                  <li>
                    <NavLink 
                      to={"/"}
                      className="flex items-center group/nav p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <PiUsersThin className="w-6 h-6 text-gray-500 group-hover/nav:text-amber-600" />
                      <span className="flex-1 ml-3 whitespace-nowrap group-hover/nav:text-amber-600">
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
          <Contenue />
          {/* contenue */}
        </div>
      )}
    </>
  );
};

export default ExempleDashboard;
