/* ============================================
   TIPOS DE DATOS EN JAVASCRIPT
   ============================================
   
   Archivo de estudio para entender los diferentes
   tipos de datos en JavaScript y cómo trabajar con ellos.
   
   📌 JavaScript tiene 8 tipos de datos:
   - 7 primitivos
   - 1 complejo (Object)
============================================ */


// ============================================
// 1. TIPOS DE DATOS PRIMITIVOS
// ============================================

console.log('--- TIPOS DE DATOS PRIMITIVOS ---');
console.log(`
TIPOS PRIMITIVOS (7):
1. String (cadena de texto)
2. Number (número)
3. Boolean (booleano)
4. Undefined (indefinido)
5. Null (nulo)
6. Symbol (símbolo) - ES6
7. BigInt (entero grande) - ES11

TIPO COMPLEJO (1):
8. Object (objeto)
`);

console.log('');


// ============================================
// 2. STRING (Cadena de Texto)
// ============================================

console.log('--- 1. STRING (Cadena de Texto) ---');

// Formas de declarar strings:
const nombre = "Dan"                    // Comillas dobles
const apellido = 'Rodriguez'            // Comillas simples
const frase = `Hola, soy ${nombre}`    // Template literals (backticks)

console.log('Nombre:', nombre)
console.log('Apellido:', apellido)
console.log('Frase:', frase)
console.log('Tipo:', typeof nombre)    // "string"

// Métodos comunes de strings:
console.log('\nMétodos de String:')
console.log('Longitud:', nombre.length)                    // 3
console.log('Mayúsculas:', nombre.toUpperCase())           // "DAN"
console.log('Minúsculas:', nombre.toLowerCase())           // "dan"
console.log('Incluye "Da":', nombre.includes('Da'))        // true
console.log('Reemplazar:', nombre.replace('Dan', 'Daniel')) // "Daniel"

console.log('');


// ============================================
// 3. NUMBER (Número)
// ============================================

console.log('--- 2. NUMBER (Número) ---');

// JavaScript solo tiene un tipo para números (enteros y decimales)
const entero = 25
const decimal = 25.5
const negativo = -10
const cientifico = 5e3  // 5000

console.log('Entero:', entero)
console.log('Decimal:', decimal)
console.log('Negativo:', negativo)
console.log('Científico:', cientifico)
console.log('Tipo:', typeof entero)    // "number"

// Valores especiales de Number:
console.log('\nValores especiales:')
console.log('Infinity:', 1 / 0)           // Infinity
console.log('-Infinity:', -1 / 0)         // -Infinity
console.log('NaN:', 'texto' * 2)          // NaN (Not a Number)

// Métodos comunes de números:
console.log('\nMétodos de Number:')
const numero = 123.456
console.log('toString:', numero.toString())           // "123.456"
console.log('toFixed(2):', numero.toFixed(2))         // "123.46"
console.log('parseInt:', parseInt('123.456'))         // 123
console.log('parseFloat:', parseFloat('123.456'))     // 123.456

console.log('');


// ============================================
// 4. BOOLEAN (Booleano)
// ============================================

console.log('--- 3. BOOLEAN (Booleano) ---');

// Solo dos valores posibles: true o false
const esVerdadero = true
const esFalso = false
const esMayor = 10 > 5     // true
const esIgual = 10 === 5   // false

console.log('Es verdadero:', esVerdadero)
console.log('Es falso:', esFalso)
console.log('10 > 5:', esMayor)
console.log('10 === 5:', esIgual)
console.log('Tipo:', typeof esVerdadero)  // "boolean"

// Valores "truthy" y "falsy":
console.log('\nValores Falsy (se evalúan como false):')
console.log('false:', Boolean(false))          // false
console.log('0:', Boolean(0))                  // false
console.log('"":', Boolean(""))                // false (string vacío)
console.log('null:', Boolean(null))            // false
console.log('undefined:', Boolean(undefined))  // false
console.log('NaN:', Boolean(NaN))              // false

console.log('\nValores Truthy (se evalúan como true):')
console.log('true:', Boolean(true))            // true
console.log('1:', Boolean(1))                  // true
console.log('"texto":', Boolean("texto"))      // true
console.log('[]:', Boolean([]))                // true (array vacío)
console.log('{}:', Boolean({}))                // true (objeto vacío)

console.log('');


// ============================================
// 5. UNDEFINED (Indefinido)
// ============================================

console.log('--- 4. UNDEFINED (Indefinido) ---');

// Variable declarada pero sin valor asignado
let variableSinValor
console.log('Variable sin valor:', variableSinValor)  // undefined
console.log('Tipo:', typeof variableSinValor)         // "undefined"

// Casos donde aparece undefined:
console.log('\nCasos de undefined:')
let x
console.log('Variable declarada sin valor:', x)       // undefined

function sinRetorno() {
    // No retorna nada
}
console.log('Función sin return:', sinRetorno())      // undefined

const obj = { nombre: 'Dan' }
console.log('Propiedad inexistente:', obj.edad)       // undefined

console.log('');


// ============================================
// 6. NULL (Nulo)
// ============================================

