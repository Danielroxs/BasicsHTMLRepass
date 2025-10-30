const Header = (props) => {
    const {nombre} = props

    return (<>
        <header className="header">
        <h1>Hola {nombre}</h1>
        <p>Fecha: {new Date().toLocaleDateString()}</p>
      </header>
    </>
    )
}

export default Header