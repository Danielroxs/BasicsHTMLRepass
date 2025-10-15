/* ============================================
   SPREAD OPERATOR (...) - OPERADOR DE PROPAGACIÓN
   ============================================
   - Permite expandir/copiar elementos de arreglos u objetos
   - Crea copias independientes (no referencias)
   - Sintaxis: ... (tres puntos)
   - Introducido en ES6 (2015)
============================================ */

// ============================================
// 1. PROBLEMA: COPIA POR REFERENCIA
// ============================================
/* ❌ Cuando asignas un arreglo a otra variable,
   ambas apuntan al MISMO arreglo en memoria */

const letras = ['c', 'a', 'b'];
const letrasRef = letras;  // ❌ NO es una copia, es una REFERENCIA

letrasRef.sort();  // Ordena el arreglo
console.log('--- PROBLEMA: COPIA POR REFERENCIA ---');
console.log('letrasRef:', letrasRef);  // ['a', 'b', 'c']
console.log('letras:', letras);        // ['a', 'b', 'c'] ← ❌ También cambió!

console.log('');


// ============================================
// 2. SOLUCIÓN: SPREAD OPERATOR PARA COPIAR
// ============================================
/* ✅ Spread operator crea una COPIA INDEPENDIENTE */

const numeros = [3, 1, 2];
const numerosCopia = [...numeros];  // ✅ Crea nueva copia

numerosCopia.sort();  // Ordena solo la copia
console.log('--- SOLUCIÓN: SPREAD OPERATOR ---');
console.log('numerosCopia:', numerosCopia);  // [1, 2, 3]
console.log('numeros:', numeros);            // [3, 1, 2] ← ✅ Original intacto!

console.log('');


// ============================================
// 3. COPIAR Y AGREGAR ELEMENTOS
// ============================================

const frutas = ['manzana', 'pera'];
const masFrutas = [...frutas, 'naranja', 'uva'];

console.log('--- COPIAR Y AGREGAR ---');
console.log('Original:', frutas);        // ['manzana', 'pera']
console.log('Con más:', masFrutas);      // ['manzana', 'pera', 'naranja', 'uva']

// Agregar al inicio
const frutasInicio = ['fresa', ...frutas];
console.log('Al inicio:', frutasInicio);  // ['fresa', 'manzana', 'pera']

// Agregar en medio
const frutasMedio = [...frutas.slice(0, 1), 'kiwi', ...frutas.slice(1)];
console.log('En medio:', frutasMedio);  // ['manzana', 'kiwi', 'pera']

console.log('');


// ============================================
// 4. COMBINAR ARREGLOS
// ============================================

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

// ✅ Con spread operator
const combinado = [...arr1, ...arr2, ...arr3];
console.log('--- COMBINAR ARREGLOS ---');
console.log('Combinado:', combinado);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// También puedes intercalar
const intercalado = [...arr1, 'x', ...arr2, 'y', ...arr3];
console.log('Intercalado:', intercalado);  // [1, 2, 3, 'x', 4, 5, 6, 'y', 7, 8, 9]

console.log('');


// ============================================
// 5. COPIAR OBJETOS
// ============================================

const persona = {
    nombre: 'Daniel',
    edad: 25,
    ciudad: 'Madrid'
};

// ✅ Copia independiente con spread
const personaCopia = { ...persona };

personaCopia.edad = 30;  // Modifica solo la copia
console.log('--- COPIAR OBJETOS ---');
console.log('Original:', persona);       // { nombre: 'Daniel', edad: 25, ciudad: 'Madrid' }
console.log('Copia:', personaCopia);     // { nombre: 'Daniel', edad: 30, ciudad: 'Madrid' }

console.log('');


// ============================================
// 6. COMBINAR OBJETOS
// ============================================

const datosBasicos = { nombre: 'Ana', edad: 28 };
const datosContacto = { email: 'ana@mail.com', telefono: '123456' };
const direccion = { ciudad: 'Barcelona', pais: 'España' };

const usuarioCompleto = { ...datosBasicos, ...datosContacto, ...direccion };