console.log('--- 5. NULL (Nulo) ---');

// Representa la ausencia INTENCIONAL de valor
const valorNulo = null
console.log('Valor nulo:', valorNulo)           // null
console.log('Tipo:', typeof valorNulo)          // "object" (bug histórico de JS)

// Diferencia entre null y undefined:
console.log('\nDiferencia null vs undefined:')
let sinDefinir
const asignadoNulo = null

console.log('undefined:', sinDefinir)           // undefined (sin valor)
console.log('null:', asignadoNulo)              // null (intencionalmente vacío)

// Casos de uso:
console.log('\nCasos de uso:')
let usuario = null  // Aún no hay usuario (intencional)
console.log('Usuario inicial:', usuario)

usuario = { nombre: 'Dan', edad: 25 }
console.log('Usuario después:', usuario)

usuario = null  // Limpiar usuario (intencional)
console.log('Usuario limpiado:', usuario)

console.log('');


// ============================================
// 7. SYMBOL (Símbolo) - ES6
// ============================================

console.log('--- 6. SYMBOL (Símbolo) ---');

// Valor único e inmutable
const simbolo1 = Symbol('descripcion')
const simbolo2 = Symbol('descripcion')

console.log('Símbolo 1:', simbolo1)
console.log('Símbolo 2:', simbolo2)
console.log('Son iguales:', simbolo1 === simbolo2)  // false (únicos)
console.log('Tipo:', typeof simbolo1)               // "symbol"

// Uso común: propiedades únicas en objetos
console.log('\nUso en objetos:')
const id = Symbol('id')
const persona1 = {
    nombre: 'Dan',
    [id]: 12345  // Propiedad con clave Symbol
}

console.log('Persona:', persona)
console.log('ID:', persona[id])              // 12345
console.log('Keys:', Object.keys(persona))   // ['nombre'] (Symbol no aparece)

console.log('');


// ============================================
// 8. BIGINT (Entero Grande) - ES11
// ============================================

console.log('--- 7. BIGINT (Entero Grande) ---');

// Para números enteros muy grandes (más allá del límite de Number)
const numeroGrande = 1234567890123456789012345678901234567890n
const otraForma = BigInt("1234567890123456789012345678901234567890")

console.log('Número grande:', numeroGrande)
console.log('Tipo:', typeof numeroGrande)     // "bigint"

// Operaciones con BigInt:
console.log('\nOperaciones:')
const big1 = 100n
const big2 = 50n
console.log('Suma:', big1 + big2)             // 150n
console.log('Resta:', big1 - big2)            // 50n
console.log('Multiplicación:', big1 * big2)   // 5000n

// No puedes mezclar Number y BigInt:
// console.log(100n + 50)  // ❌ ERROR

console.log('');


// ============================================
// 9. OBJECT (Objeto)
// ============================================

console.log('--- 8. OBJECT (Objeto) ---');

// Colección de pares clave-valor
const persona = {
    nombre: 'Dan',
    edad: 25,
    ciudad: 'México'
}

console.log('Persona:', persona)
console.log('Tipo:', typeof persona)          // "object"
console.log('Nombre:', persona.nombre)        // "Dan"
console.log('Edad:', persona['edad'])         // 25

// Tipos especiales de objetos:
console.log('\nTipos especiales de Object:')

// Array (objeto especial)
const array = [1, 2, 3, 4, 5]
console.log('Array:', array)
console.log('Tipo:', typeof array)            // "object"
console.log('Es array:', Array.isArray(array)) // true

// Función (objeto especial)
function saludar() {
    return 'Hola'
}
console.log('Función:', saludar)
console.log('Tipo:', typeof saludar)          // "function"

// Date (objeto especial)
const fecha = new Date()
console.log('Fecha:', fecha)
console.log('Tipo:', typeof fecha)            // "object"

// RegExp (objeto especial)
const regex = /abc/
console.log('RegExp:', regex)
console.log('Tipo:', typeof regex)            // "object"

console.log('');


// ============================================
// 10. TYPEOF - Verificar Tipos
// ============================================

console.log('--- TYPEOF - Verificar Tipos ---');

console.log('typeof "texto":', typeof "texto")           // "string"
console.log('typeof 123:', typeof 123)                   // "number"
console.log('typeof true:', typeof true)                 // "boolean"
console.log('typeof undefined:', typeof undefined)       // "undefined"
console.log('typeof null:', typeof null)                 // "object" (bug)
console.log('typeof Symbol():', typeof Symbol())         // "symbol"
console.log('typeof 100n:', typeof 100n)                 // "bigint"
console.log('typeof {}:', typeof {})                     // "object"
console.log('typeof []:', typeof [])                     // "object"
console.log('typeof function(){}:', typeof function () { }) // "function"

console.log('');


// ============================================
// 11. CONVERSIÓN DE TIPOS (Type Coercion)
// ============================================

console.log('--- CONVERSIÓN DE TIPOS ---');

// Conversión implícita (automática):
console.log('Conversión implícita:')
console.log('5 + "5":', 5 + "5")              // "55" (number → string)
console.log('"5" - 2:', "5" - 2)              // 3 (string → number)
console.log('true + 1:', true + 1)            // 2 (boolean → number)
console.log('"5" * "2":', "5" * "2")          // 10 (strings → numbers)

