import React from "react";
import FormularioCompra from "./FormularioCompra";
import ImagenPromoCarrito from "./ImagenPromoCarrito";

const Comprar = ({ usuario }) => {
  return (
    <div>
      <div className="row mt-4 ">
        <div className="col-md-6 mx-auto">
          {/* CARD PARA COMPRA */}
          {/* TODO PASAR ESTE ESTILO A ESTILOS.CSS */}
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
            <FormularioCompra usuario={usuario} />
          </div>
        </div>
        {/* EXTRAER A COMPONENTE */}
        <div className="col-md-6 mx-auto px-4">
          <ImagenPromoCarrito />
        </div>
      </div>
    </div>
  );
};

export default Comprar;
