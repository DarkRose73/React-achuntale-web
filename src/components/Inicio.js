import React from "react";
import { Comentarios } from "./Comentarios";
import "./Estilos.css";

const Inicio = () => {
  return (
    <div>
      {/* CARD INICIAL */}
      <div className="card mx-auto card-inicio">
        <div className="card-body text-center" style={{ fontSize: "20px" }}>
          ¡Derrota a tu oponente achuntando la argolla en los ganchos!
        </div>
      </div>

      {/*FILA DE LA IMAGEN PROMOCIONAL Y EL VIDEO*/}
      <div className="row">
        <div className="col-md-6">
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
        {/* VIDEO */}
        <div className="col-md-6">
          <div className="card mx-auto bg-dark contenedor-video-promocional">
            <video
              src={require("./images/VideoPromo.mp4")}
              preload="auto"
              className="card-img-top"
              //   TAMAÑO VIDEO
              style={{ height: "500px" }}
            ></video>
          </div>
        </div>
      </div>

      {/* SECCIÓN COMENTARIOS */}
      <div className="row">
        <div className="col-md-9 mx-auto">
          <div className="card my-5 fondo-comentarios">
            <Comentarios></Comentarios>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
