import React, { useRef } from "react";
import Editor from "../components/Editor";
import BtnToggle from "../components/BtnToggle";

const CreateProduits = () => {
  // Créez des références pour le champ de fichier et l'image
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);

  // Gérez le changement de fichier
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Utilisez createObjectURL pour obtenir l'URL de l'image
      const imageURL = URL.createObjectURL(file);

      // Mettez à jour la source de l'image
      imageRef.current.src = imageURL;
    }
  };
  return (
    <div className="container m-10 mx-auto">
      <h2 className="text-3xl py-3 font-bold">Create Produit</h2>
      <div className="grid lg:grid-cols-3 gap-5">
        {/* section left */}
        <div className="lg:col-span-2">
          <form>
            {/* premier section */}
            <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
              </div>
              <div className="">
                <label htmlFor="">Description</label>
                <Editor />
              </div>
            </div>
            {/* deuxiéme section */}
            <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
              <h3 className="border-b border-gray-200 w-full mb-5 pb-2 font-bold">
                Images
              </h3>
              <div className="flex items-center justify-center pb-5 w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> 
                      {/* or drag and drop */}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
              <img
                src={""}
                id="image"
                ref={imageRef}
                className="flex w-full rounded-xl  mx-auto"
                alt=""
              />
            </div>
            {/*  troisieme section */}
            <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
              <h3 className="border-b border-gray-200 w-full mb-5 pb-2 font-bold">
                Pricing
              </h3>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="price"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Price
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="Compare"
                    id="Compare"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="Compare"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Compare at price
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="Cost"
                    id="Cost"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="Cost"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Cost per item
                  </label>
                  <p className="text-gray-400 text-sm pt-5">
                    Customers won't see this price.
                  </p>
                </div>
              </div>
            </div>
            {/* quatrieme section */}
            <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
              <h3 className="border-b border-gray-200 w-full mb-5 pb-2 font-bold">
                Inventory
              </h3>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="SKU"
                    id="SKU"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="SKU"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    SKU (Stock Keeping Unit)*
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="Barcode"
                    id="Barcode"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="Barcode"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Barcode (ISBN, UPC, GTIN, etc.)*
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="Quantity"
                    id="Quantity"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="Quantity"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Quantity*
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="Security"
                    id="Security"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="Security"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Security stock*
                  </label>
                  <p className="text-gray-400 text-sm pt-5">
                    The safety stock is the limit stock for your products which
                    alerts you if the product stock will soon be out of stock.
                  </p>
                </div>
              </div>
            </div>
            {/* cinquieme section */}
            <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
              <h3 className="border-b border-gray-200 w-full mb-5 pb-2 font-bold">
                Shipping
              </h3>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="flex gap-3 items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <p>This product can be returned</p>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <p>This product will be shipped</p>
                </div>
              </div>
            </div>

          </form>
        </div>
        {/* section right */}
        <div>
          <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
            <h3 className="border-b border-gray-200 w-full mb-5 pb-2 font-bold">
              Status
            </h3>
            <BtnToggle name={"Visible"} />
            <p className="text-gray-500 text-sm">
              This product will be hidden from all sales channels.
            </p>
            <h4 className="font-medium pt-5 text-sm">Availability*</h4>
            <div>
              <input
                type="date"
                id="date"
                name="date"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                required
              />
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-5 mb-5 rounded-xl">
            <h3 className="border-b border-gray-200 w-full mb-5 pb-2 font-bold">
              Status
            </h3>
            {/* Brand */}
            <div>
              <label
                for="brand"
                class="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
              >
                Brand
              </label>
              <select
                id="brand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            {/* Brand */}
            <div className="pt-5">
              <label
                for="categories"
                class="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
              >
                Categories
              </label>
              <select
                id="categories"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
          </div>
        </div>
        {/* section button */}
        <div className="lg:col-span-2">
          {/* les Boutons */}
          <div className="md:flex grid grid-cols-3 gap-4">
            <button
              type="submit"
              className="text-white bg-amber-600 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg md:text-sm text-xs w-full sm:w-auto px-3 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              Create
            </button>
            <button
              type="submit"
              className="col-span-2 border-2 bg-white focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-xs w-full md:text-sm sm:w-auto px-3 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              Create & create another
            </button>
            <button
              type="submit"
              className=" bg-white border-2 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-xs w-full md:text-sm sm:w-auto px-3 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduits;
