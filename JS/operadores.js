/**
 * @fileoverview Archivo de estudio: "OPERADORES EN JAVASCRIPT".
 * Contiene explicaciones y ejemplos de la mayoría de operadores del lenguaje,
 * casos especiales, buenas prácticas y una tabla de precedencia. Está pensado
 * como un archivo didáctico para repasar operadores aritméticos, de
 * asignación, incrementos/decrementos, comparación, lógicos, ternario,
 * cadenas, typeof, delete, in, instanceof, bitwise, nullish coalescing,
 * optional chaining, operadores de asignación lógica y precedencia.
 *
 * Secciones incluidas (resumen):
 *  - 1. Operadores aritméticos: + - * / % **, ejemplos básicos y casos especiales
 *  - 2. Operadores de asignación: =, +=, -=, *=, /=, %=, **= (con ejemplos)
 *  - 3. Incremento/Decremento: ++/-- en forma pre y post, uso en bucles
 *  - 4. Operadores de comparación: ==, ===, !=, !==, >, <, >=, <= y diferencias de coerción
 *  - 5. Operadores lógicos: &&, ||, !, comportamiento de cortocircuito y precedencia
 *  - 6. Operador ternario: condición ? valorSiTrue : valorSiFalse, ejemplos y anidamiento
 *  - 7. Operadores de cadena: concatenación con +, problemas con coerción y template literals
 *  - 8. Operador typeof: tipos primitivos, edge cases (typeof null === "object")
 *  - 9. Operador delete: eliminación de propiedades, limitaciones con variables y arrays
 *  - 10. Operador in: comprobación de existencia de propiedades (incluye heredadas)
 *  - 11. Operador instanceof: comprobación de instancia frente a constructores
 *  - 12. Operadores bit a bit (bitwise): &, |, ^, ~, <<, >>, >>> y ejemplos prácticos
 *  - 13. Nullish coalescing (??): diferencia con || y ejemplos prácticos
 *  - 14. Optional chaining (?.): evitar errores al acceder a propiedades/llamar funciones
 *  - 15. Operadores de asignación lógica (ES2021): &&=, ||=, ??= y su semántica
 *  - 16. Tabla de precedencia de operadores: orden de evaluación resumido
 *
 * Entidades documentadas (funciones/utilidades definidas en el archivo):
 *
 * @function procesar
 * @param {*} valor - Valor de entrada que puede ser string, number u otro.
 * @returns {string|number} - Si 'valor' es string: devuelve uppercase; si es number: lo duplica;
 *                            en cualquier otro caso devuelve "Tipo no soportado".
 * @description
 *   Función de ejemplo para demostrar el uso de typeof dentro de ramas condicionales.
 *
 * @function verificarPropiedad
 * @param {Object} obj - Objeto a comprobar.
 * @param {string} prop - Nombre de la propiedad a verificar (string).
 * @returns {void}
 * @description
 *   Función auxiliar que usa el operador "in" para comprobar si una propiedad existe
 *   en el objeto (incluye propiedades heredadas). Realiza un console.log con el resultado.
 *
 * @function esPar
 * @param {number} num - Número entero a comprobar.
 * @returns {boolean} - true si el número es par, false si es impar.
 * @description
 *   Ejemplo práctico que muestra uso de operadores bitwise (&) para detectar paridad:
 *   comprueba si el último bit es 0 ((num & 1) === 0).
 *
 * @function procesarDato
 * @param {*} dato - Valor a procesar que puede ser Date, Array, Object u otro tipo primitivo.
 * @returns {string} - Descripción del tipo de dato recibido:
 *                     - Para Date devuelve una cadena con la fecha formateada.
 *                     - Para Array devuelve "Array con N elementos".
 *                     - Para Object devuelve "Objeto con N propiedades".
 *                     - Para primitivos devuelve "Tipo primitivo".
 * @description
 *   Muestra el uso de instanceof para distinguir entre distintos tipos construidos.
 *
 * Notas y buenas prácticas destacadas (documentadas en el archivo):
 *  - Preferir === y !== sobre == y != para evitar coerciones inesperadas.
 *  - Usar ?? cuando se quiera diferenciar entre null/undefined y otros valores falsy (0, "").
 *  - Usar ?. (optional chaining) para evitar errores al acceder a propiedades de objetos
 *    que pueden ser null/undefined.
 *  - Usar paréntesis para mejorar la legibilidad cuando la precedencia pueda inducir a error.
 *  - Preferir template literals para concatenación de strings cuando se incluyen variables.
 *  - Tener en cuenta comportamientos particulares: división por cero (Infinity/NaN),
 *    typeof null === "object" (histórico), delete en arrays deja undefined y no cambia length.
 *
 * Ejemplos ilustrativos incluidos en el archivo:
 *  - Operaciones aritméticas (ej.: exponenciación anidada y orden de operaciones).
 *  - Cortocircuito lógico para valores por defecto (&& y ||).
 *  - Comparación de strings basada en orden lexicográfico.
 *  - Uso de operadores bitwise para duplicar/dividir por 2 mediante desplazamientos.
 *
 * @author Dan (autor del archivo de estudio)
 * @version 1.0.0
 *
 * Resumen final (comentario): 
 * Entiendo que este archivo es un compendio didáctico que explica y demuestra el comportamiento
 * de los operadores en JavaScript, incluye funciones de ejemplo (procesar, esPar, verificarPropiedad,
 * procesarDato) y remarcas sobre edge-cases y buenas prácticas. Cada sección corresponde a un tipo de
 * operador o mecanismo del lenguaje y contiene ejemplos y notas para su uso correcto.
 */
