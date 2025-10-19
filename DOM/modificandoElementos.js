// * elemento.innerHTML - Nos permite cambiar el contenido html de un elemento.
const primeraCaja = document.querySelector('.contenedor-principal .caja:first-child')
primeraCaja.innerHTML = '<b>Hola!</b>'

// * elemento.atttribute - Nos permite acceder y cambiar atributos del elemento.
primeraCaja.id = 'nuevo-id';
console.log(primeraCaja.id)

// * elemento.setAttribute() - Nos permite agregar o establecer el valor de un atributo del elemento, incluso atributos personalizados "data-".
primeraCaja.setAttribute('class', 'caja activa')
primeraCaja.setAttribute('data-id', '123-456-789')

// * elemento.style.property - Nos permite cambiar los estilos css de un elemento.
const segundaCaja = document.querySelector('#contenedor2 .caja')
segundaCaja.style.background = '#d83535ff';
segundaCaja.style.color = '#fff';
//          └──┬──┘ └─┬─┘
//          Objeto  Propiedad del objeto
segundaCaja.style.textTransform = 'uppercase';

/* 
segundaCaja → "Ve al objeto segundaCaja"
.style → "Dentro de él, ve al objeto style"
.color → "Dentro de style, accede a la propiedad color"
*/

/* 
 CSS → JavaScript
'text-transform'  → textTransform
'background-color' → backgroundColor
'font-size'       → fontSize
'border-radius'   → borderRadius
*/