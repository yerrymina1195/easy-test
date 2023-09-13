import "./App.css";
import Connexion from "./Pages/Connexion";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./Pages/Dashbord";
import Inscription from "./Pages/Inscription";
import Produits from "./Pages/Produits";
import Customers from "./Pages/Customers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/dashbord" element={<Dashbord />} />
      <Route path="/produit" element={<Produits />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  );
}

export default App;
