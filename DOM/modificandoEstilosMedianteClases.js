// * Modificar estilos CSS mediante clases

const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja.classList)

// classList.add() - Nos permite agregar clases a un elemento.
const agregarClase = () => {
    primeraCaja.classList.add('activa')
}

// classList.remove() - Nos permite eliminar clases a un elemento.
const eliminarClase = () => {
    primeraCaja.classList.remove('activa')
}

// classList.toggle() - Nos permite alternar clases de un elemento.
const toggleClase = () => {
    primeraCaja.classList.toggle('activa')
}

const comprobarClase = () => {
    if (primeraCaja.classList.contains('activa')) {
        console.log('si, clase activa')
    } else {
        console.log('no, clase no activa')
    }

    console.log('Y contiene las siguientes clases: ')
    primeraCaja.classList.forEach((clase) => {
        console.log(clase)
    })
}