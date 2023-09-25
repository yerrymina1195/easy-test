import React from "react";
const OrderCreate = () => {
  return (
    <div className="container m-10 mx-auto">
      <h2 className="text-3xl py-3 font-bold">Create Order</h2>
      <div className="bg-white rounded-xl border border-gray-200  ">
        <ol class="flex items-center w-full text-sm font-medium  text-gray-500 dark:text-gray-400 sm:text-base">
          <li class="flex md:w-full items-center text-gray-600 dark:text-gray-500  dark:after:border-gray-700">
            <span className="border-2 flex justify-center items-center w-10 h-10 mr-4 rounded-full border-gray-400">
              01
            </span>
            Order Details
          </li>
          <li>
            <svg
              class="w-full  h-20 text-gray-600 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </li>
          <li class="flex md:w-full items-center dark:after:border-gray-700">
            <span className="border-2 flex justify-center items-center w-10 h-10 mr-4 rounded-full border-gray-400">
              02
            </span>
            Order Items
          </li>
        </ol>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default OrderCreate;
