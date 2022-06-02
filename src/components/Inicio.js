import React from "react";
import "./Estilos.css";

const Inicio = () => {
  return (
    <div>
      {/* CARD INICIAL */}
      <div className="card mx-auto card-inicio">
        <div className="card-body text-center" style={{ fontSize: "20px" }}>
          ¡Derrota a tu oponente achuntando la argolla en los ganchos! <br />{" "}
          <a href="" style={{ color: "#ffffff" }}>
            Compra aquí
          </a>
        </div>
      </div>

      {/*FILA DE LA IMAGEN PROMOCIONAL Y EL VIDEO*/}
      <div className="row">
        <div className="col-sm-6">
          <div
            className="card mx-auto bg-dark"
            // TODO: MOVER ESTILO A CSS
            style={{ height: "auto", width: "600px", padding: " 4px" }}
          >
            <img
              src={require("./images/kitAchuntaleQR.jpeg")}
              className="card-img-top mx-auto"
              //   MOVER A CSS
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
        <div className="col-sm-6">
          <div
            className="card mx-auto bg-dark"
            style={{ width: "fit-content", padding: "2px" }}
          >
            <video
              src={require("./images/VideoPromo.mp4")}
              preload="auto"
              loop="true"
              controls="true"
              className="card-img-top"
              //   MOVER A CSS
              style={{ height: "500px" }}
            ></video>
          </div>
        </div>
      </div>

      {/* SECCIÓN COMENTARIOS */}
      <div class="row">
        <div className="col-md-9 mx-auto">
          <div
            className="card my-5"
            style={{ backgroundColor: "rgba(255, 128, 0, 0.4)" }}
          >
            <div className="row text-center px-3 py-3">
              <div className="card col-md-3 mx-auto background-comentario">
                <div className="card-body border-dark mx-auto">
                  <p className="texto-comentario">
                    "Genial el producto, me divertí mucho con mis amigos"
                  </p>
                  <img src={require("./images/starFull.png")} alt="" />
                  <img src={require("./images/starFull.png")} alt="" />
                  <img src={require("./images/starFull.png")} alt="" />
                  <img src={require("./images/starFull.png")} alt="" />
                  <img src={require("./images/starFull.png")} alt="" />
                </div>
                <div className="card-footer">
                  <h6>Joan Salas</h6>
                </div>
              </div>

              <div className="card col-md-3 mx-auto background-comentario">
                <div className="card-body border-dark mx-auto">
                  <p className="texto-comentario">
                    "Muy buen producto, pero se demoró mucho el envío a mi casa"
                  </p>
                  <img src={require("./images/starFull.png")} alt="" />
                  <img src={require("./images/starFull.png")} alt="" />
                  <img src={require("./images/starFull.png")} alt="" />
                  <img src={require("./images/starEmpty.png")} alt="" />
                  <img src={require("./images/starEmpty.png")} alt="" />
                </div>
                <div className="card-footer">
                  <h6>Carlitos Lechuga</h6>
                </div>
              </div>
              <div className="card col-md-3 mx-auto background-comentario">
                <div className="card-body border-dark mx-auto">
                  <p className="texto-comentario">
                    "Muy buen producto, recomendadísimo para los carretes!"
                  </p>
                  <img src={require("./images/starFull.png")} alt="" />
                  <img src={require("./images/starFull.png")} alt="" />
                  <img src={require("./images/starFull.png")} alt="" />
                  <img src={require("./images/starFull.png")} alt="" />
                  <img src={require("./images/starFull.png")} alt="" />
                </div>
                <div className="card-footer">
                  <h6>Javiera Guerra</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
