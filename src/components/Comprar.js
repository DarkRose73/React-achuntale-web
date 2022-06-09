import React from "react";
import FormularioCompra from "./FormularioCompra";
import ImagenPromoCarrito from "./ImagenPromoCarrito";

const Comprar = () => {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-md-6 mx-auto">
          {/* CARD PARA COMPRA */}
          <div
            className="card"
            style={{
              color: "#EADEDE",
              background: "rgba(100, 100, 0, 0)",
              border: "rgba(100, 100, 0, 0)",
            }}
          >
            <div className="text-center">
              <h1 style={{ fontWeight: "700", color: "black" }}>Comprar</h1>
            </div>
            <FormularioCompra />
          </div>
        </div>
        {/* EXTRAER A COMPONENTE */}
        <div className="col-md-6 mx-auto">
          <ImagenPromoCarrito />
        </div>
      </div>

      {/* TODO:ELIMINAR ESTO */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Datos de envío
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
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
                      />
                    </div>
                    <div className="card-body">
                      <label htmlFor="apellido" className="form-label">
                        Ciudad *
                      </label>
                      <input type="text" id="ciudad" className="form-control" />
                    </div>
                    <div className="card-body">
                      <label htmlFor="apellido" className="form-label">
                        Región *
                      </label>
                      <select
                        name=""
                        className="form-control"
                        id="select-region"
                      >
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
                      />
                    </div>
                    <div className="card-body">
                      <label className="form-label">Codigo postal *</label>
                      <input
                        type="text"
                        id="codigoPostal"
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
                      <select
                        id="select-comuna"
                        className="form-control"
                      ></select>
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
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprar;
