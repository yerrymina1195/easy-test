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

  const [produit, setProduit] = useState([]);
  // recuperer les donnes produits
  useEffect(() => {
    fetchProduit();
  }, []);

  const fetchProduit = async () => {
    await axiosClient.get(`/produit`).then(({ data }) => {
      setProduit(data);
    });
  };

  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(5);
  const [activePg, setActivePg] = useState(1);
  const last = current * count; // 2*5 =10
  const first = last - count; // 10 - 5 = 5

  // const values = produit.slice(first, last);

  const buttonCount = [];
  for (let i = 1; i <= Math.ceil(produit.length / count); i++) {
    buttonCount.push(i);
  }

  const handleClick = (i) => {
    // console.log(i);
    setCurrent(i);
    setActivePg(i);
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
                console.log(data.image);
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
        {/* pagination */}
        <div className="flex justify-end mx-5">
          {buttonCount.map((btn) => (
            <button
              key={btn}
              className={
                btn == activePg
                  ? " my-3 p-2 text-amber-700 border border-amber-600 w-10 h-10"
                  : " my-3 p-2 border border-gray-200 w-10 h-10"
              }
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produits;
