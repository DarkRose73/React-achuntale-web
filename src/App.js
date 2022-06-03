import Navbar from "./components/Navbar";
import React from "react";
import Inicio from "./components/Inicio";
import Comprar from "./components/Comprar";
import QuienesSomos from "./components/QuienesSomos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Inicio}></Route>
          <Route path="/quienessomos" component={QuienesSomos}></Route>
          <Route path="/comprar" component={Comprar}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