/* ============================================
   OPERADORES EN JAVASCRIPT
   ============================================
   
   Archivo de estudio completo sobre todos los
   tipos de operadores en JavaScript: aritméticos,
   comparación, lógicos, asignación, y más.
   
   📌 Operadores = Símbolos para realizar operaciones
============================================ */


// ============================================
// 1. OPERADORES ARITMÉTICOS
// ============================================

console.log('--- OPERADORES ARITMÉTICOS ---');
console.log(`
OPERADORES BÁSICOS:

+  → Suma
-  → Resta
*  → Multiplicación
/  → División
%  → Módulo (resto de división)
** → Exponenciación (ES2016)
`);

// Ejemplos
const a = 10
const b = 3

console.log('Suma:', a + b)              // 13
console.log('Resta:', a - b)             // 7
console.log('Multiplicación:', a * b)    // 30
console.log('División:', a / b)          // 3.333...
console.log('Módulo:', a % b)            // 1 (resto de 10/3)
console.log('Exponenciación:', a ** b)   // 1000 (10³)

// Casos especiales
console.log('\nCasos especiales:');
console.log('5 / 0:', 5 / 0)             // Infinity
console.log('-5 / 0:', -5 / 0)           // -Infinity
console.log('0 / 0:', 0 / 0)             // NaN
console.log('10 % 2:', 10 % 2)           // 0 (par)
console.log('11 % 2:', 11 % 2)           // 1 (impar)

// Orden de operaciones (PEMDAS)
console.log('\nOrden de operaciones:');
console.log('2 + 3 * 4:', 2 + 3 * 4)               // 14 (no 20)
console.log('(2 + 3) * 4:', (2 + 3) * 4)           // 20
console.log('2 ** 3 ** 2:', 2 ** 3 ** 2)           // 512 (2⁹)
console.log('(2 ** 3) ** 2:', (2 ** 3) ** 2)       // 64 (8²)

console.log('');


// ============================================
// 2. OPERADORES DE ASIGNACIÓN
// ============================================

