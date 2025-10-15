const operacion = (tipo, numero1, numero2) => {
    let resultado;
    if (tipo === 'suma') {
        resultado = numero1 + numero2;
    } else if (tipo === 'resta') {
        resultado = numero1 - numero2;
    }

    return resultado;
};

const miVariable = operacion('suma', 100, 11);
console.log(miVariable);

// ================================================== //

const operacion2 = (tipo, numero1, numero2) => {
    /* return si pongo un return corta el codigo siguiente, fin del codigo aqui */
    let resultado;
    if (tipo === 'suma') {
        return numero1 + numero2;
    } else if (tipo === 'resta') {
        return numero1 - numero2;
    }
};

const miVariable2 = operacion2('suma', 100, 10);
console.log(miVariable2);

var nombre = 'Dan'
console.log(nombre)

const saludo = () => {
    console.log('Hola' + nombre)

    nombre = 'Carlos'
    console.log('El nuevo nombre es' + nombre)
}

saludo()
console.log(nombre)