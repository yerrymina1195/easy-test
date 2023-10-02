import React, { useEffect, useState } from "react";
import InputSearch from "../components/InputSearch";
import { GoSearch } from "react-icons/go";
import { FaFilter } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdArrowRoundDown } from "react-icons/io";
import IconNotification from "../components/IconNotification";
import axiosClient from "../axios.js";
import { Link } from "react-router-dom";
import FilAriane from "../components/FilAriane";

const Customers = () => {
  const [client, SetClient] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCategory();
  }, []);
  

 
  const fetchCategory = async () => {
    await axiosClient.get(`/clients`).then(({ data }) => {
      SetClient(data);
    });
  };
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(5);
  const [activePg, setActivePg] = useState(1);

  const last = current * count;
  const first = last - count;

  const values = client.slice(first, last);

  const buttonCount = [];
  for (let i = 1; i <= Math.ceil(client.length / count); i++) {
    buttonCount.push(i);
  }

  const handleClick = (i) => {
    // console.log(i);
    setCurrent(i);
    setActivePg(i);
  };
  return (
    <div className="container m-10 mx-auto">
      <FilAriane
        linkOne={"/brands"}
        nameOne={"Customers"}
        nameTwo={"Customers"}
        linkTwo={"/customers/create"}
        button={"New Customers"}
      />
         
       
      <div className="relative border-2 bg-white overflow-x-auto rounded-2xl">
        <div className="flex items-center border-b-2 gap-5 justify-end p-4  dark:bg-gray-800">
             <InputSearch  handleChange={(e)=> setSearch(e.target.value)}/>
          <IconNotification icon={<FaFilter />} number={0} />
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
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
                    Email address{" "}
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Country
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-2">
                    Phone{" "}
                    <span>
                      <IoMdArrowRoundDown />
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-amber-600">
                <td className="w-4 p-4"></td>
                <td className="px-6 py-4">
                <InputSearch  handleChange={(e)=> setSearch(e.target.value)}/>

                </td>
                <td className="px-6 py-4">
                <InputSearch  handleChange={(e)=> setSearch(e.target.value)}/>
                </td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
              </tr>
           
              {values.filter(data => (data.nom.toLowerCase().includes(search) ||  data.email.includes(search))
              ).map((data) => {
                return (
                  <tr
                    key={data.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-amber-600"
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
                    <td className="px-6 py-4">{data.nom}</td>
                    <td className="px-6 py-4">{data.email}</td>
                    <td className="px-6 py-4">{data.date_de_naissance}</td>
                    <td className="px-6 py-4">{data.telephone}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/customers/${data.id}/edit`}
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

export default Customers;