console.log('--- OPERADORES DE ASIGNACIÓN ---');
console.log(`
OPERADORES BÁSICOS:

=   → Asignación simple
+=  → Sumar y asignar
-=  → Restar y asignar
*=  → Multiplicar y asignar
/=  → Dividir y asignar
%=  → Módulo y asignar
**= → Exponenciar y asignar
`);

// Ejemplos
let x = 10
console.log('Inicial x:', x)        // 10

x += 5  // Equivale a: x = x + 5
console.log('x += 5:', x)           // 15

x -= 3  // Equivale a: x = x - 3
console.log('x -= 3:', x)           // 12

x *= 2  // Equivale a: x = x * 2
console.log('x *= 2:', x)           // 24

x /= 4  // Equivale a: x = x / 4
console.log('x /= 4:', x)           // 6

x % 5  // Equivale a: x = x % 5
console.log('x %= 5:', x % 5)       // 1

x **= 2  // Equivale a: x = x ** 2
console.log('x **= 2:', x ** 2)     // 36

console.log('');


// ============================================
// 3. OPERADORES DE INCREMENTO/DECREMENTO
// ============================================

console.log('--- INCREMENTO Y DECREMENTO ---');
console.log(`
OPERADORES:

++  → Incremento (suma 1)
--  → Decremento (resta 1)

POSICIONES:
x++  → Post-incremento (usa valor, luego incrementa)
++x  → Pre-incremento (incrementa, luego usa valor)
x--  → Post-decremento (usa valor, luego decrementa)
--x  → Pre-decremento (decrementa, luego usa valor)
`);

// Post-incremento
let num1 = 5
console.log('num1++:', num1++)      // 5 (usa 5, luego incrementa)
console.log('Ahora num1:', num1)    // 6

// Pre-incremento
let num2 = 5
console.log('++num2:', ++num2)      // 6 (incrementa, luego usa)
console.log('Ahora num2:', num2)    // 6

// Post-decremento
let num3 = 5
console.log('num3--:', num3--)      // 5 (usa 5, luego decrementa)
console.log('Ahora num3:', num3)    // 4

// Pre-decremento
let num4 = 5
console.log('--num4:', --num4)      // 4 (decrementa, luego usa)
console.log('Ahora num4:', num4)    // 4

// Caso práctico en bucle
console.log('\nEn un bucle:');
for (let i = 0; i < 3; i++) {
    console.log('i:', i)  // 0, 1, 2
}

console.log('');


// ============================================
// 4. OPERADORES DE COMPARACIÓN
// ============================================

console.log('--- OPERADORES DE COMPARACIÓN ---');
console.log(`
OPERADORES:

==   → Igual (con coerción de tipos)
===  → Estrictamente igual (sin coerción)
!=   → Diferente (con coerción)
!==  → Estrictamente diferente (sin coerción)
>    → Mayor que
<    → Menor que
>=   → Mayor o igual que
<=   → Menor o igual que
`);

// Igualdad vs Igualdad estricta
console.log('5 == "5":', 5 == "5")        // true (convierte string a número)
console.log('5 === "5":', 5 === "5")      // false (tipos diferentes)

console.log('0 == false:', 0 == false)    // true (ambos son falsy)
console.log('0 === false:', 0 === false)  // false (tipos diferentes)

console.log('"" == false:', "" == false)  // true (ambos son falsy)
console.log('"" === false:', "" === false) // false (tipos diferentes)

// Diferencia vs Diferencia estricta
console.log('5 != "5":', 5 != "5")        // false
console.log('5 !== "5":', 5 !== "5")      // true

// Comparaciones numéricas
console.log('\nComparaciones numéricas:');
console.log('10 > 5:', 10 > 5)            // true
console.log('10 < 5:', 10 < 5)            // false
console.log('10 >= 10:', 10 >= 10)        // true
console.log('10 <= 9:', 10 <= 9)          // false

