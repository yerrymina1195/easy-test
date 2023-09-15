import "./App.css";
import Connexion from "./Pages/Connexion";
import { Route, Routes } from "react-router-dom";
import Inscription from "./Pages/Inscription";
import Customers from "./Pages/Customers";
import CustomersCreate from "./Pages/CustomersCreate";
import Categories from "./Pages/Categories";
import Brands from "./Pages/Brands";
import BrandsCreate from "./Pages/BrandsCreate";
import CategoriesCreate from "./Pages/CategoriesCreate";

import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/dashboard/" element={<Dashboard />} >
          <Route path="/dashboard/customers" element={<Customers />} />
          <Route path="/dashboard/customersCreate" element={<CustomersCreate />} />
          <Route path="/dashboard/categories" element={<Categories />} />
         <Route path="/dashboard/categories/create" element={<CategoriesCreate />} />
         <Route path="/dashboard/brands" element={<Brands />} />
         <Route path="/dashboard/brands/create" element={<BrandsCreate />} />
      </Route >
    </Routes>
  );
}

export default App;
