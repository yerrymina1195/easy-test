import React from "react";

const OrderItems = () => {
  const data = [
    {
      teste: "azer",
    },
    {
      teste: "dfbcvx",
    },
    {
      teste: "fgfds",
    },
    {
      teste: "gfsd",
    },
    {
      teste: "ytyrd",
    },
  ];

  return (
    <div className="">
      <div className="border border-gray-200 m-5 rounded-xl">
        <div className="border-b flex justify-between p-3">
          <svg
            class="w-5 h-5 text-gray-400 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6v13m0 0 3-3m-3 3-3-3m11-2V1m0 0L9 4m3-3 3 3"
            />
          </svg>
          <svg
            class="w-5 h-5 text-red-600 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
          </svg>
        </div>
        <div className="flex flex-row p-3 gap-5 justify-between content-center mb-6">
          <div className="basis-1/2">
            <label
              htmlFor="City"
              className=" text-sm font-medium text-gray-800 dark:text-gray-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
            >
              City
            </label>
            <select
              id="brand"
              className=" py-2.5 px-3 mt-2 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
            >
              {data.map((datas) => (
                <option>{datas.teste}</option>
              ))}
            </select>
          </div>
          <div className="basis-1/4">
            <label
              htmlFor="State"
              className=" text-sm font-medium text-gray-800 dark:text-gray-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
            >
              Quantity
            </label>
            <input
            value={1}
              type="number"
              name="Quantity"
              id="Quantity"
              className=" py-2.5 px-3 mt-2 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
              placeholder="Quantity"
              required
            />
          </div>
          <div className="basis-1/4">
            <label
              htmlFor="Zip"
              className=" text-sm font-medium text-gray-800 dark:text-gray-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
            >
              Unit Price
            </label>
            <input
              type="number"
              name="Unit"
              id="Unit"
              className=" py-2.5 px-3 mt-2 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
              placeholder="Unit Price"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
