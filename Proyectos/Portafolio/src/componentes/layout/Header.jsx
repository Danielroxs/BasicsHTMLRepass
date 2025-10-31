import DarkModeSwitch from '../DarkModeSwitch'
import './Header.css'

const Header = () => {
    return (
        <>
        <header className="header">
             <div className="logo">
                <h2 className="titulo">Dan Rox</h2>
                <p className="subtitulo">Desarrollador Web & Freelance</p>
             </div>
             <nav className="navbar">
                <a href="#trabajos">Trabajos</a>
                <a href="#acerca-de">Acerca de</a>
                <a href="#contacto">Contacto</a>
             </nav>
             <DarkModeSwitch />
        </header>
        </>
    )
}

export default Header