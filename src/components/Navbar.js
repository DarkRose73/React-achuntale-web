import React from "react";
import "./Estilos.css";
import { NavLink } from "react-router-dom";

// TODO DAR FUNCIONALIDAD DE "NAVEGACIÓN" AL NAVBAR

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <img
              className="logo-navbar"
              src={require("./images/logoAchuntaleTransparente.png")}
              alt=""
            ></img>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/quienessomos">
                  ¿Quiénes somos?
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/comprar">
                  Comprar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
