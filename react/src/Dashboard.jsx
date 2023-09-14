import Sidebar from "./Sidebar";
import Navbar from "./Pages/Navbar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="layout-nav-side ">
      <Navbar className="" />
      <div className="">
        <div className="">
          <Sidebar />
        </div>
        <div className=" ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
