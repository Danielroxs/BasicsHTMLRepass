# 🎯 GUÍA COMPLETA: FLEXBOX CSS

## ❓ PREGUNTAS FRECUENTES

### ¿`space-between` es más para bloques?
**NO**, `space-between` funciona con **cualquier elemento flex** (inline o block):

```css
/* FUNCIONA CON CUALQUIER ELEMENTO */
.header {
    display: flex;
    justify-content: space-between;  /* ← Separa TODOS los elementos */
}
/* Separa: logo ←→ nav ←→ botón */
```

### ¿Necesito poner `flex-` o puedo usar solo `start`?
**PUEDES usar ambas formas:**

```css
/* FORMAS VÁLIDAS */
align-items: flex-start;  /* ← Sintaxis clásica */
align-items: start;       /* ← Sintaxis moderna (más corta) */

justify-content: flex-end;  /* ← Sintaxis clásica */
justify-content: end;       /* ← Sintaxis moderna */
```

**Recomendación:** Usa `flex-start`, `flex-end` para mayor compatibilidad.

---

## 🎯 PROPIEDADES FLEXBOX - CUÁNDO USAR CADA UNA

### 📏 EJES EN FLEXBOX:
```
MAIN AXIS (eje principal) →→→→→→→
│
│ CROSS AXIS (eje cruzado)
↓
```

## 🔧 PROPIEDADES PARA CONTENIDO

### ✅ `justify-content` - Controla EJE PRINCIPAL
```css
.contenedor {
    display: flex;
    justify-content: center;     /* ← Centra horizontalmente */
    justify-content: flex-start; /* ← Izquierda */
    justify-content: flex-end;   /* ← Derecha */
    justify-content: space-between; /* ← Espaciado entre elementos */
}
```

### ✅ `align-items` - Controla EJE CRUZADO
```css
.contenedor {
    display: flex;
    align-items: center;         /* ← Centra verticalmente */
    align-items: flex-start;     /* ← Arriba */
    align-items: flex-end;       /* ← Abajo */
    align-items: stretch;        /* ← Estira elementos */
}
```

### ⚠️ `align-content` - Solo para MÚLTIPLES LÍNEAS
```css
.contenedor {
    display: flex;
    flex-wrap: wrap;             /* ← NECESARIO para múltiples líneas */
    align-content: center;       /* ← Centra LÍNEAS completas */
}
```

### ❌ `justify-items` - NO EXISTE EN FLEXBOX
Solo existe en **CSS Grid**.

---

# 📁 CASOS DE USO FLEXBOX

## 📁 CENTRAR ELEMENTOS
```css
/* ✅ CASO: Centrar contenido completamente */
.aside {
    display: flex;
    justify-content: center;  /* ← Horizontal */
    align-items: center;      /* ← Vertical */
}
/* 💡 USA CUANDO: Logos, texto de sidebar, modales */
```

## 📁 NAVEGACIÓN HORIZONTAL
```css
/* ✅ CASO: Header con logo y menú separados */
.header {
    display: flex;
    justify-content: space-between;  /* ← Separa extremos */
    align-items: center;             /* ← Centra verticalmente */
}
/* 💡 USA CUANDO: Headers, barras de navegación */
```

## 📁 CONTENIDO EN COLUMNA
```css
/* ✅ CASO: Artículos, posts, contenido apilado */
.main {
    display: flex;
    flex-direction: column;      /* ← Cambia a columna */
    justify-content: flex-start; /* ← Arriba (vertical ahora) */
    align-items: flex-start;     /* ← Izquierda (horizontal ahora) */
    gap: 20px;                   /* ← Espacio entre elementos */
}
/* 💡 USA CUANDO: Cards, artículos, formularios */
```

## 📁 BOTONES EN FILA
```css
/* ✅ CASO: Grupo de botones */
.botones {
    display: flex;
    justify-content: flex-end;   /* ← Botones a la derecha */
    align-items: center;         /* ← Centrados verticalmente */
    gap: 10px;                   /* ← Separación entre botones */
}
/* 💡 USA CUANDO: Botones de acción, controles */
```

