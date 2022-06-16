import React, { useState } from "react";
import "./Estilos.css";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// TODO DAR FUNCIONALIDAD DE "NAVEGACIÓN" AL NAVBAR

const Navbar = () => {
  const [sesion, setSesion] = useState(false);

  const handleIniciarSesión = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Trabajo en proceso",
      html: ` <h4>Esta función está en proceso de desarrollo, vuelva pronto<br></h4>
              <span>¿Desea cambiar el estado de sesión de todas formas?</span>
      `,
      imageUrl: require("./images/work-in-progress.png"),
      imageHeight: 100,
      showCancelButton: "true",
      showConfirmButton: "true",
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      confirmButtonColor: "#198754",
      cancelButtonColor: "#dc3545",
    }).then((respuesta) => {
      if (respuesta.isConfirmed) {
        setSesion(!sesion);
      }
    });
  };
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
            <div className="ms-auto">
              {sesion ? (
                <button
                  className="btn btn-danger"
                  onClick={() => handleIniciarSesión()}
                >
                  Cerrar Sesión
                </button>
              ) : (
                <button
                  className="btn btn-success"
                  onClick={() => handleIniciarSesión()}
                >
                  Iniciar Sesión
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
