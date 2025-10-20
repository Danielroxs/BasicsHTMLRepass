/* ============================================
   ID vs CLASS - ¿Cuándo usar cada uno?
   ============================================
   
   Archivo de estudio para entender las diferencias
   entre usar ID y CLASS en HTML y JavaScript.
   
   📌 Resumen:
   - ID: Para elementos ÚNICOS
   - CLASS: Para elementos que se REPITEN o tienen estilos
============================================ */


// ============================================
// 1. DIFERENCIAS FUNDAMENTALES
// ============================================

/*
┌──────────────────┬────────────────────────────────────────┐
│ ID               │ CLASS                                  │
├──────────────────┼────────────────────────────────────────┤
│ ÚNICO            │ REUTILIZABLE                           │
│ (solo uno)       │ (múltiples elementos)                  │
├──────────────────┼────────────────────────────────────────┤
│ # en CSS         │ . en CSS                               │
│ #miId            │ .miClase                               │
├──────────────────┼────────────────────────────────────────┤
│ Alta             │ Baja especificidad                     │
│ especificidad    │ en CSS                                 │
├──────────────────┼────────────────────────────────────────┤
│ getElementById() │ getElementsByClassName()               │
│ (más rápido)     │ querySelector('.clase')                │
└──────────────────┴────────────────────────────────────────┘
*/


// ============================================
// 2. EJEMPLOS EN HTML
// ============================================

// HTML con ID (único):
/*
<button id="btnToggle" class="toggle btn-primary">
    Toggle Clase
</button>

<header id="mainHeader">
    <nav id="mainNav">...</nav>
</header>

<form id="loginForm">...</form>
*/

// HTML con CLASS (reutilizable):
/*
<div class="card">Tarjeta 1</div>
<div class="card">Tarjeta 2</div>
<div class="card">Tarjeta 3</div>

<button class="btn btn-primary">Guardar</button>
<button class="btn btn-secondary">Cancelar</button>
*/


// ============================================
// 3. SELECCIONAR CON JAVASCRIPT
// ============================================

console.log('--- SELECCIÓN CON ID ---');

// Método 1: getElementById() (solo para IDs)
const botonPorId = document.getElementById('btnToggle')
//                                         └────┬────┘
//                                         SIN # (solo el nombre)
console.log('Por ID:', botonPorId)

// Método 2: querySelector() con ID
const botonConQuerySelector = document.querySelector('#btnToggle')
//                                                    └─────┬─────┘
//                                                    CON # (selector CSS)
console.log('Con querySelector:', botonConQuerySelector)

console.log('');


console.log('--- SELECCIÓN CON CLASS ---');

// Método 1: getElementsByClassName() (solo para clases)
const botonesPorClase = document.getElementsByClassName('toggle')
//                                                      └───┬───┘
//                                                      SIN . (solo el nombre)
console.log('Por clase (HTMLCollection):', botonesPorClase)

// Método 2: querySelector() con clase (devuelve el PRIMERO)
const primerBotonConClase = document.querySelector('.toggle')
//                                                  └───┬───┘
//                                                  CON . (selector CSS)
console.log('Primer elemento con clase:', primerBotonConClase)

// Método 3: querySelectorAll() con clase (devuelve TODOS)
const todosLosBotonesConClase = document.querySelectorAll('.toggle')
console.log('Todos los elementos con clase (NodeList):', todosLosBotonesConClase)

console.log('');


// ============================================
// 4. COMPARACIÓN DE VELOCIDAD
// ============================================

console.log('--- VELOCIDAD DE BÚSQUEDA ---');

// getElementById() es el MÁS RÁPIDO
console.time('getElementById')
const el1 = document.getElementById('btnToggle')
console.timeEnd('getElementById')  // ⚡ Más rápido

// querySelector() es más lento
console.time('querySelector con ID')
const el2 = document.querySelector('#btnToggle')
console.timeEnd('querySelector con ID')  // Más lento

console.time('querySelector con clase')
const el3 = document.querySelector('.toggle')
console.timeEnd('querySelector con clase')  // Aún más lento

console.log('');


// ============================================
// 5. CUÁNDO USAR ID
// ============================================

console.log('--- CUÁNDO USAR ID ---');
console.log(`
✅ USA ID cuando:

1. El elemento es ÚNICO en la página
   Ejemplo: <header id="mainHeader">

2. Solo lo usas para JavaScript (no estilos)
   Ejemplo: <button id="submitBtn">

3. Necesitas máxima especificidad
   Ejemplo: <div id="modal-principal">

4. Quieres mejor rendimiento
   getElementById() es el método más rápido

5. Es un landmark importante
   Ejemplo: <nav id="mainNav">, <footer id="mainFooter">
`);

// Ejemplos de buenos usos de ID:
/*
<header id="mainHeader">
<nav id="mainNav">
<main id="mainContent">
<footer id="mainFooter">
<form id="loginForm">
<form id="registroForm">
<button id="btnSubmit">
<div id="modal-confirmacion">
*/

