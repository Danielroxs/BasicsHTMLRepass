// ============================================
// Z-INDEX Y POSICIONAMIENTO - GUÍA COMPLETA
// ============================================

/*
┌─────────────────────────────────────────────────────────────┐
│  ¿QUÉ ES Z-INDEX?                                           │
└─────────────────────────────────────────────────────────────┘

Z-INDEX controla el orden de apilamiento (profundidad) de elementos.

PIENSA EN HOJAS DE PAPEL:
- z-index: 1  →  Hoja en el fondo
- z-index: 2  →  Hoja encima
- z-index: 3  →  Hoja más arriba

REGLA DE ORO:
⚠️ z-index SOLO funciona con position: relative, absolute, fixed, o sticky
❌ NO funciona con position: static (valor por defecto)
*/

// ============================================
// 1. VALORES DE POSITION
// ============================================

/*
┌──────────────────────────────────────────────────────────────┐
│  TIPO          │  COMPORTAMIENTO                             │
├──────────────────────────────────────────────────────────────┤
│  static        │  Por defecto, NO permite z-index           │
│  relative      │  En su lugar normal, permite z-index       │
│  absolute      │  Sale del flujo, posicionado respecto padre│
│  fixed         │  Posicionado respecto a la ventana         │
│  sticky        │  Mezcla relative + fixed                   │
└──────────────────────────────────────────────────────────────┘
*/

// ============================================
// 2. POSITION: STATIC (Por defecto)
// ============================================

/*
CARACTERÍSTICAS:
- Valor por defecto de todos los elementos
- NO permite usar z-index
- Elemento en flujo normal del documento
*/

const ejemplo_static = `
<div class="caja1">Caja 1</div>
<div class="caja2">Caja 2</div>

<style>
.caja1 {
    /* position: static (por defecto) */
    z-index: 999;  /* ❌ IGNORADO - no hace nada */
}

.caja2 {
    /* position: static (por defecto) */
    z-index: 1;    /* ❌ IGNORADO */
}
</style>

RESULTADO: Orden normal HTML (caja2 debajo de caja1)
`;

// ============================================
// 3. POSITION: RELATIVE
// ============================================

/*
CARACTERÍSTICAS:
✅ Elemento permanece en su posición normal
✅ Ocupa espacio en el documento
✅ Permite usar z-index
✅ Puede moverse con top, left, right, bottom
✅ Sirve de referencia para hijos con position: absolute
*/

const ejemplo_relative = `
<div class="caja1">Caja 1</div>
<div class="caja2">Caja 2</div>

<style>
.caja1 {
    position: relative;  /* ✅ Activa z-index */
    z-index: 2;         /* ✅ Funciona - estará encima */
    background: red;
}

.caja2 {
    position: relative;
    z-index: 1;
    background: blue;
    top: -20px;  /* Se mueve 20px arriba (opcional) */
}
</style>

RESULTADO: caja1 está ENCIMA de caja2
`;

// ============================================
// 4. POSITION: ABSOLUTE
// ============================================

/*
CARACTERÍSTICAS:
⚠️ Sale del flujo del documento (otros elementos no lo ven)
✅ Se posiciona respecto al padre con position: relative/absolute/fixed
✅ NO ocupa espacio (otros elementos lo ignoran)
✅ Permite usar z-index
✅ Requiere top, left, right, bottom para posicionarse
*/

const ejemplo_absolute = `
<div class="contenedor">
    <div class="capa-fondo"></div>
    <div class="contenido">Texto visible</div>
</div>

<style>
.contenedor {
    position: relative;  /* ✅ Padre - referencia para hijos absolute */
    width: 500px;
    height: 300px;
}

.capa-fondo {
    position: absolute;  /* Se posiciona respecto a .contenedor */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.contenido {
    position: relative;  /* Permite z-index */
    z-index: 2;         /* Encima de .capa-fondo */
}
</style>

RESULTADO: .contenido visible encima de .capa-fondo
`;

// ============================================
// 5. CASO PRÁCTICO: HERO CON OVERLAY
// ============================================

/*
PROBLEMA:
Quieres una imagen de fondo con una capa oscura encima,
pero el texto debe estar visible por encima de la capa.

ESTRUCTURA:
- Fondo (background-image)
- Capa oscura (::after)
- Contenido/texto (.contenido)
*/

const ejemplo_hero = `
<div class="hero">
    <div class="contenido">
        <h1>Título visible</h1>
        <p>Texto visible</p>
    </div>
</div>

<style>
.hero {
    background-image: url('fondo.jpg');
    background-size: cover;
    position: relative;  /* ✅ Padre para ::after */
    height: 500px;
}

/* Capa oscura que cubre todo */
.hero::after {
    content: '';
    position: absolute;  /* Se posiciona respecto a .hero */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);  /* Negro semi-transparente */
    z-index: 1;  /* Capa intermedia */
}

/* Contenido visible */
.hero .contenido {
    position: relative;  /* ✅ Activa z-index */
    z-index: 2;         /* ✅ Encima del ::after */
}
</style>

ORDEN DE APILAMIENTO (de abajo hacia arriba):
1. background-image (fondo)
2. ::after (z-index: 1) - capa oscura
3. .contenido (z-index: 2) - texto visible ✅
`;

