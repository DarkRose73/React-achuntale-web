import axios from "axios";

// Obtener un usuario en base a un correo
export const obtenerUsuarioPorCorreo = async (correoConsulta, contraseña) => {
    try {
        const usuario = await axios.post('http://localhost:4000/api/usuarios/correo', {
            correo: correoConsulta,
            password: contraseña
        })
        return usuario
    } catch (error) {
        console.log(error)
    }
}

// Actualización de datos de envío para un usuario
export const actualizarDireccionEnvio = async (usuario) => {
    try {
        const usuarioActualizado = await axios.put("http://localhost:4000/api/usuarios", {
            id: usuario.id,
            datos: usuario.datos
        })
        return usuarioActualizado
    } catch (error) {
        console.log(error)
    }
}

// Registro de usuario
export const crearUsuario = async (usuario) => {
    try {
        const nuevoUsuario = await axios.post("http://localhost:4000/api/usuarios", {
            correo: usuario.correo,
            password: usuario.password,
            datos: usuario.datos
        })
        return nuevoUsuario
    } catch (error) {
        console.log(error)
    }
}

export const obtenerUsuarios = async () => {
    try {
        const usuarios = await axios.get("http://localhost:4000/api/usuarios")
        return usuarios
    } catch (error) {
        console.log(error)
    }
}