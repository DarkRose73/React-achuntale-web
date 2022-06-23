import React, { useEffect, useReducer, useRef, useState } from "react";
import "./Modal.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as usuariosService from "./usuariosService"

const ModalIniciarSesion = ({ isOpen, cerrarModal, setSesion, sesion, usuario, setUsuario }) => {
    const inputCorreo = useRef();
    const inputContraseña = useRef();

    const handleIniciar = async (e) => {
        e.preventDefault()
        // TODO: Validar que los campos no sean vacios
        const MySwal = withReactContent(Swal);
        let errores = []
        if (inputCorreo.current.value === "" || !inputCorreo.current.value) {
            errores.push("correo")
        }
        if (inputContraseña.current.value === "" || !inputContraseña.current.value) {
            errores.push("contraseña")
        }
        if (errores.length === 0) {
            try {
                const data = await usuariosService.obtenerUsuarioPorCorreo(inputCorreo.current.value)
                if (data) {
                    const dataUsuario = data.data
                    const correoUsuario = dataUsuario.correo
                    const contraseniaUsuario = dataUsuario.password
                    if (correoUsuario === inputCorreo.current.value && contraseniaUsuario === inputContraseña.current.value) {
                        MySwal.fire({
                            title: "Inicio de sesión exitoso",
                            icon: "success",
                            text: "Bienvenid@",
                            timer: "2000",
                            showConfirmButton: "false"
                        }).then(() => {
                            setUsuario(dataUsuario)
                            cerrarModal()
                            inputContraseña.current.value = ""
                            inputCorreo.current.value = ""
                            setSesion(!sesion)
                        })
                    } else {
                        MySwal.fire({
                            title: "Error con los datos",
                            icon: "error",
                            text: "Los datos ingresados no son correctos",
                            timer: "2000"
                        })
                    }
                } else {
                    MySwal.fire({
                        title: "Error con los datos",
                        icon: "error",
                        text: "Los datos ingresados no son correctos",
                        timer: "2000"
                    })
                }
            } catch (error) {

            }


        } else {
            let msgError = ""
            for (const error of errores) {
                msgError += error + " "
            }
            MySwal.fire({
                title: "Error",
                icon: "error",
                text: `Error en el ingreso de datos: ${msgError}`
            })
        }
    }


    return (
        <div className={`modal-envio ${isOpen && "modal-open"}`}>
            <div className="modal__sesion">
                <h1 className="text-dark text-center">Inicia sesión en Achúntale</h1>
                <div className="modal-body">
                    <div
                        className="card"
                        style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "#ccc" }}
                    >
                        <form>
                            <div className="row text-dark">
                                <div className="card-body">
                                    <label htmlFor="correo" className="form-label">
                                        Correo
                                    </label>
                                    <input
                                        type="text"
                                        name="correo"
                                        className="form-control"
                                        autoComplete="off"
                                        ref={inputCorreo}
                                    />
                                </div>
                            </div>
                            <div className="row text-dark">
                                <div className="card-body">
                                    <label htmlFor="contrasenia" className="form-label">
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        name="contrasenia"
                                        className="form-control"
                                        autoComplete="on"
                                        ref={inputContraseña}
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    className="btn btn-success mx-5 mt-3"
                                    style={{ width: "100px" }}
                                    onClick={(e) => handleIniciar(e)}
                                >
                                    <h5>
                                        Aceptar
                                    </h5>

                                </button>

                                <button
                                    className="btn btn-danger mx-5 mt-3"
                                    style={{ width: "100px" }}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        cerrarModal()
                                    }}
                                >
                                    <h5>
                                        Cerrar
                                    </h5>
                                </button>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalIniciarSesion