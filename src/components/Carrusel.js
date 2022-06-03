import React from "react";
const dataCarrusel = [
  {
    imagen: require("./images/equipo/DavidOjeda.png"),
    nombre: "David Ojeda",
    puesto: "Gerente general",
    clase: "carousel-item active imagen-carrusel",
  },
  {
    imagen: require("./images/equipo/KevinCruces.png"),
    nombre: "Kevin Cruces",
    puesto: "Gerente de operaciones y producción",
    clase: "carousel-item imagen-carrusel",
  },
  {
    imagen: require("./images/equipo/ValentinaRamirez.png"),
    nombre: "Valentina Ramirez",
    clase: "carousel-item imagen-carrusel",
    puesto: "Gerente de ventas",
  },
  {
    imagen: require("./images/equipo/GabrielaGonzalez.png"),
    nombre: "Gabriela González",
    clase: "carousel-item imagen-carrusel",
    puesto: "Gerente de administración y R.R.H.H",
  },
  {
    imagen: require("./images/equipo/FernandaAguero.png"),
    clase: "carousel-item imagen-carrusel",
    nombre: "Fernanda Agüero",
    puesto: "Community manager",
  },
  {
    imagen: require("./images/equipo/SantiagoAbarca.png"),
    clase: "carousel-item imagen-carrusel",
    nombre: "Santiago Abarca",
    puesto: "Gerente de finanzas",
  },
  {
    imagen: require("./images/equipo/GeraldValenzuela.png"),
    clase: "carousel-item imagen-carrusel",
    nombre: "Gerald Valenzuela",
    puesto: "Gerente de operaciones y producción",
  },
  {
    imagen: require("./images/equipo/AlexisPinto.png"),
    clase: "carousel-item imagen-carrusel",
    nombre: "Alexis Pinto",
    puesto: "Gerente de marketing",
  },
  {
    imagen: require("./images/equipo/JavieraYakasovic.png"),
    clase: "carousel-item imagen-carrusel",
    nombre: "Javiera Yakasovic",
    puesto: "Gerente de innovación",
  },
];
export const Carrusel = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* ESTO PUEDE MEJORAR AL HACER PROCESO ITERATIVO */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
        </div>
        <div className="carousel-inner">
          {dataCarrusel.map((persona) => (
            <div
              className={persona.clase}
              data-bs-interval="3000"
              key={persona.nombre}
            >
              <img src={persona.imagen} alt="..." />
              <div className="texto-carrusel">
                <h4>{persona.nombre}</h4>
                <p>{persona.puesto}</p>
              </div>
            </div>
          ))}
        </div>
        <br />
      </div>
    </div>
  );
};
