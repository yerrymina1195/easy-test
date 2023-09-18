import React from "react";
import { BiLogOut } from "react-icons/bi";
import { FaBookOpen, FaGithub } from "react-icons/fa";
import { BsGraphDownArrow,BsGraphUpArrow } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios.js";
function Dashbord() {
  const { currentUser, setCurrentUser,setUserToken} =
  useStateContext();
  
  const logout = (e) => {
    e.preventDefault();
    axiosClient.post("/logout").then((res) => {
      localStorage.removeItem('user')
      setCurrentUser(null);
      setUserToken(null);
    });
  
  };
    const nameWords = currentUser.name.split(' ');


const firstLetterOfFirstName = nameWords[0].charAt(0);


const lastWordIndex = nameWords.length - 1;
const lastWord = nameWords[lastWordIndex];
const firstLetterOfLastName = lastWord.charAt(0);

  return (
    <div className="container">
      <h1 className="text-2xl py-3 font-bold">Dashboard</h1>
      <div className="md:columns-2 gap-5">
        <div className="bg-white my-5 md:my-0 rounded-lg border border-gray-200 p-5">
          <div className="columns-2">
            <div className="columns-1 gap-3 flex  items-center justify-items-center">
             <div className="w-10 h-10 rounded-full uppercase font-bold flex items-center justify-center bg-black text-white">
              <span>{firstLetterOfFirstName}</span>
              <span>{firstLetterOfLastName}</span>
             </div>
              <div>
                <h3 className="font-bold">Welcome</h3>
                <p className="text-gray-500">{currentUser.name}</p>
              </div>
            </div>
            <div className="float-right">
              <button className="flex rounded-lg px-3 border border-gray-200 py-2 gap-3 items-center justify-items-center hover:bg-gray-100" onClick={(e)=>logout(e)}>
                <BiLogOut className="text-gray-400 w-5 h-5" />
                <span className="text-sm text-gray-900 font-medium">
                  Sign out
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="columns-2">
            <div className="columns-1 gap-3 flex items-center justify-items-center">
              <div>
                <h3 className="font-bold italic">filament</h3>
                <p className="text-gray-500">v3.0.46</p>
              </div>
            </div>
            <div className="float-right">
              <div className="flex gap-3 items-center justify-items-center">
                <FaBookOpen />
                <span>Documentation</span>
              </div>
              <div className="flex gap-3 float-right items-center justify-items-center">
                <FaGithub />
                <span>Github</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:columns-3 my-5 gap-10">
        <div className="bg-white columns-1 my-5 md:my-0 rounded-lg border border-gray-200 p-5">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold">$192.1k</h2>
          <p className="text-green-600 text-sm flex gap-2 items-center justify-items-center">32k increase <BsGraphUpArrow/></p>
        </div>
        <div className="bg-white columns-1 my-5 md:my-0 rounded-lg border border-gray-200 p-5">
          <p className="text-gray-500">New customers</p>
          <h2 className="text-2xl font-bold">1340</h2>
          <p className="text-red-600 text-sm flex gap-2 items-center justify-items-center">3% decrease  <BsGraphDownArrow/></p>
        </div>
        <div className="bg-white columns-1 my-5 md:my-0 rounded-lg border border-gray-200 p-5">
          <p className="text-gray-500">New orders</p>
          <h2 className="text-2xl font-bold">3543</h2>
          <p className="text-green-600 text-sm flex gap-2 items-center justify-items-center">7% increase <BsGraphUpArrow/></p>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
