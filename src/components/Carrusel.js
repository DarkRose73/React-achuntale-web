import React from "react";
// Importar componentes de Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

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

export default function Carrusel() {
  return (
    <div className="col-md-6 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {dataCarrusel.map((persona) => (
          <SwiperSlide key={persona.nombre}>
            <div className="col-md-6" key={persona.nombre}>
              <div
                className="card mb-3 card-quienes-somos"
                style={{ height: "auto" }}
              >
                <img
                  src={persona.imagen}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "350px" }}
                />
                <div className="card-body">
                  <h3 className="card-title text-center text-light">
                    {persona.nombre}
                  </h3>
                  <h6 className="card-text text-center text-light">
                    {persona.puesto}
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
