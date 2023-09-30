import "./App.css";
import Connexion from "./Pages/Connexion";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./Pages/Dashbord";
import { Inscription } from "./Pages/Inscription";
import Customers from "./Pages/Customers";
import CustomersCreate from "./Pages/CustomersCreate";
import Categories from "./Pages/Categories";
import BlogCategory from "./Pages/BlogCategory";
import Brands from "./Pages/Brands";
import BrandsCreate from "./Pages/BrandsCreate";
import CategoriesCreate from "./Pages/CategoriesCreate";
import ExempleDashboard from "./components/ExempleDashboard";
import Produits from "./Pages/Produits";
import CreateProduits from "./Pages/CreateProduits";
import Test from "./components/Test"
import Order from "./Pages/Order";
import EditeCategory from "./components/EditeCategory";
import EditeBrand from "./components/EditeBrand";
import EditeCustomers from "./components/EditeCustomers";
import {OrderCreate} from "./Pages/OrderCreate";
import EditeProduits from "./components/EditeProduits";

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
          <Route path="/customers/:id/edit" element={<EditeCustomers />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/produits/create" element={<CreateProduits />} />
          <Route path="/produits/:id/edit" element={<EditeProduits />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/create" element={<OrderCreate/>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/create" element={<CategoriesCreate />} />
          <Route path="/blogCategory" element={<BlogCategory />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/create" element={<BrandsCreate />} />
          <Route path="/brands/:id/edit" element={<EditeBrand />} />
          <Route path="/categories/:id/edit" element={<EditeCategory/>} />
          {/* route pour les teste */}
          <Route path="/teste" element={<Test />} />
          {/* route pour les teste */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