// Comparación de strings (orden lexicográfico)
console.log('\nComparación de strings:');
console.log('"a" < "b":', "a" < "b")      // true
console.log('"Z" < "a":', "Z" < "a")      // true (mayúsculas < minúsculas)
console.log('"10" < "2":', "10" < "2")    // true (comparación de strings)

console.log('');


// ============================================
// 5. OPERADORES LÓGICOS
// ============================================

console.log('--- OPERADORES LÓGICOS ---');
console.log(`
OPERADORES:

&&  → AND (Y) - Retorna true si AMBOS son true
||  → OR (O) - Retorna true si AL MENOS UNO es true
!   → NOT (NO) - Invierte el valor booleano
`);

// AND (&&)
console.log('AND (&&):');
console.log('true && true:', true && true)        // true
console.log('true && false:', true && false)      // false
console.log('false && true:', false && true)      // false
console.log('false && false:', false && false)    // false

// OR (||)
console.log('\nOR (||):');
console.log('true || true:', true || true)        // true
console.log('true || false:', true || false)      // true
console.log('false || true:', false || true)      // true
console.log('false || false:', false || false)    // false

// NOT (!)
console.log('\nNOT (!):');
console.log('!true:', !true)                      // false
console.log('!false:', !false)                    // true
console.log('!!true:', !!true)                    // true (doble negación)

// Cortocircuito (short-circuit)
console.log('\nCortocircuito:');
const edad = 18
console.log('edad >= 18 && "Adulto":', edad >= 18 && "Adulto")  // "Adulto"
console.log('edad < 18 && "Menor":', edad < 18 && "Menor")      // false

const nombre = ""
console.log('nombre || "Anónimo":', nombre || "Anónimo")        // "Anónimo"

// Precedencia de operadores
console.log('\nPrecedencia:');
console.log('true || false && false:', true || false && false)  // true (AND primero)
console.log('(true || false) && false:', (true || false) && false)  // false

console.log('');


// ============================================
// 6. OPERADOR TERNARIO (CONDICIONAL)
// ============================================

console.log('--- OPERADOR TERNARIO ---');
console.log(`
SINTAXIS:
condición ? valorSiTrue : valorSiFalse

EQUIVALENTE A:
if (condición) {
    return valorSiTrue
} else {
    return valorSiFalse
}
`);

// Ejemplos básicos
const edad2 = 20
const mensaje = edad2 >= 18 ? "Adulto" : "Menor"
console.log('Mensaje:', mensaje)  // "Adulto"

const numero = -5
const tipo = numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Cero"
console.log('Tipo:', tipo)  // "Negativo"

// Ternario anidado (no recomendado en exceso)
const nota = 85
const calificacion = nota >= 90 ? "A" :
    nota >= 80 ? "B" :
        nota >= 70 ? "C" :
            nota >= 60 ? "D" : "F"
console.log('Calificación:', calificacion)  // "B"

// Uso práctico
const usuario = { nombre: "Dan", premium: true }
const descuento = usuario.premium ? 20 : 0
console.log('Descuento:', descuento + "%")  // "20%"

console.log('');


// ============================================
// 7. OPERADORES DE CADENA (STRING)
// ============================================

console.log('--- OPERADORES DE CADENA ---');
console.log(`
OPERADOR DE CONCATENACIÓN:

+  → Concatenar strings

⚠️ CUIDADO: + con strings vs números
`);

// Concatenación
const nombre1 = "Juan"
const apellido = "Pérez"
console.log('Concatenación:', nombre1 + " " + apellido)  // "Juan Pérez"

// Concatenación con números
console.log('"5" + "3":', "5" + "3")      // "53" (concatena)
console.log('5 + 3:', 5 + 3)              // 8 (suma)
console.log('"5" + 3:', "5" + 3)          // "53" (convierte 3 a string)
console.log('5 + "3":', 5 + "3")          // "53" (convierte 5 a string)

