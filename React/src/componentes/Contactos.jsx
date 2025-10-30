import ListaContactos from "./ListaContactos"

const Contactos = ({lista = [], titulo = "Lista de Contactos"}) => {
    

    return (
        <section className="lista">
        <h3 className="titulo">{titulo}</h3>
        <ul>
          {lista.map((amigo, index) => {
          return (
                <ListaContactos key={index} amigo={amigo} index={index}/>
            )
          })}
        </ul>
      </section>
    )
}

export default Contactos