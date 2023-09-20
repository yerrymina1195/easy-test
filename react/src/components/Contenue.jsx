import React from "react";
import { Outlet } from "react-router-dom";

const Contenue = () => {
  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="py-4 rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Contenue;
