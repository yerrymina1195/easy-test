import React from "react";

const Test = () => {
  return (
    <div className="m-96">
      <button
        data-popover-target="popover-default"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Default popover
      </button>
      <div
        data-popover
        id="popover-default"
        role="tooltip"
        class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
      >
        <div class="px-3 py-2">
          <p>Enable light theme</p>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  );
};

export default Test;
