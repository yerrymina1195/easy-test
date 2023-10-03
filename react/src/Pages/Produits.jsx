import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconNotification from "../components/IconNotification";
import InputSearch from "../components/InputSearch";
import { HiViewColumns } from "react-icons/hi2";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdArrowRoundDown } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import FilAriane from "../components/FilAriane";
import axiosClient from "../axios";
const Produits = () => {
  const [produit, setProduit] = useState([]);
  // recuper les  products inventory
  const sumInventory = produit.reduce(
    (accumulator, produit) => accumulator + produit.quantity,
    0
  );
  /* const InitialInventory = {
  //   sku: 0,
  //   quantity: 0,
  //   barcode: 0,
  //   security_stock: 0,
  // };

  // const sumInventory = produit.reduce((accumulator, currentValue) => {
  //   return {
  //     sku: accumulator.sku + currentValue.sku,
  //     quantity: accumulator.quantity + currentValue.quantity,
  //     barcode: accumulator.barcode + currentValue.barcode,
  //     security_stock: accumulator.security_stock + currentValue.security_stock,
  //   };
  // }, InitialInventory);

  // const totalInventory =
  //   sumInventory.sku +
  //   sumInventory.quantity +
  //   sumInventory.barcode +
  //   sumInventory.security_stock;
  */
  //  recuperer average price
  let sumPrice = 0;
  produit.forEach((produit) => {
    sumPrice += parseFloat(produit.prix);
  });
  const cart = [
    {
      title: "Total Products",
      number: produit.length,
    },
    {
      title: "Product Inventory",
      number: sumInventory,
    },
    {
      title: "Average price",
      number: sumPrice,
    },
  ];

  // recuperer les donnes produits
  useEffect(() => {
    fetchProduit();
  }, []);

  const fetchProduit = async () => {
    await axiosClient.get(`/produit`).then(({ data }) => {
      setProduit(data);
    });
  };

  return (
    <div className="container overflow-auto m-10 mx-auto">
      <FilAriane
        linkOne={"/produits"}
        nameOne={"Products"}
        nameTwo={"Products"}
        linkTwo={"/produits/create"}
        button={"New Products"}
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
      {/* tableau */}
      <div className="relative border-2 my-5 bg-white rounded-2xl">
        <div className="flex items-center border-b-2 gap-3 justify-end p-4  dark:bg-gray-800">
          <InputSearch />
          <IconNotification icon={<FaFilter />} number={0} />
          <HiViewColumns className="text-gray-400 w-6 h-7 focus:ring-amber-600 focus:border-amber-600 rounded-lg" />
        </div>
        <div className="relative overflow-x-auto">
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
                    Image
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
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
                    Brand{" "}
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Visibility{" "}
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Price
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    SKU
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Quantity
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {produit.map((data) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-amber-600"
                    key={data.id}
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
                    <td className=" p-4 ">
                      <img
                        src={`${data.image}`}
                        alt={data.nom}
                        className="h-8 w-8"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{data.nom}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {data.brand}
                    </td>
                    <td className="px-6 py-4">
                      {data.visibility ? (
                        <AiOutlineCheckCircle className="w-5 h-5 text-green-700" />
                      ) : (
                        <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />
                      )}
                    </td>
                    <td className="px-6 py-4">{data.prix}</td>
                    <td className="px-6 py-4">{data.sku}</td>
                    <td className="px-6 py-4">{data.quantity}</td>
                    <td className="px-6 py-4">
                      <Link to={`/produits/${data.id}/edit`}>
                        <a
                          href="#"
                          type="button"
                          className="font-medium flex gap-2 text-amber-600 dark:text-amber-500 hover:underline"
                        >
                          <FaRegPenToSquare />
                          Edit
                        </a>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* <nav
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
          <ul className="inline-flex -space-x-px text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav> */}
      </div>

      {/* <div className="px-20">
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
          <div className="flex focus:ring-amber-500 dark:focus:ring-amber-600">
            <p className="mt-2">Per Page </p>
            <select
              name=""
              id=""
              vlaue="Per Page"
              className="rounded-sm ml-2 border-opacity-0 focus:ring-amber-500 dark:focus:ring-amber-600"
            >
              <option value="20">5</option>
              <option value="2">10</option>
              <option value="3">15</option>
              <option value="4">20</option>
            </select>
          </div>
          <ul className="inline-flex -space-x-px text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
