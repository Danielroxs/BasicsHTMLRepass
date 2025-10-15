const colores = ['red', 'blue', 'green'];

// Los arreglos al final son objetos y tienen metodos y propiedades, osea funciones y caracteristicas.

// .length (propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
console.log(colores.length)

// .toString() (metodo) - Nos permite convertir un arreglo a una cadena de texto.
document.body.innerHTML = colores.toString()

// .join() (metodo) - Nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
console.log(colores.join('-'));

// .sort() (metodo) - Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica, si modifica el arreglo permanentemente.
const letras = ['c', 'b', 'd', 'a'];
console.log(letras.sort());

const numeros = [5, 2, 6, 8, 1];
console.log(numeros.sort())

// .reverse() (metodo) - Nos permite ordenar un arreglo de manera descendente/al reves.
console.log(letras.reverse())
console.log(numeros.reverse())

// .concat() (metodo) - Nos permite juntar dos arreglos en uno solo.
const arreglo1 = [1, 2, 3];
const arreglo2 = ['A', 'B', 'C'];
const arreglo3 = arreglo1.concat(arreglo2)

console.log(arreglo3)

// .push() (metodo) - Nos permite agregar un elemento al final de arreglo.
colores.push('Amarillo')
console.log(colores)

// .pop() (metodo) - Nos permite quiatr un elemento al final de arreglo.
colores.pop() // ✅ Quita Y retorna 'uva', asi que podemos almacenarlo
console.log(colores)

// Almacenando  y mostrando ese elemento que quitamos
const ultimoColor = colores.pop()
console.log(ultimoColor)

// .shift() - Elimina el primer elemento de un arreglo y recorre los elementos.
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
console.log('El primer dia es ' + dias[0]);
const diaEliminado = dias.shift()
console.log('El dia eliminado es ' + diaEliminado)
console.log('Ahora el primer dia de la lista es ' + dias[0]);

// .unshift() - Agrega un elemento al inicio del arreglo y empuja a los demas elementos.
dias.unshift('Dan')
console.log(dias)



// .splice() - Permite agregar, eliminar o reemplazar elementos en cualquier posición del arreglo.
// Sintaxis: splice(índice, cuántosEliminar, elementosAgregar...)

const frutas = ['manzana', 'pera', 'uva', 'naranja', 'kiwi'];

// Eliminar elementos (desde índice 2, elimina 1 elemento)
frutas.splice(2, 1);  // elimina 'uva'
console.log(frutas);  // ['manzana', 'pera', 'naranja', 'kiwi']

// Agregar elementos (desde índice 1, elimina 0, agrega 'fresa')
frutas.splice(1, 0, 'fresa');
console.log(frutas);  // ['manzana', 'fresa', 'pera', 'naranja', 'kiwi']

// Reemplazar elementos (desde índice 0, elimina 2, agrega 'banana')
frutas.splice(0, 2, 'banana');
console.log(frutas);  // ['banana', 'pera', 'naranja', 'kiwi']

// Eliminar varios elementos (desde índice 1, elimina 2)
frutas.splice(1, 2);
console.log(frutas);  // ['banana', 'kiwi']

// Agregar varios elementos (desde índice 1, elimina 0, agrega varios)
frutas.splice(1, 0, 'mango', 'sandía', 'melón');
console.log(frutas);  // ['banana', 'mango', 'sandía', 'melón', 'kiwi']

// splice() también retorna los elementos eliminados:
const numeros2 = [1, 2, 3, 4, 5];
const eliminados = numeros2.splice(2, 2);  // elimina 3 y 4
console.log('Eliminados:', eliminados);  // [3, 4]
console.log('Quedan:', numeros2);        // [1, 2, 5]


// .slice() - Nos permite copiar una parte de un arreglo a otro.
//            1er parametro - Posicion donde queremos copiar
//            2do parametro - Hasta antes de que elemento copiar

const frutas2 = ['Fresa', 'Manzana', 'Uva', 'Pina', 'Mango', 'Naranaja', 'Melon']
const frutasFav = frutas2.slice(1, 5)
console.log(frutasFav) /* ['Manzana', 'Uva', 'Pina', 'Mango'] */