import './Clientes.css'

const Clientes = () => {
    return (
        <>
            <section className="clientes">
                <div className="encabezado">
                    <h3 className="titulo">Mis Clientes</h3>
                    <p className="subtitulo">Estas marcas han confiado en mis servicios como Freelance.</p>
                </div>
                <div className="logos">
                    <img src="assets/logos/Recharge.svg" alt="logo Recharge" className="logo"/>
                    <img src="assets/logos/Umbrella.svg" alt="logo Umbrella" className="logo"/>
                    <img src="assets/logos/Vision.svg" alt="logo Vision" className="logo"/>
                    <img src="assets/logos/Volume.svg" alt="logo Volume" className="logo"/>
                    <img src="assets/logos/Waveless.svg" alt="logo Waveless" className="logo"/>
                </div>
            </section>
        </>
    )
}

export default Clientes;