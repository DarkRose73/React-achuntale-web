import axios from "axios";

export const obtenerUsuarioPorCorreo = async (correoConsulta) => {
    try {
        const usuarios = await axios.post('http://localhost:4000/api/usuarios/correo', {
            correo: correoConsulta
        })
        return usuarios
    } catch (error) {
        console.log(error)
    }
}