// ================================
// FUNCIÓN CLAMP() EN CSS
// ================================

/*
clamp() es una función CSS que permite crear valores responsivos
que crecen/encogen automáticamente entre un mínimo y un máximo.

Es como tener media queries automáticos integrados en una sola línea.
*/

// ================================
// 1. SINTAXIS BÁSICA
// ================================

/*
clamp(mínimo, preferido, máximo)

- MÍNIMO: El valor más pequeño permitido
- PREFERIDO: El valor ideal (usualmente con unidades responsivas: vw, %, vh)
- MÁXIMO: El valor más grande permitido

El navegador elige:
- Si PREFERIDO < MÍNIMO → usa MÍNIMO
- Si MÍNIMO ≤ PREFERIDO ≤ MÁXIMO → usa PREFERIDO
- Si PREFERIDO > MÁXIMO → usa MÁXIMO
*/

// ================================
// 2. EJEMPLO BÁSICO
// ================================

/*
CSS:
gap: clamp(20px, 3vw, 40px);

¿Qué hace?
- Mínimo: 20px (nunca será menor)
- Preferido: 3vw (3% del ancho de la ventana)
- Máximo: 40px (nunca será mayor)

Comportamiento:
┌─────────────────────────────────────────┐
│ Pantalla pequeña (< 666px):             │
│   3vw < 20px → Usa 20px                 │
│                                          │
│ Pantalla mediana (666px - 1333px):      │
│   20px ≤ 3vw ≤ 40px → Usa 3vw          │
│   (Crece suavemente)                    │
│                                          │
│ Pantalla grande (> 1333px):             │
│   3vw > 40px → Usa 40px                 │
└─────────────────────────────────────────┘

Cálculo:
- 3vw en pantalla de 666px = 20px
- 3vw en pantalla de 1000px = 30px
- 3vw en pantalla de 1333px = 40px
*/

// ================================
// 3. CASOS DE USO COMUNES
// ================================

// a) TAMAÑO DE FUENTE RESPONSIVO
//.titulo {
//font - size: clamp(16px, 2vw, 32px);
//}
/*
- Mobile (< 800px): 16px
- Tablet (800px-1600px): Crece de 16px a 32px
- Desktop (> 1600px): 32px

Sin media queries, totalmente fluido ✅
*/

// b) PADDING ADAPTABLE
//.contenedor {
// padding: clamp(10px, 5vw, 50px);
//}
/*
- Mobile: Padding pequeño (10px)
- Desktop: Padding grande (hasta 50px)
- Crece proporcionalmente con la pantalla
*/

// c) GAP EN GRID/FLEXBOX
//.grid {
display: grid;
//gap: clamp(20px, 3vw, 40px);
//}
/*
- Espaciado mínimo: 20px (legible en mobile)
- Espaciado máximo: 40px (no demasiado grande en desktop)
- Espaciado fluido: Crece con la pantalla
*/

// d) ANCHO DE CONTENEDOR
//.contenedor {
//width: clamp(300px, 80 %, 1200px);
//}
/*
- Mínimo: 300px (legible en móviles pequeños)
- Preferido: 80% del ancho disponible
- Máximo: 1200px (no demasiado ancho en pantallas grandes)
*/

// e) MARGEN DINÁMICO
//.seccion {
//margin - block: clamp(2rem, 5vh, 6rem);
//}
/*
- Espaciado vertical que crece con la altura de la ventana
- Mínimo: 2rem (32px)
- Máximo: 6rem (96px)
*/

// f) BORDER-RADIUS RESPONSIVO
//.tarjeta {
//border - radius: clamp(8px, 2vw, 24px);
//}
/*
- Mobile: Bordes sutiles (8px)
- Desktop: Bordes más redondeados (hasta 24px)
*/

// ================================
// 4. COMPARACIÓN CON MEDIA QUERIES
// ================================

// ❌ ANTES (con media queries):
//.titulo {
//font - size: 16px;
//}

//@media(min - width: 768px) {
//  .titulo {
//     font - size: 20px;
//}
//}

//@media(min - width: 1024px) {
//  .titulo {
//     font - size: 24px;
// }
//}

//@media(min - width: 1440px) {
// .titulo {
//    font - size: 32px;
//  }
//}
// Muchas líneas, saltos bruscos entre tamaños

