const boton = document.getElementById('toggle');
boton.addEventListener('click', (e) => {
    const primeraCaja = document.querySelector('#contenedor1 .caja')
    primeraCaja.classList.toggle('activa')
})

// * Agregando el evento a multiples elementos.
//   Podemos agregar el evento a multiples elementos recorriendolos mediante un ciclo.
//   Nota: Esta no es la forma mas optima, en la proxima clase veremos la mejor forma.

const contenedorPrincipal = document.querySelector('.contenedor-principal')
console.log(contenedorPrincipal)

contenedorPrincipal.addEventListener('click', (e) => {
    if (e.target.classList.contains('caja')) {
        console.log(e.target.innerText)
    }
})