/* ============================================
   MÉTODO .CLOSEST()
   ============================================
   
   Archivo de estudio completo sobre el método
   .closest() en JavaScript: cómo funciona,
   cuándo usarlo, diferencias con otros métodos
   y casos de uso prácticos.
   
   📌 closest() = Busca ancestros en el DOM
============================================ */


// ============================================
// 1. ¿QUÉ ES .CLOSEST()?
// ============================================

console.log('--- ¿QUÉ ES .CLOSEST()? ---');
console.log(`
MÉTODO .closest():
- Busca el ancestro MÁS CERCANO que coincida con un selector
- Empieza desde el elemento actual
- Sube por el árbol DOM (padres, abuelos, bisabuelos, etc.)
- Retorna el PRIMER elemento que coincida
- Si no encuentra nada, retorna null

SINTAXIS:
elemento.closest('selector')

ANALOGÍA:
Es como buscar "¿quién es mi pariente más cercano que sea doctor?"
Empiezas contigo, luego padre, abuelo, bisabuelo... hasta encontrar uno.
`);

console.log('');


// ============================================
// 2. ESTRUCTURA DEL DOM (ÁRBOL)
// ============================================

console.log('--- ESTRUCTURA DEL DOM ---');
console.log(`
HTML EJEMPLO:

<div class="contenedor">              ← Bisabuelo (nivel 4)
    <ul class="lista">                ← Abuelo (nivel 3)
        <li class="item">             ← Padre (nivel 2)
            <span class="texto">      ← Elemento actual (nivel 1)
                Click aquí
            </span>
        </li>
    </ul>
</div>

ÁRBOL DOM:

            .contenedor
                 |
              .lista
                 |
               .item
                 |
              .texto  ← Empezamos aquí

.closest() SUBE ↑↑↑ por este árbol
`);

console.log('');


// ============================================
// 3. CÓMO FUNCIONA .CLOSEST()
// ============================================

console.log('--- CÓMO FUNCIONA ---');
console.log(`
PROCESO:

1. Verifica el ELEMENTO ACTUAL
   - ¿Coincide con el selector?
   - SÍ → Retorna el elemento actual
   - NO → Continúa al paso 2

2. Verifica el PADRE
   - ¿Coincide con el selector?
   - SÍ → Retorna el padre
   - NO → Continúa al paso 3

3. Verifica el ABUELO
   - ¿Coincide con el selector?
   - SÍ → Retorna el abuelo
   - NO → Continúa subiendo...

4. Sigue subiendo hasta:
   - Encontrar coincidencia → Retorna elemento
   - Llegar al <html> sin encontrar → Retorna null
`);

console.log('');


// ============================================
// 4. EJEMPLO BÁSICO
// ============================================

console.log('--- EJEMPLO BÁSICO ---');
console.log(`
HTML:
<div class="card">
    <div class="card-body">
        <button class="btn">Click</button>
    </div>
</div>

JAVASCRIPT:
const boton = document.querySelector('.btn')

boton.closest('.card')       // → <div class="card">
boton.closest('.card-body')  // → <div class="card-body">
boton.closest('.btn')        // → <button class="btn"> (él mismo)
boton.closest('.no-existe')  // → null
`);

console.log('');


// ============================================
// 5. CASO DE USO PRINCIPAL: EVENT DELEGATION
// ============================================

console.log('--- EVENT DELEGATION ---');
console.log(`
PROBLEMA:
Tienes elementos con hijos internos y necesitas saber
cuál fue el elemento PADRE clickeado.

HTML:
<ul id="menu">
    <li class="item">
        <img src="icono.png">     ← Puedes clickear aquí
        <span>Inicio</span>        ← O aquí
    </li>
    <li class="item">
        <img src="icono.png">     ← O aquí
        <span>Perfil</span>        ← O aquí
    </li>
</ul>

SIN .closest():
menu.addEventListener('click', (e) => {
    console.log(e.target)
    // Si clickeas <img>: e.target = <img>  ❌
    // Si clickeas <span>: e.target = <span>  ❌
    // ¡NO es el <li> que necesitas!
})

CON .closest():
menu.addEventListener('click', (e) => {
    const item = e.target.closest('.item')
    console.log(item)
    // Siempre retorna <li class="item">  ✅
    // No importa dónde clickees dentro del item
})
`);

console.log('');


// ============================================
// 6. EJEMPLO PRÁCTICO: TABS
// ============================================

