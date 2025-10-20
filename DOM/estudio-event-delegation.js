/* ============================================
   EVENT DELEGATION (Delegación de Eventos)
   ============================================
   
   Archivo de estudio para entender:
   - Event Delegation (delegación de eventos)
   - Event Bubbling (propagación de eventos)
   - Por qué es mejor que múltiples listeners
   - Cómo y cuándo usarlo
============================================ */


// ============================================
// 1. EL PROBLEMA: Múltiples Event Listeners
// ============================================

console.log('--- PROBLEMA: Múltiples Listeners ---');
console.log(`
❌ FORMA INEFICIENTE:

HTML:
<div class="contenedor">
    <div class="caja">Caja 1</div>
    <div class="caja">Caja 2</div>
    <div class="caja">Caja 3</div>
    <div class="caja">Caja 4</div>
    <div class="caja">Caja 5</div>
    <div class="caja">Caja 6</div>
</div>

JavaScript:
const cajas = document.querySelectorAll('.caja')
cajas.forEach((caja) => {
    caja.addEventListener('click', (e) => {
        console.log(e.target.innerText)
    })
})

PROBLEMAS:
1. ❌ 6 event listeners (uno por cada caja)
2. ❌ Consume más memoria
3. ❌ Si agregas cajas dinámicamente, NO funcionarán
4. ❌ Difícil de mantener con muchos elementos
`);

console.log('');


// ============================================
// 2. LA SOLUCIÓN: Event Delegation
// ============================================

console.log('--- SOLUCIÓN: Event Delegation ---');
console.log(`
✅ FORMA EFICIENTE:

JavaScript:
const contenedor = document.querySelector('.contenedor')

contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('caja')) {
        console.log(e.target.innerText)
    }
})

VENTAJAS:
1. ✅ Solo 1 event listener (en el contenedor padre)
2. ✅ Menos memoria y mejor rendimiento
3. ✅ Funciona con elementos agregados dinámicamente
4. ✅ Más fácil de mantener
`);

console.log('');


// ============================================
// 3. EVENT BUBBLING (Propagación de Eventos)
// ============================================

console.log('--- EVENT BUBBLING (Burbujeo de Eventos) ---');
console.log(`
¿QUÉ ES EVENT BUBBLING?

Cuando haces click en un elemento, el evento "burbujea" (sube)
desde el elemento clickeado hasta sus ancestros.

HTML:
<div class="abuelo">
    <div class="padre">
        <div class="hijo">Click aquí</div>
    </div>
</div>

FLUJO DEL EVENTO (de abajo hacia arriba):
1. Click en .hijo   ← Evento se dispara aquí
2. Sube a .padre    ← El evento "burbujea" aquí
3. Sube a .abuelo   ← Y continúa hasta arriba
4. Sube a <body>
5. Sube a <html>
6. Sube a document

Este comportamiento se llama EVENT BUBBLING (burbujeo).
`);

console.log('');


// ============================================
// 4. EJEMPLO VISUAL DE BUBBLING
// ============================================

console.log('--- EJEMPLO VISUAL DE BUBBLING ---');

// Simulación de estructura HTML
/*
<div class="abuelo">
    <div class="padre">
        <div class="hijo">Click aquí</div>
    </div>
</div>
*/

// Si agregáramos listeners a cada nivel:
/*
const abuelo = document.querySelector('.abuelo')
const padre = document.querySelector('.padre')
const hijo = document.querySelector('.hijo')

hijo.addEventListener('click', () => {
    console.log('1. Click en HIJO')
})

padre.addEventListener('click', () => {
    console.log('2. Click en PADRE (por bubbling)')
})

abuelo.addEventListener('click', () => {
    console.log('3. Click en ABUELO (por bubbling)')
})

// Al hacer click en .hijo, verías:
// 1. Click en HIJO
// 2. Click en PADRE (por bubbling)
// 3. Click en ABUELO (por bubbling)
*/

console.log(`
VISUALIZACIÓN DEL BUBBLING:

Click aquí ↓
┌─────────────────────────────────┐
│ .abuelo                    ↑ 3  │
│  ┌───────────────────────┐ ↑    │
│  │ .padre           ↑ 2  │ ↑    │
│  │  ┌─────────────┐ ↑    │ ↑    │
│  │  │ .hijo  ← 1  │ ↑    │ ↑    │
│  │  │   Click     │ ↑    │ ↑    │
│  │  └─────────────┘ ↑    │ ↑    │
│  │                  ↑    │ ↑    │
│  └──────────────────↑────┘ ↑    │
│                     ↑      ↑    │
└─────────────────────↑──────↑────┘
                      ↑      ↑
              El evento "burbujea" hacia arriba
`);

