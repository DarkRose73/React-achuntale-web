import React, { useContext, useEffect, useRef, useState } from "react";
import ModalDireccionEnvio from "./ModalDireccionEnvio";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import UsuarioContext from "../contexts/UsuariosContext";
import * as ComprasService from "./comprasService"

//DATOS INICIALES FORMULARIO
const initialState = {
  correo: "",
  cantidadCompra: 0,
  precioTotalCompra: 0,
  stock: 100,
};
const precioProducto = 13900;

export default function FormularioCompra() {
  //HOOKS
  const [formulario, setFormulario] = useState(initialState);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { usuario, setUsuario } = useContext(UsuarioContext)

  useEffect(() => {
    if (usuario) {
      const nuevosValoresFormulario = {
        ...formulario,
        correo: usuario.correo
      }
      setFormulario(nuevosValoresFormulario)
    } else {
      setFormulario(initialState)
    }
  }, [usuario])

  const inputCorreo = useRef();
  const inputCantidad = useRef();
  //FUNCIONES
  //Funcion para validar correo
  const validarCorreo = (correo) => {
    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(correo)) {
      return true;
    }
    return false;
  };
  //Funciones para abrir y cerrar modal
  const abrirModal = () => {
    setIsOpenModal(true);
  };
  const cerrarModal = () => {
    setIsOpenModal(false);
  };
  const validarDatosUsuario = (usuario) => {
    let flag = true;
    if (usuario.datos.nombre === "") {
      flag = false
    }
    if (usuario.datos.apellido === "") {
      flag = false
    } if (usuario.datos.direccion === "") {
      flag = false
    } if (usuario.datos.ciudad === "") {
      flag = false
    }
    return flag
  }

  //HANDLERS
  //Handlers de inputs
  const handleClickBotonesCantidad = (cantidadCompra) => {
    const stock = formulario.stock;
    const prevCantidadCompra = formulario.cantidadCompra;
    let nuevosValoresFormulario = {};

    //EN CASO DE QUE COMPRE MÁS QUE EL STOCK
    if (prevCantidadCompra + cantidadCompra > initialState.stock) {
      nuevosValoresFormulario = {
        ...formulario,
        stock: 0,
        precioTotalCompra: initialState.stock * precioProducto,
        cantidadCompra: initialState.stock,
      };
    }
    //EN CASO DE QUE COMPRE MENOS QUE EL STOCK
    else if (prevCantidadCompra + cantidadCompra < 0) {
      nuevosValoresFormulario = {
        ...formulario,
        stock: initialState.stock,
        precioTotalCompra: 0,
        cantidadCompra: 0,
      };
    }
    //EN CUALQUIER OTRO CASO
    else {
      nuevosValoresFormulario = {
        ...formulario,
        stock: stock - cantidadCompra,
        precioTotalCompra:
          (cantidadCompra + prevCantidadCompra) * precioProducto,
        cantidadCompra: formulario.cantidadCompra + cantidadCompra,
      };

      setFormulario(nuevosValoresFormulario);
    }
  };
  const handleResetFormulario = () => {
    if (usuario) {
      setFormulario({ ...initialState, correo: usuario.correo });
    } else {
      setFormulario(initialState);
    }
  };
  const handleInputCorreo = (valor) => {
    const nuevosValoresFormulario = {
      ...formulario,
      correo: valor,
    };
    setFormulario(nuevosValoresFormulario);
  };
  const handleClickComprar = async () => {
    // VALIDACIONES DEL FORMULARIO
    let errores = [];
    const cantidad = inputCantidad.current.value;
    const correo = inputCorreo.current.value;
    const MySwal = withReactContent(Swal);
    if (!validarCorreo(correo)) {
      errores.push("correo");
    }
    if (cantidad <= 0) {
      errores.push("cantidad");
    }

    //EN CASO DE NO HABER ERRORES CONSULTAR
    //POR DATOS INGRESADOS Y ABRIR MODAL
    if (errores.length === 0) {
      // En caso de que haya sesión inciada
      if (usuario) {
        MySwal.fire({
          customClass: {
            denyButton: "swalBotonesCompra swalBotonesConfirmar",
            confirmButton: "swalBotonesCompra swalBotonesConfirmar",
            cancelButton: "swalBotonesCompra"
          },
          title: "¿Desea confirmar los siguientes datos?",
          html: `
          <div class="text-start">
            <strong>Correo:</strong> ${correo}<br/> 
            <strong>Cantidad de compra:</strong> ${cantidad}<br/>
            <strong>Precio total:</strong> $${formulario.precioTotalCompra}<br/>
            <strong>Datos de envío:</strong><br/>
            <div class="card card-body text-dark" style="background-color: rgb(242, 165, 50);border-color:000">
              <ul class="text-start">
                <li><strong>Nombre y apellido:</strong> ${usuario.datos.nombre || 'SIN DATOS'} ${usuario.datos.apellido}</li>
                <li><strong>Dirección de envío:</strong> ${usuario.datos.direccion || 'SIN DATOS'}</li>
                <li><strong>Ciudad:</strong> ${usuario.datos.ciudad || 'SIN DATOS'}</li>
                <li><strong>Región:</strong> ${usuario.datos.region || 'SIN DATOS'}</li>
                <li><strong>Comuna:</strong> ${usuario.datos.comuna || 'SIN DATOS'}</li>
              </ul>
            </div> 
          </div>
          `,
          showCancelButton: "true",
          showConfirmButton: "true",
          showDenyButton: "true",
          denyButtonText: "Comprar para mí",
          confirmButtonText: "Regalar",
          cancelButtonText: "Cancelar",
          cancelButtonColor: "#dc3545",
          background: "#ddd",
        }).then((respuesta) => {
          if (respuesta.isConfirmed) {
            abrirModal();
          }
          // En caso de utilizar los datos de envío
          if (respuesta.isDenied) {
            //Comprobar que los datos de envio no esten vacios
            if (validarDatosUsuario(usuario)) {
              const datosCompra = {
                correoComprador: usuario.correo,
                cantidadCompra: Number(inputCantidad.current.value),
                totalCompra: Number(formulario.precioTotalCompra),
                datosComprador: usuario.datos,
                estadoCompra: true
              }
              const nroCompra = ComprasService.crearCompra(datosCompra);

              // TODO arreglar esto
              MySwal.fire({
                customClass: { confirmButton: "swalBotonesConfirmar" },
                title: "Compra realizada con éxito",
                text: `Gracias por comprar en Achúntale`,
                icon: "success",
              }).then((resultado) => {

              });
            } else {
              MySwal.fire({
                customClass: { confirmButton: "swalBotonesConfirmar" },
                title: "Error, los datos de envío no pueden estar vacíos",
                icon: "warning",

              })
            }
          }
        });
      }
      else {
        MySwal.fire({
          customClass: {
            confirmButton: "swalBtnColorIngresar"
          },
          title: "¿Desea confirmar los siguientes datos?",
          html: `        
          <strong>Correo:</strong> ${correo}<br/> 
          <strong>Cantidad de compra:</strong> ${cantidad}<br/>
          <strong>Precio total:</strong> $${formulario.precioTotalCompra}
          `,
          showCancelButton: "true",
          showConfirmButton: "true",
          confirmButtonText: "Sí ",
          cancelButtonText: "No",
          confirmButtonColor: "#000",
          cancelButtonColor: "#dc3545",
          background: "#ddd",
          icon: "question",
        }).then((respuesta) => {
          if (respuesta.isConfirmed) {
            abrirModal();
          }
        });
      }
    }
    //EN CASO DE HABER DATOS ERRÓNEOS
    else {
      MySwal.fire({
        customClass: { confirmButton: "swalBotonesConfirmar" },
        title: "Datos erróneos",
        icon: "error",
        text: `Verifique el ingreso de datos en: ${errores.toString()}`,
        background: "#ddd"
      });
    }
  };

  return (
    <div className="card-body text-center mx-auto">
      {/* INGRESO CORREO */}
      <div className="input-group" style={{ width: "500px" }}>
        <input
          type="email"
          id="correo"
          autoComplete="off"
          placeholder="Ingrese el correo de compra"
          className="form-control bg-dark"
          style={{ color: "#EADEDE" }}
          ref={inputCorreo}
          value={formulario.correo}
          onChange={(e) => handleInputCorreo(e.target.value)}
        />
      </div>
      <br />
      {/* INGRESO CANTIDAD A COMPRAR */}
      <div className="input-group">
        <button
          className="btn btn-danger"
          id="quitar5"
          style={{ width: "50px" }}
          onClick={() => handleClickBotonesCantidad(-5)}
        >
          -5
        </button>
        <button
          className="btn btn-danger"
          id="quitar"
          style={{ width: "50px", marginRight: "20px" }}
          onClick={() => handleClickBotonesCantidad(-1)}
        >
          -1
        </button>
        <input
          type="number"
          className="form-control bg-dark mx-auto"
          disabled={true}
          placeholder="Cantidad"
          min="0"
          max="50"
          style={{ width: "15em", color: "#EADEDE" }}
          id="cantidad"
          ref={inputCantidad}
          value={formulario.cantidadCompra}
        ></input>

        <button
          className="btn btn-success"
          id="agregar"
          style={{ width: "50px", marginLeft: "20px" }}
          onClick={() => handleClickBotonesCantidad(1)}
        >
          +1
        </button>
        <button
          className="btn btn-success"
          id="agregar5"
          style={{ width: "50px" }}
          onClick={() => handleClickBotonesCantidad(5)}
        >
          +5
        </button>
      </div>
      <label
        htmlFor="stock"
        id="stock"
        style={{ fontSize: "large", color: "#000" }}
      >
        Stock disponible: {formulario.stock}
      </label>
      {/* INGRESO PRECIO TOTAL; NO CAMBIABLE POR EL USUARIO */}
      <div className="input-group mt-3">
        <span
          className="input-group-text input-group-lg bg-dark"
          style={{ color: "#EADEDE" }}
        >
          Precio total (CLP):
        </span>
        <input
          type="text"
          className="form-control bg-dark"
          id="precio"
          style={{ color: "#EADEDE" }}
          disabled
          value={"$ " + formulario.precioTotalCompra}
        />
      </div>
      <div
        className="card-footer text-center"
        style={{
          border: "rgba(0,0,0,0)",
          background: "rgba(100, 100, 0, 0)",
        }}
      >
        {/* BOTONES DEL FOOTER, PARA REALIZAR COMPRA O LIMPIAR */}
        <button
          className="btn my-3 mx-auto text-center"
          id="btn-comprar"
          style={{ width: "100px", color: "orange", backgroundColor: "#000" }}
          onClick={handleClickComprar}
        >
          Comprar
        </button>
        <button
          className="btn my-3 text-center"
          id="btn-limpiar"
          style={{
            marginLeft: "40px",
            width: "100px",
            color: "orange",
            backgroundColor: "#000",
          }}
          onClick={handleResetFormulario}
        >
          Limpiar
        </button>

        {/* MODAL */}
        {
          <ModalDireccionEnvio
            isOpen={isOpenModal}
            cerrarModal={cerrarModal}
            resetFormulario={handleResetFormulario}
          />
        }
      </div>
    </div>
  );
}
