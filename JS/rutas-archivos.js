// ============================================
// RUTAS DE ARCHIVOS - GUÍA COMPLETA
// ============================================

/*
┌─────────────────────────────────────────────────────────────┐
│  RUTAS RELATIVAS vs RUTAS ABSOLUTAS                        │
└─────────────────────────────────────────────────────────────┘

RUTA RELATIVA:
- Depende de la RELACIÓN con el archivo actual
- Cambia si mueves el archivo
- Usa: . (punto), .. (doble punto)

RUTA ABSOLUTA:
- SIEMPRE la misma ruta
- NO cambia aunque muevas el archivo
- En Vite/Web: / empieza desde public/
*/

// ============================================
// 1. CONCEPTOS BÁSICOS
// ============================================

/*
SÍMBOLOS IMPORTANTES:

.    = Carpeta ACTUAL (donde estoy ahora)
..   = Subir UN nivel (carpeta padre)
../..  = Subir DOS niveles
/    = Raíz del proyecto (en Vite = public/)
*/

// ============================================
// 2. EJEMPLO DE ESTRUCTURA
// ============================================

/*
Proyecto/
├── public/
│   ├── assets/
│   │   ├── hero-bg.png
│   │   ├── logo.svg
│   │   └── videos/
│   │       └── background.mp4
│   └── favicon.png
├── src/
│   ├── componentes/
│   │   ├── Button.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css  ← ESTÁS AQUÍ
│   │   │   └── Hero.css
│   │   └── utils/
│   │       └── helpers.js
│   ├── App.jsx
│   └── main.jsx
└── package.json
*/

// ============================================
// 3. RUTAS RELATIVAS - NAVEGACIÓN
// ============================================

/*
DESDE: src/componentes/layout/Header.css

┌─────────────────────────────────────────────────────────────┐
│  DESTINO                          │  RUTA RELATIVA          │
├─────────────────────────────────────────────────────────────┤
│  Mismo directorio (layout/)       │  ./archivo.png          │
│  src/componentes/                 │  ../archivo.png         │
│  src/                             │  ../../archivo.png      │
│  Proyecto/ (raíz)                 │  ../../../archivo.png   │
│  src/componentes/utils/           │  ../utils/archivo.png   │
└─────────────────────────────────────────────────────────────┘
*/

// Ejemplos en CSS (desde Header.css):

// Mismo nivel (layout/)
// url('./imagen.png')  →  src/componentes/layout/imagen.png

// Subir 1 nivel (componentes/)
// url('../imagen.png')  →  src/componentes/imagen.png

// Subir 2 niveles (src/)
// url('../../imagen.png')  →  src/imagen.png

// Otra carpeta al mismo nivel
// url('../utils/helper.js')  →  src/componentes/utils/helper.js

// ============================================
// 4. RUTAS ABSOLUTAS (VITE/REACT)
// ============================================

/*
En Vite, las rutas que empiezan con / apuntan a public/

REGLA DE ORO:
/ = public/

EJEMPLOS:
*/

// En CSS:
// url('/assets/hero-bg.png')  →  public/assets/hero-bg.png
// url('/favicon.png')         →  public/favicon.png
// url('/assets/videos/bg.mp4') → public/assets/videos/bg.mp4

// En JSX:
// <img src="/assets/logo.svg" />  →  public/assets/logo.svg
// <video src="/assets/videos/background.mp4" />

// ============================================
// 5. EJEMPLOS PRÁCTICOS EN CSS
// ============================================

/*
CASO 1: Imagen de fondo en Hero.css
Ubicación del archivo: src/componentes/layout/Hero.css
Imagen: public/assets/hero-bg.png
*/

// ✅ OPCIÓN 1: Ruta Absoluta (RECOMENDADA)
const ejemplo1_absoluta = `
.hero {
    background-image: url('/assets/hero-bg.png');
}
`;

