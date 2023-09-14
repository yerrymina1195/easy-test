import React from "react";
import "../styles/product.css"
import {FiChevronDown,  FiChevronUp} from "react-icons/fi"
import Editor from "../components/Editor";
import BtnToggle from "../components/BtnToggle";


const CreateProduits = () => {
  return (
    <div className="mx-10">
      <div className="columns-1">
        <div className="grid justify-items-start">
          <p className="mt-5 text-gray-600">Des Produits  &#62;  Create</p>
          <h2 className="text-2xl py-3 font-bold">Create Products</h2>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4">


         <div className="col-span-2">
            {/* premier cadre */}
         <div class="cadre">
            <form action="">
                <div class="grid gap-x-1 grid-cols-2 px-2">
                    <div class="">
                        <label class="font-bold">Name <span className="text-red-600">*</span></label>
                        <input type="text" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
                    </div>
                    <div className="pl-5">
                        <label class="font-bold">Limace</label>
                        <input type="text" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
                    </div>
                </div>
                <div className="px-2 py-5">
                    <label class="font-bold">
                        Description
                    </label>
                  <Editor className="text-red-600 rounded-md"/>
                </div>
             </form> 
        </div>
        {/* images */}
        <div class="cadre-milieu w-auto my-5 px-5 border-md flex">
            images
            <FiChevronDown className="mt-1 ms-auto text-2xl"/>
        </div>   
        {/* deuxieme cadre */}
        <div className="cadre my-5 py-7"> 
            <div className="border-b-2 w-100 py-1 border-gray-600 ">
                <p class="font-bold">Pricing</p>
            </div>
            <div class="py-5">
            <form action="">
                <div class="grid gap-x-1 grid-cols-2 px-2 py-5">
                    <div class="">
                        <label class="font-bold">Price <span className="text-red-600">*</span></label>
                        <input type="text" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
                    </div>
                    <div className="pl-5">
                        <label class="font-bold">Compare at price <span className="text-red-600">*</span></label>
                        <input type="number" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
                    </div>
                </div>
                <div class="grid-cols-1 px-2">
                        <label class="font-bold">Cost per item <span className="text-red-600">*</span></label>
                        <input type="text" className="block px-2 w-1/2 text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
                        <p className="text-gray-300 mt-2 font-normal">Customers won't see this price</p>
                    </div>
             </form> 
            </div>
       </div>

        {/*  troisieme cadre */}

        <div className="cadre my-5"> 
            <div className="border-b-2 w-100 py-1 border-gray-600 ">
                <p class="font-bold">Inventory</p>
            </div>
            <div class="px-4 py-5">
            <form action="">
                <div class="grid gap-x-1 grid-cols-2 px-2 py-5">
                    <div class="">
                        <label class="font-bold">SKU (Stock Keeping Unit) <span className="text-red-600">*</span></label>
                        <input type="text" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
                    </div>
                    <div className="pl-5">
                        <label class="font-bold">Barcode (ISBN, UPC, GTIN, etc.) <span className="text-red-600">*</span></label>
                        <input type="number" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
                    </div>
                </div>
                <div class="grid gap-x-1 grid-cols-2 px-2 py-5">
                    <div class="">
                        <label class="font-bold">Quantity <span className="text-red-600">*</span></label>
                        <input type="text" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
                    </div>
                    <div className="pl-5">
                        <label class="font-bold">Security stock <span className="text-red-600">*</span></label>
                        <input type="number" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
                        <p className="mt-2 text-gray-400 font-normal">The safety stock is the limit stock for your products which alerts you if the product stock will soon be out of stock.</p>
                    </div>
                </div>
             </form> 
            </div>
       </div>

       {/* quatrieme cadre */}

       <div className="cadremoins my-5"> 
            <div className="border-b-2 w-100 py-1 border-gray-600 ">
                <p class="font-bold">Inventory</p>
            </div>
            <div class="px-4 py-5">
            <form action="">
                <div class="grid gap-x-1 grid-cols-2 px-2 py-5">
                    <div class="">
                        <input type="checkbox" className="px-2 text-amber-600 mb-1 text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600"/>
                        <label class="ml-2 mt-4">SKU (Stock Keeping Unit) <span className="text-red-600">*</span></label>
                    </div>
                    <div className="pl-5">
                        <input type="checkbox" className="px-2 mb-1 border-gray-300 text-amber-600 dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600"/>
                        <label class="ml-2 mt-4">Barcode (ISBN, UPC, GTIN, etc.) <span className="text-red-600">*</span></label>
                    </div>
                </div>
             </form> 
            </div>
       </div>

       {/* les trois buttons */}
       <div className="troisBouton my-5">
          <button className="bg-amber-600 rounded-md py-2 px-4 text-white font-bold">Create</button>
            <button class="bg-white ml-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md shadow">
              Create & create another
            </button>
            <button class="bg-white ml-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md shadow">
              Cancel
            </button>
       </div>
    </div>


         <div className="col-span-1">
         <div className="cadre1"> 
         <div className="border-b-2 w-100 py-3 font-bold border-gray-600 ">
            status
         </div>
         <div className="px-4">
         <div class="flex mt-3">
                <label class="relative inline-flex items-center mb-4 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-11 h-5 bg-gray-200 rounded-full peer peer-focus:ring-5 dark:peer-focus:ring-amber-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3] after:left-[12px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 ">
                    </span>
               </label>
              <p class="mt-2">Visible</p>
         </div>
         <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elecusandae soluta odio re</p>
            </div>
         <div className="mt-4 mb-3">
            <label class="font-bold">Avaibility <span className="text-red-600">*</span></label>
            <input type="date" className="block px-2 w-full text border-gray-300 mt-3 dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
         </div>
         </div>
        </div> 
        <div className="cadre1 mt-5"> 
            <div className="border-b-2 w-100 py-3 font-bold border-gray-600 ">
                Associations
            </div>
            <div class="px-4">
                <div className="mt-10">
                    <label className="mt-2">Brand</label>
                    <select value="choice" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl">
                        <option>Select an option</option>
                    </select>
                </div>
                <div className="py-3 mt-5">
                <label className="mt-2">Categories</label>
                    <select value="choice" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl">
                        <option>Select an option</option>
                </select>
                </div>
            </div>
       </div> 
   </div>     

 </div>

</div>          

  )
};

export default CreateProduits;