// Conversión explícita (manual):
console.log('\nConversión explícita:')
console.log('String(123):', String(123))           // "123"
console.log('Number("123"):', Number("123"))       // 123
console.log('Boolean(1):', Boolean(1))             // true
console.log('parseInt("123"):', parseInt("123"))   // 123
console.log('parseFloat("12.34"):', parseFloat("12.34")) // 12.34

console.log('');


// ============================================
// 12. COMPARACIÓN DE TIPOS
// ============================================

console.log('--- COMPARACIÓN DE TIPOS ---');

// Comparación estricta (===) vs laxa (==):
console.log('Comparación laxa (==):')
console.log('5 == "5":', 5 == "5")            // true (convierte tipos)
console.log('0 == false:', 0 == false)        // true
console.log('null == undefined:', null == undefined) // true

console.log('\nComparación estricta (===):')
console.log('5 === "5":', 5 === "5")          // false (diferentes tipos)
console.log('0 === false:', 0 === false)      // false
console.log('null === undefined:', null === undefined) // false

console.log('\n✅ MEJOR PRÁCTICA: Usa siempre === (estricta)')

console.log('');


// ============================================
// 13. VERIFICAR TIPOS ESPECÍFICOS
// ============================================

console.log('--- VERIFICAR TIPOS ESPECÍFICOS ---');

const valor1 = []
const valor2 = null
const valor3 = 123

console.log('Verificar Array:')
console.log('Array.isArray([]):', Array.isArray(valor1))  // true

console.log('\nVerificar null:')
console.log('valor === null:', valor2 === null)           // true

console.log('\nVerificar Number válido:')
console.log('!isNaN(123):', !isNaN(valor3))              // true
console.log('!isNaN("texto"):', !isNaN("texto"))          // false

console.log('\nVerificar undefined:')
let indefinido
console.log('typeof x === "undefined":', typeof indefinido === "undefined") // true

console.log('');


// ============================================
// 14. TABLA RESUMEN
// ============================================

console.log('--- TABLA RESUMEN ---');
console.log(`
┌─────────────┬──────────────┬────────────────────────────┐
│ Tipo        │ typeof       │ Ejemplo                    │
├─────────────┼──────────────┼────────────────────────────┤
│ String      │ "string"     │ "Hola", 'Hola', \`Hola\`   │
│ Number      │ "number"     │ 123, 12.5, -10, Infinity   │
│ Boolean     │ "boolean"    │ true, false                │
│ Undefined   │ "undefined"  │ undefined                  │
│ Null        │ "object"     │ null                       │
│ Symbol      │ "symbol"     │ Symbol('desc')             │
│ BigInt      │ "bigint"     │ 123n                       │
│ Object      │ "object"     │ {}, [], new Date()         │
│ Function    │ "function"   │ function() {}              │
└─────────────┴──────────────┴────────────────────────────┘

PRIMITIVOS vs OBJETOS:

Primitivos (inmutables):
  - String, Number, Boolean, Undefined, Null, Symbol, BigInt
  - Se copian por VALOR
  - No pueden ser modificados (son inmutables)

Objetos (mutables):
  - Object, Array, Function, Date, etc.
  - Se copian por REFERENCIA
  - Pueden ser modificados

Ejemplo de diferencia:
`);

// Primitivos (por valor):
let a = 10
let b = a    // Copia el valor
b = 20       // Cambia b, no afecta a
console.log('Primitivos:')
console.log('a:', a)  // 10 (no cambió)
console.log('b:', b)  // 20

// Objetos (por referencia):
let obj1 = { valor: 10 }
let obj2 = obj1  // Copia la referencia
obj2.valor = 20  // Cambia obj2, TAMBIÉN afecta obj1
console.log('\nObjetos:')
console.log('obj1:', obj1.valor)  // 20 (cambió también)
console.log('obj2:', obj2.valor)  // 20

console.log('');


// ============================================
// RESUMEN FINAL
// ============================================

console.log('--- RESUMEN FINAL ---');
console.log(`
🎯 TIPOS DE DATOS EN JAVASCRIPT:

1. STRING: Texto
   const nombre = "Dan"

2. NUMBER: Números (enteros y decimales)
   const edad = 25

3. BOOLEAN: true o false
   const activo = true

4. UNDEFINED: Sin valor asignado
   let x

5. NULL: Ausencia intencional de valor
   const usuario = null

6. SYMBOL: Valor único e inmutable
   const id = Symbol('id')

7. BIGINT: Enteros muy grandes
   const grande = 123n

8. OBJECT: Colecciones de datos
   const persona = { nombre: 'Dan' }

⚠️ IMPORTANTE:
- typeof null devuelve "object" (bug histórico)
- Arrays y funciones también son "object"
- Usa === para comparaciones estrictas
- Primitivos: por valor (inmutables)
- Objetos: por referencia (mutables)
`);

console.log('\n✅ Archivo de estudio creado correctamente');
console.log('📚 Consulta este archivo para entender tipos de datos en JavaScript');
