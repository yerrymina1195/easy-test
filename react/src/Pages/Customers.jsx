import React, { useEffect, useState } from "react";
import InputSearch from "../components/InputSearch";

import { FaFilter } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdArrowRoundDown } from "react-icons/io";
import IconNotification from "../components/IconNotification";
import axiosClient from "../axios.js";
import { Link } from "react-router-dom";
import FilAriane from "../components/FilAriane";
const Customers = () => {
  const [client, SetClient] = useState([]);
  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    await axiosClient.get(`/clients`).then(({ data }) => {
      SetClient(data);
    });
  };
  return (
    <div className="container m-10 mx-auto">
      <FilAriane
        linkOne={"/brands"}
        nameOne={"Customers"}
        nameTwo={"Customers"}
        linkTwo={"/customers/create"}
        button={"New Customers"}
      />

      <div className="relative border-2 bg-white overflow-x-auto rounded-2xl">
        <div className="flex items-center border-b-2 gap-5 justify-end p-4  dark:bg-gray-800">
          <InputSearch />
          <IconNotification icon={<FaFilter />} number={0} />
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
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
                    Name{" "}
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Email address{" "}
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Country
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Phone{" "}
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-amber-600">
                <td className="w-4 p-4"></td>
                <td className="px-6 py-4">
                  <InputSearch />
                </td>
                <td className="px-6 py-4">
                  <InputSearch />
                </td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
              </tr>
              {client.map((data, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-amber-600"
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
                    <td className="px-6 py-4">{data.nom}</td>
                    <td className="px-6 py-4">{data.email}</td>
                    <td className="px-6 py-4">{data.date_de_naissance}</td>
                    <td className="px-6 py-4">{data.telephone}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/customers/${data.id}/edit`}
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

export default Customers;