// ============================================
// 6. ¿POR QUÉ RELATIVE EN CONTENIDO?
// ============================================

/*
PREGUNTA COMÚN:
"¿Por qué .contenido necesita position: relative?"

RESPUESTA:
Para que z-index funcione. Sin position, z-index es ignorado.

❌ OPCIÓN 1: Sin position (NO funciona)
*/
const no_funciona = `
.contenido {
    /* position: static (por defecto) */
    z-index: 2;  /* ❌ IGNORADO - el contenido queda DEBAJO */
}

RESULTADO: ::after tapa el contenido
`;

/*
✅ OPCIÓN 2: Con position: relative (FUNCIONA)
*/
const funciona = `
.contenido {
    position: relative;  /* ✅ "Despega" el elemento */
    z-index: 2;         /* ✅ Funciona - contenido visible */
}

RESULTADO: Contenido encima de ::after ✅
`;

/*
⚠️ OPCIÓN 3: Con position: absolute (funciona pero NO ideal)
*/
const absolute_contenido = `
.contenido {
    position: absolute;  /* Sale del flujo */
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

PROBLEMA: Sale del flujo, necesitas posicionarlo manualmente
USO: Cuando quieres centrar o posicionar específicamente
`;

// ============================================
// 7. TABLA DE DECISIÓN
// ============================================

/*
┌──────────────────────────────────────────────────────────────────┐
│  NECESITAS                               │  USA                  │
├──────────────────────────────────────────────────────────────────┤
│  Mantener posición normal + z-index      │  position: relative   │
│  Cubrir todo el padre                    │  position: absolute   │
│  Elemento fijo en pantalla               │  position: fixed      │
│  Header que se pega al hacer scroll      │  position: sticky     │
│  Sin z-index, posición normal            │  position: static     │
└──────────────────────────────────────────────────────────────────┘
*/

// ============================================
// 8. CONTEXTO DE APILAMIENTO
// ============================================

/*
IMPORTANTE: z-index solo compite dentro del mismo "contexto"

CONTEXTO = Elemento con position que crea su propio "nivel"
*/

const contexto_ejemplo = `
<div class="padre1">
    <div class="hijo1">z-index: 9999</div>
</div>
<div class="padre2">
    <div class="hijo2">z-index: 1</div>
</div>

<style>
.padre1 {
    position: relative;
    z-index: 1;  /* Contexto 1 */
}

.hijo1 {
    position: relative;
    z-index: 9999;  /* Solo compite dentro de padre1 */
}

.padre2 {
    position: relative;
    z-index: 2;  /* Contexto 2 - ENCIMA de padre1 */
}

.hijo2 {
    position: relative;
    z-index: 1;
}
</style>

RESULTADO:
hijo2 (z-index: 1) está ENCIMA de hijo1 (z-index: 9999)
Porque padre2 (z-index: 2) está encima de padre1 (z-index: 1)

REGLA: El z-index del PADRE gana sobre el z-index de los HIJOS
`;

// ============================================
// 9. VALORES COMUNES DE Z-INDEX
// ============================================

/*
CONVENCIÓN (no es obligatorio, pero es común):

z-index: -1     →  Elementos debajo del contenido normal
z-index: 0      →  Nivel base
z-index: 1-10   →  Capas de contenido
z-index: 100    →  Modales, overlays
z-index: 1000   →  Tooltips
z-index: 9999   →  Elementos siempre encima (notificaciones)

⚠️ EVITA números muy altos sin razón (9999999)
*/

const valores_comunes = `
/* Overlay detrás del contenido */
.background-overlay {
    z-index: -1;
}

/* Capa de contenido */
.contenido {
    z-index: 1;
}

/* Capa oscura encima de contenido */
.overlay {
    z-index: 2;
}

/* Modal */
.modal {
    z-index: 100;
}

/* Tooltip */
.tooltip {
    z-index: 1000;
}

/* Notificación siempre visible */
.notification {
    z-index: 9999;
}
`;

// ============================================
// 10. ERRORES COMUNES
// ============================================

/*
❌ ERROR 1: Usar z-index sin position
*/
const error1 = `
.elemento {
    z-index: 999;  /* ❌ NO funciona - falta position */
}

✅ CORRECTO:
.elemento {
    position: relative;
    z-index: 999;
}
`;

/*
❌ ERROR 2: Olvidar el contexto de apilamiento
*/
const error2 = `
.padre {
    position: relative;
    z-index: 1;
}

.hijo {
    position: absolute;
    z-index: 9999;  /* ❌ Limitado por z-index del padre */
}

/* Si otro .padre2 tiene z-index: 2, su hijo ganará */
`;

