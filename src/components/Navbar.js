import React from "react";
import "./Estilos.css";
import { Link } from "react-router-dom";

// TODO DAR FUNCIONALIDAD DE "NAVEGACIÓN" AL NAVBAR

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
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quienessomos">
                  Quienes somos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/comprar">
                  Comprar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
