import React, { useContext, useState } from "react";
import "./Estilos.css";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Dropdown } from "react-bootstrap";
import ModalIniciarSesion from "./ModalIniciarSesion";
import Modalregistro from "./ModalRegistro";
import UsuarioContext from "../contexts/UsuariosContext";
import ModalDireccionEnvio from "./ModalDireccionEnvio";

// TODO DAR FUNCIONALIDAD DE "NAVEGACIÓN" AL NAVBAR

const Navbar = () => {
  const { usuario, setUsuario } = useContext(UsuarioContext)
  const [sesion, setSesion] = useState(false);
  const [abrirModalSesion, setAbrirModalSesion] = useState(false)
  const [abrirModalRegistro, setAbrirModalRegistro] = useState(false)
  const [abrirModalDatos, setAbrirModalDatos] = useState(false)

  const abrirModalSes = () => {
    setAbrirModalSesion(true);
  };
  const cerrarModalSes = () => {
    setAbrirModalSesion(false);
  };
  const abrirModalReg = () => {
    setAbrirModalRegistro(true);
  };
  const cerrarModalReg = () => {
    setAbrirModalRegistro(false);
  };
  const abrirModalDat = () => {
    setAbrirModalDatos(true);
  };
  const cerrarModalDat = () => {
    setAbrirModalDatos(false);
  };
  const iniciarSesion = () => {
    abrirModalSes();
  }
  const registrar = () => {
    abrirModalReg();
  }
  const handleIniciarSesion = () => {
    const MySwal = withReactContent(Swal);
    if (!sesion) {
      MySwal.fire({
        customClass: {
          confirmButton: "swalBtnColorIngresar",
          denyButton: "swalBtnColorRegistrar"
        },
        title: "¿Desea iniciar sesión o registrarse?",
        showDenyButton: "true",
        showConfirmButton: "true",
        showCloseButton: "true",
        confirmButtonText: "Iniciar sesión",
        denyButtonText: "Registrarme",
        confirmButtonColor: "black",
        denyButtonColor: "orange",
        background: "#ddd"
      }).then((respuesta) => {
        if (respuesta.isConfirmed) {
          iniciarSesion();
        }
        if (respuesta.isDenied) {
          registrar();
        }
      });
    } else {
      MySwal.fire({
        customClass: { confirmButton: "swalBotonesConfirmar" },
        title: "¿Está seguro de querer cerrar sesión?",
        icon: "question",
        showCancelButton: "true",
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        cancelButtonColor: "#dc3545",
        background: "#ddd"
      }).then(respuesta => {
        if (respuesta.isConfirmed) {
          setUsuario(null)
          setSesion(!sesion)
        }
      })

    }
  };

  const handleCambiarDireccionEnvio = () => {
    abrirModalDat();

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky" style={{ width: "100vw" }}>
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
                <NavLink className="nav-link" to="/comprar"
                >
                  Comprar
                </NavLink>
              </li>
            </ul>
            <div className="ms-auto pe-4">
              {sesion ? (
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Cuenta
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleCambiarDireccionEnvio()}>Cambiar datos de envío</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleIniciarSesion()}>Cerrar sesión</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <button
                  className="btn btn-dark"
                  onClick={() => handleIniciarSesion()}
                >
                  Iniciar Sesión
                </button>
              )}
            </div>
            <ModalIniciarSesion
              isOpen={abrirModalSesion}
              cerrarModal={cerrarModalSes}
              setSesion={setSesion}
              sesion={sesion}
              usuario={usuario}
              setUsuario={setUsuario}
            />
            <Modalregistro
              isOpen={abrirModalRegistro}
              cerrarModal={cerrarModalReg} />

            <ModalDireccionEnvio
              isOpen={abrirModalDatos}
              cerrarModal={cerrarModalDat}
              sesion={sesion}
              resetFormulario={null}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
