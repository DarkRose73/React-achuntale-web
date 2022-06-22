import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-personalizado mt-3 mx-auto">
          <div className="row">
            <div className="text-center" style={{ color: "#fff" }}>
              <h1>Síguenos en Instagram</h1>
              <a href="https://www.instagram.com/achuntale_cl/" target="_blank" rel="noreferrer">
                <img src={require("./images/instagram.png")} alt="" />
              </a>
              <h5>@achuntale_cl</h5>
              <p className="text-light">Web Creada por Joan Salas</p>
              <a href="https://portafolio-joansalas.netlify.app/" target="_blank" rel="noreferrer">
                <img src={require("./images/oniPequeño.png")} alt="">
                </img>
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