console.log('');


// ============================================
// 6. CUÁNDO USAR CLASS
// ============================================

console.log('--- CUÁNDO USAR CLASS ---');
console.log(`
✅ USA CLASS cuando:

1. El elemento se REPITE en la página
   Ejemplo: <div class="card">

2. Tiene estilos CSS asociados
   Ejemplo: <button class="btn btn-primary">

3. Necesitas seleccionar múltiples elementos
   Ejemplo: document.querySelectorAll('.card')

4. Combinas varios estilos
   Ejemplo: <div class="card shadow rounded">

5. Es un patrón de diseño reutilizable
   Ejemplo: <span class="badge">
`);

// Ejemplos de buenos usos de CLASS:
/*
<div class="card">
<button class="btn btn-primary">
<span class="badge badge-success">
<div class="container">
<p class="text-center text-bold">
<img class="img-fluid rounded">
*/

console.log('');


// ============================================
// 7. MEJOR PRÁCTICA: COMBINAR AMBOS
// ============================================

console.log('--- MEJOR PRÁCTICA: ID + CLASS ---');

// HTML ideal: ID para JS, CLASS para estilos
/*
<button id="btnToggle" class="toggle btn btn-primary">
         └─────┬─────┘        └──────────┬──────────┘
          Para JS          Para estilos CSS
    Toggle Clase
</button>
*/

// JavaScript (usa ID para selección específica):
const boton = document.getElementById('btnToggle')

// CSS (usa CLASS para estilos reutilizables):
/*
.toggle { cursor: pointer; }
.btn { padding: 10px 20px; }
.btn-primary { background: blue; color: white; }
*/

console.log('Botón con ID y clases:', boton)
console.log('ID:', boton.id)                    // 'btnToggle'
console.log('Clases:', boton.className)         // 'toggle btn btn-primary'
console.log('Lista de clases:', boton.classList) // DOMTokenList

console.log('');


// ============================================
// 8. MITOS COMUNES
// ============================================

console.log('--- MITOS COMUNES ---');
console.log(`
❌ MITO 1: "ID es solo para JavaScript"
✅ REALIDAD: ID puede usarse en CSS también (pero con alta especificidad)

❌ MITO 2: "No puedo usar CLASS en JavaScript"
✅ REALIDAD: CLASS funciona perfectamente en JavaScript

❌ MITO 3: "Siempre debo usar ID en JavaScript"
✅ REALIDAD: CLASS está bien si el elemento se repite o tiene estilos

❌ MITO 4: "ID es obligatorio para addEventListener"
✅ REALIDAD: Puedes usar cualquier selector válido
`);

console.log('');


// ============================================
// 9. EJEMPLOS PRÁCTICOS
// ============================================

console.log('--- EJEMPLOS PRÁCTICOS ---');

// Ejemplo 1: Botón único (USA ID)
/*
HTML:
<button id="btnGuardar" class="btn btn-success">Guardar</button>

JavaScript:
*/
const btnGuardar = document.getElementById('btnGuardar')
btnGuardar.addEventListener('click', () => {
    console.log('Guardando...')
})

// Ejemplo 2: Múltiples tarjetas (USA CLASS)
/*
HTML:
<div class="card">Tarjeta 1</div>
<div class="card">Tarjeta 2</div>
<div class="card">Tarjeta 3</div>

JavaScript:
*/
const tarjetas = document.querySelectorAll('.card')
tarjetas.forEach((tarjeta, index) => {
    tarjeta.addEventListener('click', () => {
        console.log(`Click en tarjeta ${index + 1}`)
    })
})

// Ejemplo 3: Formulario único + campos múltiples (COMBINA)
/*
HTML:
<form id="loginForm">
    <input type="text" class="form-input" name="email">
    <input type="password" class="form-input" name="password">
    <button id="btnLogin" class="btn btn-primary">Login</button>
</form>

JavaScript:
*/
const formulario = document.getElementById('loginForm')  // ID para formulario único
const inputs = formulario.querySelectorAll('.form-input') // CLASS para inputs múltiples
const btnLogin = document.getElementById('btnLogin')      // ID para botón único

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Formulario enviado')
})

console.log('');


// ============================================
// 10. ESPECIFICIDAD EN CSS
// ============================================

console.log('--- ESPECIFICIDAD EN CSS ---');
console.log(`
Orden de especificidad (de menor a mayor):

1. Elemento:     div { }              → Especificidad: 0,0,1
2. Clase:        .miClase { }         → Especificidad: 0,1,0
3. ID:           #miId { }            → Especificidad: 1,0,0
4. Inline:       style="..."          → Especificidad: 1,0,0,0
5. !important:   color: red !important → Máxima

Ejemplo de conflicto:

CSS:
.btn { color: blue; }        ← Especificidad: 0,1,0
#btnToggle { color: red; }   ← Especificidad: 1,0,0 (GANA)

HTML:
<button id="btnToggle" class="btn">Toggle</button>

Resultado: El botón será ROJO (ID tiene mayor especificidad)

Por eso se recomienda:
- ID para JavaScript (identificación única)
- CLASS para CSS (estilos reutilizables)
`);

