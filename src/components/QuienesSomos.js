import React from "react";
import CardInfo from "./CardInfo";
import { Carrusel } from "./Carrusel";

const QuienesSomos = () => {
  return (
    <div>
      {/*CARRUSEL DE IMÁGENES*/}
      <div className="row">
        <div className="col-md-9 my-2 mx-auto">
          <Carrusel></Carrusel>
        </div>
      </div>

      <div className="mx-5">
        <CardInfo />
      </div>
    </div>
  );
};

export default QuienesSomos;
