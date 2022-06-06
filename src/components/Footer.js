import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="card-footer mt-3 mx-auto">
          <div className="row">
            <div className="text-center" style={{ color: "#fff" }}>
              <h1>Síguenos en Instagram</h1>
              <a href="https://www.instagram.com/achuntale_cl/" target="_blank">
                <img src={require("./images/instagram.png")} alt="" />
              </a>
              <h5>@achuntale_cl</h5>
            </div>
          </div>
        </div>
        <br />
      </footer>
    </div>
  );
};

export default Footer;