// ⚠️ OPCIÓN 2: Ruta Relativa (complicada)
const ejemplo1_relativa = `
.hero {
    /* Desde: src/componentes/layout/Hero.css
       Hasta: public/assets/hero-bg.png
       Sube 3 niveles: ../ ../ ../ luego public/assets/ */
    background-image: url('../../../public/assets/hero-bg.png');
}
`;

/*
CASO 2: Fuente personalizada en index.css
Ubicación: src/index.css
Fuente: public/fonts/Roboto.ttf
*/

// ✅ Ruta Absoluta
const ejemplo2 = `
@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto.ttf');
}
`;

// ============================================
// 6. EJEMPLOS EN JAVASCRIPT/JSX
// ============================================

/*
IMPORT DE MÓDULOS (siempre rutas relativas)
*/

// Desde: src/App.jsx
import Header from './componentes/layout/Header.jsx'  // ✅ Mismo src/
import Button from './componentes/Button.jsx'          // ✅ Sube y baja

// Desde: src/componentes/layout/Header.jsx
import DarkMode from '../DarkModeSwitch.jsx'  // ✅ Sube 1 nivel
import { useState } from 'react'              // ✅ Módulo de node_modules

/*
SRC DE IMÁGENES EN JSX (rutas absolutas desde public/)
*/

// ✅ Imágenes en public/
const ImagenPublic = () => (
    <img src="/assets/logo.svg" alt="Logo" />
    // Busca en: public/assets/logo.svg
)

// ============================================
// 7. REGLAS MNEMOTÉCNICAS
// ============================================

/*
┌─────────────────────────────────────────────────────────────┐
│  ANALOGÍA CON DIRECCIONES                                   │
├─────────────────────────────────────────────────────────────┤
│  RUTA RELATIVA = Indicaciones desde tu casa                │
│  "Sal, dobla izquierda, 2 cuadras"                         │
│  ❌ Si te mudas, las indicaciones NO sirven                │
│                                                              │
│  RUTA ABSOLUTA = Dirección completa                         │
│  "Calle Principal #123, Ciudad"                             │
│  ✅ No importa dónde estés, SIEMPRE llegas                 │
└─────────────────────────────────────────────────────────────┘

RECORDATORIO VISUAL:

.       = 🏠 AQUÍ (carpeta actual)
..      = ⬆️ SUBE 1 nivel
../..   = ⬆️⬆️ SUBE 2 niveles
../../.. = ⬆️⬆️⬆️ SUBE 3 niveles
/       = 🌐 RAÍZ (public/ en Vite)
*/

// ============================================
// 8. CUÁNDO USAR CADA UNA
// ============================================

/*
┌─────────────────────────────────────────────────────────────┐
│  USA RUTA RELATIVA CUANDO:                                  │
├─────────────────────────────────────────────────────────────┤
│  ✅ Importar módulos JS/JSX                                 │
│     import Component from './Component.jsx'                 │
│                                                              │
│  ✅ Archivos que siempre estarán juntos                     │
│     Componente + su CSS en la misma carpeta                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  USA RUTA ABSOLUTA CUANDO:                                  │
├─────────────────────────────────────────────────────────────┤
│  ✅ Imágenes/videos en public/                              │
│     url('/assets/imagen.png')                               │
│                                                              │
│  ✅ Archivos estáticos compartidos                          │
│     Logos, iconos, fuentes, videos                         │
│                                                              │
│  ✅ Evitar rutas largas y complicadas                       │
│     Mejor /assets/img.png que ../../../public/assets/img.png│
└─────────────────────────────────────────────────────────────┘
*/

// ============================================
// 9. ERRORES COMUNES
// ============================================

/*
❌ ERROR 1: Mezclar rutas en imports
*/
// import Header from '/componentes/Header.jsx'  // ❌ NO funciona
// import Header from './componentes/Header.jsx' // ✅ Correcto

