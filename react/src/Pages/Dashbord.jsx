import React from "react";
import { BiLogOut } from "react-icons/bi";
import { FaBookOpen, FaGithub } from "react-icons/fa";
import { BsGraphDownArrow,BsGraphUpArrow } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios.js";
import InputSearch from "../components/InputSearch";
import { IoMdArrowRoundDown } from "react-icons/io";


function Dashbord() {
  const { setCurrentUser,setUserToken} =
  useStateContext();
  
  const logout = (e) => {
    e.preventDefault();
    axiosClient.post("/logout").then((res) => {
      localStorage.removeItem('user')
      setCurrentUser(null);
      setUserToken(null);
    });
  };
  const dataTable = [
    {
      name: "Abdoulaye SENE",
      email: "latyr0503@gmail.com",
      contry: "Sénégal",
      phone: "+221 77 124 10 31",
      icon: (
        <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
          cancelled
        </span>
      ),
    },
    {
      name: "Latyr SENE",
      email: "latyr@gmail.com",
      contry: "Gambie",
      phone: "+221 77 251 85 31",
      icon: (
        <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          shipped
        </span>
      ),
    },
    {
      name: "Maina SOW",
      email: "maina@gmail.com",
      contry: "Mali",
      phone: "+221 77 754 10 54",
      icon: (
        <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
          processing
        </span>
      ),
    },
    {
      name: "Mariéme DIOP",
      email: "diop@gmail.com",
      contry: "Guinée",
      phone: "+221 77 125 10 31",
      icon: (
        <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          delivered
        </span>
      ),
    },
    {
      name: "Rakhma biaye",
      email: "rakhma@gmail.com",
      contry: "Sénégal",
      phone: "+221 77 124 10 31",
      icon: (
        <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
          cancelled
        </span>
      ),
    },
  ];
  // charte 1
  window.addEventListener("load", function () {
    let options = {
      xaxis: {
        show: true,
        categories: [
          "Jav",
          "Feb",
          "Mar",
          "Avr",
          "Mai",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
          formatter: function (value) {
            return "$" + value;
          },
        },
      },
      chart: {
        height: "75%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#d97706",
          gradientToColors: ["#d97706"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0,
        },
      },
      series: [
        {
          name: "New users",
          data: [1500, 1418, 1456, 1526, 1356, 1256,1500, 1418, 1456, 1526, 1356, 1256],
          color: "#d97706",
        },
      ],
    };

    if (
      document.getElementById("area-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("area-chart"),
        options
      );
      chart.render();
    }
  });
  // charte 2
  window.addEventListener("load", function () {
    let options = {
      xaxis: {
        show: true,
        categories: [
          "Jav",
          "Feb",
          "Mar",
          "Avr",
          "Mai",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
          formatter: function (value) {
            return "$" + value;
          },
        },
      },
      series: [
        {
          name: "Developer Edition",
          data: [1500, 1418, 1456, 1526, 1356, 1256,1500, 1418, 1456, 1526, 1356, 1256],
          color: "#d97706",
        },
      ],
      chart: {
        height: "75%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#d97706",
          gradientToColors: ["#d97706"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0,
        },
      },
    };

    if (
      document.getElementById("data-series-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("data-series-chart"),
        options
      );
      chart.render();
    }
  });
  return (
    <div className="container">
      <h1 className="text-2xl py-3 font-bold">Dashboard</h1>
      <div className="md:grid md:grid-cols-2 my-5 gap-5">
        <div className="bg-white my-5 md:my-0 rounded-lg border border-gray-200 p-5">
          <div className="columns-2">
            <div className="columns-1 gap-3 flex  items-center justify-items-center">
              <img
                class="w-12 h-12 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
              <div>
                <h3 className="font-bold">Welcome</h3>
                <p className="text-gray-500">Demo User</p>
              </div>
            </div>
            <div className="float-right">
              <button className="flex rounded-lg px-3 border border-gray-200 py-2 gap-3 items-center justify-items-center hover:bg-gray-100" onClick={(e)=>logout(e)}>
                <BiLogOut className="text-gray-400 w-5 h-5" />
                <span className="text-sm text-gray-900 font-medium">
                  Sign out
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="columns-2">
            <div className="columns-1 gap-3 flex items-center justify-items-center">
              <div>
                <h3 className="font-bold italic">filament</h3>
                <p className="text-gray-500">v3.0.46</p>
              </div>
            </div>
            <div className="float-right">
              <div className="flex gap-3 items-center justify-items-center">
                <FaBookOpen />
                <span>Documentation</span>
              </div>
              <div className="flex gap-3 float-right items-center justify-items-center">
                <FaGithub />
                <span>Github</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-3 my-5 gap-5">
        <div className="bg-white columns-1 my-5 md:my-0 rounded-lg border border-gray-200 p-5">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold">$192.1k</h2>
          <p className="text-green-600 text-sm flex gap-2 items-center justify-items-center">
            32k increase <BsGraphUpArrow />
          </p>
        </div>
        <div className="bg-white columns-1 my-5 md:my-0 rounded-lg border border-gray-200 p-5">
          <p className="text-gray-500">New customers</p>
          <h2 className="text-2xl font-bold">1340</h2>
          <p className="text-red-600 text-sm flex gap-2 items-center justify-items-center">
            3% decrease <BsGraphDownArrow />
          </p>
        </div>
        <div className="bg-white columns-1 my-5 md:my-0 rounded-lg border border-gray-200 p-5">
          <p className="text-gray-500">New orders</p>
          <h2 className="text-2xl font-bold">3543</h2>
          <p className="text-green-600 text-sm flex gap-2 items-center justify-items-center">
            7% increase <BsGraphUpArrow />
          </p>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 my-5 gap-5">
        <div className="bg-white my-5 md:my-0 rounded-lg border border-gray-200">
          <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800">
            <div class="flex justify-start">
              <div className="p-5">
                <h5 class="leading-none text-xl font-bold text-gray-900 dark:text-white pb-2">
                  Orders per month
                </h5>
              </div>
            </div>
            <div id="area-chart"></div>
          </div>
        </div>
        <div className="bg-white my-5 md:my-0 rounded-lg border border-gray-200 ">
          <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 ">
            <div class="flex justify-start">
              <div className="p-5">
                <h5 class="leading-none text-xl font-bold text-gray-900 dark:text-white pb-2">
                  Total customers
                </h5>
              </div>
            </div>
            <div id="data-series-chart"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div class="relative border-2 bg-white overflow-x-auto rounded-2xl">
          <div class="flex items-center border-b-2 gap-5 justify-start p-4  dark:bg-gray-800">
            <h3 className="font-bold">Latest Orders</h3>
          </div>
          <div class="flex items-center border-b-2 gap-5 justify-end p-4  dark:bg-gray-800">
            <InputSearch />
          </div>
          <div className="overflow-auto">
            <table class="md:w-full text-sm text-left  text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {/* <th scope="col" class="p-4">
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
                  </th> */}
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
                      Status{" "}
                      <span>
                        <IoMdArrowRoundDown />
                      </span>
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <div className="flex gap-2">
                      Phone{" "}
                      <span>
                        <IoMdArrowRoundDown />
                      </span>
                    </div>
                  </th>
                  {/* <th scope="col" class="px-6 py-3"></th> */}
                </tr>
              </thead>
              <tbody>
                {dataTable.map((data, index) => {
                  return (
                    <tr
                      key={index}
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-amber-600"
                    >
                      {/* <td class="w-4 p-4">
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
                      </td> */}
                      <td class="px-6 py-4">{data.name}</td>
                      <td class="px-6 py-4">{data.email}</td>
                      <td class="px-6 py-4">{data.contry}</td>
                      <td class="px-6 py-4">{data.icon}</td>
                      <td class="px-6 py-4">{data.phone}</td>
                      {/* <td class="px-6 py-4">
                        <a
                          href="#"
                          type="button"
                          class="font-medium flex gap-2 text-amber-600 dark:text-amber-500 hover:underline"
                        >
                          <FaRegPenToSquare />
                          Edit
                        </a>
                      </td> */}
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
    </div>
  );
}

export default Dashbord;
