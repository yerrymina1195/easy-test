import "./App.css";
import Connexion from "./Pages/Connexion";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./Pages/Dashbord";
import { Inscription } from "./Pages/Inscription";
import Customers from "./Pages/Customers";
import CustomersCreate from "./Pages/CustomersCreate";
import Categories from "./Pages/Categories";
import Brands from "./Pages/Brands";
import BrandsCreate from "./Pages/BrandsCreate";
import CategoriesCreate from "./Pages/CategoriesCreate";
import ExempleDashboard from "./components/ExempleDashboard";
import Produits from "./Pages/Produits";
import CreateProduits from "./Pages/CreateProduits";
import Order from "./Pages/Order";
import Test from "./components/Test"
import EditeBrand from "./components/EditeBrand";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />

        <Route path="/" element={<ExempleDashboard />}>
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/create" element={<CustomersCreate />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/order" element={<Order />} />
          <Route path="/produits/create" element={<CreateProduits />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/create" element={<CategoriesCreate />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/create" element={<BrandsCreate />} />
          <Route path="/edit" element={<EditeBrand />} />
          {/* route pour les teste */}
          <Route path="/teste" element={<Test />} />
          {/* route pour les teste */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
