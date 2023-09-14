import "./App.css";
import Connexion from "./Pages/Connexion";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./Pages/Dashbord";
import Inscription from "./Pages/Inscription";
import Produits from "./Pages/Produits";
import Customers from "./Pages/Customers";
import CustomersCreate from "./Pages/CustomersCreate";
import Categories from "./Pages/Categories";
import CreateProduits from "./Pages/CreateProduits";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/dashbord" element={<Dashbord />} />
      <Route path="/produit" element={<Produits />} />
      <Route path="/produit/create" element={<CreateProduits />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/create" element={<CustomersCreate />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