/*
❌ ERROR 3: Usar absolute cuando necesitas relative
*/
const error3 = `
.contenido {
    position: absolute;  /* ⚠️ Sale del flujo */
    z-index: 2;
}

/* Problema: Necesitas posicionar manualmente con top/left */

✅ MEJOR:
.contenido {
    position: relative;  /* Mantiene su lugar */
    z-index: 2;
}
`;

// ============================================
// 11. ANALOGÍA SIMPLE (NO TÉCNICO)
// ============================================

/*
┌─────────────────────────────────────────────────────────────┐
│  IMAGINA HOJAS DE PAPEL EN UN ESCRITORIO                   │
└─────────────────────────────────────────────────────────────┘

POSITION: STATIC (por defecto)
→ Hojas pegadas al escritorio
→ No puedes reordenarlas
→ z-index NO funciona

POSITION: RELATIVE
→ "Despegar" la hoja del escritorio
→ Sigue en su lugar, pero ahora puedes reordenarla
→ z-index funciona ✅

POSITION: ABSOLUTE
→ Levantar la hoja completamente
→ Ya no ocupa su lugar original
→ Puedes ponerla donde quieras (top, left)
→ z-index funciona ✅

Z-INDEX
→ El número de orden de las hojas
→ z-index: 1 (abajo)
→ z-index: 2 (encima)
→ z-index: 3 (más arriba)
*/

// ============================================
// 12. EJERCICIOS PRÁCTICOS
// ============================================

/*
EJERCICIO 1: Modal con overlay
Crea un modal que aparece encima de todo
*/
const ejercicio1 = `
<div class="overlay"></div>
<div class="modal">
    <h2>Modal</h2>
    <button>Cerrar</button>
</div>

<style>
.overlay {
    position: fixed;  /* Cubre toda la pantalla */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 100;  /* Encima del contenido */
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    z-index: 101;  /* Encima del overlay */
}
</style>
`;

/*
EJERCICIO 2: Header fijo con contenido debajo
*/
const ejercicio2 = `
<header class="header-fixed">Logo | Menú</header>
<main class="contenido">Contenido de la página</main>

<style>
.header-fixed {
    position: fixed;  /* Fijo en la parte superior */
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 10;  /* Encima del contenido */
}

.contenido {
    margin-top: 60px;  /* Espacio para el header */
    /* position: static - no necesita z-index */
}
</style>
`;

/*
EJERCICIO 3: Tarjeta con imagen de fondo y overlay
*/
const ejercicio3 = `
<div class="tarjeta">
    <div class="info">
        <h3>Título</h3>
        <p>Descripción</p>
    </div>
</div>

<style>
.tarjeta {
    background-image: url('imagen.jpg');
    background-size: cover;
    position: relative;  /* Padre */
    height: 300px;
}

.tarjeta::after {
    content: '';
    position: absolute;
    inset: 0;  /* = top:0; left:0; right:0; bottom:0; */
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
}

.info {
    position: relative;
    z-index: 2;  /* Encima del overlay */
    color: white;
}
</style>
`;

// ============================================
// 13. CHEAT SHEET
// ============================================

/*
📋 GUÍA RÁPIDA:

PARA QUE Z-INDEX FUNCIONE:
├─ Necesitas position: relative, absolute, fixed, o sticky
└─ NO funciona con position: static (default)

CUÁNDO USAR CADA POSITION:

position: relative
├─ Mantiene su lugar en el documento
├─ Permite z-index
└─ Usa cuando: Solo necesitas z-index sin mover el elemento

position: absolute
├─ Sale del flujo del documento
├─ Posicionado respecto al padre con position
└─ Usa cuando: Overlays, capas que cubren todo, tooltips

position: fixed
├─ Posicionado respecto a la ventana
└─ Usa cuando: Headers fijos, botones flotantes, modales

VALORES Z-INDEX COMUNES:
-1    → Debajo del contenido
0-10  → Contenido normal
100   → Modales
1000  → Tooltips
9999  → Notificaciones

REGLA DE ORO:
El padre con mayor z-index gana sobre todos sus hijos
*/

// ============================================
// 14. RESUMEN FINAL
// ============================================

/*
✅ PUNTOS CLAVE:

1. z-index SOLO funciona con position (no static)

2. position: relative
   - Mantiene su posición
   - Activa z-index
   - Ocupa espacio

3. position: absolute
   - Sale del flujo
   - Activa z-index
   - NO ocupa espacio

4. z-index más alto = más arriba

5. Los hijos compiten DENTRO del contexto del padre

6. Usa relative cuando solo necesites z-index
   Usa absolute cuando necesites posicionar específicamente

PREGUNTA: ¿Por qué position: relative en .contenido?
RESPUESTA: Para activar z-index y que el contenido esté visible
           encima del overlay (::after)
*/

console.log('📚 Guía de z-index y posicionamiento cargada')
console.log('💡 Recuerda: z-index necesita position (no static)')
console.log('✅ Usa relative para mantener posición + z-index')