// Orden importa
console.log('1 + 2 + "3":', 1 + 2 + "3")  // "33" (3 + "3")
console.log('"1" + 2 + 3:', "1" + 2 + 3)  // "123" ("12" + 3)

// Operador += con strings
let texto = "Hola"
texto += " mundo"
console.log('texto += " mundo":', texto)  // "Hola mundo"

// Template literals (mejor opción)
const nombre2 = "Dan"
const edad3 = 25
console.log('Template literal:', `Hola, soy ${nombre2} y tengo ${edad3} años`)

console.log('');


// ============================================
// 8. OPERADOR TYPEOF
// ============================================

console.log('--- OPERADOR TYPEOF ---');
console.log(`
SINTAXIS:
typeof valor

RETORNA:
String con el tipo de dato
`);

// Ejemplos
console.log('typeof 42:', typeof 42)                    // "number"
console.log('typeof "hola":', typeof "hola")            // "string"
console.log('typeof true:', typeof true)                // "boolean"
console.log('typeof undefined:', typeof undefined)      // "undefined"
console.log('typeof null:', typeof null)                // "object" (bug histórico)
console.log('typeof {}:', typeof {})                    // "object"
console.log('typeof []:', typeof [])                    // "object"
console.log('typeof function(){}:', typeof function () { }) // "function"
console.log('typeof Symbol():', typeof Symbol())        // "symbol"
console.log('typeof 10n:', typeof 10n)                  // "bigint"

// Uso práctico
function procesar(valor) {
    if (typeof valor === "string") {
        return valor.toUpperCase()
    } else if (typeof valor === "number") {
        return valor * 2
    } else {
        return "Tipo no soportado"
    }
}

console.log('procesar("hola"):', procesar("hola"))  // "HOLA"
console.log('procesar(10):', procesar(10))          // 20

console.log('');


// ============================================
// 9. OPERADOR DELETE
// ============================================

console.log('--- OPERADOR DELETE ---');
console.log(`
SINTAXIS:
delete objeto.propiedad

RETORNA:
true si la eliminación fue exitosa
`);

// Eliminar propiedades de objetos
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
}

console.log('Objeto original:', persona)
delete persona.edad
console.log('Después de delete edad:', persona)  // { nombre: "Juan", ciudad: "Madrid" }

// No puede eliminar variables
let variable1 = 10
//console.log('delete variable:', delete variable1)  // false (en strict mode genera error)

// No puede eliminar elementos de array (deja undefined)
const array = [1, 2, 3, 4, 5]
delete array[2]
console.log('Array después de delete:', array)  // [1, 2, undefined, 4, 5]
console.log('Longitud:', array.length)          // 5 (no cambia)

console.log('');


// ============================================
// 10. OPERADOR IN
// ============================================

console.log('--- OPERADOR IN ---');
console.log(`
SINTAXIS:
propiedad in objeto

RETORNA:
true si la propiedad existe en el objeto
(incluye propiedades heredadas del prototype)
`);

// Ejemplos con objetos
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
}

console.log('"marca" in coche:', "marca" in coche)        // true
console.log('"color" in coche:', "color" in coche)        // false
console.log('"toString" in coche:', "toString" in coche)  // true (heredado)

// Ejemplos con arrays
const frutas = ["manzana", "pera", "uva"]
console.log('0 in frutas:', 0 in frutas)          // true (índice existe)
console.log('5 in frutas:', 5 in frutas)          // false (índice no existe)
console.log('"length" in frutas:', "length" in frutas)  // true

// Uso práctico
function verificarPropiedad(obj, prop) {
    if (prop in obj) {
        console.log(`La propiedad "${prop}" existe con valor: ${obj[prop]}`)
    } else {
        console.log(`La propiedad "${prop}" NO existe`)
    }
}

verificarPropiedad(coche, "marca")   // existe
verificarPropiedad(coche, "color")   // no existe

console.log('');


// ============================================
// 11. OPERADOR INSTANCEOF
// ============================================

