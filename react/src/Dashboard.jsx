import Sidebar from "./Sidebar";
import Navbar from "./Pages/Navbar";
import { Outlet } from "react-router-dom";
// import Customers from "./Pages/Customers";


function Dashboard() {
  return (
    <div className="layout-nav-side ">
<div className="fixed w-full z-50"> <Navbar /></div>
      <div className="flex ">
        <div className="w-[700px]">
          <Sidebar />
        </div>
       
        <div className=" w-auto mt-11  mx-5 ">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
