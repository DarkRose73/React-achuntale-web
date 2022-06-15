import React from "react";

export default function ImagenPromoCarrito() {
  return (
    <div>
      <div
        className="card"
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          border: "rgba(0, 0, 0, 0)",
        }}
      >
        <img
          src={require("./images/allInOne2.png")}
          className="card-img-top"
          style={{ width: "700px" }}
          alt=""
        />
        <div
          className="card-body text-center"
          style={{
            background: "rgba(0, 0, 0, 0)",
            border: "rgba(0, 0, 0, 0)",
            color: "#EADEDE",
          }}
        >
          <h2>¡El kit es casi tuyo!</h2>
        </div>
      </div>
    </div>
  );
}
