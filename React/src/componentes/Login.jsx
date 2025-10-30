import { useState } from "react"

const LoginForm = ({setSesionIniciada}) => {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        usuario === 'dan' && password === '123' ? setSesionIniciada(true) : setSesionIniciada(false)
    }

    const handlerUsuario = (e) => {
        setUsuario(e.target.value)
    }
    
    const handlerPassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="contenedor">
            <form className="login" onSubmit={handleSubmit}>
                <h3 >Inicia Sesion</h3>
                <label htmlFor="text">Usuario: </label>
                <input type="text" id="text" placeholder="Usuario" onChange={handlerUsuario} value={usuario}/>
                
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" placeholder="Contrasena" onChange={handlerPassword} value={password}/>

                <button type="submit" >Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default LoginForm