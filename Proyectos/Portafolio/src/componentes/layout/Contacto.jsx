import './Contacto.css'

const Contacto = () => {
    return (
        <>
            <section className="contacto" id="contacto">
                <div className="encabezado">
                    <h3 className="titulo">Hagamos tu proyecto una Realidad</h3>
                    <p className="subtitulo">Escribeme y construyamos el negocio de tus sueños.</p>
                </div>
                <form action="" className="formulario">
                    <div className="grupo-formulario">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" placeholder="John Doe"/>
                    </div>
                    
                    <div className="grupo-formulario">
                        <label htmlFor="correo">Correo</label>
                        <input type="text" name="correo" id="correo" placeholder="correo@correo.com"/>
                    </div>
                    
                    <div className="grupo-formulario mensaje">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" placeholder="Escribe tu mensaje"></textarea>
                    </div>

                    <div className="grupo-formulario error">
                        <p>Error: Informacion Invalida.</p>
                    </div>

                    <div className="grupo-formulario enviar">
                        <div>
                            <button className="boton">
                                Mandar mensaje
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