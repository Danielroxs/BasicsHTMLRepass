// Forma #1
function saludo() {
    console.log('Hola!');
}

const variable = saludo;

// Forma #2 - Asignando una funcion a una variable
const saludo1 = function () {
    console.log('Hola desde variable')
}

// Forma #3 - Funcion de tipo flecha
const saludo3 = () => {
    console.log('Hola!')
}