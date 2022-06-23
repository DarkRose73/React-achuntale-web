import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Inicio from "./components/Inicio";
import Comprar from "./components/Comprar";
import QuienesSomos from "./components/QuienesSomos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import UsuarioContext from "./contexts/UsuariosContext";


const initialUsuario = null

function App() {
  const [usuario, setUsuario] = useState(initialUsuario)

  const data = { usuario, setUsuario }
  return (
    <div>
      <Router>
        <UsuarioContext.Provider value={data}>

          <Navbar />
          <Routes>
            <Route path="/" exact element={<Inicio />}></Route>
            <Route path="/quienessomos" element={<QuienesSomos />}></Route>
            <Route path="/comprar" element={<Comprar />}></Route>
          </Routes>
          <br />
          <Footer />
        </UsuarioContext.Provider>

      </Router>
    </div>
  );
}

export default App;
