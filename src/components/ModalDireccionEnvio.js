import React, { useEffect, useRef, useState } from "react";
import "./Modal.css";
import OpcionesRegion from "./OpcionesRegion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//DATOS INICIALES MODAL
const initialModal = [
  {
    nombre: "",
    direccion: "",
    ciudad: "",
    region: "Valparaiso",
    apellido: "",
    codigoPostal: "",
    pais: "",
    comuna: "",
  },
];

const REGIONES = [
  { value: "Valparaíso", option: "Valparaíso" },
  { value: "Santiago", option: "Santiago" },
];

const COMUNAS = {
  valparaiso: [
    "Algarrobo",
    "Cabildo",
    "Calle Larga",
    "Cartagena",
    "Casablanca",
    "Catemu",
    "Limache",
    "Quillota",
    "Quilpué",
    "Valparaíso",
    "Viña del mar",
  ],
  santiago: [
    "Buin",
    "Calera de Tango",
    "Colina",
    "Conchalí",
    "El Bosque",
    "Estación Central",
    "Huechuraba",
    "Las Condes",
    "Maipú",
    "San Ramón",
    "Vitacura",
  ],
};
export default function ModalDireccionEnvio({
  isOpen,
  cerrarModal,
  resetFormulario,
}) {
  //HOOKS
  const [datosModal, setDatosModal] = useState(initialModal);
  const [comunas, setComunas] = useState([]);
  const inputNombre = useRef();
  const inputDireccion = useRef();
  const inputCiudad = useRef();
  const inputApellido = useRef();
  const selectRegion = useRef();

  // ESTO ESTÁ DE MÁS (?)
  const selectComuna = useRef();

  //TODO:useEffect para cargar las comunas

  useEffect(() => {
    cargarComuna(REGIONES[0].value);
  }, []);
  //Funcion para reiniciar los valores del modal
  const resetModal = () => {
    inputNombre.current.value = "";
    inputDireccion.current.value = "";
    inputCiudad.current.value = "";
    inputApellido.current.value = "";
    selectRegion.current.value = REGIONES[0].value;
  };

  //FUNCIONES
  //Función para reiniciar los valores de la pagina completa
  const resetPagina = () => {
    resetModal();
    cerrarModal();
    resetFormulario();
  };

  const cargarComuna = (region) => {
    switch (region) {
      case REGIONES[0].value:
        setComunas(COMUNAS.valparaiso);
        break;
      case REGIONES[1].value:
        setComunas(COMUNAS.santiago);
        break;
      default:
        console.log("error al cargar comunas");
    }
  };

  const validarModal = () => {
    let errores = [];
    const MySwal = withReactContent(Swal);
    if (inputNombre.current.value === "") {
      errores.push("nombre");
    }
    if (inputApellido.current.value === "") {
      errores.push("apellido");
    }
    if (inputDireccion.current.value === "") {
      errores.push("dirección");
    }
    if (inputCiudad.current.value === "") {
      errores.push("ciudad del envío");
    }
    if (errores.length === 0) {
      let nroCompra = Math.round(Math.random() * 100);
      MySwal.fire({
        title: "Compra realizada con éxito",
        text: `Gracias por comprar en Achúntale, tu número de orden es: ${nroCompra}`,
        icon: "success",
      }).then((resultado) => {
        resetPagina();
      });
    } else {
      let mensajeError = "";
      let ultimo = errores[errores.length - 1];
      for (let error of errores) {
        if (error === ultimo) {
          mensajeError += ` ${error}.`;
        } else {
          mensajeError += `${error}, `;
        }
      }
      MySwal.fire({
        title: "Error en el ingreso de datos",
        text: `Ingrese los datos solicitados: ${mensajeError}`,
        icon: "warning",
      });
    }
  };

  //HANDLERS
  //ESTOS HANDLERS SE PUEDEN PONER TODOS EN UNO
  //Handle para el input nombre
  const handleNombre = (nombre) => {
    const nuevosValoresFormulario = {
      ...datosModal,
      nombre,
    };
    setDatosModal(nuevosValoresFormulario);
  };

  //Handle para el input direccion
  const handleDireccion = (direccion) => {
    const nuevosValoresFormulario = {
      ...datosModal,
      direccion,
    };
    setDatosModal(nuevosValoresFormulario);
  };

  //Handle para el input ciudad
  const handleCiudad = (ciudad) => {
    const nuevosValoresFormulario = {
      ...datosModal,
      ciudad,
    };
    setDatosModal(nuevosValoresFormulario);
  };
  //Handle para el input apellido
  const handleApellido = (apellido) => {
    const nuevosValoresFormulario = {
      ...datosModal,
      apellido,
    };
    setDatosModal(nuevosValoresFormulario);
  };
  //Handle para el input codigo postal
  const handleCodigoPostal = (codigoPostal) => {
    const nuevosValoresFormulario = {
      ...datosModal,
      codigoPostal,
    };
    setDatosModal(nuevosValoresFormulario);
  };

  //Handle para el select region
  const handleRegion = (region) => {
    //CARGAR DATOS DE COMUNA EN BASE A LA REGIÓN
    cargarComuna(region);
  };

  const handleAceptar = () => {
    validarModal();
  };
  //Handle para el select pais
  //Handle para el select comuna

  return (
    <div className={`modal-envio ${isOpen && "modal-open"}`}>
      <div className="modal__dialog">
        <h1 className="text-dark">Datos de envío</h1>
        <div className="modal-body">
          <div
            className="card"
            style={{ borderColor: "rgba(0, 0, 0, 0)", backgroundColor: "#ccc" }}
          >
            <div className="row text-dark">
              <div className="col-md-6">
                <div className="card-body">
                  <label htmlFor="nombre" className="form-label">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    autoComplete="off"
                    ref={inputNombre}
                    value={datosModal.nombre}
                    onChange={(e) => handleNombre(e.target.current)}
                  />
                </div>
                <div className="card-body">
                  <label htmlFor="apellido" className="form-label">
                    Dirección *
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    className="form-control"
                    autoComplete="off"
                    ref={inputDireccion}
                    value={datosModal.direccion}
                    onChange={(e) => handleDireccion(e.target.current)}
                  />
                </div>
                <div className="card-body">
                  <label htmlFor="apellido" className="form-label">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    id="ciudad"
                    className="form-control"
                    autoComplete="off"
                    ref={inputCiudad}
                    value={datosModal.ciudad}
                    onChange={(e) => handleCiudad(e.target.current)}
                  />
                </div>
                <div className="card-body">
                  <label htmlFor="apellido" className="form-label">
                    Región *
                  </label>
                  <select
                    name=""
                    className="form-control"
                    id="select-region"
                    onChange={(e) => handleRegion(e.target.value)}
                    ref={selectRegion}
                  >
                    <OpcionesRegion datos={REGIONES}></OpcionesRegion>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label className="form-label">Apellido *</label>
                  <input
                    type="text"
                    id="apellido"
                    className="form-control"
                    autoComplete="off"
                    value={datosModal.apellido}
                    ref={inputApellido}
                    onChange={(e) => handleApellido(e.target.current)}
                  />
                </div>
                <div className="card-body">
                  <label className="form-label">Comuna *</label>
                  <select
                    id="select-comuna"
                    className="form-control"
                    ref={selectComuna}
                  >
                    {comunas.map((comuna) => (
                      <option value={comuna} key={comuna}>
                        {comuna}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-success mt-4 mx-5"
          onClick={() => {
            handleAceptar();
          }}
        >
          Aceptar
        </button>

        <button
          className="btn btn-danger mt-4 mx-5"
          onClick={() => {
            resetModal();
            cerrarModal();
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
