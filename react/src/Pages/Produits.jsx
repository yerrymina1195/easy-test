import React from "react";
import { Link } from "react-router-dom";
import IconNotification from "../components/IconNotification";
import example from "../images/cooffe.jpeg";
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
HiViewColumns;
const Produits = () => {
  const cart = [
    {
      title: "Total Products",
      number: 50,
    },
    {
      title: "Product Inventory",
      number: 252,
    },
    {
      title: "Average price",
      number: 248.63,
    },
  ];
  const dataTable = [
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Jav 12, 2023",
      icon: <AiOutlineCheckCircle className="w-5 h-5 text-green-700" />,
      image: example,
      price: 452,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Nov 22, 2023",
      icon: <AiOutlineCheckCircle className="w-5 h-5 text-green-700" />,
      image: example1,
      price: 415,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Avr 5, 2023",
      icon: <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />,
      image: example2,
      price: 157,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Dec 6, 2023",
      icon: <AiOutlineCheckCircle className="w-5 h-5 text-green-700" />,
      image: example3,
      price: 568,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Mai 7, 2023",
      icon: <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />,
      image: example5,
      price: 345,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Jav 17, 2023",
      icon: <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />,
      image: example4,
      price: 451,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Dec 6, 2023",
      icon: <AiOutlineCheckCircle className="w-5 h-5 text-green-700" />,
      image: example6,
      price: 956,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Mai 7, 2023",
      icon: <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />,
      image: example7,
      price: 653,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      brand: "Lorem ipsum dolor sit",
      date: "Jav 17, 2023",
      icon: <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />,
      image: example10,
      price: 230,
      sKU: 123456,
      quantity: 9,
      securityStock: 3,
    },
  ];
  return (
    <div class="mt-5">
      <div className="columns-2">
        <div className="grid justify-items-start">
          <p className="">Products &#62; List</p>
          <h2 className="text-2xl py-3 font-bold">Products</h2>
        </div>
        <div className="grid justify-items-end ">
          <Link to="/customers/create">
            <button className="rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">
              New Products
            </button>
          </Link>
        </div>
      </div>
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
      {/* tableau */}
      <div class="relative border-2 my-5 bg-white rounded-2xl">
        <div class="flex items-center border-b-2 gap-3 justify-end p-4  dark:bg-gray-800">
          <InputSearch />
          <IconNotification icon={<FaFilter />} number={0} />
          <HiViewColumns className="text-gray-400 w-6 h-7 focus:ring-amber-600 focus:border-amber-600 rounded-lg" />
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
                    Image
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
                    Brand{" "}
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
                    Price
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="flex gap-2">
                    SKU
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="flex gap-2">
                    Quantity
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="flex gap-2">
                    Security stock
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
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-amber-600"
                    key={data.id}
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
                    <td class="w-4 p-4">
                      <img src={data.image} alt={data.name} />
                    </td>
                    <td class="px-6 py-4 w-10">{data.name}</td>
                    <td class="px-6 py-4">{data.brand}</td>
                    <td class="px-6 py-4">{data.icon}</td>
                    <td class="px-6 py-4">{data.price}</td>
                    <td class="px-6 py-4">{data.sKU}</td>
                    <td class="px-6 py-4">{data.quantity}</td>
                    <td class="px-6 py-4">{data.securityStock}</td>
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
        {/* <nav
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
        </nav> */}
      </div>

      {/* <div class="px-20">
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
          <div class="flex focus:ring-amber-500 dark:focus:ring-amber-600">
            <p className="mt-2">Per Page </p>
            <select
              name=""
              id=""
              vlaue="Per Page"
              class="rounded-sm ml-2 border-opacity-0 focus:ring-amber-500 dark:focus:ring-amber-600"
            >
              <option value="20">5</option>
              <option value="2">10</option>
              <option value="3">15</option>
              <option value="4">20</option>
            </select>
          </div>
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
      </div> */}
    </div>
  );
};

export default Produits;