console.log('--- OPERADOR INSTANCEOF ---');
console.log(`
SINTAXIS:
objeto instanceof Constructor

RETORNA:
true si el objeto es una instancia del constructor
`);

// Ejemplos
const fecha = new Date()
const array2 = [1, 2, 3]
const objeto = { nombre: "Dan" }
const regex = /abc/

console.log('fecha instanceof Date:', fecha instanceof Date)      // true
console.log('array2 instanceof Array:', array2 instanceof Array)  // true
console.log('objeto instanceof Object:', objeto instanceof Object) // true
console.log('regex instanceof RegExp:', regex instanceof RegExp)  // true

console.log('array2 instanceof Object:', array2 instanceof Object) // true (Array hereda de Object)
console.log('objeto instanceof Array:', objeto instanceof Array)   // false

// Uso práctico
function procesarDato(dato) {
    if (dato instanceof Date) {
        return `Fecha: ${dato.toLocaleDateString()}`
    } else if (dato instanceof Array) {
        return `Array con ${dato.length} elementos`
    } else if (dato instanceof Object) {
        return `Objeto con ${Object.keys(dato).length} propiedades`
    } else {
        return "Tipo primitivo"
    }
}

console.log(procesarDato(new Date()))        // "Fecha: ..."
console.log(procesarDato([1, 2, 3]))         // "Array con 3 elementos"
console.log(procesarDato({ a: 1, b: 2 }))    // "Objeto con 2 propiedades"

console.log('');


// ============================================
// 12. OPERADORES BIT A BIT (BITWISE)
// ============================================

console.log('--- OPERADORES BITWISE ---');
console.log(`
OPERADORES:

&   → AND bit a bit
|   → OR bit a bit
^   → XOR bit a bit
~   → NOT bit a bit
<<  → Desplazamiento a la izquierda
>>  → Desplazamiento a la derecha
>>> → Desplazamiento a la derecha sin signo
`);

// Ejemplos básicos
console.log('5 & 3:', 5 & 3)    // 1  (0101 & 0011 = 0001)
console.log('5 | 3:', 5 | 3)    // 7  (0101 | 0011 = 0111)
console.log('5 ^ 3:', 5 ^ 3)    // 6  (0101 ^ 0011 = 0110)
console.log('~5:', ~5)          // -6 (invierte bits)
console.log('5 << 1:', 5 << 1)  // 10 (0101 << 1 = 1010)
console.log('5 >> 1:', 5 >> 1)  // 2  (0101 >> 1 = 0010)

// Uso práctico: verificar si número es par
function esPar(num) {
    return (num & 1) === 0  // Si el último bit es 0, es par
}

console.log('esPar(4):', esPar(4))  // true
console.log('esPar(5):', esPar(5))  // false

// Uso práctico: duplicar/dividir por 2
console.log('10 << 1 (duplicar):', 10 << 1)  // 20
console.log('10 >> 1 (dividir):', 10 >> 1)   // 5

console.log('');


// ============================================
// 13. OPERADOR NULLISH COALESCING (??)
// ============================================

console.log('--- OPERADOR NULLISH COALESCING (??) ---');
console.log(`
SINTAXIS:
valor1 ?? valor2

RETORNA:
- valor1 si NO es null o undefined
- valor2 si valor1 ES null o undefined

DIFERENCIA CON ||:
|| retorna valor2 si valor1 es FALSY (0, "", false, null, undefined)
?? retorna valor2 SOLO si valor1 es null o undefined
`);

// Comparación con ||
const valor1 = 0
console.log('0 || "default":', valor1 || "default")  // "default" (0 es falsy)
console.log('0 ?? "default":', valor1 ?? "default")  // 0 (0 no es null/undefined)

const valor2 = ""
console.log('"" || "default":', valor2 || "default")  // "default" ("" es falsy)
console.log('"" ?? "default":', valor2 ?? "default")  // "" ("" no es null/undefined)