console.log('--- EJEMPLO: TABS ---');
console.log(`
HTML:
<div id="tabs">
    <button class="tab" data-tab="1">
        <svg>...</svg>
        <span>Tab 1</span>
    </button>
    <button class="tab" data-tab="2">
        <svg>...</svg>
        <span>Tab 2</span>
    </button>
</div>

JAVASCRIPT:
const tabs = document.getElementById('tabs')

tabs.addEventListener('click', (e) => {
    // Buscar el tab clickeado (puede ser svg, span, o button)
    const selectedTab = e.target.closest('.tab')
    
    // Verificar que sí es un tab
    if (!selectedTab) return
    
    // Remover active de todos
    tabs.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active')
    })
    
    // Agregar active al clickeado
    selectedTab.classList.add('active')
    
    // Obtener el número de tab
    const tabNumber = selectedTab.dataset.tab
    console.log('Tab clickeado:', tabNumber)
})
`);

console.log('');


// ============================================
// 7. DIFERENCIAS CON OTROS MÉTODOS
// ============================================

console.log('--- DIFERENCIAS CON OTROS MÉTODOS ---');
console.log(`
┌─────────────────────┬──────────────────────────────────┐
│ MÉTODO              │ QUÉ HACE                         │
├─────────────────────┼──────────────────────────────────┤
│ .parentElement      │ Solo el PADRE directo (1 nivel)  │
│ .parentNode         │ Solo el PADRE directo (1 nivel)  │
│ .closest()          │ Busca HACIA ARRIBA hasta encontrar│
│ .querySelector()    │ Busca HACIA ABAJO (hijos)        │
│ .querySelectorAll() │ Busca HACIA ABAJO (todos hijos)  │
└─────────────────────┴──────────────────────────────────┘

EJEMPLO:

<div class="abuelo">
    <div class="padre">
        <div class="hijo">Click</div>
    </div>
</div>

const hijo = document.querySelector('.hijo')

hijo.parentElement           // → <div class="padre">
hijo.closest('.padre')       // → <div class="padre">
hijo.closest('.abuelo')      // → <div class="abuelo"> ✅
hijo.parentElement.parentElement  // → <div class="abuelo"> (más verboso)

VENTAJA DE .closest():
- Más flexible (busca cualquier ancestro)
- Más corto que .parentElement.parentElement...
- Puedes buscar por clase, ID, atributo, etc.
`);

console.log('');


// ============================================
// 8. .CLOSEST() VS .MATCHES()
// ============================================

console.log('--- .CLOSEST() VS .MATCHES() ---');
console.log(`
.matches():
- Verifica si el ELEMENTO ACTUAL coincide con el selector
- NO sube por el árbol DOM
- Retorna true/false

.closest():
- Busca el ANCESTRO MÁS CERCANO que coincida
- SÍ sube por el árbol DOM
- Retorna elemento o null

EJEMPLO:

<div class="card">
    <button class="btn">Click</button>
</div>

const boton = document.querySelector('.btn')

boton.matches('.btn')     // true (él mismo es .btn)
boton.matches('.card')    // false (él no es .card)

boton.closest('.btn')     // <button> (él mismo)
boton.closest('.card')    // <div class="card"> (su padre)
`);

console.log('');


// ============================================
// 9. VERIFICAR SI .CLOSEST() ENCONTRÓ ALGO
// ============================================

console.log('--- VERIFICAR RESULTADO ---');
console.log(`
.closest() RETORNA:
- Elemento encontrado → objeto HTML
- No encontró nada → null

SIEMPRE VERIFICA EL RESULTADO:

// ❌ MAL (puede dar error)
tabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab')
    tab.classList.add('active')  // Error si tab es null
})

// ✅ BIEN (verifica antes de usar)
tabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab')
    
    if (!tab) return  // Salir si no encontró
    
    tab.classList.add('active')  // Seguro usarlo
})

// ✅ BIEN (con operador &&)
tabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab')
    tab && tab.classList.add('active')
})

// ✅ BIEN (con optional chaining)
tabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab')
    tab?.classList.add('active')
})
`);

console.log('');


// ============================================
// 10. CASOS DE USO PRÁCTICOS
// ============================================

