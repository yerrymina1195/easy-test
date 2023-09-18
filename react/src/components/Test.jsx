import React from "react";
import InputSearch from "../components/InputSearch";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdArrowRoundDown } from "react-icons/io";


const Test = () => {
  const dataTable = [
    {
      name: "Abdoulaye SENE",
      email: "latyr0503@gmail.com",
      contry: "Sénégal",
      phone: "+221 77 124 10 31",
    },
    {
      name: "Latyr SENE",
      email: "latyr@gmail.com",
      contry: "Gambie",
      phone: "+221 77 251 85 31",
    },
    {
      name: "Maina SOW",
      email: "maina@gmail.com",
      contry: "Mali",
      phone: "+221 77 754 10 54",
    },
    {
      name: "Mariéme DIOP",
      email: "diop@gmail.com",
      contry: "Guinée",
      phone: "+221 77 125 10 31",
    },
    {
      name: "Rakhma biaye",
      email: "rakhma@gmail.com",
      contry: "Sénégal",
      phone: "+221 77 124 10 31",
    },
  ];
  return (
    <div className="p-10 ">
      <table class="md:w-full border border-gray-800 rounded-lg text-sm text-left  text-gray-500 dark:text-gray-400">
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
                Images{" "}
                <span>
                  <IoMdArrowRoundDown />
                </span>
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
                Email address{" "}
                <span>
                  <IoMdArrowRoundDown />
                </span>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              Country
            </th>
            <th scope="col" class="px-6 py-3">
              <div className="flex gap-2">
                Phone{" "}
                <span>
                  <IoMdArrowRoundDown />
                </span>
              </div>
            </th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-amber-600">
            <td class="w-4 p-4"></td>
            <td class="px-6 py-4">
              <InputSearch />
            </td>
            <td class="px-6 py-4">
              <InputSearch />
            </td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4"></td>
          </tr>
          {dataTable.map((data, index) => {
            return (
              <tr
                key={index}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-amber-600"
              >
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
                <td class="px-6 py-4">{data.name}</td>
                <td class="px-6 py-4">{data.email}</td>
                <td class="px-6 py-4">{data.contry}</td>
                <td class="px-6 py-4">{data.phone}</td>
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
  );
};

export default Test;
