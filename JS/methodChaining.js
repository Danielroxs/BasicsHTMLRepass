/* ============================================
   METHOD CHAINING (Encadenamiento de Métodos)
   ============================================
   - Permite llamar múltiples métodos en secuencia
   - Cada método retorna un valor sobre el cual se aplica el siguiente
   - Hace el código más legible y conciso
============================================ */

// ============================================
// 1. CONCEPTO BÁSICO
// ============================================

const texto = 'HOLA MUNDO';

// ❌ Sin encadenamiento (paso a paso)
const minusculas = texto.toLowerCase();
const primeraLetra = minusculas.charAt(0);
console.log('--- SIN ENCADENAMIENTO ---');
console.log(primeraLetra);  // 'h'

// ✅ Con encadenamiento (en una sola línea)
const resultado = texto.toLowerCase().charAt(0);
console.log('--- CON ENCADENAMIENTO ---');
console.log(resultado);  // 'h'

console.log('');


// ============================================
// 2. CÓMO FUNCIONA
// ============================================

const nombre = '  DANIEL  ';

// Paso por paso:
// 1. nombre.trim() → retorna 'DANIEL' (string)
// 2. 'DANIEL'.toLowerCase() → retorna 'daniel' (string)
// 3. 'daniel'.charAt(0) → retorna 'd' (string)

const primeraLetraLimpia = nombre.trim().toLowerCase().charAt(0);
console.log('--- CÓMO FUNCIONA ---');
console.log(primeraLetraLimpia);  // 'd'

console.log('');


// ============================================
// 3. ENCADENAMIENTO CON STRINGS
// ============================================

const frase = '   Hola Mundo JavaScript   ';

// Múltiples operaciones encadenadas
const procesado = frase
    .trim()              // quita espacios → 'Hola Mundo JavaScript'
    .toLowerCase()       // a minúsculas → 'hola mundo javascript'
    .replace('mundo', 'world')  // reemplaza → 'hola world javascript'
    .toUpperCase();      // a mayúsculas → 'HOLA WORLD JAVASCRIPT'

console.log('--- STRINGS ENCADENADOS ---');
console.log(procesado);

// Otro ejemplo
const email = '  USER@EXAMPLE.COM  ';
const emailLimpio = email.trim().toLowerCase();
console.log('Email limpio:', emailLimpio);  // 'user@example.com'

console.log('');


// ============================================
// 4. ENCADENAMIENTO CON ARRAYS
// ============================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Encadenamiento múltiple
const resultado2 = numeros
    .filter(n => n > 5)        // [6, 7, 8, 9, 10]
    .map(n => n * 2)           // [12, 14, 16, 18, 20]
    .reduce((a, b) => a + b);  // 80

console.log('--- ARRAYS ENCADENADOS ---');
console.log('Resultado:', resultado2);

// Otro ejemplo con reduce explicado paso a paso
const nums = [3, 1, 4, 1, 5];
const suma = nums
    .filter(n => n > 2)        // [3, 4, 5]
    .map(n => n * 2)           // [6, 8, 10]
    .reduce((a, b) => a + b);  // 6 + 8 = 14, luego 14 + 10 = 24

console.log('Suma con reduce:', suma);  // 24
console.log('Explicación: 6 + 8 = 14, luego 14 + 10 = 24');

// Otro ejemplo
const palabras = ['hola', 'mundo', 'javascript', 'es', 'genial'];
const largas = palabras
    .filter(p => p.length > 4)  // ['mundo', 'javascript', 'genial']
    .map(p => p.toUpperCase())  // ['MUNDO', 'JAVASCRIPT', 'GENIAL']
    .join(' - ');               // 'MUNDO - JAVASCRIPT - GENIAL'

console.log('Palabras largas:', largas);

console.log('');


// ============================================
// 5. CUANDO NO PUEDES ENCADENAR
// ============================================

const texto2 = 'Hola';

// ❌ No puedes encadenar si el método no retorna el tipo esperado
// console.log(texto2.toUpperCase().push('x'));  // ERROR: push no existe en strings

console.log('--- LIMITACIONES ---');
console.log('Solo puedes encadenar métodos compatibles con el tipo de dato retornado');

console.log('');


// ============================================
// 6. ENCADENAMIENTO LEGIBLE (MÚLTIPLES LÍNEAS)
// ============================================

