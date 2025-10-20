const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')
const caja = document.querySelector('.contenedor-principal .caja')

const toggleClase = () => {
    caja.classList.toggle('activa')
}


boton1.addEventListener('click', () => {
    caja.addEventListener('click', toggleClase)
})

boton2.addEventListener('click', () => {
    caja.removeEventListener('click', toggleClase)
    caja.classList.remove('activa')
})