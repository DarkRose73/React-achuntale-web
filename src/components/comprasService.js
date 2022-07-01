import axios from "axios";

// Registro de compra
export const crearCompra = async (compra) => {
    try {
        const nuevaCompra = await axios.post("http://localhost:4000/api/compras", {
            correoComprador: compra.correo,
            cantidadCompra: compra.cantidadCompra,
            totalCompra: compra.totalCompra,
            datosComprador: compra.datosComprador,
            estadoCompra: true
        })
        return nuevaCompra
    } catch (error) {
        // console.log(error)
    }
}