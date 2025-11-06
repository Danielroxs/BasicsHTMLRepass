import Clientes from "./componentes/layout/Clientes"
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
            </div>
        </>
    )
}

export default App