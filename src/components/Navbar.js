import React from "react";
import "./Estilos.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <a className="navbar-brand">
              <img
                className="logo-navbar"
                src={require("./images/logoAchuntaleTransparente.png")}
                alt=""
              ></img>
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Quienes Somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Comprar</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
