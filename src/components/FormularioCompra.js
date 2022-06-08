import React, { useRef, useState } from "react";
import ModalDireccionEnvio from "./ModalDireccionEnvio";

const initialState = {
  correo: "",
  cantidadCompra: 0,
  precioTotalCompra: 0,
  stock: 100,
};
const precioProducto = 12900;

export default function FormularioCompra() {
  const [formulario, setFormulario] = useState(initialState);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const inputCorreo = useRef();
  const inputCantidad = useRef();

  const validarCorreo = (correo) => {
    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(correo)) {
      return true;
    }
    return false;
  };

  const abrirModal = () => {
    setIsOpenModal(true);
  };
  const cerrarModal = () => {
    setIsOpenModal(false);
  };

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
    setFormulario(initialState);
  };
  const handleInputCorreo = (valor) => {
    const nuevosValoresFormulario = {
      ...formulario,
      correo: valor,
    };
    setFormulario(nuevosValoresFormulario);
  };
  const handleClickComprar = () => {
    // VALIDACIONES DEL FORMULARIO
    let errores = [];
    const cantidad = inputCantidad.current.value;
    const correo = inputCorreo.current.value;
    if (!validarCorreo(correo)) {
      errores.push("Correo incorrecto");
    }
    if (cantidad <= 0) {
      errores.push("No se pueden comprar 0 productos");
    }

    //EN CASO DE NO HABER ERRORES MOSTRAR EL MODAL
    if (errores.length === 0) {
      abrirModal();
      console.log("mostrar modal");
    }
  };

  return (
    <div className="card-body text-center mx-auto">
      {/* INGRESO DE DATOS */}
      {/* INGRESO CORREO */}
      <div className="input-group" style={{ width: "500px" }}>
        <input
          type="email"
          id="correo"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          autoComplete="off"
          placeholder="Ingrese su correo"
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
          className="btn btn-danger btn-outline-dark"
          id="quitar5"
          style={{ width: "50px" }}
          onClick={() => handleClickBotonesCantidad(-5)}
        >
          -5
        </button>
        <button
          className="btn btn-danger btn-outline-dark"
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
          className="btn btn-success btn-outline-dark"
          id="agregar"
          style={{ width: "50px", marginLeft: "20px" }}
          onClick={() => handleClickBotonesCantidad(1)}
        >
          +1
        </button>
        <button
          className="btn btn-success btn-outline-dark"
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
          className="btn my-3 mx-auto text-center btn-success"
          id="btn-comprar"
          style={{ width: "100px", color: "#000" }}
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
        {<ModalDireccionEnvio isOpen={isOpenModal} cerrarModal={cerrarModal} />}
      </div>
    </div>
  );
}
