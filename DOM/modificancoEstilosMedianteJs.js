// * Modificar estilos css mediante "inline styles".

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child')
ultimaCaja.style.background = '#000'
ultimaCaja.style.color = '#fff';

const cajas = document.querySelectorAll('.caja')
let tamano = 24;

const incrementarFuente = () => {
    tamano++;
    cajas.forEach(caja => {
        caja.style.fontSize = `${tamano}px`;
    });
}

const disminuirFuente = () => {
    tamano--;
    cajas.forEach(caja => {
        caja.style.fontSize = `${tamano}px`
    })
}