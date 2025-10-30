import Header from "./componentes/Header";
import Contactos from "./componentes/Contactos";
import LoginForm from "./componentes/Login";
import { useState } from "react";

function App() {
  const [sesionIniciada, setSesionIniciada] = useState(false)

  const cerrarSesion = () => {
    setSesionIniciada(false);
  }

  // const amigos = ['Alex', 'Cesar', 'Manuel', 'rafael']
  const nombre = 'Dan'

  const lista = [
    {nombre: 'carlos', telefono: '123-456-789'},
    {nombre: 'Cesar', telefono: '123-456-789'},
    {nombre: 'Manuel', telefono: '123-456-789'},
    {nombre: 'Alex', telefono: '123-456-789'}
  ]
  
  const lista2 = [
    {nombre: 'CR7', telefono: '987-654-321'},
    {nombre: 'Messi', telefono: '456-789-012'},
    {nombre: 'Carin Leon', telefono: '321-654-987'},
    {nombre: 'Motorhead', telefono: '555-123-456'}
  ]


  return (
    <>
      {sesionIniciada ? (
        <div className="contenedor">
          <Header nombre={nombre} />
          <Contactos lista={lista} />
          <Contactos lista={lista2} titulo={'Famosos'}/>
          <button className="btnCerrarSesion" onClick={cerrarSesion}>Cerrar sesion</button>
        </div>
      ) : (
        <LoginForm setSesionIniciada={setSesionIniciada} />
      )}
    </>
  )
}
export default App;