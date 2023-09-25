import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconNotification from "../components/IconNotification";
import example1 from "../images/code.jpeg";
import example2 from "../images/in.jpeg";
import example3 from "../images/inf.jpeg";
import example4 from "../images/hijab.jpeg";
import example5 from "../images/machine.jpeg";
import example6 from "../images/startup.jpeg";
import example7 from "../images/team.jpeg";
import example10 from "../images/wifi.jpeg";
import InputSearch from "../components/InputSearch";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdArrowRoundDown } from "react-icons/io";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { HiViewColumns } from "react-icons/hi2";
import FilAriane from "../components/FilAriane";
HiViewColumns;
const Order = () => {
  const cart = [
    {
      title: "Orders",
      number: 1000,
    },
    {
      title: "Open Orders",
      number: 205,
    },
    {
      title: "Average price",
      number: 1.05607,
    },
  ];
  const dataTable = [
    {
      number: "R999555",
      customer: "Lorem ipsum dolor sit",
      date: "Jav 12, 2023",
      status: (
        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          delivered
        </span>
      ),
      currency: 452,
      total: 123456,
      shipping: 9,
    },
    {
      number: "R999555",
      customer: "Lorem ipsum dolor sit",
      date: "Jav 12, 2023",
      status: (
        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          delivered
        </span>
      ),
      currency: 452,
      total: 123456,
      shipping: 9,
    },
    {
      number: "R999555",
      customer: "Lorem ipsum dolor sit",
      date: "Jav 12, 2023",
      status: (
        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          delivered
        </span>
      ),
      currency: 452,
      total: 123456,
      shipping: 9,
    },
    {
      number: "R999555",
      customer: "Lorem ipsum dolor sit",
      date: "Jav 12, 2023",
      status: (
        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          delivered
        </span>
      ),
      currency: 452,
      total: 123456,
      shipping: 9,
    },
    {
      number: "R999555",
      customer: "Lorem ipsum dolor sit",
      date: "Jav 12, 2023",
      status: (
        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          delivered
        </span>
      ),
      currency: 452,
      total: 123456,
      shipping: 9,
    },

  ];
  const [boutonClique, setBoutonClique] = useState(false);
  const handleBoutonClick = () => {
    setBoutonClique(true);
  };
  const handleReinitialiser = () => {
    setBoutonClique(false);
  };

  return (
    <div className="container overflow-auto m-10 mx-auto">
      <FilAriane
        linkOne={"/brands"}
        nameOne={"Orders"}
        nameTwo={"Orders"}
        linkTwo={"/orders/create"}
        button={"New Orders"}
      />
      <div className="grid md:grid-cols-3 my-5 gap-5">
        {cart.map((carte, index) => (
          <div
            className="bg-white border rounded-xl border-gray-200 p-5"
            key={index}
          >
            <p className="text-gray-500">{carte.title}</p>
            <h2 className="text-4xl font-medium">{carte.number}</h2>
          </div>
        ))}
      </div>
      <div className="relative overflow-x-auto grid md:grid-cols-4">
        <ul className=" cursor-pointer col-start-2 p-1 border border-gray-200 text-gray-500 flex gap-1 justify-center items-center rounded-xl my-5 col-span-2 bg-white">
          <li className="hover:text-gray-800 hover:bg-gray-100 p-2 rounded-lg active:text-amber-600">
            All
          </li>
          <li className="hover:text-gray-800 hover:bg-gray-100 p-2 rounded-lg active:text-amber-600">
            New
          </li>
          <li className="hover:text-gray-800 hover:bg-gray-100 p-2 rounded-lg active:text-amber-600">
            Processing
          </li>
          <li className="hover:text-gray-800 hover:bg-gray-100 p-2 rounded-lg active:text-amber-600">
            Shipped
          </li>
          <li className="hover:text-gray-800 hover:bg-gray-100 p-2 rounded-lg active:text-amber-600">
            Delivered
          </li>
          <li className="hover:text-gray-800 hover:bg-gray-100 p-2 rounded-lg active:text-amber-600">
            Cancelled
          </li>
        </ul>
      </div>

      {/* tableau */}
      <div className="relative border-2 my-5 bg-white rounded-2xl">
        <div className="flex items-center border-b-2 md:justify-between p-4 dark:bg-gray-800">
          <div className="md:inline-flex hidden gap-3">
            {/* <!-- Dropdown menu One--> */}
            <div className="">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                data-dropdown-offset-skidding="20"
                className="text-gray-600 border border-gray-300 focus:ring-2 focus:outline-inherit focus:ring-amber-500 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Group by
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
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
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li
                    onClick={handleReinitialiser}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Group by
                  </li>
                  <li
                    onClick={handleBoutonClick}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Order Date
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Dropdown menu One--> */}
            <div
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdownTwo"
              data-dropdown-offset-skidding="20"
            >
              {boutonClique && (
                <button
                  className="text-gray-600 border border-gray-300 focus:ring-2 focus:outline-inherit focus:ring-amber-500 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Ascending
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
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
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              )}
              {/* <!-- Dropdown menu two --> */}
              <div
                id="dropdownTwo"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      to={"#"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Ascending
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Descending
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mr-3">
            <InputSearch />
            <IconNotification icon={<FaFilter />} number={0} />
            <HiViewColumns className="text-gray-400 w-6 h-7 focus:ring-amber-600 focus:border-amber-600 rounded-lg" />
          </div>
        </div>
        <div className="relative overflow-x-auto ">
          <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Number
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Customer
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Status
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Currency
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  <div className="flex gap-2">
                    Total price
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  <div className="flex gap-2">
                    Shipping cost
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  <div className="flex gap-2">
                    Order Date
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map((data, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-amber-600"
                    key={index}
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {data.number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {data.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{data.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{data.currency}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{data.total}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{data.shipping}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{data.date}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={"#"}
                        type="button"
                        className="font-medium flex gap-2 text-amber-600 dark:text-amber-500 hover:underline"
                      >
                        <FaRegPenToSquare />
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <nav
          className="flex items-center justify-between p-5"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <ul className=" md:inline-flex hidden -space-x-px text-sm h-8">
            <li>
              <Link
                to={"#"}
                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Order;