// ✅ AHORA (con clamp):
//.titulo {
// font - size: clamp(16px, 2vw, 32px);
//}
// Una línea, transición suave ✨

// ================================
// 5. UNIDADES QUE PUEDES USAR
// ================================

/*
MÍNIMO y MÁXIMO:
- px (píxeles fijos)
- rem, em (relativos al tamaño de fuente)
- % (porcentaje del contenedor padre)
- vw, vh (viewport)
- Cualquier unidad fija

PREFERIDO (el que cambia):
- vw (% del ancho de la ventana) ← MÁS COMÚN
- vh (% del alto de la ventana)
- % (% del contenedor)
- vmin, vmax (viewport mínimo/máximo)
- Combinaciones con calc()
*/

// Ejemplos:
//.ejemplo1 {
// font - size: clamp(1rem, 2vw, 3rem);
//}

//.ejemplo2 {
//   width: clamp(200px, 50 %, 800px);
//}

//.ejemplo3 {
//   padding: clamp(1em, 3vmin, 4em);
//}

//.ejemplo4 {
//    margin: clamp(10px, calc(2vw + 10px), 60px);
//}

// ================================
// 6. COMBINACIONES AVANZADAS
// ================================

// a) Con calc()
//.elemento {
//    width: clamp(300px, calc(100 % - 40px), 1200px);
//}
/*
Preferido: Ancho completo menos 40px de margen
*/

// b) Múltiples valores
//.contenedor {
//  padding: clamp(10px, 2vw, 30px) clamp(20px, 5vw, 100px);
//}
/*
padding-block (arriba/abajo): 10px-30px
padding-inline (izq/derecha): 20px-100px
*/

// c) Con variables CSS
//:root {
//--min - size: 16px;
//--pref - size: 2vw;
//--max - size: 24px;
//}

//.texto {
//   font - size: clamp(var(--min - size), var(--pref - size), var(--max - size));
//}

// ================================
// 7. CÁLCULO DE VALORES
// ================================

/*
Para calcular el punto de quiebre donde se alcanza min/max:

Fórmula:
Ancho de pantalla = (valor en px ÷ vw) × 100

Ejemplo: clamp(20px, 3vw, 40px)

¿Cuándo se alcanza el mínimo (20px)?
20px ÷ 3 × 100 = 666px
→ En pantallas menores a 666px, usa 20px

¿Cuándo se alcanza el máximo (40px)?
40px ÷ 3 × 100 = 1333px
→ En pantallas mayores a 1333px, usa 40px

Entre 666px y 1333px:
→ Usa 3vw (crece proporcionalmente)

Tabla de valores:
┌──────────┬───────────────┐
│ Pantalla │ gap (3vw)     │
├──────────┼───────────────┤
│ 500px    │ 20px (min)    │
│ 666px    │ 20px          │
│ 800px    │ 24px          │
│ 1000px   │ 30px          │
│ 1333px   │ 40px          │
│ 1920px   │ 40px (max)    │
└──────────┴───────────────┘
*/

// ================================
// 8. CASOS PRÁCTICOS COMPLETOS
// ================================

// a) SISTEMA DE TIPOGRAFÍA COMPLETO
////////:root {
////////  --fs - small: clamp(0.875rem, 1.5vw, 1rem);     /* 14-16px */
//////// --fs - body: clamp(1rem, 2vw, 1.125rem);         /* 16-18px */
////////--fs - h3: clamp(1.25rem, 3vw, 1.75rem);         /* 20-28px */
//////// --fs - h2: clamp(1.5rem, 4vw, 2.5rem);           /* 24-40px */
//////// --fs - h1: clamp(2rem, 5vw, 4rem);               /* 32-64px */
////////}

////////h1 { font - size: var(--fs - h1); }
////////h2 { font - size: var(--fs - h2); }
////////h3 { font - size: var(--fs - h3); }
////////p { font - size: var(--fs - body); }
////////small { font - size: var(--fs - small); }

// b) SISTEMA DE ESPACIADO
//////:root {
//////  --space - xs: clamp(0.5rem, 1vw, 1rem);      /* 8-16px */
//////  --space - sm: clamp(1rem, 2vw, 1.5rem);      /* 16-24px */
//////  --space - md: clamp(1.5rem, 3vw, 3rem);      /* 24-48px */
//////  --space - lg: clamp(2rem, 5vw, 5rem);        /* 32-80px */
//////  --space - xl: clamp(3rem, 8vw, 8rem);        /* 48-128px */
//////}

