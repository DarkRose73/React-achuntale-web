import React from "react";
import "./Modal.css";

export default function ModalDireccionEnvio({ isOpen, cerrarModal }) {
  return (
    <div className={`modal-envio ${isOpen && "modal-open"}`}>
      <div className="modal__dialog">
        <h1 className="text-dark">Datos de envío</h1>
        <div className="modal-body">
          <div
            className="card"
            style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "#ccc" }}
          >
            <div className="row text-dark">
              <div className="col-md-6">
                <div className="card-body">
                  <label htmlFor="nombre" className="form-label">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="card-body">
                  <label htmlFor="apellido" className="form-label">
                    Dirección *
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="card-body">
                  <label htmlFor="apellido" className="form-label">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    id="ciudad"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="card-body">
                  <label htmlFor="apellido" className="form-label">
                    Región *
                  </label>
                  <select name="" className="form-control" id="select-region">
                    <option value="Valparaiso">Valparaíso</option>
                    <option value="Santiago">Región Metropolitana</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label className="form-label">Apellido *</label>
                  <input
                    type="text"
                    id="apellido"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="card-body">
                  <label className="form-label">Codigo postal *</label>
                  <input
                    type="number"
                    id="codigoPostal"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>
                <div className="card-body">
                  <label className="form-label">País *</label>
                  <select className="form-control" id="select-pais">
                    <option value="Chile">Chile</option>
                  </select>
                </div>
                <div className="card-body">
                  <label className="form-label">Comuna *</label>
                  <select id="select-comuna" className="form-control"></select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-success mt-4" onClick={cerrarModal}>
          Aceptar
        </button>
        <button className="btn btn-danger mt-4" onClick={cerrarModal}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
