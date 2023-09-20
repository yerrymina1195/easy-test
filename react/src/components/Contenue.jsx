import React from "react";
import { Outlet } from "react-router-dom";

const Contenue = () => {
  return (
    <div>
      <div className="md:p-6 p-4 sm:ml-80">
        <div className="py-4 rounded-lg dark:border-gray-700 mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Contenue;
