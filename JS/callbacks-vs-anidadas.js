/* ============================================
   FUNCIONES ANIDADAS vs CALLBACKS
   ============================================
   Son conceptos DIFERENTES pero relacionados
============================================ */

// ============================================
// 1. FUNCIÓN ANIDADA (Nested Function)
// ============================================
/* Definición: Una función definida DENTRO de otra función */

function externa() {
    console.log('Función externa ejecutándose');
    
    function interna() {  // ← FUNCIÓN ANIDADA
        console.log('Función interna ejecutándose');
    }
    
    interna();  // Se llama dentro de la función externa
}

externa();
// interna();  // ❌ ERROR: interna no existe fuera de externa()

console.log('---');


// ============================================
// 2. CALLBACK
// ============================================
/* Definición: Una función que se PASA como PARÁMETRO a otra función */

function procesar(callback) {  // ← recibe función como parámetro
    console.log('Procesando...');
    callback();  // ← ejecuta la función recibida
}

function miFuncion() {
    console.log('Soy un callback');
}

procesar(miFuncion);  // ← pasa la función como argumento

console.log('---');


// ============================================
// 3. DIFERENCIAS CLAVE
// ============================================

// FUNCIÓN ANIDADA:
// - Se define DENTRO de otra función
// - Solo existe en el scope de la función padre
// - No se pasa a ningún lado

function ejemploAnidada() {
    const mensaje = 'Hola';
    
    function mostrar() {  // anidada
        console.log(mensaje);  // accede a variables de la función padre
    }
    
    mostrar();
}

ejemploAnidada();

console.log('---');

// CALLBACK:
// - Se PASA como parámetro
// - Se ejecuta en OTRO contexto
// - Puede ser cualquier función

function ejemploCallback(fn) {
    console.log('Antes del callback');
    fn();  // ejecuta el callback
    console.log('Después del callback');
}

ejemploCallback(function() {
    console.log('Ejecutando callback');
});

console.log('---');


// ============================================
// 4. PUEDEN COMBINARSE
// ============================================
/* Una función puede tener AMBAS cosas */

function procesarConAmbas(callback) {
    console.log('Inicio de procesarConAmbas');
    
    // Función anidada
    function anidada() {
        console.log('Soy una función anidada');
    }
    
    anidada();  // ejecuta la anidada
    callback();  // ejecuta el callback
}

procesarConAmbas(function() {
    console.log('Soy el callback');
});

console.log('---');


// ============================================
// 5. CALLBACKS EN LA PRÁCTICA
// ============================================

// Ejemplo con arrays (forEach recibe un callback)
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {  // ← callback
    console.log('Número:', numero);
});

console.log('---');

// Ejemplo con setTimeout (recibe un callback)
console.log('Inicio');

setTimeout(function() {  // ← callback
    console.log('Han pasado 2 segundos');
}, 2000);

console.log('Fin (antes de que pase el timeout)');

console.log('---');


// ============================================
// 6. FUNCIONES ANIDADAS EN LA PRÁCTICA
// ============================================

function calculadora(a, b) {
    // Funciones anidadas para organizar código
    function sumar() {
        return a + b;
    }
    
    function restar() {
        return a - b;
    }
    
    function multiplicar() {
        return a * b;
    }
    
    // Retorna objeto con las funciones
    return {
        suma: sumar(),
        resta: restar(),
        mult: multiplicar()
    };
}

const resultado = calculadora(10, 5);
console.log('Resultados:', resultado);

console.log('---');


// ============================================
// 7. CLOSURE (FUNCIÓN ANIDADA CON ACCESO A SCOPE)
// ============================================
/* Las funciones anidadas pueden acceder a variables del padre
   incluso después de que el padre termine */

function crearContador() {
    let contador = 0;  // variable privada
    
    // Función anidada que accede a 'contador'
    function incrementar() {
        contador++;
        return contador;
    }
    
    return incrementar;  // retorna la función anidada
}

const miContador = crearContador();
console.log(miContador());  // 1
console.log(miContador());  // 2
console.log(miContador());  // 3
// contador sigue "vivo" gracias al closure

console.log('---');


// ============================================
// 8. CALLBACK CON ARROW FUNCTIONS
// ============================================

function ejecutar(callback) {
    callback('Hola desde el callback');
}

// Callback con función tradicional
ejecutar(function(mensaje) {
    console.log('Tradicional:', mensaje);
});

// Callback con arrow function (más común hoy en día)
ejecutar((mensaje) => {
    console.log('Arrow:', mensaje);
});

console.log('---');


// ============================================
// 9. EJEMPLO REAL: FILTRAR ARRAY
// ============================================

const productos = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Mouse', precio: 20 },
    { nombre: 'Teclado', precio: 50 }
];

// filter() recibe un callback
const caros = productos.filter(function(producto) {  // ← callback
    return producto.precio > 30;
});

console.log('Productos caros:', caros);

// Con arrow function (más corto)
const baratos = productos.filter(producto => producto.precio <= 30);
console.log('Productos baratos:', baratos);

console.log('---');


// ============================================
// 10. EJEMPLO REAL: PROCESAR DATOS
// ============================================

function procesarDatos(datos, callback) {
    console.log('Procesando datos...');
    
    // Simula procesamiento
    const resultado = datos.map(d => d * 2);
    
    // Ejecuta el callback con el resultado
    callback(resultado);
}

procesarDatos([1, 2, 3, 4, 5], function(resultado) {  // ← callback
    console.log('Datos procesados:', resultado);
});

console.log('---');


// ============================================
// RESUMEN COMPARATIVO
// ============================================
/*
┌─────────────────────┬─────────────────────┬─────────────────────┐
│ Característica      │ Función Anidada     │ Callback            │
├─────────────────────┼─────────────────────┼─────────────────────┤
│ Definición          │ Dentro de otra      │ Pasada como         │
│                     │ función             │ parámetro           │
├─────────────────────┼─────────────────────┼─────────────────────┤
│ Scope               │ Local a la función  │ Puede ser global    │
│                     │ padre               │ o local             │
├─────────────────────┼─────────────────────┼─────────────────────┤
│ Acceso desde fuera  │ ❌ No               │ ✅ Sí (si es        │
│                     │                     │    global)          │
├─────────────────────┼─────────────────────┼─────────────────────┤
│ Cuándo se ejecuta   │ Cuando la función   │ Cuando otra función │
│                     │ padre la llama      │ la invoca           │
├─────────────────────┼─────────────────────┼─────────────────────┤
│ Uso común           │ Organizar código,   │ Eventos,            │
│                     │ closures            │ asincronía, arrays  │
└─────────────────────┴─────────────────────┴─────────────────────┘

EJEMPLO COMBINADO:

function procesarArray(array, callback) {
    
    // Función anidada para validar
    function esValido(item) {
        return item !== null && item !== undefined;
    }
    
    // Filtra con la función anidada
    const validos = array.filter(esValido);
    
    // Ejecuta el callback con los datos válidos
    callback(validos);
}

procesarArray([1, null, 3, undefined, 5], function(resultado) {
    console.log('Valores válidos:', resultado);  // [1, 3, 5]
});

---

REGLAS DE ORO:

1. ✅ FUNCIÓN ANIDADA = Definida DENTRO
2. ✅ CALLBACK = Pasada como PARÁMETRO
3. ✅ Pueden combinarse en el mismo código
4. ✅ Ambas son útiles pero para diferentes propósitos
5. ✅ Los callbacks son fundamentales en JavaScript asíncrono
6. ✅ Las funciones anidadas son útiles para closures y organización
*/