console.log('--- COMBINAR OBJETOS ---');
console.log('Usuario completo:', usuarioCompleto);
/* {
    nombre: 'Ana',
    edad: 28,
    email: 'ana@mail.com',
    telefono: '123456',
    ciudad: 'Barcelona',
    pais: 'España'
} */

console.log('');


// ============================================
// 7. SOBRESCRIBIR PROPIEDADES
// ============================================
/* Si hay propiedades duplicadas, la ÚLTIMA gana */

const config = { tema: 'oscuro', idioma: 'es', notificaciones: true };
const nuevaConfig = { ...config, tema: 'claro' };  // Sobrescribe 'tema'

console.log('--- SOBRESCRIBIR PROPIEDADES ---');
console.log('Config original:', config);      // { tema: 'oscuro', ... }
console.log('Nueva config:', nuevaConfig);    // { tema: 'claro', ... }

// Agregar nuevas propiedades y modificar existentes
const configExtendida = {
    ...config,
    tema: 'claro',        // sobrescribe
    fuente: 'Arial'       // agrega nueva
};
console.log('Config extendida:', configExtendida);

console.log('');


// ============================================
// 8. PASAR ARREGLOS COMO ARGUMENTOS
// ============================================

function sumar(a, b, c) {
    return a + b + c;
}

const valores = [10, 20, 30];

// ❌ Sin spread: pasa el arreglo completo como primer argumento
console.log('--- ARGUMENTOS DE FUNCIÓN ---');
// sumar(valores);  // NaN (undefined + undefined)

// ✅ Con spread: expande el arreglo en argumentos individuales
const resultado = sumar(...valores);  // sumar(10, 20, 30)
console.log('Suma con spread:', resultado);  // 60

console.log('');


// ============================================
// 9. ENCONTRAR MÁXIMO/MÍNIMO
// ============================================

const numeros2 = [45, 12, 89, 23, 67, 5];

// Math.max() necesita argumentos individuales, no un arreglo
const maximo = Math.max(...numeros2);  // Math.max(45, 12, 89, 23, 67, 5)
const minimo = Math.min(...numeros2);

console.log('--- MÁXIMO Y MÍNIMO ---');
console.log('Números:', numeros2);
console.log('Máximo:', maximo);  // 89
console.log('Mínimo:', minimo);  // 5

console.log('');


// ============================================
// 10. CONVERTIR STRING A ARREGLO
// ============================================

const texto = 'Hola';
const letrasArray = [...texto];

console.log('--- STRING A ARREGLO ---');
console.log('Texto:', texto);              // 'Hola'
console.log('Como arreglo:', letrasArray); // ['H', 'o', 'l', 'a']

console.log('');


// ============================================
// 11. REMOVER DUPLICADOS
// ============================================
/* Combinando spread con Set (estructura que no permite duplicados) */

const numerosConDuplicados = [1, 2, 2, 3, 4, 4, 5, 1];
const numerosSinDuplicados = [...new Set(numerosConDuplicados)];

console.log('--- REMOVER DUPLICADOS ---');
console.log('Con duplicados:', numerosConDuplicados);      // [1, 2, 2, 3, 4, 4, 5, 1]
console.log('Sin duplicados:', numerosSinDuplicados);      // [1, 2, 3, 4, 5]

console.log('');


// ============================================
// 12. COPIAR ARREGLO Y ORDENAR (CASO COMÚN)
// ============================================

const palabras = ['zebra', 'apple', 'mango', 'banana'];

// ❌ MAL: Ordena el original
// palabras.sort();

// ✅ BIEN: Copia primero, luego ordena
const palabrasOrdenadas = [...palabras].sort();

console.log('--- COPIAR Y ORDENAR ---');
console.log('Original:', palabras);            // ['zebra', 'apple', 'mango', 'banana']
console.log('Ordenadas:', palabrasOrdenadas);  // ['apple', 'banana', 'mango', 'zebra']

console.log('');


// ============================================
// 13. INMUTABILIDAD (BUENA PRÁCTICA)
// ============================================
/* En lugar de modificar datos existentes, creas nuevas versiones */

const carrito = [
    { id: 1, producto: 'Laptop', precio: 1000 },
    { id: 2, producto: 'Mouse', precio: 20 }
];

