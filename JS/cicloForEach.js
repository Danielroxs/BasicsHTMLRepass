/* ============================================
   MÉTODOS Y CICLOS PARA ITERACIÓN
   ============================================
   
   📌 forEach():
   - MÉTODO de arrays para recorrer elementos
   - Recibe una función callback
   - Parámetros: (elemento, índice, array completo)
   
   📌 for...in:
   - CICLO para recorrer PROPIEDADES de un objeto
   - Útil para objetos literales
   - Devuelve las CLAVES (keys)
   
   📌 for...of:
   - CICLO para recorrer VALORES de un iterable
   - Funciona con: Arrays, Strings, Maps, Sets, HTMLCollections
   - Devuelve los VALORES directamente
============================================ */


// ============================================
// 1. forEach() - Método de Arrays
// ============================================
/* 
   SINTAXIS:
   array.forEach((elemento, indice, arrayCompleto) => {
       // código a ejecutar
   });
   
   PARÁMETROS:
   - elemento: El valor actual que se está recorriendo
   - indice: La posición del elemento (opcional)
   - arrayCompleto: El array completo (opcional)
   
   ⚠️ IMPORTANTE: forEach() NO retorna un nuevo array
                   Solo ejecuta una función por cada elemento
*/

console.log('--- forEach() ---');
console.log('Recorriendo array de amigos:\n');

const amigos = ['Dan', 'Cesar', 'Manuel'];

// Versión corta (una línea)
amigos.forEach((amigo, index) => console.log(`Mi amigo #${index} es ${amigo}`));

// Versión expandida (para ver mejor los parámetros)
console.log('\nVersiones con diferentes parámetros:');

// Solo el elemento
amigos.forEach((amigo) => {
    console.log('Amigo:', amigo);
});

// Elemento e índice
amigos.forEach((amigo, index) => {
    console.log(`Posición ${index}: ${amigo}`);
});

// Elemento, índice y array completo
amigos.forEach((amigo, index, arrayCompleto) => {
    console.log(`${amigo} está en posición ${index} de ${arrayCompleto.length} elementos`);
});

console.log('');


// ============================================
// 2. for...in - Recorrer PROPIEDADES de Objetos
// ============================================
/* 
   SINTAXIS:
   for (variable in objeto) {
       // código a ejecutar
   }
   
   ⚠️ IMPORTANTE: 
   - for...in devuelve las CLAVES (keys), no los valores
   - Para acceder al valor: objeto[clave]
   - Se usa principalmente con OBJETOS LITERALES
*/

console.log('--- for...in ---');
console.log('Recorriendo propiedades de un objeto:\n');

const persona = {
    nombre: 'Dan',
    edad: 32,
    email: 'email@email.com'
};

console.log('Objeto original:', persona);
console.log('\nRecorriendo con for...in:');

// 'propiedad' contiene el NOMBRE de cada propiedad (clave)
for (propiedad in persona) {
    console.log(`Propiedad: ${propiedad}`);
    console.log(`Valor: ${persona[propiedad]}`);      // Acceder al valor con []
    console.log('---');

    // Modificando el valor de cada propiedad
    persona[propiedad] = ' ';                         // Limpia todos los valores
}

console.log('\nObjeto después de limpiarlo:', persona);
console.log('');


// ============================================
// 3. for...of - Recorrer VALORES de Iterables
// ============================================
/* 
   SINTAXIS:
   for (variable of iterable) {
       // código a ejecutar
   }
   
   ⚠️ IMPORTANTE:
   - for...of devuelve los VALORES directamente
   - Funciona con: Arrays, Strings, Maps, Sets, HTMLCollections
   - NO funciona con objetos literales normales
*/

console.log('--- for...of ---');
console.log('Recorriendo HTMLCollection del DOM:\n');

const etiquetas = document.head.children;              // HTMLCollection (similar a array)
console.log('Tipo de dato:', etiquetas);
console.log('Número de etiquetas:', etiquetas.length);
console.log('\nRecorriendo con for...of:');

// 'elemento' contiene directamente cada elemento HTML
for (elemento of etiquetas) {
    console.log(elemento);                             // Imprime el elemento HTML completo
    console.log('Tag:', elemento.tagName);             // Nombre de la etiqueta (META, TITLE, etc.)
}

console.log('');


// ============================================
// 4. Convertir HTMLCollection a Array
// ============================================
/* 
   PROBLEMA: HTMLCollection NO es un array real
             NO tiene métodos como forEach(), map(), filter()
   
   SOLUCIÓN: Convertirlo a array con Spread Operator (...)
   
   VENTAJA: Ahora podemos usar todos los métodos de arrays
*/

console.log('--- Spread Operator + forEach ---');
console.log('Convirtiendo HTMLCollection a Array:\n');

