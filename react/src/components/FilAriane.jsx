import React from "react";
import { Link } from "react-router-dom";

const FilAriane = (props) => {
  return (
    <div>
      <div className="md:columns-2">
        <div className="grid justify-items-start">
          <p className="text-sm hidden md:block text-gray-500 font-medium">
            <Link to={props.linkOne}>{props.nameOne}</Link>
            &nbsp; &#62; &nbsp;
            <Link to={props.linkOne}>List</Link>
          </p>
          <h2 className="text-3xl py-3 font-bold">{props.nameTwo}</h2>
        </div>
        <div className="grid md:justify-items-end">
          <Link to={props.linkTwo}>
            <button
              className="rounded-md my-3 bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              {props.button}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilAriane;
