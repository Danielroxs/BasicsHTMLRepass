import './Contacto.css'
import { useState } from 'react';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    })

    const [errores, setErrores] = useState({})

    const [enviando, setEnviando] = useState(false)

    const handleChange = (e) => {
       const {name, value} = e.target;
       setFormData({
        ...formData,
        [name]: value // ← Propiedad dinámica
       })

       // Limpiar error al escribir
       if(errores[name]){
        setErrores({
            ...errores,
            [name]: ''
        })
       }
    }

    const validarFormulario = () => {
        const nuevosErrores = {}

        // Validar nombre
        if(!formData.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio'
        } else if(formData.nombre.length < 3) {
            nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres'
        }

        // Validar Correo
        if(!formData.correo.trim()) {
            nuevosErrores.correo = 'El correo es obligatorio'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)){
            nuevosErrores.correo = 'El correo no es valido'
        }

        // Validar Mensaje
        if(!formData.mensaje.trim()) {
            nuevosErrores.mensaje = 'El mensaje es obligatorio'
        } else if(formData.mensaje.length < 10) {
            nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres'
        }

        return nuevosErrores;

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const nuevosErrores = validarFormulario()

        if(Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores)
            return
        }

        // Formulario valido
        // Aqui comienza el envio
        setEnviando(true)

        // Fetch
        try {
            const mensaje = document.createElement('div')
             mensaje.innerHTML = "¡Mensaje enviado correctamente!<br>Te responderé pronto."

            const response = await fetch('https://formspree.io/f/xpwkwajj', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if(response.ok) {
                // Todo salio bien
                Toastify({
                    node: mensaje,
                    duration: 5000,
                    gravity: "top",
                    position: "right",
                    className: "mi-toast",
                    style: {
                        background: "linear-gradient(90deg,rgba(36, 0, 4, 1) 0%, rgba(121, 9, 13, 1) 35%, rgba(255, 0, 4, 1) 100%)",
                    }
                }).showToast()
                setFormData({nombre: '', correo: '', mensaje: ''})
                setErrores({})}

            setEnviando(false)
        } catch (error) {
            console.error('Error:', error)
            setEnviando(false)
        }        
    }

    return (
        <>
            <section className="contacto" id="contacto">
                <div className="encabezado">
                    <h3 className="titulo">Hagamos tu proyecto una Realidad</h3>
                    <p className="subtitulo">Escribeme y construyamos el negocio de tus sueños.</p>
                </div>

                <form  method='POST' className="formulario" onSubmit={handleSubmit}>
                    <div className="grupo-formulario">
                       <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" placeholder="John Doe" onChange={handleChange} value={formData.nombre}/>
                        {errores.nombre && <p className='error'>{errores.nombre}</p>}
                    </div>
                    
                    <div className="grupo-formulario">
                        <label htmlFor="correo">Correo</label>
                        <input type="text" name="correo" id="correo" placeholder="correo@correo.com" onChange={handleChange} value={formData.correo}/>
                        {errores.correo && <p className='error'>{errores.correo}</p>}
                    </div>
                    
                    <div className="grupo-formulario mensaje">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" placeholder="Escribe tu mensaje" onChange={handleChange} value={formData.mensaje}></textarea>
                        {errores.mensaje && <p className='error'>{errores.mensaje}</p>}
                    </div>

                    <div className="grupo-formulario enviar">
                        <div>
                            <button className="boton" disabled={enviando} type='submit'>
                                {enviando ? 'Enviando...' : 'Mandar mensaje'}
                                <div className="icono">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Contacto;