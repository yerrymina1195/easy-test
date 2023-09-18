import React from "react";

const IconNotification = (props) => {
  return (
    <div>
      <button className="text-gray-500 border border-white p-1 focus:ring-amber-600 focus:border-amber-600 rounded-lg relative">
        <div className="bg-amber-200 text-amber-600 w-4 h-4 hover:scale-110 transition-all duration-300 rounded-full text-xs leading-tight font-medium absolute bottom-4 right-3">
          {props.number}
        </div>
        <div>{props.icon}</div>
      </button>
    </div>
  );
};

export default IconNotification;
