import "./App.css";
import Connexion from "./Pages/Connexion";
import { Route, Routes } from "react-router-dom";
import Inscription from "./Pages/Inscription";
import Produits from "./Pages/Produits";
import Customers from "./Pages/Customers";
import CustomersCreate from "./Pages/CustomersCreate";
import Categories from "./Pages/Categories";
import CreateProduits from "./Pages/CreateProduits";
import Brands from "./Pages/Brands";
import BrandsCreate from "./Pages/BrandsCreate";
import CategoriesCreate from "./Pages/CategoriesCreate";

import Dashboard from "./Dashboard";

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
      <Route path="/brands" element={<Brands />} />
      <Route path="/brands/create" element={<BrandsCreate />} />
      <Route path="/dashboard/" element={<Dashboard />} >
          <Route path="/dashboard/customers" element={<Customers />} />
          <Route path="/dashboard/customers/create" element={<CustomersCreate />} />
          <Route path="/dashboard/categories" element={<Categories />} />
         <Route path="/dashboard/categories/create" element={<CategoriesCreate />} />
         <Route path="/dashboard/brands" element={<Brands />} />
         <Route path="/dashboard/brands/create" element={<BrandsCreate />} />
      </Route >
    </Routes>
  );
}

export default App;
