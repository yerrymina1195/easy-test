import React from "react";
import { Link } from "react-router-dom";
// import "../styles/product.css";
import IconNotification from "../components/IconNotification";
import example from "../images/cooffe.jpeg";
import example1 from "../images/code.jpeg";
import example2 from "../images/in.jpeg";
import example3 from "../images/inf.jpeg";
import example4 from "../images/hijab.jpeg";
import example5 from "../images/machine.jpeg";
import example6 from "../images/startup.jpeg";
import example7 from "../images/team.jpeg";
import example8 from "../images/voileedeux.jpeg";
import example9 from "../images/voileeun.jpeg";
import example10 from "../images/wifi.jpeg";
import { GoSearch } from "react-icons/go";
import { FaFilter } from "react-icons/fa";
import { MdViewColumn } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { MdExpandCircleDown } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import InputSearch from "../components/InputSearch";

const Produits = () => {
  return (
    <div class="mt-5">
      <p class="px-5 ">
        <Link to="#" class="text-slate-300">
          Products<span> &gt; </span>
        </Link>

        <Link to="#" class="text-slate-300">
          List
        </Link>
      </p>
      <div class="grid grid-cols-6 gap-4 px-5">
        <div class="col-start-1 col-end-3 ...">
          <p class="text-4xl font-bold">Des produits</p>
        </div>
        <div class="col-end-10 col-span-2 ...">
          <Link to="/produits/create">
            <button className="rounded-md bg-amber-600 px-3 font-bold py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">
              New Produits
            </button>
          </Link>
        </div>
      </div>
      <div class="md:columns-3 sm:columns-1 px-3 mt-3">
        <div class="bg-white  border border-slate-200 rounded-lg m-2 ">
          <div class="haut">
            <p class="text-gray-500">
              Produits totaux <br />
              <span class="font-medium mt-1 text-4xl">52</span>
            </p>
          </div>
        </div>

        <div class=" bg-white px-5 py-5 border border-slate-200 rounded-lg m-2">
          <p class="text-gray-500">
            Inventaire de produits <br />
            <span class="font-medium mt-1 text-4xl">278</span>
          </p>
        </div>

        <div class=" bg-white px-5 py-5 border border-slate-200 rounded-lg m-2">
          <p class="text-gray-500">
            Prix ​​moyen
            <br />
            <span class="font-medium mt-1 text-4xl">296.29</span>
          </p>
        </div>
      </div>
      <div class="border-gray-400 px-5 mt-5 myover">
        <div class="relative border-b-1 w-100">
          <div class="flex items-center border-b-2 gap-5 justify-end p-4  dark:bg-gray-800">
            <InputSearch />
            <IconNotification icon={<FaFilter />} number={0} />
          </div>
        </div>
        <div class="overflow-auto">
          <table class="table-auto">
            <thead>
              <tr>
                <th class="px-4 py-2">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </th>
                <th class="px-4 py-2">Image</th>
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Brand</th>
                <th class="px-4 py-2">Visibility</th>
                <th class="px-4 py-2">Price</th>
                <th class="px-4 py-2">SKU</th>
                <th class="px-4 py-2">Quantify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </td>
                <td cclass="px-4 py-2">
                  <img src={example} alt="" class="w-20" />
                </td>
                <td cclass="px-4 py-2">Portail uniforme numérisé</td>
                <td cclass="px-4 py-2">Oberbrunner-Zemlak</td>
                <td cclass="px-4 py-2">
                  <MdCancel class="w-20 text-3xl text-red-700" />
                </td>
                <td cclass="px-4 py-2">381.02</td>
                <td cclass="px-4 py-2">94741841</td>
                <td class="px-4 py-2 text-center">1</td>
                <td class="px-4 py-2">
                  <Link class="text-amber-600 inline-flex">
                    <RiEditBoxFill class="text-2xl mr-2" /> Modifier
                  </Link>
                </td>
                <hr />
              </tr>
              <tr class="bg-gray-100">
                <th class="px-4 py-2">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </th>
                <td cclass="px-4 py-2">
                  <img src={example1} alt="" class="w-20" />
                </td>
                <td cclass="px-4 py-2">Portail uniforme numérisé</td>
                <td cclass="px-4 py-2">Oberbrunner-Zemlak</td>
                <td cclass="px-4 py-2">
                  <MdExpandCircleDown class="w-20 text-3xl text-green-500" />
                </td>
                <td cclass="px-4 py-2">381.02</td>
                <td cclass="px-4 py-2">94741841</td>
                <td class="px-4 py-2 text-center">1</td>
                <td class="px-4 py-2">
                  <Link class="text-amber-600 inline-flex">
                    <RiEditBoxFill class="text-2xl mr-2" /> Modifier
                  </Link>
                </td>
              </tr>
              <tr>
                <th class="px-4 py-2">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </th>
                <td cclass="px-4 py-2">
                  <img src={example2} alt="" class="w-20" />
                </td>
                <td cclass="px-4 py-2">Portail uniforme numérisé</td>
                <td cclass="px-4 py-2">Oberbrunner-Zemlak</td>
                <td cclass="px-4 py-2">
                  <MdCancel class="w-20 text-3xl text-red-700" />
                </td>
                <td cclass="px-4 py-2">381.02</td>
                <td cclass="px-4 py-2">94741841</td>
                <td class="px-4 py-2 text-center">1</td>
                <td class="px-4 py-2">
                  <Link class="text-amber-600 inline-flex">
                    <RiEditBoxFill class="text-2xl mr-2" /> Modifier
                  </Link>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </td>
                <td cclass="px-4 py-2">
                  <img src={example3} alt="" class="w-20" />
                </td>
                <td cclass="px-4 py-2">Portail uniforme numérisé</td>
                <td cclass="px-4 py-2">Oberbrunner-Zemlak</td>
                <td cclass="px-4 py-2">
                  <MdCancel class="w-20 text-3xl text-red-700" />
                </td>
                <td cclass="px-4 py-2">381.02</td>
                <td cclass="px-4 py-2">94741841</td>
                <td class="px-4 py-2 text-center">1</td>
                <td class="px-4 py-2">
                  <Link class="text-amber-600 inline-flex">
                    <RiEditBoxFill class="text-2xl mr-2" /> Modifier
                  </Link>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </td>
                <td cclass="px-4 py-2">
                  <img src={example4} alt="" class="w-20" />
                </td>
                <td cclass="px-4 py-2">Portail uniforme numérisé</td>
                <td cclass="px-4 py-2">Oberbrunner-Zemlak</td>
                <td cclass="px-4 py-2">
                  <MdExpandCircleDown class="w-20 text-3xl text-green-500" />
                </td>
                <td cclass="px-4 py-2">381.02</td>
                <td cclass="px-4 py-2">94741841</td>
                <td class="px-4 py-2 text-center">1</td>
                <td class="px-4 py-2">
                  <Link class="text-amber-600 inline-flex">
                    <RiEditBoxFill class="text-2xl mr-2" /> Modifier
                  </Link>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </td>
                <td cclass="px-4 py-2">
                  <img src={example5} alt="" class="w-20" />
                </td>
                <td cclass="px-4 py-2">Portail uniforme numérisé</td>
                <td cclass="px-4 py-2">Oberbrunner-Zemlak</td>
                <td cclass="px-4 py-2">
                  <MdCancel class="w-20 text-3xl text-red-700" />
                </td>
                <td cclass="px-4 py-2">381.02</td>
                <td cclass="px-4 py-2">94741841</td>
                <td class="px-4 py-2 text-center">1</td>
                <td class="px-4 py-2">
                  <Link class="text-amber-600 inline-flex">
                    <RiEditBoxFill class="text-2xl mr-2" /> Modifier
                  </Link>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </td>
                <td cclass="px-4 py-2">
                  <img src={example6} alt="" class="w-20" />
                </td>
                <td cclass="px-4 py-2">Portail uniforme numérisé</td>
                <td cclass="px-4 py-2">Oberbrunner-Zemlak</td>
                <td cclass="px-4 py-2">
                  <MdExpandCircleDown class="w-20 text-3xl text-green-500" />
                </td>
                <td cclass="px-4 py-2">381.02</td>
                <td cclass="px-4 py-2">94741841</td>
                <td class="px-4 py-2 text-center">1</td>
                <td class="px-4 py-2">
                  <Link class="text-amber-600 inline-flex">
                    <RiEditBoxFill class="text-2xl mr-2" /> Modifier
                  </Link>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </td>
                <td cclass="px-4 py-2">
                  <img src={example7} alt="" class="w-20" />
                </td>
                <td cclass="px-4 py-2">Portail uniforme numérisé</td>
                <td cclass="px-4 py-2">Oberbrunner-Zemlak</td>
                <td cclass="px-4 py-2">
                  <MdExpandCircleDown class="w-20 text-3xl text-green-500" />
                </td>
                <td cclass="px-4 py-2">381.02</td>
                <td cclass="px-4 py-2">94741841</td>
                <td class="px-4 py-2 text-center">1</td>
                <td class="px-4 py-2">
                  <Link class="text-amber-600 inline-flex">
                    <RiEditBoxFill class="text-2xl mr-2" /> Modifier
                  </Link>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </td>
                <td cclass="px-4 py-2">
                  <img src={example8} alt="" class="w-20 h-10" />
                </td>
                <td cclass="px-4 py-2">Portail uniforme numérisé</td>
                <td cclass="px-4 py-2">Oberbrunner-Zemlak</td>
                <td cclass="px-4 py-2">
                  <MdExpandCircleDown class="w-20 text-3xl text-green-500" />
                </td>
                <td cclass="px-4 py-2">381.02</td>
                <td cclass="px-4 py-2">94741841</td>
                <td class="px-4 py-2 text-center">1</td>
                <td class="px-4 py-2">
                  <Link class="text-amber-600 inline-flex">
                    <RiEditBoxFill class="text-2xl mr-2" /> Modifier
                  </Link>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </td>
                <td cclass="px-4 py-2">
                  <img src={example9} alt="" class="w-20 h-10" />
                </td>
                <td cclass="px-4 py-2">Portail uniforme numérisé</td>
                <td cclass="px-4 py-2">Oberbrunner-Zemlak</td>
                <td cclass="px-4 py-2">
                  <MdExpandCircleDown class="w-20 text-3xl text-green-500 " />
                </td>
                <td cclass="px-4 py-2">381.02</td>
                <td cclass="px-4 py-2">94741841</td>
                <td class="px-4 py-2 text-center">1</td>
                <td class="px-4 py-2">
                  <Link class="text-amber-600 inline-flex">
                    <RiEditBoxFill class="text-2xl mr-2" /> Modifier
                  </Link>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </td>
                <td cclass="px-4 py-2">
                  <img src={example10} alt="" class="w-20 h-10" />
                </td>
                <td cclass="px-4 py-2">Portail uniforme numérisé</td>
                <td cclass="px-4 py-2">Oberbrunner-Zemlak</td>
                <td cclass="px-4 py-2">
                  <MdCancel class="w-20 text-3xl text-red-700" />
                </td>
                <td cclass="px-4 py-2">381.02</td>
                <td cclass="px-4 py-2">94741841</td>
                <td class="px-4 py-2 text-center">1</td>
                <td class="px-4 py-2">
                  <Link class="text-amber-600 inline-flex">
                    <RiEditBoxFill class="text-2xl mr-2" /> Modifier
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="px-20">
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
      </div>
    </div>
  );
};

export default Produits;
