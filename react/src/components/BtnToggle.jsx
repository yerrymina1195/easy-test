import React from "react";
import { useState } from "react";
const BtnToggle = ({name}) => {
  const [togle, setTogle] = useState(false);

  return (
    <div>
      <label class="relative inline-flex items-center mb-4 cursor-pointer">
        <input type="checkbox"  checked={togle}        
                        value={togle}
                         class="sr-only peer"  />
                        
        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 
        dark:peer-focus:ring-amber-800 dark:bg-gray-700 peer-checked:after:translate-x-full
         peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5
          after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
           after:h-5 after:w-5 after:transition-all dark:border-gray-600
            peer-checked:bg-amber-600"  onClick={() => {
              setTogle(!togle);
          }}></div>
        <span class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
      </label>
    </div>
  );
};

export default BtnToggle;