// ❌ MAL: Modifica el original
// carrito.push({ id: 3, producto: 'Teclado', precio: 50 });

// ✅ BIEN: Crea nuevo arreglo con el elemento adicional
const carritoActualizado = [
    ...carrito,
    { id: 3, producto: 'Teclado', precio: 50 }
];

console.log('--- INMUTABILIDAD ---');
console.log('Carrito original:', carrito.length, 'items');           // 2 items
console.log('Carrito actualizado:', carritoActualizado.length, 'items');  // 3 items

console.log('');


// ============================================
// 14. SPREAD CON OBJETOS ANIDADOS (CUIDADO)
// ============================================
/* ⚠️ Spread solo hace copia superficial (shallow copy) */

const usuario = {
    nombre: 'Carlos',
    direccion: {
        calle: 'Principal',
        numero: 123
    }
};

const usuarioCopia = { ...usuario };

// Modifica objeto anidado
usuarioCopia.direccion.numero = 456;

console.log('--- COPIA SUPERFICIAL ---');
console.log('Original numero:', usuario.direccion.numero);        // 456 ← ❌ También cambió!
console.log('Copia numero:', usuarioCopia.direccion.numero);      // 456

// ✅ Para copia profunda, copia también los objetos anidados:
const usuarioCopiaCompleta = {
    ...usuario,
    direccion: { ...usuario.direccion }  // copia también el objeto anidado
};

console.log('');


// ============================================
// 15. EJEMPLO PRÁCTICO: GESTIÓN DE TAREAS
// ============================================

let tareas = [
    { id: 1, texto: 'Estudiar JavaScript', completada: false },
    { id: 2, texto: 'Hacer ejercicio', completada: true }
];

// Agregar nueva tarea (inmutable)
tareas = [...tareas, { id: 3, texto: 'Leer libro', completada: false }];

// Marcar tarea como completada (inmutable)
tareas = tareas.map(tarea =>
    tarea.id === 1 ? { ...tarea, completada: true } : tarea
);

// Eliminar tarea (inmutable)
tareas = tareas.filter(tarea => tarea.id !== 2);

console.log('--- EJEMPLO PRÁCTICO ---');
console.log('Tareas finales:', tareas);

console.log('');


// ============================================
// RESUMEN Y COMPARACIÓN
// ============================================
console.log('--- RESUMEN ---');
console.log(`
┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
│ Operación               │ Sin Spread (❌)         │ Con Spread (✅)         │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Copiar arreglo          │ const a = b             │ const a = [...b]        │
│                         │ (referencia)            │ (copia independiente)   │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Combinar arreglos       │ a.concat(b)             │ [...a, ...b]            │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Agregar elemento        │ a.push(x)               │ [...a, x]               │
│                         │ (muta original)         │ (nuevo arreglo)         │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Copiar objeto           │ const a = b             │ const a = {...b}        │
│                         │ (referencia)            │ (copia independiente)   │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Combinar objetos        │ Object.assign({}, a, b) │ {...a, ...b}            │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Argumentos de función   │ fn.apply(null, arr)     │ fn(...arr)              │
└─────────────────────────┴─────────────────────────┴─────────────────────────┘
`);


// ============================================
// REGLAS DE ORO
// ============================================
/*
1. ✅ USA SPREAD para copiar arreglos u objetos
   - Evita modificar datos originales
   - Facilita la inmutabilidad

2. ✅ USA SPREAD para combinar arreglos/objetos
   - Más legible que concat o Object.assign

3. ✅ USA SPREAD para agregar elementos sin mutar
   - [...arr, newItem] en lugar de arr.push(newItem)

4. ⚠️ CUIDADO con objetos anidados
   - Spread hace copia superficial
   - Para objetos anidados, copia manualmente cada nivel

5. ✅ USA SPREAD para pasar argumentos
   - fn(...args) en lugar de fn.apply()

6. ✅ COMBINA con otras técnicas
   - Set para remover duplicados
   - map/filter para transformaciones inmutables

7. ✅ PREFIERE inmutabilidad en aplicaciones modernas
   - Especialmente con React, Redux, etc.
   - Facilita debugging y testing
*/
