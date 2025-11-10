import AcercaDe from "./componentes/layout/AcercaDe"
import Clientes from "./componentes/layout/Clientes"
import Contacto from "./componentes/layout/Contacto"
import Header from "./componentes/layout/Header"
import Hero from "./componentes/layout/Hero"
import Trabajos from "./componentes/layout/Trabajos"

function App () {
    return (
        <>
            <div className="contenedor">
            <Header />
            <Hero />
            <Clientes />
            <Trabajos />
            <AcercaDe />
            <Contacto />
            </div>
        </>
    )
}

export default App