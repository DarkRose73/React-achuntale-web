import React, { useEffect, useReducer, useRef, useState } from "react";
import "./Modal.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Modalregistro = ({ isOpen, cerrarModal }) => {
    return (
        <div className={`modal-envio ${isOpen && "modal-open"}`}>
            <div className="modal__dialog">
                <h1 className="text-dark text-center">Datos de envío</h1>
                <div className="modal-body">
                    <div
                        className="card"
                        style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "#ccc" }}
                    >
                        <div className="row text-dark">
                            <div className="card-body">
                                <label htmlFor="nombre" className="form-label">
                                    Nombre *
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modalregistro