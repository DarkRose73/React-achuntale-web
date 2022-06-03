import React from "react";

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
            <div className="card-body text-center mx-auto">
              {/* INGRESO DE DATOS */}
              <div className="input-group" style={{ width: "500px" }}>
                <input
                  type="email"
                  id="correo"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  autocomplete="off"
                  placeholder="Ingrese su correo"
                  className="form-control bg-dark"
                  style={{ color: "#EADEDE" }}
                />
              </div>
              <br />
              <div className="input-group">
                <button
                  className="btn btn-danger btn-outline-dark"
                  id="quitar5"
                  style={{ width: "50px" }}
                >
                  -5
                </button>
                <button
                  className="btn btn-danger btn-outline-dark"
                  id="quitar"
                  style={{ width: "50px", marginRight: "20px" }}
                >
                  -1
                </button>
                <input
                  type="number"
                  className="form-control bg-dark mx-auto"
                  disabled="true"
                  placeholder="Cantidad"
                  min="0"
                  max="50"
                  style={{ width: "15em", color: "#EADEDE" }}
                  id="cantidad"
                />
                <button
                  className="btn btn-success btn-outline-dark"
                  id="agregar"
                  style={{ width: "50px", marginLeft: "20px" }}
                >
                  +1
                </button>
                <button
                  className="btn btn-success btn-outline-dark"
                  id="agregar5"
                  style={{ width: "50px" }}
                >
                  +5
                </button>
              </div>
              <label
                for="stock"
                id="stock"
                style={{ fontSize: "large", color: "#000" }}
              >
                Stock disponible: 50
              </label>
              <div className="input-group mt-3">
                <span
                  className="input-group-text input-group-lg bg-dark"
                  style={{ color: "#EADEDE" }}
                >
                  Precio total (CLP):
                </span>
                <input
                  type="text"
                  className="form-control bg-dark"
                  id="precio"
                  style={{ color: "#EADEDE" }}
                  disabled
                />
              </div>
            </div>
            {/* BOTONES */}
            <div
              className="card-footer text-center"
              style={{
                border: "rgba(0,0,0,0)",
                background: "rgba(100, 100, 0, 0)",
              }}
            >
              <button
                className="btn my-3 mx-auto text-center btn-success"
                id="btn-comprar"
                disabled
                style={{ width: "100px", color: "#000" }}
              >
                Comprar
              </button>
              <button
                className="btn my-3 text-center"
                id="btn-limpiar"
                style={{
                  marginLeft: "40px",
                  width: "100px",
                  color: "orange",
                  backgroundColor: "#000",
                }}
              >
                Limpiar
              </button>
              <button
                data-bs-toggle="modal"
                id="btn-modal"
                data-bs-target="#staticBackdrop"
                disabled
                style={{ opacity: "0" }}
              ></button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mx-auto">
          <div
            className="card mx-auto"
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              border: "rgba(0, 0, 0, 0)",
            }}
          >
            <img
              src={require("./images/allInOne2.png")}
              className="card-img-top mx-auto"
              alt=""
            />
            <div
              className="card-body text-center"
              style={{
                background: "rgba(0, 0, 0, 0)",
                border: "rgba(0, 0, 0, 0)",
                color: "#EADEDE",
              }}
            >
              <h2>¡El kit es casi tuyo!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprar;
