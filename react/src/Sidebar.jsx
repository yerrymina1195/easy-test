import { BiHomeAlt, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { IoFlashOutline } from "react-icons/io5";
import { BsHandbag, BsTag, BsFolder2Open, BsPeople } from "react-icons/bs";
import { TfiBookmarkAlt } from "react-icons/tfi";
import { SiGoogledocs } from "react-icons/si";
import { useState } from "react";

function Sidebar() {
  const [openAcordion, setOpenAccordion] = useState(false);
  const [openAcordion1, setOpenAccordion1] = useState(false);

  return (
    <aside className="fixed left-0 w-1/5 h-screen">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 ">
        <ul className="space-y-2 font-medium  text-slate-600 ">
          <li className=" py-8">
            <a
              href="#"
              className="flex items-center p-2rounded-lg
                dark:text-white  group  cursor-pointer"
            >
              <BiHomeAlt className="w-7 h-auto" />
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="flex items-center p-2rounded-lg
                dark:text-white  group  cursor-pointer"
            >
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400"
              >
                <h2 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                    onClick={() => {
                      setOpenAccordion(!openAcordion);
                    }}
                  >
                    <span>Shop</span>
                    {openAcordion ? (
                      <BiChevronDown className="w-8 h-auto  rotate-180 shrink-0 " />
                    ) : (
                      <BiChevronUp className="w-8 h-auto rotate-180 shrink-0 left-8 " />
                    )}
                  </button>
                </h2>
                {openAcordion && (
                  <div className="items-center ">
                    <div className=" flex justify-start items-center  py-3 space-x-4">
                      <IoFlashOutline className="w-7 h-auto flex-shrink-0" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Product
                      </span>
                      <span
                        className="inline-flex items-center justify-center text-xs
                        bg-amber-100 text-amber-600 w-5 h-5 hover:scale-
                       transition-all duration-300 border border-amber-600 rounded 
                       leading-tight font-medium"
                      >
                        0
                      </span>
                    </div>
                    <div className=" flex justify-start items-center  py-3 space-x-4">
                      <IoIosPeople className="w-7 h-auto flex-shrink-0" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Customers
                      </span>
                    </div>
                    <div className=" flex justify-start items-center py-3 space-x-4">
                      <BsHandbag className="w-7 h-auto flex-shrink-0" />
                      <div className="gap-24 flex items-center ">
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Orders
                        </span>
                        <span
                          className=" items-center flex justify-center text-xs
                        bg-amber-100 text-amber-600 w-5 h-5 hover:scale-
                       transition-all duration-300 border border-amber-600 rounded 
                       leading-tight font-medium "
                        >
                          22
                        </span>
                      </div>
                    </div>
                    <div className=" flex justify-start items-center  py-3 space-x-4">
                      <BsTag className="w-7 h-auto flex-shrink-0" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Categories
                      </span>
                    </div>
                    <div className=" flex justify-start items-center  py-3 space-x-4">
                      <TfiBookmarkAlt className="w-7 h-auto flex-shrink-0" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Brands
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="flex items-center p-2rounded-lg
                dark:text-white  group  cursor-pointer"
            >
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400"
              >
                <h2 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                    onClick={() => {
                      setOpenAccordion1(!openAcordion1);
                    }}
                  >
                    <span>Blog</span>
                    {openAcordion1 ? (
                      <BiChevronDown className="w-8 h-auto  rotate-180 shrink-0 " />
                    ) : (
                      <BiChevronUp className="w-8 h-auto rotate-180 shrink-0 left-8 " />
                    )}
                  </button>
                </h2>
                {openAcordion1 && (
                  <div className="items-center ">
                    <div className=" flex justify-start items-center  py-3 space-x-4">
                      <SiGoogledocs className="w-7 h-auto flex-shrink-0" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Posts
                      </span>
                    </div>
                    <div className=" flex justify-start items-center  py-3 space-x-4">
                      <BsFolder2Open className="w-7 h-auto flex-shrink-0" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Categories
                      </span>
                    </div>
                    <div className=" flex justify-start items-center  py-3 space-x-4">
                      <BsPeople className="w-7 h-auto flex-shrink-0" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Authors
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </a>
          </li>
        </ul>
      </div>
      ;
    </aside>
  );
}

export default Sidebar;