const valor3 = null
console.log('null || "default":', valor3 || "default")  // "default"
console.log('null ?? "default":', valor3 ?? "default")  // "default"

const valor4 = undefined
console.log('undefined || "default":', valor4 || "default")  // "default"
console.log('undefined ?? "default":', valor4 ?? "default")  // "default"

// Uso práctico
const config = {
    timeout: 0,
    mensaje: "",
    usuario: null
}

console.log('Timeout:', config.timeout ?? 5000)        // 0 (usa 0, no 5000)
console.log('Mensaje:', config.mensaje ?? "Sin mensaje") // "" (usa "", no "Sin mensaje")
console.log('Usuario:', config.usuario ?? "Invitado")  // "Invitado" (null)

console.log('');


// ============================================
// 14. OPTIONAL CHAINING (?.)
// ============================================

console.log('--- OPTIONAL CHAINING (?.) ---');
console.log(`
SINTAXIS:
objeto?.propiedad
objeto?.[expresión]
función?.()

RETORNA:
- El valor si existe
- undefined si el objeto es null o undefined

EVITA ERRORES:
No lanza error si la propiedad no existe
`);

// Sin optional chaining (error)
const usuario1 = null
// console.log(usuario1.nombre)  // ❌ Error: Cannot read property 'nombre' of null

// Con optional chaining (sin error)
console.log('usuario1?.nombre:', usuario1?.nombre)  // undefined

// Ejemplos
const usuario2 = {
    nombre: "Dan",
    direccion: {
        ciudad: "Madrid",
        calle: "Gran Vía"
    }
}

const usuario3 = {
    nombre: "María"
    // No tiene dirección
}

console.log('usuario2?.direccion?.ciudad:', usuario2?.direccion?.ciudad)  // "Madrid"
console.log('usuario3?.direccion?.ciudad:', usuario3?.direccion?.ciudad)  // undefined (no error)

// Con arrays
const usuarios = [
    { nombre: "Juan" },
    null,
    { nombre: "Pedro" }
]

console.log('usuarios[0]?.nombre:', usuarios[0]?.nombre)  // "Juan"
console.log('usuarios[1]?.nombre:', usuarios[1]?.nombre)  // undefined
console.log('usuarios[2]?.nombre:', usuarios[2]?.nombre)  // "Pedro"

// Con funciones
const obj1 = {
    metodo: () => "Hola"
}
const obj2 = {}

console.log('obj1.metodo?.():', obj1.metodo?.())  // "Hola"
console.log('obj2.metodo?.():', obj2.metodo?.())  // undefined (no error)

// Combinado con ??
const ciudad = usuario3?.direccion?.ciudad ?? "Ciudad desconocida"
console.log('Ciudad:', ciudad)  // "Ciudad desconocida"

console.log('');


// ============================================
// 15. OPERADORES DE ASIGNACIÓN LÓGICA
// ============================================

console.log('--- OPERADORES DE ASIGNACIÓN LÓGICA ---');
console.log(`
OPERADORES (ES2021):

&&= → Asigna si el valor actual es truthy
||= → Asigna si el valor actual es falsy
??= → Asigna si el valor actual es null o undefined
`);

// Operador &&=
let var1 = 10
var1 &&= 20  // Equivale a: var1 = var1 && 20
console.log('var1 &&= 20:', var1)  // 20 (10 es truthy)

let var2 = 0
var2 &&= 20  // Equivale a: var2 = var2 && 20
console.log('var2 &&= 20:', var2)  // 0 (0 es falsy, no se asigna)

// Operador ||=
let var3 = ""
var3 ||= "default"  // Equivale a: var3 = var3 || "default"
console.log('var3 ||= "default":', var3)  // "default" ("" es falsy)

let var4 = "Hola"
var4 ||= "default"  // Equivale a: var4 = var4 || "default"
console.log('var4 ||= "default":', var4)  // "Hola" ("Hola" es truthy)

