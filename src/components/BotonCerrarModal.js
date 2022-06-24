import React from 'react'

const BotonCerrarModal = ({ cerrarModal, tipoModal, resetModal, setEnvio, envio }) => {

    return (
        <div className="text-end">
            {
                tipoModal === "dir_envio"
                    ? <button
                        className="btn"
                        style={{ fontSize: "18px" }}
                        onClick={() => {
                            cerrarModal()
                            resetModal()
                            setEnvio(!envio)
                        }}>X</button>
                    : <button
                        className="btn"
                        style={{ fontSize: "18px" }}
                        onClick={() => {
                            cerrarModal()
                            resetModal()
                        }}>X</button>
            }

        </div>
    )
}

export default BotonCerrarModal