console.log('--- CASOS DE USO ---');
console.log(`
1. TABS / PESTAÑAS
   - Click en cualquier parte del tab
   - Obtener el tab padre completo

2. BOTONES DE ELIMINAR EN LISTAS
   - Click en icono de basura
   - Obtener el item de lista completo

3. CARDS / TARJETAS
   - Click en cualquier parte de la card
   - Obtener la card completa

4. MENÚS DESPLEGABLES
   - Click en cualquier elemento del menú
   - Obtener el menú padre

5. FORMULARIOS
   - Click en input
   - Obtener el form padre

6. MODALES
   - Click en cualquier parte
   - Verificar si es dentro o fuera del modal
`);

console.log('');


// ============================================
// 11. EJEMPLO: ELIMINAR ITEMS DE UNA LISTA
// ============================================

console.log('--- EJEMPLO: ELIMINAR ITEMS ---');
console.log(`
HTML:
<ul id="lista">
    <li class="item">
        <span>Item 1</span>
        <button class="btn-eliminar">
            <svg>...</svg>  ← Click aquí
        </button>
    </li>
    <li class="item">
        <span>Item 2</span>
        <button class="btn-eliminar">
            <svg>...</svg>
        </button>
    </li>
</ul>

JAVASCRIPT:
const lista = document.getElementById('lista')

lista.addEventListener('click', (e) => {
    // Verificar si clickearon botón de eliminar
    const btnEliminar = e.target.closest('.btn-eliminar')
    
    if (!btnEliminar) return  // No es botón de eliminar
    
    // Obtener el item completo (padre del botón)
    const item = btnEliminar.closest('.item')
    
    // Confirmar antes de eliminar
    if (confirm('¿Eliminar este item?')) {
        item.remove()  // Eliminar del DOM
    }
})
`);

console.log('');


// ============================================
// 12. EJEMPLO: ACCORDION / COLAPSABLES
// ============================================

console.log('--- EJEMPLO: ACCORDION ---');
console.log(`
HTML:
<div class="accordion">
    <div class="accordion-item">
        <div class="accordion-header">
            <h3>Título 1</h3>
            <button class="toggle">+</button>
        </div>
        <div class="accordion-content">Contenido 1</div>
    </div>
    <div class="accordion-item">
        <div class="accordion-header">
            <h3>Título 2</h3>
            <button class="toggle">+</button>
        </div>
        <div class="accordion-content">Contenido 2</div>
    </div>
</div>

JAVASCRIPT:
const accordion = document.querySelector('.accordion')

accordion.addEventListener('click', (e) => {
    // Buscar si clickearon en el header o sus hijos
    const header = e.target.closest('.accordion-header')
    
    if (!header) return  // Click fuera del header
    
    // Obtener el item completo
    const item = header.closest('.accordion-item')
    
    // Toggle clase active
    item.classList.toggle('active')
})
`);

console.log('');


// ============================================
// 13. EJEMPLO: CERRAR MODAL CLICKEANDO FUERA
// ============================================

console.log('--- EJEMPLO: CERRAR MODAL ---');
console.log(`
HTML:
<div class="modal-overlay">
    <div class="modal">
        <div class="modal-content">
            <h2>Título</h2>
            <p>Contenido del modal</p>
            <button class="btn-cerrar">Cerrar</button>
        </div>
    </div>
</div>

JAVASCRIPT:
const modalOverlay = document.querySelector('.modal-overlay')

modalOverlay.addEventListener('click', (e) => {
    // Verificar si el click fue DENTRO del contenido
    const dentroDelModal = e.target.closest('.modal-content')
    
    if (!dentroDelModal) {
        // Click FUERA del modal → Cerrar
        modalOverlay.classList.remove('active')
    }
    
    // Si clickeó dentro, no hace nada (modal sigue abierto)
})
`);

console.log('');


// ============================================
// 14. COMBINANDO .CLOSEST() CON DATASET
// ============================================

console.log('--- CON DATASET ---');
console.log(`
HTML:
<div id="galeria">
    <div class="foto" data-id="1" data-categoria="naturaleza">
        <img src="foto1.jpg">
        <button class="btn-like">❤️</button>
    </div>
    <div class="foto" data-id="2" data-categoria="ciudad">
        <img src="foto2.jpg">
        <button class="btn-like">❤️</button>
    </div>
</div>

JAVASCRIPT:
const galeria = document.getElementById('galeria')

galeria.addEventListener('click', (e) => {
    const btnLike = e.target.closest('.btn-like')
    
    if (!btnLike) return
    
    // Obtener la foto completa
    const foto = btnLike.closest('.foto')
    
    // Obtener datos del dataset
    const fotoId = foto.dataset.id
    const categoria = foto.dataset.categoria
    
    console.log(\`Like en foto \${fotoId} de categoría \${categoria}\`)
    
    // Enviar a servidor, etc.
    enviarLike(fotoId, categoria)
})
`);