console.log('');


// ============================================
// 5. EVENT DELEGATION: Aprovechando el Bubbling
// ============================================

console.log('--- EVENT DELEGATION: Cómo Funciona ---');
console.log(`
Event Delegation aprovecha el BUBBLING:

1. Agregas un listener al PADRE (contenedor)
2. Los clicks en los HIJOS "burbujean" hasta el padre
3. El padre captura el evento y verifica el target
4. Si el target es el elemento que te interesa, ejecutas la lógica

ESTRUCTURA:
┌─────────────────────────────────────┐
│ .contenedor ← Listener AQUÍ (1)    │
│  ├─ .caja 1 ↑                       │
│  ├─ .caja 2 ↑ Bubbling              │
│  ├─ .caja 3 ↑                       │
│  └─ .caja 4 ↑                       │
└─────────────────────────────────────┘

Código:
contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('caja')) {
        // Haz algo con la caja clickeada
    }
})
`);

console.log('');


// ============================================
// 6. EJEMPLO PRÁCTICO COMPLETO
// ============================================

console.log('--- EJEMPLO PRÁCTICO ---');

// HTML simulado:
/*
<div class="contenedor-principal">
    <div class="contenedor" id="contenedor1">
        <div class="caja">Caja 1</div>
        <div class="caja">Caja 2</div>
        <div class="caja">Caja 3</div>
    </div>
    <div class="contenedor" id="contenedor2">
        <div class="caja">Caja 4</div>
        <div class="caja">Caja 5</div>
        <div class="caja">Caja 6</div>
    </div>
</div>
*/

// ❌ FORMA INEFICIENTE (6 listeners):
console.log('FORMA INEFICIENTE:');
const cajasIneficiente = document.querySelectorAll('.caja')
console.log(`Elementos seleccionados: ${cajasIneficiente.length}`)

cajasIneficiente.forEach((caja, index) => {
    caja.addEventListener('click', (e) => {
        console.log(`Click en: ${e.target.innerText}`)
    })
    console.log(`Listener ${index + 1} agregado`)
})
console.log('Total: 6 event listeners agregados\n')


// ✅ FORMA EFICIENTE (1 listener con Event Delegation):
console.log('FORMA EFICIENTE (Event Delegation):');
const contenedorPrincipal = document.querySelector('.contenedor-principal')

contenedorPrincipal.addEventListener('click', (e) => {
    // Verifica si el click fue en una caja
    if (e.target.classList.contains('caja')) {
        console.log(`Click en: ${e.target.innerText}`)

        // Puedes agregar lógica adicional:
        e.target.classList.toggle('activa')
    }
})
console.log('Total: 1 event listener agregado (en el contenedor padre)')

console.log('');


// ============================================
// 7. MÉTODOS PARA VERIFICAR EL TARGET
// ============================================

console.log('--- MÉTODOS PARA VERIFICAR EL TARGET ---');
console.log(`
Hay varias formas de verificar si el elemento clickeado
es el que te interesa:

1. classList.contains()
   contenedor.addEventListener('click', (e) => {
       if (e.target.classList.contains('caja')) {
           console.log('Es una caja')
       }
   })

2. matches() (más flexible, acepta selectores CSS)
   contenedor.addEventListener('click', (e) => {
       if (e.target.matches('.caja')) {
           console.log('Es una caja')
       }
   })

3. closest() (útil con elementos anidados)
   contenedor.addEventListener('click', (e) => {
       const caja = e.target.closest('.caja')
       if (caja) {
           console.log('Click en o dentro de una caja')
       }
   })

4. Combinaciones (más específico)
   contenedor.addEventListener('click', (e) => {
       if (e.target.matches('#contenedor1 .caja')) {
           console.log('Caja del contenedor 1')
       }
   })
`);

console.log('');


// ============================================
// 8. VENTAJA: Elementos Dinámicos
// ============================================

console.log('--- VENTAJA: Elementos Dinámicos ---');
console.log(`
Con Event Delegation, los elementos agregados DESPUÉS
también funcionarán automáticamente:

const contenedor = document.querySelector('.contenedor')

// Event delegation (antes de agregar elementos)
contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('caja')) {
        console.log(e.target.innerText)
    }
})

// Agregar nueva caja dinámicamente
const agregarCaja = () => {
    const nuevaCaja = document.createElement('div')
    nuevaCaja.className = 'caja'
    nuevaCaja.innerText = 'Nueva Caja'
    contenedor.appendChild(nuevaCaja)
}

agregarCaja()  // ✅ La nueva caja TAMBIÉN responderá al click

RAZÓN: El listener está en el PADRE, no en los hijos.
       Los nuevos hijos también "burbujean" hasta el padre.
`);

