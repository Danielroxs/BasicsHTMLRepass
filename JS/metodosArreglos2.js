// indexOf() - Obtenemos el primer index de un elemento; Si no hay coincidencia nos retorna -1.
const nombres = ['Ana', 'Luis', 'Carlos', 'María', 'Luis', 'Pedro', 'Lucía', 'Jorge'];
console.log(nombres.indexOf('Luis'))

// .lastIndexOf - Obtenemos el ultimo index/indice de un elemento
console.log(nombres.lastIndexOf('Luis'))

// .forEach() - Nos permite ejecutar una funcion por cada elemento
nombres.forEach((nombre, index) => {
    console.log(`Hola mi nombre es ${nombre.toUpperCase()} y estoy en el indice ${index}`)
})

// .find() - Nos permite recorrer un arreglo y devuelve el primer elemento que retornemos.
const nombres2 = ['Ana', 'Luis', 'Carlos', 'María', 'Luisa', 'Pedro', 'Lucía', 'Jorge'];
const resultado = nombres2.find((nombre) => {
    if (nombre[0] === 'L') {
        return nombre
    }
})

console.log(resultado)

// ========================================================================================= //

const nombres3 = ['Sofía', 'Matt', 'Valentina', 'Diego', 'Camila', 'Andrés', 'Isabella', 'Gabriel'];

// .map() - Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo en base a los resultados de la funcion.

// const nuevosNombres = nombres3.map((nombre) => nombre.toUpperCase())

// console.log(nuevosNombres)

// ========================================================================================= //

// .filter() - Nos permite ejecutar una funcion por cada elemento y luego crear un arreglo en base a los resultados de esa funcion.

const nombresCuatroLetras = nombres3.filter((nombre) => { /* filter da ['SOFÍA', 'MATT', 'VALENTINA', 'DIEGO', 'CAMILA', 'ANDRÉS', 'ISABELLA', 'GABRIEL'] */
    if (nombre.length === 4) {      /* con map daria [undefined, 'Matt', undefined, undefined, undefined, undefined, undefined, undefined] */
        return nombre;
    }
})

console.log(nombresCuatroLetras);

// ========================================================================================= //

// .includes() - Nos permite saber si el arreglo contiene un elemento especifico
console.log(nombres3.includes('Matt'))

// ========================================================================================= //

// .every() - Nos permite ejecutar un condicional sobre cada elemento y nos devuelve TRUE SI TODOS LOS ELEMENTOS CUMPLIERON LA CONDICION. 
const nombres4 = ['Sofía', 'Matt', 'Valentina', 'Diego', 'Camila', 'Andrés', 'Isabella', 'Gabriel', 34];

const resultado2 = nombres4.every(nombre => {
    if (typeof nombre === 'string') {
        return true
    } else {
        return false
    }
})

console.log(resultado2)

// ========================================================================================= //

// .some() - Nos permite ejecutar un condicional sobre cada elemento y nos devuelve true si algun elemento cumplio la condicion.

const nombres5 = ['Sofía', 'Matt', 'Valentina', 'Diego', 'Camila', 'Andrés', 'Isabella', 'Gabriel', 34];

const resultado3 = nombres5.some(nombre => {
    if (typeof nombre !== 'string') {
        return true
    } else {
        return false
    }
})

console.log('El arreglo es invalido? : ' + resultado3)