////.seccion {
////padding - block: var(--space - lg);
//// gap: var(--space - md);
////}

// c) GRID RESPONSIVO
////.grid {
//// display: grid;
////grid - template - columns: repeat(auto - fit, minmax(clamp(250px, 30 %, 400px), 1fr));
//// gap: clamp(20px, 3vw, 40px);
////  padding: clamp(20px, 5vw, 80px);
////}
/*
Columnas: Mínimo 250px, máximo 400px
Gap: Mínimo 20px, máximo 40px
Padding: Mínimo 20px, máximo 80px
Todo es fluido y responsivo ✨
*/

// d) CONTENEDOR CENTRADO
//.contenedor {
//  width: min(90 %, 1200px);
//  margin - inline: auto;
//  padding - block: clamp(2rem, 5vh, 6rem);
//  padding - inline: clamp(1rem, 5vw, 4rem);
////}
/*
Ancho: 90% del viewport pero máximo 1200px
Padding vertical: Crece con la altura de la ventana
Padding horizontal: Crece con el ancho de la ventana
*/

// ================================
// 9. COMPATIBILIDAD CON NAVEGADORES
// ================================

/*
✅ Soporte: Todos los navegadores modernos (2020+)
- Chrome 79+
- Firefox 75+
- Safari 13.1+
- Edge 79+

❌ No soportado:
- Internet Explorer (ninguna versión)

Fallback para navegadores antiguos:
.titulo {
    font-size: 24px; /* Fallback para navegadores viejos */
//ont - size: clamp(16px, 2vw, 32px); /* Navegadores modernos */
//}
//*/

// ================================
// 10. FUNCIONES RELACIONADAS
// ================================

// a) min() - Elige el valor más PEQUEÑO
// .elemento {
// width: min(90 %, 1200px);
//}
/*
Si 90% = 900px → usa 900px
Si 90% = 1500px → usa 1200px (más pequeño)
*/

// b) max() - Elige el valor más GRANDE
//.elemento {
//  width: max(300px, 50 %);
//}
/*
Si 50% = 200px → usa 300px (más grande)
Si 50% = 400px → usa 400px
*/

// c) Combinación de min, max y clamp
//.contenedor {
//  width: min(90 %, 1200px);                    /* Ancho máximo */
//  padding: clamp(1rem, 3vw, 3rem);           /* Padding responsivo */
//  gap: max(20px, 2vw);                       /* Gap mínimo */
//}

// ================================
// 11. ERRORES COMUNES
// ================================

// ❌ ERROR: Mínimo mayor que máximo
////¿Qué chingados? .error {
//// font - size: clamp(32px, 2vw, 16px);
//Pues }////
// El navegador usará siempre el mínimo (32px) 😱

// ✅ CORRECTO: Mínimo < Máximo
////.correcto {
//// font - size: clamp(16px, 2vw, 32px);
////}

// ❌ ERROR: Valor preferido fijo (no tiene sentido)
////.error {
////font - size: clamp(16px, 20px, 32px);
////}
// Siempre usará 20px, no es responsivo

// ✅ CORRECTO: Valor preferido con unidades responsivas
////.correcto {
////font - size: clamp(16px, 2vw, 32px);
////}

// ❌ ERROR: Unidades incompatibles mezcladas incorrectamente
////.error {
//// font - size: clamp(1rem, 50 %, 32px);
////}
// El % no se refiere al viewport, puede dar resultados inesperados

// ✅ CORRECTO: Unidades consistentes o con calc()
////.correcto {
////font - size: clamp(1rem, 2vw, 2rem);
////}

// ================================
// 12. BUENAS PRÁCTICAS
// ================================

