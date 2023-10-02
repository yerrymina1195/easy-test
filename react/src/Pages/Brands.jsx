import React from "react";
import InputSearch from "../components/InputSearch";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdArrowRoundDown } from "react-icons/io";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosClient from "../axios";
import axios from "axios";
import FilAriane from "../components/FilAriane";
import { useStateContext } from "../contexts/ContextProvider";
const Brands = () => {
  const [brand, SetBrand] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBrand();
  }, []);

  const fetchBrand = async () => {
    await axios.get(`http://localhost:8000/api/brand`).then(({ data }) => {
      updatebrand(data);
    
    });
  };

  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(5);
  const [activePg, setActivePg] = useState(1);

  const last = current * count; // 2*5 =10
  const first = last - count; // 10 - 5 = 5

  const values = brand.slice(first, last);

  const buttonCount = [];
  for (let i = 1; i <= Math.ceil(brand.length / count); i++) {
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
        linkOne={"/brands"}
        nameOne={"Brands"}
        nameTwo={"Brands"}
        linkTwo={"/brands/create"}
        button={"New Brand"}
      />

      <div className="relative border-2 bg-white rounded-2xl">
        <div className="flex items-center border-b-2 gap-5 justify-end p-4  dark:bg-gray-800">
        <InputSearch  handleChange={(e)=> setSearch(e.target.value)}/>
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
                    Name{" "}
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Website{" "}
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
                    Updated Date{" "}
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {values.filter(data => (data.nom.toLowerCase().includes(search) || data.slug.includes(search))
              ).map((data, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-amber-600"
                    key={index}
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
                    <td className="px-6 py-4 whitespace-nowrap">{data.nom}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{data.slug}</td>
                    <td className="px-6 py-4">
                      {data.visibility ? (
                        <AiOutlineCheckCircle className="w-5 h-5 text-green-700" />
                      ) : (
                        <AiOutlineCloseCircle className="w-5 h-5 text-red-700" />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {data.updated_at}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/brands/${data.id}/edit`}
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
        <div className="flex justify-end mx-5">
          {buttonCount.map((btn) => (
            <button
              key={btn}
              className={
                btn == activePg
                  ? "my-3 p-2 text-amber-700 border border-amber-600 w-10 h-10"
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

export default Brands;