console.log('');


// ============================================
// 9. COMPARACIÓN LADO A LADO
// ============================================

console.log('--- COMPARACIÓN LADO A LADO ---');
console.log(`
┌──────────────────────┬──────────────────────────────────┐
│ MÚLTIPLES LISTENERS  │ EVENT DELEGATION                 │
├──────────────────────┼──────────────────────────────────┤
│ 6 listeners          │ 1 listener                       │
│ (uno por elemento)   │ (en el padre)                    │
├──────────────────────┼──────────────────────────────────┤
│ Más memoria          │ Menos memoria                    │
├──────────────────────┼──────────────────────────────────┤
│ Elementos dinámicos  │ Elementos dinámicos              │
│ NO funcionan         │ SÍ funcionan                     │
├──────────────────────┼──────────────────────────────────┤
│ forEach con          │ Un solo addEventListener         │
│ addEventListener     │ en el padre                      │
├──────────────────────┼──────────────────────────────────┤
│ Difícil de mantener  │ Fácil de mantener                │
│ con muchos elementos │                                  │
└──────────────────────┴──────────────────────────────────┘

CÓDIGO COMPARADO:

❌ Múltiples Listeners:
const cajas = document.querySelectorAll('.caja')
cajas.forEach((caja) => {
    caja.addEventListener('click', (e) => {
        console.log(e.target.innerText)
    })
})

✅ Event Delegation:
const contenedor = document.querySelector('.contenedor')
contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('caja')) {
        console.log(e.target.innerText)
    }
})
`);

console.log('');


// ============================================
// 10. CUÁNDO USAR EVENT DELEGATION
// ============================================

console.log('--- CUÁNDO USAR EVENT DELEGATION ---');
console.log(`
✅ USA EVENT DELEGATION cuando:

1. Tienes MÚLTIPLES elementos similares
   Ejemplo: Lista de tarjetas, botones, items

2. Agregas/eliminas elementos DINÁMICAMENTE
   Ejemplo: Todo list, carritos de compra

3. Tienes MUCHOS elementos (10+)
   Ejemplo: Tabla con 100 filas

4. Quieres MEJOR RENDIMIENTO
   Menos listeners = menos memoria

5. Los elementos están AGRUPADOS en un contenedor
   Ejemplo: <ul> con múltiples <li>

⚠️ NO uses Event Delegation cuando:

1. Es un ÚNICO elemento
   Ejemplo: Un solo botón de submit
   → Agrega el listener directamente

2. Cada elemento necesita LÓGICA MUY DIFERENTE
   → Listeners individuales pueden ser más claros

3. El elemento está en la RAÍZ del documento
   → No hay contenedor padre lógico
`);

console.log('');


// ============================================
// 11. EJEMPLO AVANZADO: Múltiples Tipos de Elementos
// ============================================

console.log('--- EJEMPLO AVANZADO ---');
console.log(`
Puedes manejar DIFERENTES tipos de elementos con un solo listener:

const contenedor = document.querySelector('.contenedor')

contenedor.addEventListener('click', (e) => {
    // Clicks en cajas
    if (e.target.classList.contains('caja')) {
        console.log('Click en caja:', e.target.innerText)
        e.target.classList.toggle('activa')
    }
    
    // Clicks en botones
    if (e.target.classList.contains('btn-eliminar')) {
        console.log('Eliminando:', e.target.parentElement.innerText)
        e.target.parentElement.remove()
    }
    
    // Clicks en enlaces
    if (e.target.matches('a.link')) {
        e.preventDefault()
        console.log('Navegando a:', e.target.href)
    }
})

Un solo listener maneja 3 tipos de elementos diferentes! ✅
`);

console.log('');


// ============================================
// 12. EVENT.TARGET vs EVENT.CURRENTTARGET
// ============================================

console.log('--- EVENT.TARGET vs EVENT.CURRENTTARGET ---');
console.log(`
Es importante entender la diferencia:

e.target:
  - El elemento donde OCURRIÓ el click (el hijo clickeado)
  - Puede ser cualquier elemento dentro del contenedor

e.currentTarget:
  - El elemento que TIENE el listener (el padre/contenedor)
  - Siempre es el mismo (el contenedor)

EJEMPLO:

HTML:
<div class="contenedor" id="contenedor">
    <div class="caja">
        <span>Texto dentro</span>
    </div>
</div>

JavaScript:
const contenedor = document.getElementById('contenedor')

contenedor.addEventListener('click', (e) => {
    console.log('target:', e.target)           // <span> o <div class="caja">
    console.log('currentTarget:', e.currentTarget) // <div class="contenedor">
})

Si haces click en <span>:
  - target: <span>Texto dentro</span>
  - currentTarget: <div class="contenedor">

Si haces click en <div class="caja">:
  - target: <div class="caja">
  - currentTarget: <div class="contenedor">

SOLUCIÓN con closest():
contenedor.addEventListener('click', (e) => {
    const caja = e.target.closest('.caja')
    if (caja) {
        console.log('Click en caja:', caja)
    }
})
`);

