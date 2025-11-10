// ================================
// BURBUJEO DE EVENTOS (EVENT BUBBLING)
// ================================

/*
El burbujeo de eventos es un mecanismo fundamental en JavaScript donde
los eventos "suben" desde el elemento donde ocurrieron hasta sus elementos
padres, como burbujas que suben en el agua.
*/

// ================================
// 1. ¿QUÉ ES EL BURBUJEO?
// ================================

/*
Cuando haces clic en un elemento, el evento NO se queda solo en ese elemento.
El evento "burbujea" (sube) por la jerarquía del DOM:

HIJO → PADRE → ABUELO → BISABUELO → ... → DOCUMENT → WINDOW

Ejemplo visual:
<div id="abuelo">           ← 3. Llega aquí
    <div id="padre">        ← 2. Luego aquí
        <button id="hijo">  ← 1. Empiezas el clic aquí
            Clic
        </button>
    </div>
</div>
*/

// ================================
// 2. EJEMPLO BÁSICO
// ================================

// HTML:
/*
<div id="abuelo">
    <div id="padre">
        <button id="hijo">Clic aquí</button>
    </div>
</div>
*/

// JavaScript:
const abuelo = document.getElementById('abuelo');
const padre1 = document.getElementById('padre1');
const hijo1 = document.getElementById('hijo1');

hijo1.addEventListener('click', () => {
    console.log('1. Clic en HIJO');
});

padre1.addEventListener('click', () => {
    console.log('2. Clic en PADRE');
});

abuelo.addEventListener('click', () => {
    console.log('3. Clic en ABUELO');
});

/*
Al hacer clic en el botón, verás en consola:
1. Clic en HIJO
2. Clic en PADRE
3. Clic en ABUELO

¡El evento subió por toda la jerarquía!
*/

// ================================
// 3. DETENER EL BURBUJEO: stopPropagation()
// ================================

/*
A veces NO queremos que el evento suba. Para esto usamos:
e.stopPropagation()
*/

// Ejemplo - Deteniendo en el PADRE:
hijo.addEventListener('click', () => {
    console.log('1. Clic en HIJO');
});

padre.addEventListener('click', (e) => {
    console.log('2. Clic en PADRE');
    e.stopPropagation(); // 🛑 Detiene la burbuja aquí
});

abuelo.addEventListener('click', () => {
    console.log('3. Clic en ABUELO'); // ❌ Esto NO se ejecutará
});

/*
Ahora al hacer clic verás:
1. Clic en HIJO
2. Clic en PADRE
(El evento NO llega al abuelo)
*/

// ================================
// 4. CASO PRÁCTICO: MODAL
// ================================

/*
Ejemplo común: Un modal que debe cerrarse al hacer clic AFUERA,
pero NO al hacer clic en el contenido del modal.

HTML:
<div class="overlay" onclick="closeModal()">     ← Clic aquí cierra
    <div class="modal">                          ← Clic aquí NO debe cerrar
        <h2>Contenido del modal</h2>
        <p>Texto importante</p>
    </div>
</div>
*/

// Sin stopPropagation (PROBLEMA):
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

overlay.addEventListener('click', () => {
    console.log('Cerrar modal');
    // closeModal();
});

// ❌ PROBLEMA: Al hacer clic en .modal, el evento sube a .overlay y cierra el modal

// ✅ SOLUCIÓN: Detener el burbujeo en .modal
modal.addEventListener('click', (e) => {
    e.stopPropagation(); // 🛑 Detiene la burbuja, NO llega a .overlay
});

// Ahora:
// - Clic en .overlay → Cierra el modal ✅
// - Clic en .modal → NO cierra el modal ✅

// ================================
// 5. EJEMPLO EN REACT (TU CÓDIGO)
// ================================