/*
❌ ERROR 2: Olvidar que / = public/
*/
// url('/src/assets/img.png')  // ❌ Busca public/src/... (no existe)
// url('/assets/img.png')      // ✅ Busca public/assets/img.png

/*
❌ ERROR 3: Contar mal los niveles
*/
// Estás en: src/componentes/layout/Hero.css
// Quieres: src/imagen.png
// url('../imagen.png')   // ❌ Busca en src/componentes/
// url('../../imagen.png') // ✅ Correcto (sube 2 niveles)

// ============================================
// 10. TABLA DE REFERENCIA RÁPIDA
// ============================================

/*
┌──────────────────────────────────────────────────────────────┐
│  DESDE Hero.css (src/componentes/layout/Hero.css)           │
├──────────────────────────────────────────────────────────────┤
│  DESTINO                    │  RUTA                          │
├─────────────────────────────┼────────────────────────────────┤
│  public/assets/hero-bg.png  │  /assets/hero-bg.png           │
│  public/favicon.png         │  /favicon.png                  │
│  src/componentes/img.png    │  ../img.png                    │
│  src/imagen.png             │  ../../imagen.png              │
│  layout/logo.png (mismo)    │  ./logo.png                    │
└──────────────────────────────────────────────────────────────┘
*/

// ============================================
// 11. EJERCICIOS PRÁCTICOS
// ============================================

/*
EJERCICIO 1:
Estás en: src/componentes/Button.css
Quieres: public/assets/icons/btn-icon.svg
Respuesta: url('/assets/icons/btn-icon.svg')  ✅

EJERCICIO 2:
Estás en: src/App.jsx
Quieres importar: src/componentes/Header.jsx
Respuesta: import Header from './componentes/Header.jsx'  ✅

EJERCICIO 3:
Estás en: src/componentes/layout/Footer.css
Quieres: src/componentes/imagen.png
Respuesta: url('../imagen.png')  ✅

EJERCICIO 4:
Estás en: src/index.css
Quieres: public/fonts/Arial.ttf
Respuesta: url('/fonts/Arial.ttf')  ✅
*/

// ============================================
// 12. BUENAS PRÁCTICAS
// ============================================

/*
✅ RECOMENDACIONES:

1. Pon TODOS los recursos estáticos en public/
   - Imágenes, videos, fuentes, iconos

2. Usa rutas ABSOLUTAS para recursos en public/
   - url('/assets/imagen.png')
   - <img src="/assets/logo.svg" />

3. Usa rutas RELATIVAS solo para imports
   - import Component from './Component.jsx'

4. Organiza public/ con carpetas
   public/
   ├── assets/
   │   ├── images/
   │   ├── videos/
   │   └── fonts/
   └── favicon.png

5. Evita rutas relativas largas
   ❌ url('../../../public/assets/img.png')
   ✅ url('/assets/img.png')
*/

// ============================================
// 13. RESUMEN EJECUTIVO
// ============================================

/*
📋 CHEAT SHEET:

RUTAS EN CSS/HTML (para imágenes, videos, fuentes):
├─ Archivos en public/  →  / (ruta absoluta)
│  Ejemplo: url('/assets/hero-bg.png')
│
└─ Archivos en src/  →  . o .. (ruta relativa)
   Ejemplo: url('../imagen.png')

RUTAS EN JAVASCRIPT (imports):
├─ Siempre rutas RELATIVAS
│  Ejemplo: import Header from './componentes/Header.jsx'
│
└─ Excepto node_modules
   Ejemplo: import React from 'react'

SÍMBOLOS:
.     = Carpeta actual
..    = Sube 1 nivel
/     = public/ (en Vite)

REGLA DE ORO:
Si está en public/  →  usa /
Si importas código  →  usa ./ o ../
*/

console.log('📚 Guía de Rutas de Archivos cargada')
console.log('💡 Recuerda: / = public/ en Vite')
console.log('✅ Usa rutas absolutas para recursos estáticos')
