// ! “Padre” e “hijos” son relaciones estructurales entre nodos del DOM

// * getElementById (Metodo) (Metodo del Objeto Document) - Nos permite obtener un elemento en base a su atributo id.
const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1)

// * Children (Propiedad) - Nos permite obtener los elementos hijo - 
console.log(contenedor1.children)

// * parentElement (Propiedad) - Nos permite obtener el elemento padre de un elemento.
console.log(contenedor1.parentElement)

// * getElementsByTagName (Metodo) - Nos permite obtener una coleccion de elementos en base a la etiqueta.
// *                       Devuelve una coleccion HTML. Una coleccion no es un arreglo.
const divs = document.getElementsByTagName('DIV')
console.log(divs)
console.log(`Tenemos ${divs.length} divs en pantalla`)

// * getElementByClassName - Nos permite obtener una coleccion de elementos en base a su clase CSS.
// *                         Devuelve una coleccion HTML.
const divEstilados = document.getElementsByClassName('contenedor')
console.log(divEstilados)

// * querySelector - Nos devuelve el primer elemento que coincida con un selector estilo CSS.
// *                 Devuelve un nodelist.
const caja = document.querySelector('#contenedor1 .caja')
console.log(caja)

// * querySelectorAll - Nos permite obtener una coleccion de elementos en base a un selector estilo CSS.
// *                    Devuelve un nodelist
const cajas = document.querySelectorAll('#contenedor1 .caja')
//                                                   ^ espacio = "busca .caja DENTRO de #contenedor1"
// '#contenedor1.caja'
//              ^ sin espacio = "busca un elemento que tenga AMBOS: id='contenedor1' Y class='caja'"
console.log(cajas)

cajas.forEach((caja) => {
    console.log(caja)
})

// * closest - Nos permite buscar de adentro hacia afuera en busca de un elemento.
const ultimaCaja = document.querySelector('#contenedor1 .caja:last-child')
console.log(ultimaCaja)
console.log(ultimaCaja.closest('.contenedor-principal'))

// * Podemos encadenar todos los metodos para obtener elementos.
// OPCIÓN 1: Encadenado (tu código)
const contenedor2 = document.getElementById('contenedor2')
console.log(contenedor2.querySelector('.caja'))
// "Desde contenedor2, búscame .caja"

// OPCIÓN 2: Con selector completo
console.log(document.querySelector('#contenedor2 .caja'))
// "Desde el documento, búscame .caja dentro de #contenedor2"