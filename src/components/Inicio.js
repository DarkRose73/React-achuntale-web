import React from "react";
import { Comentarios } from "./Comentarios";
import "./Estilos.css";
import ImagenPromocionalInicio from "./ImagenPromocionalInicio";
import VideoPromocional from "./VideoPromocional";

const CardInicio = () => {
  return (
    <div className="card mx-auto card-inicio">
      <div className="card-body text-center" style={{ fontSize: "20px" }}>
        ¡Derrota a tu oponente achuntando la argolla en los ganchos!
      </div>
    </div>
  );
};

const Inicio = () => {
  return (
    <div>
      {/* CARD INICIAL */}
      <CardInicio />
      {/*FILA DE LA IMAGEN PROMOCIONAL Y EL VIDEO*/}
      <div className="row">
        <div className="col-md-6">
          <ImagenPromocionalInicio />
        </div>
        {/* VIDEO */}
        <div className="col-md-6">
          <VideoPromocional />
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
