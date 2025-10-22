/* 🚀 Operadores Lógicos
   &&  And
   ||  OR
   !   NOT
*/

const nombre = 'Carlos';
const edad = 17;
const tieneEntrada = true;
const tienePermiso = true;

// Ejemplo #1 - &&
// const permitirAcceso = edad >= 18 && tieneEntrada;
// console.log('Acceso permitido al concierto: ' + permitirAcceso);

// 💡 Ejemplo #2 - OR
// const permitirAcceso = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);
// console.log('Acceso permitido al concierto: ' + permitirAcceso);

// Ejemplo #3 - !
const variable = true;
console.log(!variable)

if (variable === true) {
   console.log('es true')
} else if (variable === false) {
   console.log('es false')
} else if (variable === null) {
   console.log('variable es null')
} 