import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


function Dashboard() {
  return (
    <div className="">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      <div className="grid grid-row-1">
        <div className="col-span-0">
          <Sidebar />
        </div>

        <div className="mt-12 pl-60  pe-10 w-auto  col-span-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
