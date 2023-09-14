import "./App.css";
import Connexion from "./Pages/Connexion";
import { Route, Routes } from "react-router-dom";
import Inscription from "./Pages/Inscription";
import Customers from "./Pages/Customers";

import Dashboard from "./Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      <Route path="/customers" element={<Customers />} />
    </Routes>
  );
}

export default App;
