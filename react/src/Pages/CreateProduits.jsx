import React from "react";
import "../styles/product.css"
import {FiChevronDown,  FiChevronUp} from "react-icons/fi"

const CreateProduits = () => {
  return (
    <div className="mx-10">
      <div className="columns-1">
        <div className="grid justify-items-start">
          <p className="">Des Produits &#62; Create</p>
          <h2 className="text-2xl py-3 font-bold">Create Poducts</h2>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
         <div class="cadre col-span-2 ">
            <form action="">
                <div class="grid gap-x-1 grid-cols-2 px-2 py-3">
                    <div class="">
                        <label htmlFor="">Name <span className="text-red-600">*</span></label>
                        <input type="text" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
                    </div>
                    <div className="pl-5">
                        <label htmlFor="">Limace</label>
                        <input type="text" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
                    </div>
                </div>
                <div className="px-2 py-3">
                    <label htmlFor="">
                        Description
                    </label>
                </div>
             </form> 
        </div> 

      <div className="cadre1"> 
         <div className="border-b-2 w-100 py-3 border-gray-600 ">
            status
         </div>
         <div class="flex">
            <div>
                
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elecusandae soluta odio re</p>
            </div>
         </div>
         <div className="mt-4 mb-3">
            <label htmlFor="">Avaibility <span className="text-red-600">*</span></label>
            <input type="date" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
         </div>
    </div> 
    </div> 
    <div>
        <div>

        <div>
        <div>
           <FiChevronDown />
        </div>
        <div>
            <FiChevronUp />
        </div>
     </div>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-5">
         <div class="cadre col-span-2 ">
            <form action="">
                <div class="grid gap-x-1 grid-cols-2 px-2 py-3">
                    <div class="">
                        <label htmlFor="">Name <span className="text-red-600">*</span></label>
                        <input type="text" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
                    </div>
                    <div className="pl-5">
                        <label htmlFor="">Limace</label>
                        <input type="text" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl"/>
                    </div>
                </div>
                <div className="px-2 py-3">
                    <label htmlFor="">
                        Description
                    </label>
                </div>
             </form> 
        </div> 
      <div className="cadre1"> 
         <div className="border-b-2 w-100 py-3 border-gray-600 ">
            Associations
         </div>
         <div>
            <div className="pt-5">
                <label>Brand</label>
                <select value="choice" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl">
                    <option>Select an option</option>
                </select>
            </div>
            <div className="py-3">
              <label>Categories</label>
                <select value="choice" className="block px-2 w-full text border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer rounded-xl">
                    <option>Select an option</option>
               </select>
            </div>
         </div>
   </div>   
   </div>   
</div>          

  )
};

export default CreateProduits;
