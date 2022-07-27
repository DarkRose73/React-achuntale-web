import React, { useRef, useState } from "react";
import "./Modal.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as usuariosService from "./usuariosService"
import BotonCerrarModal from "./BotonCerrarModal";

const ModalIniciarSesion = ({ isOpen, cerrarModal, setSesion, sesion, setUsuario }) => {
    const [mostrarContraseña, setMostrarContraseña] = useState(false)
    const inputCorreo = useRef();
    const inputContraseña = useRef();

    // Función para reiniciar la data del modal
    const resetModal = () => {
        inputCorreo.current.value = ""
        inputContraseña.current.value = ""
    }

    const handleIniciar = async (e) => {
        e.preventDefault()
        const MySwal = withReactContent(Swal);
        let errores = []
        // Validación de datos ingresados
        if (inputCorreo.current.value === "" || !inputCorreo.current.value) {
            errores.push("correo")
        }
        if (inputContraseña.current.value === "" || !inputContraseña.current.value) {
            errores.push("contraseña")
        }
        if (errores.length === 0) {
            try {
                // Se busca el usuario con el correo ingresado
                const data = await usuariosService.obtenerUsuarioPorCorreo(inputCorreo.current.value, inputContraseña.current.value)
                // En caso de encontrar un usuario se realizan las validaciones
                if (data) {
                    const dataUsuario = data.data
                    const correoUsuario = dataUsuario.correo
                    const contraseniaUsuario = dataUsuario.password
                    // Se valida que los datos de contrasseña y correo coincidan
                    if (correoUsuario === inputCorreo.current.value && contraseniaUsuario === inputContraseña.current.value) {
                        // Mensaje de inicio de sesión
                        MySwal.fire({
                            title: "Inicio de sesión exitoso",
                            icon: "success",
                            text: "Bienvenid@",
                            timer: "3000",
                            showConfirmButton: "false",
                            background: "#ddd"
                        }).then(() => {
                            setUsuario(dataUsuario)
                            cerrarModal()
                            resetModal()
                            setSesion(!sesion)
                        })
                    } else {
                        MySwal.fire({
                            title: "Error con los datos",
                            icon: "error",
                            text: "Los datos ingresados no son correctos",
                            timer: "3000",
                            background: "#ddd"
                        })
                    }
                }
                // En caso de no encontrar usuario se envía un mensaje de error 
                else {
                    MySwal.fire({
                        title: "Error con los datos",
                        icon: "error",
                        text: "Los datos ingresados no son correctos",
                        timer: "3000",
                        background: "#ddd"
                    })
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            let msgError = ""
            for (const error of errores) {
                msgError += error + " "
            }
            MySwal.fire({
                title: "Los datos no pueden estar vacíos",
                icon: "error",
                text: `Los siguientes campos están vacíos: ${msgError}`,
                background: "#ddd"
            })
        }
    }
    return (
        <div className={`modal-envio ${isOpen && "modal-open"}`}>
            <div className="modal__sesion">
                <BotonCerrarModal
                    cerrarModal={cerrarModal}
                    tipoModal={""}
                    resetModal={resetModal}
                ></BotonCerrarModal>
                <h1 className="text-dark text-center">Inicia sesión en Achúntale</h1>
                <div className="modal-body">
                    <div
                        className="card"
                        style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "rgb(242, 165, 50)" }}
                    >
                        <form>
                            <div className="row text-dark">
                                <div className="card-body text-center">
                                    <label htmlFor="correo" className="form-label" style={{ fontSize: "20px" }}>
                                        Correo
                                    </label>
                                    <input
                                        type="text"
                                        name="correo"
                                        className="form-control text-center mx-auto"
                                        style={{ width: "55%" }}
                                        autoComplete="off"
                                        ref={inputCorreo}
                                    />
                                </div>
                            </div>
                            <div className="row text-dark">
                                <div className="card-body text-center pb-2">
                                    <label htmlFor="contrasenia" className="form-label" style={{ fontSize: "20px" }}>
                                        Contraseña
                                    </label>
                                    {
                                        mostrarContraseña
                                            ? (<input
                                                type="text"
                                                name="contrasenia"
                                                className="form-control text-center mx-auto"
                                                style={{ width: "55%" }}
                                                autoComplete="on"
                                                ref={inputContraseña}
                                            />)
                                            : (<input
                                                type="password"
                                                name="contrasenia"
                                                className="form-control text-center mx-auto"
                                                style={{ width: "55%" }}
                                                autoComplete="on"
                                                ref={inputContraseña}
                                            />)
                                    }
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn pt-0"
                                    onClick={
                                        (e) => {
                                            e.preventDefault();
                                            setMostrarContraseña(!mostrarContraseña)
                                        }
                                    }>
                                    Mostrar contraseña
                                </button>

                            </div>
                            <div className="d-grid">
                                <button
                                    className="btn btn-dark mt-3 mx-auto"
                                    style={{ width: "85%" }}
                                    onClick={(e) => handleIniciar(e)}
                                >
                                    <h5 className="my-auto">
                                        Iniciar sesión
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