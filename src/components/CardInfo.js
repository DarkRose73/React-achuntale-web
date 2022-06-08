import React from "react";
import { dataCardsQuienesSomos } from "../data/AppData";

export default function CardInfo() {
  return (
    <div className="row">
      {dataCardsQuienesSomos.map((card) => (
        <div className="col-md-3 text-end mx-auto my-4" key={card.titulo}>
          <div className="card card-quienes-somos-info">
            <div className="card-header text-center">
              <span>
                <h2>{card.titulo}</h2>
              </span>
            </div>
            <div className="card-body text-center card-quienes-somos-info-body">
              <h5>{card.parrafo}</h5>
            </div>
          </div>
        </div>
      ))}
      <div className="col-sm-3 mx-auto my-4">
        <div className="card card-quienes-somos-info">
          <div className="card-header text-center">
            <span>
              <h2>Valores</h2>
            </span>
          </div>
          <div
            className="card-body card-quienes-somos-info-body"
            style={{ height: "180px" }}
          >
            <ul>
              <li>
                <h5>Entretención</h5>
              </li>
              <br />
              <li>
                <h5>Recreación</h5>
              </li>
              <br />
              <li>
                <h5>Convivencia</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
