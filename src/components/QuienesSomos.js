import React from "react";
import CardInfo from "./CardInfo";
import Carrusel from "./Carrusel";

const QuienesSomos = () => {
  return (
    <div>
      {/*CARRUSEL DE IMÁGENES*/}
      <div className="mt-3">
        <Carrusel />
      </div>
      <div className="mx-5">
        <CardInfo />
      </div>
    </div>
  );
};

export default QuienesSomos;
