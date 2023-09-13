import "./App.css";
import Connexion from "./Pages/Connexion";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./Pages/Dashbord";
import Inscription from "./Pages/Inscription";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/dashbord" element={<Dashbord />} />
    </Routes>
  );
}

export default App;
