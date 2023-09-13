import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Connexion from "./Pages/Connexion";
import Dashbord from "./Pages/Dashbord";

function App() {
  return (
   <Routes>
       <Route path="/" element={<Connexion />} />
       <Route path="/dashbord" element={<Dashbord />} />
   </Routes>
  );
}

export default App;