console.log('');


// ============================================
// 11. TABLA RESUMEN FINAL
// ============================================

console.log('--- TABLA RESUMEN ---');
console.log(`
┌─────────────────────┬────────────────┬──────────────────┐
│ Característica      │ ID             │ CLASS            │
├─────────────────────┼────────────────┼──────────────────┤
│ Cantidad            │ ÚNICO          │ MÚLTIPLE         │
├─────────────────────┼────────────────┼──────────────────┤
│ Sintaxis HTML       │ id="nombre"    │ class="nombre"   │
├─────────────────────┼────────────────┼──────────────────┤
│ Sintaxis CSS        │ #nombre        │ .nombre          │
├─────────────────────┼────────────────┼──────────────────┤
│ Sintaxis JS         │ getElementById │ querySelector    │
│                     │ querySelector  │ querySelectorAll │
├─────────────────────┼────────────────┼──────────────────┤
│ Especificidad CSS   │ Alta (1,0,0)   │ Baja (0,1,0)     │
├─────────────────────┼────────────────┼──────────────────┤
│ Velocidad JS        │ Más rápido     │ Más lento        │
├─────────────────────┼────────────────┼──────────────────┤
│ Uso principal       │ JavaScript     │ CSS + JavaScript │
├─────────────────────┼────────────────┼──────────────────┤
│ Puede repetirse     │ ❌ NO          │ ✅ SÍ            │
├─────────────────────┼────────────────┼──────────────────┤
│ Múltiples en mismo  │ ❌ NO          │ ✅ SÍ            │
│ elemento            │                │ class="a b c"    │
└─────────────────────┴────────────────┴──────────────────┘
`);


// ============================================
// 12. EJEMPLOS DE CÓDIGO COMPLETO
// ============================================

console.log('--- EJEMPLO COMPLETO ---');

// HTML:
/*
<!DOCTYPE html>
<html>
<head>
    <style>
        .btn { padding: 10px 20px; border: none; cursor: pointer; }
        .btn-primary { background: #007bff; color: white; }
        .btn-danger { background: #dc3545; color: white; }
        #mainHeader { background: #333; color: white; padding: 20px; }
    </style>
</head>
<body>
    <header id="mainHeader">
        <h1>Mi Aplicación</h1>
    </header>
    
    <button id="btnGuardar" class="btn btn-primary">Guardar</button>
    <button id="btnEliminar" class="btn btn-danger">Eliminar</button>
    
    <div class="card">Tarjeta 1</div>
    <div class="card">Tarjeta 2</div>
    <div class="card">Tarjeta 3</div>
    
    <script src="eventos.js"></script>
</body>
</html>
*/

// JavaScript:
/*
// Selección por ID (elementos únicos)
const header = document.getElementById('mainHeader')
const btnGuardar = document.getElementById('btnGuardar')
const btnEliminar = document.getElementById('btnEliminar')

// Eventos en elementos únicos
btnGuardar.addEventListener('click', () => {
    console.log('Guardando datos...')
})

btnEliminar.addEventListener('click', () => {
    console.log('Eliminando...')
})

// Selección por CLASS (múltiples elementos)
const tarjetas = document.querySelectorAll('.card')

// Eventos en múltiples elementos
tarjetas.forEach((tarjeta, index) => {
    tarjeta.addEventListener('click', () => {
        console.log(`Click en tarjeta ${index + 1}`)
    })
})
*/


// ============================================
// RESUMEN FINAL
// ============================================

console.log('--- RESUMEN FINAL ---');
console.log(`
🎯 REGLAS DE ORO:

1. ✅ USA ID cuando:
   - El elemento es ÚNICO
   - Solo para JavaScript (sin estilos)
   - Necesitas máximo rendimiento

2. ✅ USA CLASS cuando:
   - El elemento se REPITE
   - Tiene estilos CSS
   - Necesitas seleccionar múltiples elementos

3. ✅ COMBINA AMBOS:
   <button id="btnToggle" class="btn btn-primary">
           └───ID para JS───┘  └───CLASS para CSS───┘

4. ⚠️ IMPORTANTE:
   - getElementById('nombre')     → Sin #
   - querySelector('#nombre')     → Con #
   - getElementsByClassName('nombre') → Sin .
   - querySelector('.nombre')     → Con .

5. 🚀 RENDIMIENTO:
   getElementById() > querySelector('#id') > querySelector('.clase')

6. 💡 BUENA PRÁCTICA:
   - ID: mainHeader, loginForm, btnSubmit
   - CLASS: card, btn, badge, container
`);

console.log('\n✅ Archivo de estudio creado correctamente');
console.log('📚 Consulta este archivo cuando necesites recordar ID vs CLASS');
