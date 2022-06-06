import React from "react";

export default function ImagenPromocionalInicio() {
  return (
    <div>
      <div className="card mx-auto bg-dark contenedor-imagen-kit">
        <img
          src={require("./images/kitAchuntaleQR.jpeg")}
          className="card-img-top mx-auto"
          //   TAMAÑO DE IMAGEN
          style={{ width: "590px" }}
          alt=""
        />
        <div className="card-body bg-light">
          <h4 className="card-title">Contenido del kit achúntale</h4>
          <ul>
            <li>
              <h5>Vasos</h5>
            </li>
            <li>
              <h5>Juego achúntale</h5>
            </li>
            <li>
              <h5>Morral</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
