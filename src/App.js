import Navbar from "./components/Navbar";
import React from "react";
import Inicio from "./components/Inicio";
import Comprar from "./components/Comprar";
import QuienesSomos from "./components/QuienesSomos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Inicio />}></Route>
          <Route path="/quienessomos" element={<QuienesSomos />}></Route>
          <Route path="/comprar" element={<Comprar />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