const usuarios = [
    { nombre: 'Ana', edad: 25, activo: true },
    { nombre: 'Luis', edad: 30, activo: false },
    { nombre: 'María', edad: 22, activo: true },
    { nombre: 'Carlos', edad: 35, activo: true }
];

// Encadenamiento legible (una operación por línea)
const nombresActivos = usuarios
    .filter(u => u.activo)           // solo usuarios activos
    .filter(u => u.edad < 30)        // menores de 30
    .map(u => u.nombre)              // solo nombres
    .sort()                          // ordenar alfabéticamente
    .join(', ');                     // unir en string

console.log('--- ENCADENAMIENTO LEGIBLE ---');
console.log('Usuarios activos < 30:', nombresActivos);  // 'Ana, María'

console.log('');


// ============================================
// 7. EJEMPLO PRÁCTICO: VALIDACIÓN DE FORMULARIO
// ============================================

function validarEmail(email) {
    return email
        .trim()                    // quitar espacios
        .toLowerCase()             // normalizar a minúsculas
        .includes('@')             // verificar que tenga @
        && email.includes('.');    // y que tenga punto
}

console.log('--- VALIDACIÓN EMAIL ---');
console.log(validarEmail('  USER@example.com  '));  // true
console.log(validarEmail('invalido'));              // false

console.log('');


// ============================================
// 8. EJEMPLO PRÁCTICO: FORMATEAR NOMBRE
// ============================================

function formatearNombre(nombre) {
    return nombre
        .trim()                           // quitar espacios
        .toLowerCase()                    // todo minúsculas
        .split(' ')                       // dividir en palabras
        .map(palabra =>                   // capitalizar cada palabra
            palabra.charAt(0).toUpperCase() + palabra.slice(1)
        )
        .join(' ');                       // unir de nuevo
}

console.log('--- FORMATEAR NOMBRE ---');
console.log(formatearNombre('  juan PÉREZ lópez  '));  // 'Juan Pérez López'

console.log('');


// ============================================
// 9. TU EJEMPLO ORIGINAL
// ============================================

const texto1 = 'Hola soy Daniel';

// Tu ejemplo: encadenar toLowerCase() e indexOf()
const indiceH = texto1.toLowerCase().indexOf('h');
console.log('--- TU EJEMPLO ORIGINAL ---');
console.log('Índice de "h":', indiceH);  // 0

// Más ejemplos similares
const contiene = texto1.toLowerCase().includes('daniel');
console.log('Contiene "daniel":', contiene);  // true

const ultimaLetra = texto1.trim().charAt(texto1.length - 1);
console.log('Última letra:', ultimaLetra);  // 'l'

console.log('');


// ============================================
// 10. CÓMO FUNCIONA REDUCE (EXPLICACIÓN DETALLADA)
// ============================================

console.log('--- EXPLICACIÓN DE REDUCE ---');

const arrayEjemplo = [6, 8, 10];
console.log('Array:', arrayEjemplo);

// reduce va acumulando:
// Primera iteración: a = 6,  b = 8  → resultado = 6 + 8 = 14
// Segunda iteración: a = 14, b = 10 → resultado = 14 + 10 = 24

const sumaTotal = arrayEjemplo.reduce((a, b) => {
    console.log(`  a = ${a}, b = ${b}, suma = ${a + b}`);
    return a + b;
});

console.log('Resultado final:', sumaTotal);  // 24

console.log('');


// ============================================
// REGLAS DE ORO
// ============================================
console.log('--- REGLAS DE ORO ---');
console.log(`
1. ✅ Solo puedes encadenar si el método RETORNA un valor
2. ✅ El método siguiente debe existir en el tipo retornado
3. ✅ Usa múltiples líneas para mejor legibilidad
4. ✅ El encadenamiento hace el código más conciso
5. ✅ Orden importa: cada método actúa sobre el resultado anterior

Nombre: Method Chaining / Encadenamiento de Métodos
Muy usado en: Strings, Arrays, jQuery, Lodash, frameworks modernos
`);


// ============================================
// RESUMEN
// ============================================
/*
METHOD CHAINING permite:
- ✅ Código más limpio y legible
- ✅ Menos variables intermedias
- ✅ Flujo de transformación claro
- ✅ Estilo funcional de programación
*/
