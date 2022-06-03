import React from "react";
import { Carrusel } from "./Carrusel";

const QuienesSomos = () => {
  return (
    <div>
      {/*CARRUSEL DE IMÁGENES*/}
      <div className="row">
        <div className="col-sm-8 my-2 mx-auto">
          <div className="contenedor">
            <div className="contenedor-carrusel"></div>
            <Carrusel></Carrusel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
