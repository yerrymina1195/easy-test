import "./App.css";
import Connexion from "./Pages/Connexion";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./Pages/Dashbord";
import Inscription from "./Pages/Inscription";
import Customers from "./Pages/Customers";
import CustomersCreate from "./Pages/CustomersCreate";
import Categories from "./Pages/Categories";
import Brands from "./Pages/Brands";
import BrandsCreate from "./Pages/BrandsCreate";
import CategoriesCreate from "./Pages/CategoriesCreate";
import Test from "./components/Test";
import ExempleDashboard from "./components/ExempleDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/dashbord" element={<Dashbord />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/create" element={<CustomersCreate />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/create" element={<CategoriesCreate />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/brands/create" element={<BrandsCreate />} />

      
      <Route path="/exemple" element={<ExempleDashboard />} />
    </Routes>
  );
}

export default App;
