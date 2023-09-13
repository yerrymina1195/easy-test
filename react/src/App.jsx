import "./App.css";
import Connexion from "./Pages/Connexion";
import { Route, Routes,} from "react-router-dom";
import Navbar from './Pages/Navbar'
import Inscription from "./Pages/Inscription";
import Customers from "./Pages/Customers";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  );
}

export default App;