## 📁 GALERÍA CON WRAP
```css
/* ✅ CASO: Imágenes que se envuelven */
.galeria {
    display: flex;
    flex-wrap: wrap;             /* ← Permite múltiples líneas */
    justify-content: center;     /* ← Centra elementos en cada línea */
    align-content: flex-start;   /* ← Líneas empiezan arriba */
    gap: 15px;
}
/* 💡 USA CUANDO: Galerías, cards, productos */
```

## 📁 ELEMENTOS EQUIDISTANTES
```css
/* ✅ CASO: Menú con espacios iguales */
.nav {
    display: flex;
    justify-content: space-around;  /* ← Espacios iguales alrededor */
    align-items: center;
}
/* 💡 USA CUANDO: Menús simétricos, pestañas */
```

## 📁 SIDEBAR CON CONTENIDO ARRIBA Y ABAJO
```css
/* ✅ CASO: Sidebar con header y footer */
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* ← Separa arriba y abajo */
    align-items: stretch;           /* ← Elementos ocupan todo el ancho */
    min-height: 100vh;
}
/* 💡 USA CUANDO: Sidebars, layouts verticales */
```

## 📁 FORMULARIO CENTRADO
```css
/* ✅ CASO: Form en el centro de la pantalla */
.form-container {
    display: flex;
    justify-content: center;     /* ← Centrado horizontal */
    align-items: center;         /* ← Centrado vertical */
    min-height: 100vh;           /* ← Toda la pantalla */
}
/* 💡 USA CUANDO: Login, registro, modales */
```

## 📁 FOOTER CON ENLACES
```css
/* ✅ CASO: Footer con copyright y enlaces */
.footer {
    display: flex;
    justify-content: space-between; /* ← Copyright izq, enlaces der */
    align-items: center;
    flex-wrap: wrap;                /* ← Se adapta en móviles */
}
/* 💡 USA CUANDO: Footers, barras de estado */
```

---

## 🏆 CHEAT SHEET RÁPIDO

| **QUIERO...** | **USO...** |
|---------------|------------|
| Centrar todo | `justify-content: center` + `align-items: center` |
| Logo izq, menú der | `justify-content: space-between` |
| Contenido apilado | `flex-direction: column` |
| Botones a la derecha | `justify-content: flex-end` |
| Espacios iguales | `justify-content: space-around` |
| Múltiples líneas | `flex-wrap: wrap` + `align-content` |

---

## 📊 VALORES DE `justify-content`

```css
justify-content: flex-start;    /* ← Elementos al inicio */
justify-content: flex-end;      /* ← Elementos al final */
justify-content: center;        /* ← Elementos centrados */
justify-content: space-between; /* ← Espacio entre elementos */
justify-content: space-around;  /* ← Espacio alrededor de elementos */
justify-content: space-evenly;  /* ← Espacio uniforme */
```

## 📊 VALORES DE `align-items`

```css
align-items: flex-start;   /* ← Elementos al inicio del eje cruzado */
align-items: flex-end;     /* ← Elementos al final del eje cruzado */
align-items: center;       /* ← Elementos centrados */
align-items: stretch;      /* ← Elementos se estiran (por defecto) */
align-items: baseline;     /* ← Alineados por línea base del texto */
```

## 📊 VALORES DE `flex-direction`

```css
flex-direction: row;         /* ← Horizontal (por defecto) */
flex-direction: row-reverse; /* ← Horizontal invertido */
flex-direction: column;      /* ← Vertical */
flex-direction: column-reverse; /* ← Vertical invertido */
```

---

## 💡 CONSEJOS IMPORTANTES

1. **Para centrar completamente:** Usa `justify-content: center` + `align-items: center`
2. **Para múltiples líneas:** Necesitas `flex-wrap: wrap` y usa `align-content`
3. **Para separar elementos:** `space-between` es perfecto para headers
4. **Para contenido apilado:** Usa `flex-direction: column`
5. **Gap es tu amigo:** Usa `gap` en lugar de márgenes cuando sea posible

---

**📅 Fecha de creación:** 29 de septiembre de 2025  
**📝 Tema:** Flexbox CSS - Guía completa de casos de uso  
**🎯 Objetivo:** Referencia rápida para desarrollo web