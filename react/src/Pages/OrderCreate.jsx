import React, { useState } from "react";
import Editor from "../components/Editor";
import OrderItems from "../components/OrderItems";

export const OrderCreate = () => {
  const [boutonClique, setBoutonClique] = useState(false);
  const [number, setNumber] = useState('')

  const handleBoutonClick = (e) => {
    e.preventDefault();
    // Inversez la valeur de boutonClique pour basculer entre les éléments
      if(number !==''){
        setBoutonClique(!boutonClique);
      }
      else{
       setBoutonClique(boutonClique);
      }
    
  };
 
  const alertee = (e) => {
    e.preventDefault();
    alert("dhfhfvdhvfd");
  };
  return (
    <div className="container m-10 mx-auto">
      <h2 className="text-3xl py-3 font-bold">Create Order</h2>
      <div className="bg-white rounded-xl border border-gray-200  ">
        <ol className="flex items-center border-b border-gray-200 w-full text-sm font-medium  text-gray-500 dark:text-gray-400 sm:text-base">
          <li
          id='details'
            onClick={handleBoutonClick}
            className= {boutonClique? (` m-active flex md:w-full p-5 items-center text-gray-600 dark:text-gray-500 
                dark:after:border-gray-700`):(
                    `flex md:w-full p-5 items-center text-amber-600 dark:text-amber-500 
                dark:after:border-amber-700`
                )}
          >
            <span className= {boutonClique? 
                 (`border-2 flex justify-center items-center w-10 text-white h-10 mr-4 rounded-full bg-amber-600 border-amber-600`):(
                    `border-2 flex justify-center items-center w-10 h-10 mr-4 rounded-full border-amber-600 `
                )}>
           
              {boutonClique ? ('V'):('01')}
            </span>
            Order details
          </li>
          <li className="polygone"></li>
          <li  id='order'  className= {boutonClique ?(
                    `flex md:w-full p-5 items-center text-amber-600 dark:text-amber-500 
                dark:after:border-amber-700`
                ): (` m-active flex md:w-full p-5 items-center text-gray-600 dark:text-gray-500 
                dark:after:border-gray-700`)}>
            <span className= {boutonClique? (
                    `border-2 flex justify-center items-center w-10 h-10 mr-4 rounded-full border-amber-600`
                ):(`border-2 flex justify-center items-center w-10 h-10 mr-4 rounded-full border-gray-600`)}>
              02
            </span>
            Order Items
          </li>
        </ol>
        <form action="">
          <div className={boutonClique ? "visible" : "hidden"}>
            <div className="bg-white border border-gray-200 m-5 rounded-xl">
              <OrderItems />
              <div className="flex justify-center">
                <button className="bg-white border-2 mb-5 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-xs w-full md:text-sm sm:w-auto px-3 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
                  Add to items
                </button>
              </div>
            </div>
          </div>

          <div className={boutonClique ? "hidden" : "visible"}>
            <div className="bg-white border border-gray-200 p-5 m-5 rounded-xl">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="number"
                    className=" text-sm font-medium text-gray-800 dark:text-gray-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
                  >
                    Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    className=" py-2.5 px-3 mt-2 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                   
                    value={number}
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="brand"
                    className=" text-sm font-medium text-gray-800 dark:text-gray-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
                  >
                    Brand
                  </label>
                  <select
                    id="brand"
                    className=" py-2.5 px-3 mt-2 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="brand"
                    className=" text-sm font-medium text-gray-800 dark:text-gray-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
                  >
                    Brand
                  </label>
                  <select
                    id="brand"
                    className=" py-2.5 px-3 mt-2 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="brand"
                    className=" text-sm font-medium text-gray-800 dark:text-gray-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
                  >
                    Brand
                  </label>
                  <select
                    id="brand"
                    className=" py-2.5 px-3 mt-2 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="brand"
                    className=" text-sm font-medium text-gray-800 dark:text-gray-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
                  >
                    Brand
                  </label>
                  <select
                    id="brand"
                    className=" py-2.5 px-3 mt-2 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div className="relative col-span-2 z-0 w-full mb-6 group">
                  <label
                    htmlFor="number"
                    className=" text-sm font-medium text-gray-800 dark:text-gray-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
                  >
                    Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    className=" py-2.5 px-3 mt-2 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder="OR-973371"
                    required
                  />
                </div>
                <div className="flex col-span-2 justify-between gap-5 content-center mb-6">
                  <div>
                    <label
                      htmlFor="City"
                      className=" text-sm font-medium text-gray-800 dark:text-gray-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="City"
                      id="City"
                      className=" py-2.5 px-3 mt-2 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="State"
                      className=" text-sm font-medium text-gray-800 dark:text-gray-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
                    >
                      State / Province
                    </label>
                    <input
                      type="text"
                      name="State"
                      id="State"
                      className=" py-2.5 px-3 mt-2 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                      placeholder="State / Province"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Zip"
                      className=" text-sm font-medium text-gray-800 dark:text-gray-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
                    >
                      Zip / Postal code
                    </label>
                    <input
                      type="text"
                      name="Zip"
                      id="Zip"
                      className=" py-2.5 px-3 mt-2 w-full text-sm text-gray-900 bg-transparent rounded-xl border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                      placeholder=" Zip / Postal code"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <label htmlFor="">Description</label>
                <Editor />
              </div>
            </div>
            {/* <button onClick={handleBoutonClick}>Cliquez-moi !</button> */}
          </div>

          <div className="md:flex p-5 justify-between">
            <button
              onClick={(e) => {
                {
                  boutonClique ? handleBoutonClick(e) : handleBoutonClick(e);
                }
              }}
              className=" bg-white border-2 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-xs w-full md:text-sm sm:w-auto px-3 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              {boutonClique ? " Back" : "Cancel"}
            </button>
            <button
              onClick={(e) => {
                {
                  boutonClique ? alertee(e) : handleBoutonClick(e);
                }
              }}
              className="text-white bg-amber-600 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg md:text-sm text-xs w-full sm:w-auto px-3 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              {boutonClique ? " create" : "next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderCreate;
