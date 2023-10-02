import React, { useEffect, useState } from "react";
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
      name: "orem ipsum dolor sit amet",
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
          <InputSearch handleChange={(e) => setSearch(e.target.value)}/>
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
                      <Link  to={`/produits/${data.id}/edit`}>
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