// Operador ??=
let var5 = null
var5 ??= "default"  // Equivale a: var5 = var5 ?? "default"
console.log('var5 ??= "default":', var5)  // "default" (null)

let var6 = 0
var6 ??= "default"  // Equivale a: var6 = var6 ?? "default"
console.log('var6 ??= "default":', var6)  // 0 (0 no es null/undefined)

// Uso práctico
const opciones = {
    color: "",
    tamaño: null
}

opciones.color ||= "azul"
opciones.tamaño ??= "mediano"

console.log('Opciones:', opciones)  // { color: "azul", tamaño: "mediano" }

console.log('');


// ============================================
// 16. TABLA DE PRECEDENCIA DE OPERADORES
// ============================================

console.log('--- PRECEDENCIA DE OPERADORES ---');
console.log(`
ORDEN DE EVALUACIÓN (de mayor a menor precedencia):

1.  ()              → Agrupación
2.  . [] ()         → Acceso a miembro, llamada a función
3.  new             → Crear instancia
4.  ++  --          → Incremento/Decremento
5.  !  ~  typeof    → Operadores unarios
6.  **              → Exponenciación
7.  *  /  %         → Multiplicación, división, módulo
8.  +  -            → Suma, resta
9.  << >> >>>       → Desplazamiento de bits
10. < <= > >=       → Comparación relacional
11. == != === !==   → Igualdad
12. &               → AND bit a bit
13. ^               → XOR bit a bit
14. |               → OR bit a bit
15. &&              → AND lógico
16. ||              → OR lógico
17. ??              → Nullish coalescing
18. ? :             → Condicional (ternario)
19. = += -= etc.    → Asignación
20. ,               → Coma (secuencia)
`);

// Ejemplos de precedencia
console.log('Ejemplos de precedencia:');
console.log('2 + 3 * 4:', 2 + 3 * 4)              // 14 (multiplicación primero)
console.log('2 * 3 + 4:', 2 * 3 + 4)              // 10
console.log('10 > 5 && 3 < 7:', 10 > 5 && 3 < 7)  // true
console.log('false || true && false:', false || true && false)  // false (AND primero)
console.log('(false || true) && false:', (false || true) && false)  // false

console.log('');


// ============================================
// RESUMEN FINAL
// ============================================

console.log('--- RESUMEN FINAL ---');
console.log(`
🎯 OPERADORES EN JAVASCRIPT:

1. ARITMÉTICOS:
   + - * / % **

2. ASIGNACIÓN:
   = += -= *= /= %= **=
   &&= ||= ??= (ES2021)

3. COMPARACIÓN:
   == === != !== > < >= <=
   ⚠️ Usa === y !== (estricto)

4. LÓGICOS:
   && (AND) || (OR) ! (NOT)
   ?? (Nullish Coalescing)

5. INCREMENTO/DECREMENTO:
   ++ -- (pre y post)

6. CONDICIONAL:
   ? : (ternario)

7. TIPO:
   typeof instanceof in

8. CADENA:
   + (concatenación)
   Mejor: template literals \`\${}\`

9. BITWISE:
   & | ^ ~ << >> >>>

10. OTROS:
    delete
    ?. (Optional Chaining)

📊 PRECEDENCIA:
   () > . [] > new > ++ -- > ! typeof >
   ** > * / % > + - > comparación >
   == === > && > || > ?? > ? : > =

⚠️ BUENAS PRÁCTICAS:
   ✅ Usa === en lugar de ==
   ✅ Usa ?? para valores null/undefined
   ✅ Usa ?. para evitar errores
   ✅ Usa paréntesis para claridad
   ✅ Prefiere template literals sobre +
`);

console.log('\n✅ Archivo de estudio creado correctamente');
console.log('📚 Consulta este archivo para dominar los operadores en JavaScript');
