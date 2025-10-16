// TODO En JS, la mayoría de funciones/métodos numéricos hacen coerción a Number: //
// * .toStrring()
const numero = 10;
console.log(numero, typeof numero)

const numeroString = numero.toString()
console.log(numero, typeof numeroString)

// * .toFixed() - Permite obtener un numero con la cantidad de decimales especificados.
//  Sin parametros da entero, con 1 parametro limita los decimales a gusto
const numero2 = 3.1415;
console.log(numero2.toFixed(1))

// * parseInt() - Intenta transformar un numero a un entero. - no puedes trabajar con decimales
// const numero3 = parseInt(prompt('Escribe un numero'))
// const numero4 = parseInt(prompt('Escribe un numero'))
// console.log(numero3 + numero4)

// * parseFloat() - Intenta transformar un valor a un numero con decimales.
// const numero5 = parseFloat(prompt('Escribe un numero'))
// const numero6 = parseFloat(prompt('Escribe un numero'))
// console.log(numero5 + numero6)

// * Math.random() - Genera un numero al azhar entreo 0 y 1.
const numeroAleatorio = Math.random()
console.log(numeroAleatorio)

// * Math.floor() - Redondea un numero hacia abajo.
console.log(Math.floor(5.6))
console.log(Math.floor('5.6'))

// * Math.ceil() - Redondea un numero hacia arriba.
console.log(Math.ceil(5.6))
console.log(Math.ceil('5.6'))

// * Math.round() - Redondea un numero hacia el entero max proximo.
console.log(Math.round('5.4'))
console.log(Math.round(5.6))

// * Ejemplo numero al azhar 0 al 100.
const numeroRandom = Math.random()
console.log(numeroRandom)
console.log(Math.floor(numeroRandom * 101))