/*
// Modal.jsx
const Modal = ({closeModal, trabajo}) => {
    return (
        <>
            <div className="overlay" onClick={closeModal}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <button className="boton-cerrar" onClick={closeModal}>X</button>
                    
                    <div className="grid">
                        <img src={trabajo.thumb.url} />
                        <div className="info">
                            <h3>{trabajo.info.nombre}</h3>
                            <p>{trabajo.info.contenido}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Flujo del evento:
1. Haces clic en la imagen (dentro de .grid)
2. La burbuja sube a .modal
3. Se ejecuta onClick={(e) => e.stopPropagation()}
4. 🛑 La burbuja se detiene aquí
5. ❌ NO llega a .overlay
6. ❌ NO se ejecuta closeModal()
7. ✅ El modal permanece abierto

Si haces clic AFUERA de .modal (en .overlay):
1. El clic ocurre directamente en .overlay
2. Se ejecuta onClick={closeModal}
3. ✅ El modal se cierra
*/

// ================================
// 6. OTROS MÉTODOS RELACIONADOS
// ================================

// a) stopImmediatePropagation()
// Detiene el burbujeo Y otros listeners en el mismo elemento

button.addEventListener('click', (e) => {
    console.log('Listener 1');
    e.stopImmediatePropagation(); // 🛑 Detiene TODO
});

button.addEventListener('click', () => {
    console.log('Listener 2'); // ❌ Este NO se ejecutará
});

// b) preventDefault()
// NO detiene el burbujeo, solo previene la acción por defecto del navegador

link.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el enlace navegue
    console.log('Clic en enlace'); // ✅ Esto sí se ejecuta
    // La burbuja sigue subiendo ✅
});

// ================================
// 7. CAPTURA VS BURBUJEO
// ================================

/*
Además del burbujeo (de hijo a padre), existe la CAPTURA (de padre a hijo).

Flujo completo de un evento:
WINDOW → DOCUMENT → HTML → BODY → DIV → BUTTON (CAPTURA - hacia abajo)
                                            ↓
BUTTON → DIV → BODY → HTML → DOCUMENT → WINDOW (BURBUJEO - hacia arriba)
*/

// Por defecto, los eventos se manejan en fase de BURBUJEO
elemento.addEventListener('click', handler); // Fase de burbujeo

// Para manejar en fase de CAPTURA:
elemento.addEventListener('click', handler, true); // Fase de captura
// o
elemento.addEventListener('click', handler, { capture: true });

// Ejemplo:
const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');

padre.addEventListener('click', () => {
    console.log('Padre - Captura');
}, true); // Captura

hijo.addEventListener('click', () => {
    console.log('Hijo - Burbujeo');
}); // Burbujeo (por defecto)

padre.addEventListener('click', () => {
    console.log('Padre - Burbujeo');
}); // Burbujeo

/*
Al hacer clic en el hijo, verás:
1. Padre - Captura    (de arriba hacia abajo)
2. Hijo - Burbujeo    (el elemento donde hiciste clic)
3. Padre - Burbujeo   (de abajo hacia arriba)
*/

// ================================
// 8. DELEGACIÓN DE EVENTOS
// ================================

/*
El burbujeo permite la DELEGACIÓN de eventos:
En lugar de agregar listeners a muchos elementos hijos,
agregamos UNO solo al padre.
*/

// ❌ SIN delegación (ineficiente):
const botones = document.querySelectorAll('.boton');
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log('Clic en botón');
    });
});

// ✅ CON delegación (eficiente):
const contenedor = document.getElementById('contenedor');
contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('boton')) {
        console.log('Clic en botón');
    }
});

// Beneficios:
// 1. Solo UN listener en lugar de muchos
// 2. Funciona con elementos agregados dinámicamente
// 3. Mejor rendimiento

// ================================
// 9. CASOS DE USO COMUNES
// ================================

// a) Cerrar dropdown al hacer clic fuera
const dropdown = document.querySelector('.dropdown');
const menu = document.querySelector('.menu');

dropdown.addEventListener('click', (e) => {
    e.stopPropagation(); // No cierra al hacer clic dentro
    menu.classList.toggle('open');
});

document.addEventListener('click', () => {
    menu.classList.remove('open'); // Cierra al hacer clic fuera
});

// b) Menú de contexto personalizado
document.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Evita el menú por defecto del navegador
    // Muestra tu menú personalizado
});

