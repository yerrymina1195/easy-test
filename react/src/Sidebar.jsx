import { BiHomeAlt } from "react-icons/bi";
function Sidebar() {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg- border-r shadow-sm">
        <ul>
          {" "}
          <li className="">
            <BiHomeAlt />
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
