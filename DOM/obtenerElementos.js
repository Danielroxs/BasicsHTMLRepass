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