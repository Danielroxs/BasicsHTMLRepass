import './trabajos.css'

const Trabajos = () => {
    return (
        <>
            <section className='trabajos' id='trabajos'>
                <div className='encabezado'>
                    <h3 className='titulo'>Mis trabajos</h3>
                    <p className='subtitulo'>Algunos de mis proyectos mas recientes.</p>
                </div>

                <div className="filtros">
                    <label htmlFor="todos">
                        <input type="radio" name="categoria" id="todos" />
                        <span className='opcion'>Todos</span>
                    </label>

                    <label htmlFor="diseño-web">
                        <input type="radio" name="categoria" id="diseño-web" />
                        <span className='opcion'>Diseño Web</span>
                    </label>

                    <label htmlFor="desarrollo-web">
                        <input type="radio" name="categoria" id="desarrollo-web" />
                        <span className='opcion'>Desarrollo Web</span>
                    </label>

                    <label htmlFor="aplicaciones-moviles">
                        <input type="radio" name="categoria" id="aplicaciones-moviles" />
                        <span className='opcion'>App Moviles</span>
                    </label>

                    <label htmlFor="desarrollo-software">
                        <input type="radio" name="categoria" id="desarrollo-software" />
                        <span className='opcion'>Desarrollo Software</span>
                    </label>
                </div>

                <div className="grid">
                    <div className="trabajo">
                        <a href="#" className='thumb'>
                            <img loading='lazy' src="./assets/trabajos/diseño-1.png" alt="Trabajo de diseño web" />
                        </a>

                        <div className='info'>
                            <div className='textos'>
                                <a href="#" className='nombre'>Trabajo 1</a>
                                <p className='categoria'>Diseño Web</p>
                            </div>
                            <a href="#" className='btn-ir'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="trabajo">
                        <a href="#" className='thumb'>
                            <img loading='lazy' src="./assets/trabajos/diseño-1.png" alt="Trabajo de diseño web" />
                        </a>

                        <div className='info'>
                            <div className='textos'>
                                <a href="#" className='nombre'>Trabajo 1</a>
                                <p className='categoria'>Diseño Web</p>
                            </div>
                            <a href="#" className='btn-ir'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="trabajo">
                        <a href="#" className='thumb'>
                            <img loading='lazy' src="./assets/trabajos/diseño-1.png" alt="Trabajo de diseño web" />
                        </a>

                        <div className='info'>
                            <div className='textos'>
                                <a href="#" className='nombre'>Trabajo 1</a>
                                <p className='categoria'>Diseño Web</p>
                            </div>
                            <a href="#" className='btn-ir'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="trabajo">
                        <a href="#" className='thumb'>
                            <img loading='lazy' src="./assets/trabajos/diseño-1.png" alt="Trabajo de diseño web" />
                        </a>

                        <div className='info'>
                            <div className='textos'>
                                <a href="#" className='nombre'>Trabajo 1</a>
                                <p className='categoria'>Diseño Web</p>
                            </div>
                            <a href="#" className='btn-ir'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="trabajo">
                        <a href="#" className='thumb'>
                            <img loading='lazy' src="./assets/trabajos/diseño-1.png" alt="Trabajo de diseño web" />
                        </a>

                        <div className='info'>
                            <div className='textos'>
                                <a href="#" className='nombre'>Trabajo 1</a>
                                <p className='categoria'>Diseño Web</p>
                            </div>
                            <a href="#" className='btn-ir'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="trabajo">
                        <a href="#" className='thumb'>
                            <img loading='lazy' src="./assets/trabajos/diseño-1.png" alt="Trabajo de diseño web" />
                        </a>

                        <div className='info'>
                            <div className='textos'>
                                <a href="#" className='nombre'>Trabajo 1</a>
                                <p className='categoria'>Diseño Web</p>
                            </div>
                            <a href="#" className='btn-ir'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trabajos