// Spread operator copia la colección HTML y la convierte en array
const etiquetasArray = [...etiquetas];
console.log('Es un array ahora:', Array.isArray(etiquetasArray));

// Ahora SÍ podemos usar forEach porque es un array
etiquetasArray.forEach((etiqueta) => {
    console.log('Etiqueta:', etiqueta.tagName);
});

// Versión de una línea (la del código original)
console.log('\nVersionión corta:');
[...etiquetas].forEach((etiqueta) => console.log(etiqueta));

console.log('');


// ============================================
// COMPARACIÓN: for...in vs for...of
// ============================================
console.log('--- COMPARACIÓN: for...in vs for...of ---');
console.log(`
┌──────────────┬─────────────────────────────────────────┐
│ for...in     │ for...of                                │
├──────────────┼─────────────────────────────────────────┤
│ Recorre      │ Recorre                                 │
│ PROPIEDADES  │ VALORES                                 │
│ (claves)     │                                         │
├──────────────┼─────────────────────────────────────────┤
│ Para OBJETOS │ Para ITERABLES                          │
│              │ (arrays, strings, etc.)                 │
├──────────────┼─────────────────────────────────────────┤
│ Devuelve     │ Devuelve                                │
│ la CLAVE     │ el VALOR directamente                   │
└──────────────┴─────────────────────────────────────────┘
`);

// EJEMPLO PRÁCTICO
const colores = ['rojo', 'verde', 'azul'];
const coche = { marca: 'Toyota', modelo: 'Corolla', año: 2020 };

console.log('\nEjemplo con array:');
console.log('for...in (índices):', 'devuelve →', Object.keys(colores).join(', '));
for (let i in colores) {
    console.log(`Índice: ${i}, Valor: ${colores[i]}`);
}

console.log('\nfor...of (valores):');
for (let color of colores) {
    console.log(`Valor directo: ${color}`);
}

console.log('\nEjemplo con objeto:');
console.log('for...in (propiedades):');
for (let prop in coche) {
    console.log(`Propiedad: ${prop}, Valor: ${coche[prop]}`);
}

// ⚠️ for...of NO funciona con objetos literales
// for (let valor of coche) { ... }  ← Esto daría ERROR
console.log('\n⚠️ for...of NO funciona con objetos literales (daría error)');
console.log('');


// ============================================
// CASOS DE USO COMUNES
// ============================================
console.log('--- CASOS DE USO ---');
console.log(`
✅ forEach():
   - Recorrer arrays
   - Ejecutar función por cada elemento
   - No retorna nuevo array
   Ejemplo: usuarios.forEach(user => console.log(user.nombre))

✅ for...in:
   - Recorrer propiedades de objetos
   - Modificar valores de objetos
   - Obtener claves de objetos
   Ejemplo: for (key in config) { config[key] = default }

✅ for...of:
   - Recorrer valores de arrays
   - Procesar elementos del DOM
   - Iterar strings, Maps, Sets
   Ejemplo: for (let item of carrito) { calcularTotal(item) }

⚠️ Conversión con Spread:
   - Convertir HTMLCollection/NodeList a array
   - Poder usar métodos de arrays (map, filter, etc.)
   Ejemplo: [...elementos].map(el => el.textContent)
`);


// ============================================
// EJEMPLOS ADICIONALES
// ============================================
console.log('--- EJEMPLOS ADICIONALES ---');

// forEach con arrays de objetos
console.log('\nforEach con objetos:');
const productos = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 75 }
];

productos.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto.nombre}: $${producto.precio}`);
});

// for...of con strings
console.log('\nfor...of con strings:');
const palabra = 'JavaScript';
for (let letra of palabra) {
    console.log(letra);
}

// for...in para copiar objeto
console.log('\nfor...in para copiar objeto:');
const original = { a: 1, b: 2, c: 3 };
const copia = {};
for (let key in original) {
    copia[key] = original[key];
}
console.log('Original:', original);
console.log('Copia:', copia);
console.log('');


// ============================================
// RESUMEN
// ============================================
console.log('--- RESUMEN ---');
console.log(`
✅ forEach():
   - Método de ARRAYS
   - Parámetros: (elemento, índice, arrayCompleto)
   - No retorna nada
   - Uso: Ejecutar función por cada elemento

✅ for...in:
   - Ciclo para OBJETOS
   - Devuelve CLAVES (propiedades)
   - Acceso a valor: objeto[clave]
   - Uso: Recorrer propiedades de objetos

✅ for...of:
   - Ciclo para ITERABLES
   - Devuelve VALORES directamente
   - Funciona con: Arrays, Strings, Maps, Sets, HTMLCollections
   - Uso: Recorrer valores de colecciones

⚠️ IMPORTANTE:
   - forEach: Solo arrays
   - for...in: Objetos (devuelve claves)
   - for...of: Iterables (devuelve valores)
   - HTMLCollection → Convertir a array con [...coleccion]
`);