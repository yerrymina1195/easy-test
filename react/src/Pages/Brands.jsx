import React from 'react'
import InputSearch from "../components/InputSearch";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdArrowRoundDown } from "react-icons/io";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const Brands = () => {
    const dataTable = [
        {
          name: "Abdoulaye SENE",
          website: "http://localhost/dashboard/",
          date: "Jav 12, 2023",
          icon: <AiOutlineCheckCircle className="w-5 h-5 text-green-700" />,
        },
        {
          name: "Latyr SENE",
          website: "http://localhost/dashboard/",
          date: "Nov 22, 2023",
          icon: <AiOutlineCheckCircle className="w-5 h-5 text-green-700" />,
        },
        {
          name: "Maina SOW",
          website: "http://localhost/dashboard/",
          date: "Avr 5, 2023",
          icon: <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />,
        },
        {
          name: "Mariéme DIOP",
          website: "http://localhost/dashboard/",
          date: "Dec 6, 2023",
          icon: <AiOutlineCheckCircle className="w-5 h-5 text-green-700" />,
        },
        {
          name: "Rakhma BIAYE",
          website: "http://localhost/dashboard/",
          date: "Mai 7, 2023",
          icon: <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />,
        },
        {
            name: "Moussa FALL",
            website: "http://localhost/dashboard/",
            date: "Jav 17, 2023",
            icon: <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />,
          },
      ];
      return (
        <div className="container overflow-auto m-10 mx-auto">
          <div className="columns-2">
            <div className="grid justify-items-start">
              <p className="">Brands &#62; List</p>
              <h2 className="text-2xl py-3 font-bold">Brands</h2>
            </div>
            <div className="grid justify-items-end">
              <button className="rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">
                New Brand
              </button>
            </div>
          </div>
    
          <div class="relative border-2 bg-white rounded-2xl">
            <div class="flex items-center border-b-2 gap-5 justify-end p-4  dark:bg-gray-800">
              <InputSearch />
            </div>
            <div className="overflow-auto ">
              <table class="w-full text-sm text-left  text-gray-500 dark:text-gray-400 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-all-search" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <div className="flex gap-2">
                        Name{" "}
                        <span>
                          <IoMdArrowRoundDown />
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <div className="flex gap-2">
                        Website{" "}
                        <span>
                          <IoMdArrowRoundDown />
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <div className="flex gap-2">
                        Visibility{" "}
                        <span>
                          <IoMdArrowRoundDown />
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <div className="flex gap-2">
                        Updated Date{" "}
                        <span>
                          <IoMdArrowRoundDown />
                        </span>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {dataTable.map((data) => {
                    return (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-amber-600">
                        <td class="w-4 p-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-table-search-1"
                              type="checkbox"
                              class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-table-search-1" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td class="px-6 py-4">{data.name}</td>
                        <td class="px-6 py-4">{data.website}</td>
                        <td class="px-6 py-4">{data.icon}</td>
                        <td class="px-6 py-4">{data.date}</td>
                        <td class="px-6 py-4">
                          <a
                            href="#"
                            type="button"
                            class="font-medium flex gap-2 text-amber-600 dark:text-amber-500 hover:underline"
                          >
                            <FaRegPenToSquare />
                            Edit
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <nav
              class="flex items-center justify-between p-5"
              aria-label="Table navigation"
            >
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span class="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>{" "}
                of{" "}
                <span class="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul class="inline-flex -space-x-px text-sm h-8">
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      );
}

export default Brands