console.log('');


// ============================================
// 15. BUENAS PRÁCTICAS
// ============================================

console.log('--- BUENAS PRÁCTICAS ---');
console.log(`
✅ BUENAS PRÁCTICAS:

1. SIEMPRE VERIFICAR SI ES NULL
   const elemento = e.target.closest('.selector')
   if (!elemento) return

2. USAR EN EVENT DELEGATION
   - Un listener en el padre
   - .closest() para identificar elemento clickeado

3. COMBINAR CON DATASET
   - Guardar IDs en data-attributes
   - Obtener con .dataset después de .closest()

4. NOMBRES DE CLASE DESCRIPTIVOS
   - .tab mejor que .t
   - .btn-eliminar mejor que .del

5. RETORNO ANTICIPADO
   if (!elemento) return
   // Código solo si elemento existe

⚠️ EVITAR:

❌ No verificar null
   e.target.closest('.tab').classList.add('active')
   // Error si .closest() retorna null

❌ Buscar elementos que no existen
   e.target.closest('.clase-inexistente')
   // Siempre retorna null

❌ Usar cuando solo necesitas el padre directo
   e.target.closest('parent')
   // Mejor: e.target.parentElement
`);

console.log('');


// ============================================
// 16. COMPATIBILIDAD Y POLYFILL
// ============================================

console.log('--- COMPATIBILIDAD ---');
console.log(`
SOPORTE:
✅ Chrome 41+
✅ Firefox 35+
✅ Safari 9+
✅ Edge 15+
❌ IE 11 (necesita polyfill)

POLYFILL PARA IE:
if (!Element.prototype.closest) {
    Element.prototype.closest = function(selector) {
        let element = this
        while (element && element.nodeType === 1) {
            if (element.matches(selector)) {
                return element
            }
            element = element.parentElement
        }
        return null
    }
}
`);

console.log('');


// ============================================
// RESUMEN FINAL
// ============================================

console.log('--- RESUMEN FINAL ---');
console.log(`
🎯 MÉTODO .CLOSEST():

1. DEFINICIÓN:
   - Busca ancestro más cercano que coincida con selector
   - Empieza en elemento actual
   - Sube por árbol DOM hasta encontrar o llegar a <html>

2. SINTAXIS:
   elemento.closest('selector')

3. RETORNA:
   - Elemento encontrado → objeto HTMLElement
   - No encontró nada → null

4. CUÁNDO USAR:
   - Event Delegation (clicks en elementos con hijos)
   - Obtener contenedor padre de elemento clickeado
   - Navegar hacia arriba en el DOM

5. DIFERENCIA CON .parentElement:
   - .parentElement: solo 1 nivel arriba
   - .closest(): busca hasta encontrar (múltiples niveles)

6. VERIFICAR SIEMPRE:
   const elemento = e.target.closest('.selector')
   if (!elemento) return  // ← IMPORTANTE

7. CASOS DE USO:
   ✅ Tabs / Pestañas
   ✅ Listas con botones de eliminar
   ✅ Cards clickeables
   ✅ Modales (detectar click fuera)
   ✅ Menús desplegables
   ✅ Accordion / Colapsables

📊 COMPARACIÓN:

┌──────────────────┬─────────────┬──────────────┐
│ MÉTODO           │ DIRECCIÓN   │ RETORNA      │
├──────────────────┼─────────────┼──────────────┤
│ .parentElement   │ ↑ (1 nivel) │ Padre        │
│ .closest()       │ ↑ (múltiple)│ Ancestro     │
│ .querySelector() │ ↓ (hijos)   │ Primer hijo  │
│ .matches()       │ - (actual)  │ true/false   │
└──────────────────┴─────────────┴──────────────┘

⚠️ RECUERDA:
   - .closest() INCLUYE el elemento actual
   - Siempre verifica si retorna null
   - Perfecto para Event Delegation
   - Combina bien con dataset
`);

console.log('\n✅ Archivo de estudio creado correctamente');
console.log('📚 Consulta este archivo para dominar .closest() en JavaScript');