/*
1. ✅ Usa vw para el valor preferido (más común y predecible)
   font-size: clamp(16px, 2vw, 32px);

2. ✅ Mantén proporciones razonables (máximo ~2x el mínimo)
   ✅ clamp(16px, 2vw, 32px)     → 2x (bien)
   ⚠️ clamp(16px, 5vw, 100px)    → 6.25x (quizás demasiado)

3. ✅ Crea variables CSS para reutilizar
   :root {
       --space-md: clamp(1.5rem, 3vw, 3rem);
   }

4. ✅ Proporciona fallback para navegadores viejos
   font-size: 20px;
   font-size: clamp(16px, 2vw, 32px);

5. ✅ Usa rem/em en lugar de px cuando sea posible
   clamp(1rem, 2vw, 2rem) → Respeta preferencias de accesibilidad

6. ✅ Combina con min() y max() para casos complejos
   width: min(clamp(300px, 80%, 1200px), 100vw);

7. ✅ Testea en diferentes tamaños de pantalla
   - Mobile: ~375px
   - Tablet: ~768px
   - Desktop: ~1440px
   - Wide: ~1920px
*/

// ================================
// 13. EJERCICIOS PRÁCTICOS
// ================================

// Ejercicio 1: Crea un sistema de tipografía responsivo
/*
- h1: 32px (mobile) → 64px (desktop)
- h2: 24px (mobile) → 48px (desktop)
- body: 16px (mobile) → 20px (desktop)
Usa vw para el valor preferido
*/

// Ejercicio 2: Grid con gap responsivo
/*
Crea un grid donde el gap:
- Sea mínimo 15px en mobile
- Crezca proporcionalmente con la pantalla
- No supere 50px en desktop
*/

// Ejercicio 3: Padding adaptable
/*
Crea un contenedor donde el padding:
- Lateral: 20px (min) - 100px (max)
- Vertical: 30px (min) - 80px (max)
Usa diferentes valores de vw para cada uno
*/

// ================================
// RESUMEN FINAL
// ================================

/*
📐 CLAMP():
- Sintaxis: clamp(mínimo, preferido, máximo)
- Crea valores responsivos automáticos
- Elimina la necesidad de muchos media queries

🎯 VALORES:
- Mínimo: El piso (nunca más pequeño)
- Preferido: El ideal (con vw, vh, %)
- Máximo: El techo (nunca más grande)

✅ USA CLAMP PARA:
- Tamaños de fuente responsivos
- Padding/margin dinámicos
- Gap en grid/flexbox
- Anchos de contenedores
- Border-radius adaptables
- Cualquier valor que deba crecer/encogerse con la pantalla

🚀 VENTAJAS:
- Código más limpio
- Menos media queries
- Transiciones suaves
- Más fácil de mantener
- Mejor experiencia de usuario

⚠️ CUIDADOS:
- Asegúrate que mínimo < máximo
- Usa unidades responsivas (vw, vh) para el valor preferido
- Proporciona fallback para navegadores viejos
- No exageres las proporciones (evita min/max muy distantes)
*/

// ================================
// RECURSOS ADICIONALES
// ================================

/*
📚 Documentación:
- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/clamp
- CSS Tricks: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/

🧮 Calculadoras:
- Modern Fluid Typography: https://modern-fluid-typography.vercel.app/
- Clamp Calculator: https://royalfig.github.io/fluid-typography-calculator/

🎓 Conceptos relacionados:
- min() y max() functions
- CSS Custom Properties (variables)
- Responsive Typography
- Fluid Design
- Container Queries
*/

// ================================
// EJEMPLOS EXTRA
// ================================

// Tarjeta responsiva completa
//.tarjeta {
//  width: clamp(300px, 80 %, 600px);
// padding: clamp(1rem, 3vw, 2rem);
// border - radius: clamp(8px, 1vw, 16px);
//  gap: clamp(0.5rem, 2vw, 1.5rem);
//}

//.tarjeta h2 {
// font - size: clamp(1.25rem, 3vw, 2rem);
//}

//.tarjeta p {
// font - size: clamp(0.875rem, 1.5vw, 1.125rem);
// line - height: clamp(1.4, 1.5, 1.6);
//}

// Hero section con espaciado fluido
//.hero {
// min - height: 100vh;
//  padding - block: clamp(3rem, 10vh, 8rem);
//  padding - inline: clamp(1rem, 5vw, 4rem);
//}

//.hero h1 {
// font - size: clamp(2.5rem, 8vw, 6rem);
//  margin - bottom: clamp(1rem, 3vh, 2rem);
//}

// Navegación adaptable
//.navbar {
//  padding: clamp(1rem, 2vw, 2rem) clamp(1rem, 5vw, 4rem);
//  gap: clamp(1rem, 3vw, 3rem);
//}

//.navbar a {
//  font - size: clamp(0.875rem, 1.5vw, 1.125rem);
//}
