import React from "react";

export default function ModalDireccionEnvio({ isOpen, cerrarModal }) {
  return (
    <div>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mx-auto" id="staticBackdropLabel">
            Datos de envío
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={cerrarModal}
          ></button>
        </div>
        <div className="modal-body">
          <div className="card">
            <div className="row">
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
        <div className="modal-footer">
          <button
            type="button"
            id="btn-modal-confirmar"
            className="btn btn-success btn-outline-dark"
          >
            Confirmar
          </button>
          <button
            type="button"
            id="btn-modal-cancelar"
            className="btn btn-danger btn-outline-dark"
            data-bs-dismiss="modal"
            onClick={cerrarModal}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