// c) Galería de imágenes
const galeria = document.querySelector('.galeria');

galeria.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        abrirModal(e.target.src);
    }
});

// ================================
// 10. ERRORES COMUNES
// ================================

// ❌ ERROR: Olvidar el parámetro 'e'
modal.addEventListener('click', () => {
    stopPropagation(); // ❌ ReferenceError: stopPropagation is not defined
});

// ✅ CORRECTO:
modal.addEventListener('click', (e) => {
    e.stopPropagation(); // ✅ 'e' es el objeto del evento
});

// ❌ ERROR: Usar preventDefault() pensando que detiene el burbujeo
link.addEventListener('click', (e) => {
    e.preventDefault(); // Solo evita la navegación
    // La burbuja sigue subiendo ⚠️
});

// ✅ CORRECTO:
link.addEventListener('click', (e) => {
    e.preventDefault(); // Evita la acción por defecto
    e.stopPropagation(); // Detiene el burbujeo
});

// ================================
// 11. BUENAS PRÁCTICAS
// ================================

/*
1. ✅ Usa stopPropagation() con cuidado
   - Solo cuando realmente necesites detener el burbujeo
   - Puede romper otros listeners que dependan del burbujeo

2. ✅ Prefiere delegación de eventos cuando sea posible
   - Mejor rendimiento
   - Menos listeners

3. ✅ Usa nombres descriptivos para el parámetro del evento
   - 'e' o 'event' son estándar
   - En React también se usa 'e'

4. ✅ Entiende la diferencia entre:
   - stopPropagation() → Detiene el burbujeo
   - preventDefault() → Evita acción por defecto
   - stopImmediatePropagation() → Detiene TODO

5. ✅ Ten en cuenta la fase (captura vs burbujeo)
   - Por defecto es burbujeo
   - Usa captura solo cuando sea necesario
*/

// ================================
// 12. EJERCICIOS PRÁCTICOS
// ================================

// Ejercicio 1: Menú desplegable
/*
Crea un menú que:
- Se abre al hacer clic en un botón
- Se cierra al hacer clic fuera del menú
- NO se cierra al hacer clic dentro del menú
*/

// Ejercicio 2: Lista de tareas
/*
Crea una lista donde:
- Puedas marcar/desmarcar tareas haciendo clic en ellas
- Puedas eliminar tareas con un botón "X"
- El clic en "X" NO debe marcar/desmarcar la tarea
*/

// Ejercicio 3: Modal con formulario
/*
Crea un modal que:
- Se cierre al hacer clic en el overlay
- NO se cierre al hacer clic en el formulario
- Se cierre al hacer clic en "Cancelar"
- Se cierre al enviar el formulario
*/

// ================================
// RESUMEN FINAL
// ================================

/*
🫧 BURBUJEO DE EVENTOS:
- Los eventos suben del hijo → padre → abuelo
- Es el comportamiento por defecto en JavaScript

🛑 DETENER EL BURBUJEO:
- e.stopPropagation() → Detiene la subida del evento
- e.stopImmediatePropagation() → Detiene todo

📝 OTROS MÉTODOS:
- e.preventDefault() → Evita acción por defecto (NO detiene burbujeo)
- e.target → Elemento donde ocurrió el evento originalmente
- e.currentTarget → Elemento con el listener actual

🎯 CASOS DE USO:
- Modales que se cierran al hacer clic afuera
- Dropdowns y menús contextuales
- Delegación de eventos en listas
- Galerías de imágenes

⚠️ CUIDADO:
- No abuses de stopPropagation()
- Puede romper otros listeners
- Úsalo solo cuando sea necesario
*/

// ================================
// RECURSOS ADICIONALES
// ================================

/*
📚 MDN Web Docs:
- Event bubbling: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture
- stopPropagation(): https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
- preventDefault(): https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

🎓 Conceptos relacionados:
- Event delegation (delegación de eventos)
- Event capturing (captura de eventos)
- Event phases (fases de eventos)
- Event targets (objetivos de eventos)
*/
