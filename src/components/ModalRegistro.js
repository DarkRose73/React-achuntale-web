import React, { useEffect, useReducer, useRef, useState } from "react";
import "./Modal.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as usuarioService from "./usuariosService"
import BotonCerrarModal from "./BotonCerrarModal";

const initialUsuario = {
    correo: "usuario3gmail.com",
    password: "1234",
    datos: {
        nombre: "",
        apellido: "",
        direccion: "",
        ciudad: "",
        region: "Valparaíso",
        comuna: "Viña del mar",
        numeroOBlock: "",
        referencia: ""
    }
}

const Modalregistro = ({ isOpen, cerrarModal }) => {
    const [nuevoUsuario, setNuevoUsuario] = useState(initialUsuario)
    const inputCorreo = useRef()
    const inputContraseña = useRef()
    const inputContraseñaConfirmar = useRef()
    const MySwal = withReactContent(Swal);

    // Función para validar el correo
    const validarCorreo = (correo) => {
        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(correo)) {
            return true;
        }
        return false;
    };

    // Funcion para validar la seguridad de la contraseña
    const validarContraseña = (contraseña) => {
        // Por lo menos un numero, una minuscula, una mayúscula y 8 caracteres mínimo
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        return re.test(contraseña);
    }

    // Función para verificar si el correo está en uso
    const correoRepetido = async (correo) => {
        const correoEncontrado = await usuarioService.obtenerUsuarioPorCorreo(correo)
        if (correoEncontrado) return true
        else return false
    }

    // Función para regresar los valores del modal a su estado inicial
    const resetModal = () => {
        inputCorreo.current.value = ""
        inputContraseña.current.value = ""
        inputContraseñaConfirmar.current.value = ""
    }

    // Handler para el boton registrar
    const handleRegistrar = async (e) => {
        e.preventDefault();
        // Validaciones
        // Validar correo existente
        if (await correoRepetido(inputCorreo.current.value)) {
            MySwal.fire({
                title: "Error, correo ya en uso"
            })
        } else {
            const correoIngresado = inputCorreo.current.value
            const contraseñaIngresada = inputContraseña.current.value
            const contraseñaRepetir = inputContraseñaConfirmar.current.value

            let errores = []
            if (!validarCorreo(correoIngresado)) {
                errores.push("Correo no válido")
            }
            if (contraseñaIngresada.length < 8) {
                errores.push("La contraseña debe tener mínimo 8 caracteres")
            }
            if (!validarContraseña(contraseñaIngresada)) {
                errores.push("Seguridad de la contraseña débil, debe tener al menos una mayúscula, una minúscula y un número")
            }
            if (!(contraseñaIngresada === contraseñaRepetir)) {
                errores.push("Las contraseñas no coinciden")
                //TODO: validar que la contraseña sea fuerte (numeros,letras,simbolos)
            }
            if (errores.length === 0) {
                const datosNuevoUsuario = {
                    ...initialUsuario,
                    correo: inputCorreo.current.value,
                    password: inputContraseña.current.value
                }
                setNuevoUsuario(datosNuevoUsuario)
                await usuarioService.crearUsuario(datosNuevoUsuario)
                MySwal.fire({
                    icon: "success",
                    title: "usuario creado",
                    background: "#ddd"
                }).then(respuesta => {
                    resetModal()
                    cerrarModal()
                    MySwal.fire({
                        title: "Recordatorio",
                        icon: "info",
                        text: "Recuerda agregar tus datos de envío al iniciar sesión",
                        background: "#ddd"
                    })
                })
            } else {
                let mensajeError = ""
                for (const mensaje of errores) {
                    mensajeError += `${mensaje}<br />`
                }
                MySwal.fire({
                    title: "Datos no válidos",
                    html: `${mensajeError}`,
                })
            }
        }
    }
    return (

        <div className={`modal-envio ${isOpen && "modal-open"}`}>
            <div className="modal__registro">
                <BotonCerrarModal cerrarModal={cerrarModal} tipoModal={""} resetModal={resetModal}></BotonCerrarModal>
                <h1 className="text-dark text-center">Regístrese en Achúntale</h1>
                <div className="modal-body">
                    <div
                        className="card"
                        style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "rgb(242, 165, 50)" }}
                    >
                        <div className="row text-dark">
                            <div className="card-body text-center">
                                <form>
                                    <label htmlFor="correo" className="form-label mt-2" style={{ fontSize: "20px" }}>
                                        Correo
                                    </label>
                                    <input
                                        type="text"
                                        name="correo"
                                        className="form-control"
                                        autoComplete="off"
                                        ref={inputCorreo}
                                        onChange={(e) => {

                                        }}
                                    />
                                    <label htmlFor="contraseña" className="form-label mt-3" style={{ fontSize: "20px" }}>
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        name="contraseña"
                                        className="form-control"
                                        autoComplete="off"
                                        ref={inputContraseña}
                                    />
                                    <label htmlFor="contraseñaConfirmar" className="form-label mt-3" style={{ fontSize: "20px" }}>
                                        Confirmar contraseña
                                    </label>
                                    <input
                                        type="password"
                                        name="contraseñaConfirmar"
                                        className="form-control"
                                        autoComplete="off"
                                        ref={inputContraseñaConfirmar}
                                    />
                                    <div className="d-grid gap-2 py-5">
                                        <button className="btn btn-dark"
                                            style={{ fontSize: "24px" }}
                                            onClick={(e) => { handleRegistrar(e) }}>Registrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modalregistro