import React from "react";
import { dataComentarios } from "../data/AppData";

export const Comentarios = () => {
  const cargarEstrellas = (puntuacion) => {
    switch (puntuacion) {
      case 5:
        return (
          <div>
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starFull.png")} alt="" />
          </div>
        );
      case 4:
        return (
          <div>
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
          </div>
        );
      case 3:
        return (
          <div>
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
          </div>
        );
      case 2:
        return (
          <div>
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
          </div>
        );
      case 1:
        return (
          <div>
            <img src={require("./images/starFull.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
          </div>
        );
      default:
        return (
          <div>
            <img src={require("./images/starEmpty.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
            <img src={require("./images/starEmpty.png")} alt="" />
          </div>
        );
    }
  };
  return (
    <div className="container">
      <div className="row text-center px-3 py-3">
        {dataComentarios.map((comentario) => (
          <div
            className="card col-md-3 mx-auto background-comentario"
            key={comentario.id}
          >
            <div className="card-body border-dark mx-auto">
              <div className="row">
                {cargarEstrellas(comentario.puntuacion)}
              </div>
              <br />
              <div className="row">
                <p className="texto-comentario">{comentario.texto}</p>
              </div>
            </div>
            <div className="card-footer">
              <h6>{comentario.autor}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
