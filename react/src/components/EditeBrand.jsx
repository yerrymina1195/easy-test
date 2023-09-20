import React from "react";
import { Link } from "react-router-dom";
import BtnToggle from "./BtnToggle";
import Editor from "./Editor";
import IconNotification from "./IconNotification";
import example from "../images/cooffe.jpeg";
import example1 from "../images/code.jpeg";
import example2 from "../images/in.jpeg";
import example3 from "../images/inf.jpeg";
import example4 from "../images/hijab.jpeg";
import example5 from "../images/machine.jpeg";
import example6 from "../images/startup.jpeg";
import example7 from "../images/team.jpeg";
import example10 from "../images/wifi.jpeg";
import InputSearch from "./InputSearch";
import { HiViewColumns, HiTrash } from "react-icons/hi2";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { IoMdArrowRoundDown } from "react-icons/io";
import { FaRegPenToSquare } from "react-icons/fa6";

const EditeBrand = (props) => {
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
    <div className="md:m-5">
      <div className="grid grid-cols-2">
        <div className="">
          <p className="text-gray-500 md:text-base text-sm">
            Categories &#62; {"props.name"} &#62; Edit
          </p>
          <h2 className="text-3xl pt-2 font-bold">{"props.name"}</h2>
        </div>
        <div className="grid justify-items-end">
          <Link to="/categories/create">
            <button className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">
              Delete
            </button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-5">
        <div className="md:col-span-2">
          <form>
            <div className="bg-white my-5 md:p-5 p-2.5 rounded-2xl">
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    readOnly
                    name="slug"
                    id="slug"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    disabled
                  />
                  <label
                    for="slug"
                    class="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Slug
                  </label>
                </div>
              </div>
              <div class="grid md:grid-cols-1">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="parent"
                    id="parent"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="parent"
                    class="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Parent
                  </label>
                </div>
                <div class="relative z-0 mb-6 group">
                  <BtnToggle name={"Visible to customers."} />
                </div>
              </div>
              <div class="grid md:grid-cols-1">
                <div class="relative z-0 w-full mb-12 group">
                  <Editor />
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <button
                type="submit"
                class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-auto px-4 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
              >
                Save changes
              </button>
              <button
                type="submit"
                class=" bg-white border-2 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white p-5 my-5 rounded-xl h-40">
          <div>
            <p className="font-medium">Created at</p>
            <p className="text-gray-600">{"props.dateCreate"}</p>
          </div>
          <div className="mt-5">
            <p className="font-medium">Last modified at</p>
            <p className="text-gray-600">{"props.dateEdite"}</p>
          </div>
        </div>
      </div>
      {/* tableau */}
      <div class="relative border-2 my-5 bg-white rounded-2xl">
        <div class="flex items-center border-b-2 gap-3 justify-between p-4  dark:bg-gray-800">
          <h2 className="font-medium">Products</h2>
          <Link to="/customers/create">
            <button className="rounded-md bg-amber-600 md:px-3 px-2 py-1 md:py-1.5 text-sm font-semibold  text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">
              New Products
            </button>
          </Link>
        </div>
        <div class="flex items-center border-b-2 gap-2 justify-end p-4  dark:bg-gray-800">
          <InputSearch />
          <IconNotification icon={<FaFilter />} number={0} />
          <button>
            <HiViewColumns className="text-gray-400 md:w-6 md:h-7 focus:ring-amber-600 focus:border-amber-600 rounded-lg" />
          </button>
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
                      <button className=" text-red-600 hover:text-red-800 justify-center items-center flex font-medium">
                        <HiTrash />
                        Delete
                      </button>
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
    </div>
  );
};

export default EditeBrand;
