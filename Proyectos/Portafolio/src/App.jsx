import Clientes from "./componentes/layout/Clientes"
import Header from "./componentes/layout/Header"
import Hero from "./componentes/layout/Hero"

function App () {
    return (
        <>
            <div className="contenedor">
            <Header />
            <Hero />
            <Clientes />
            </div>
        </>
    )
}

export default App