console.log('');


// ============================================
// 13. PREVENIR BUBBLING: stopPropagation()
// ============================================

console.log('--- PREVENIR BUBBLING ---');
console.log(`
A veces NO quieres que el evento burbujee hacia arriba.
Usa e.stopPropagation():

const caja = document.querySelector('.caja')
const contenedor = document.querySelector('.contenedor')

caja.addEventListener('click', (e) => {
    console.log('Click en caja')
    e.stopPropagation()  // ⛔ Detiene el bubbling aquí
})

contenedor.addEventListener('click', () => {
    console.log('Click en contenedor')  // ← NO se ejecuta
})

Al hacer click en .caja:
  - Solo verás: "Click en caja"
  - NO verás: "Click en contenedor" (bubbling detenido)

⚠️ CUIDADO: stopPropagation() puede romper Event Delegation
`);

console.log('');


// ============================================
// 14. EJEMPLO COMPLETO FUNCIONAL
// ============================================

console.log('--- EJEMPLO COMPLETO ---');
console.log(`
Ejemplo completo con Event Delegation:

HTML:
<div class="contenedor-principal">
    <button id="btnAgregar">Agregar Caja</button>
    <div class="contenedor" id="contenedor1">
        <div class="caja">Caja 1</div>
        <div class="caja">Caja 2</div>
        <div class="caja">Caja 3</div>
    </div>
</div>

JavaScript:
`);

// Código funcional:
const contenedor = document.getElementById('contenedor1')
const btnAgregar = document.getElementById('btnAgregar')
let contador = 4

// Event Delegation en el contenedor
contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('caja')) {
        console.log('Click en:', e.target.innerText)
        e.target.classList.toggle('activa')
    }
})

// Agregar cajas dinámicamente
if (btnAgregar) {
    btnAgregar.addEventListener('click', () => {
        const nuevaCaja = document.createElement('div')
        nuevaCaja.className = 'caja'
        nuevaCaja.innerText = `Caja ${contador}`
        contenedor.appendChild(nuevaCaja)
        console.log(`✅ Caja ${contador} agregada (funcionará automáticamente)`)
        contador++
    })
}

console.log('');


// ============================================
// RESUMEN FINAL
// ============================================

console.log('--- RESUMEN FINAL ---');
console.log(`
🎯 EVENT DELEGATION (Delegación de Eventos):

1. QUÉ ES:
   Agregar un event listener al PADRE en vez de a cada HIJO

2. CÓMO FUNCIONA:
   Aprovecha el EVENT BUBBLING (los eventos suben desde el hijo al padre)

3. VENTAJAS:
   ✅ Solo 1 listener (menos memoria)
   ✅ Mejor rendimiento
   ✅ Funciona con elementos dinámicos
   ✅ Más fácil de mantener

4. CÓDIGO BÁSICO:
   const contenedor = document.querySelector('.contenedor')
   
   contenedor.addEventListener('click', (e) => {
       if (e.target.classList.contains('caja')) {
           console.log(e.target.innerText)
       }
   })

5. EVENT BUBBLING:
   Los eventos "burbujean" desde el elemento clickeado
   hacia sus ancestros (hijo → padre → abuelo → document)

6. MÉTODOS DE VERIFICACIÓN:
   - e.target.classList.contains('clase')
   - e.target.matches('.selector')
   - e.target.closest('.elemento')

7. CUÁNDO USAR:
   ✅ Múltiples elementos similares
   ✅ Elementos dinámicos
   ✅ Mejor rendimiento necesario

8. DIFERENCIA CLAVE:
   - e.target: Elemento clickeado (hijo)
   - e.currentTarget: Elemento con listener (padre)

9. PREVENIR BUBBLING:
   e.stopPropagation() (usar con cuidado)

10. MEJOR PRÁCTICA:
    Event Delegation es la forma PROFESIONAL de manejar
    eventos en múltiples elementos.
`);

console.log('\n✅ Archivo de estudio creado correctamente');
console.log('📚 Consulta este archivo para entender Event Delegation y Bubbling');
