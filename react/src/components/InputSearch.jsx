import React from "react";
import { GoSearch } from "react-icons/go";

const InputSearch = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <GoSearch />
        </div>
        <input
          type="text"
          id="search"
          className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-48 md:w-60  focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default InputSearch;
