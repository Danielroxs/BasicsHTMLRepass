/* ============================================
   CONDICIONALES EN JAVASCRIPT
   ============================================
   
   Archivo de estudio completo sobre estructuras
   condicionales: if, else, else if, switch,
   operador ternario, anidaciones y buenas prácticas.
   
   📌 Condicionales = Ejecutar código según condiciones
============================================ */


// ============================================
// 1. ¿QUÉ SON LAS CONDICIONALES?
// ============================================

console.log('--- ¿QUÉ SON LAS CONDICIONALES? ---');
console.log(`
CONDICIONALES:
- Estructuras que ejecutan código según una condición
- La condición evalúa a true o false
- Permiten tomar decisiones en el código

TIPOS:
- if
- if...else
- if...else if...else
- switch
- Operador ternario (? :)
`);

console.log('');


// ============================================
// 2. IF BÁSICO
// ============================================

console.log('--- IF BÁSICO ---');
console.log(`
SINTAXIS:
if (condición) {
    // Código si condición es true
}

- Si condición es true → ejecuta el bloque
- Si condición es false → no ejecuta nada
`);

// Ejemplos
const edad = 18

if (edad >= 18) {
    console.log('Eres mayor de edad')
}

const temperatura = 30

if (temperatura > 25) {
    console.log('Hace calor')
}

// Con operadores de comparación
const numero = 10

if (numero > 0) {
    console.log('El número es positivo')
}

if (numero % 2 === 0) {
    console.log('El número es par')
}

// Con operadores lógicos
const tieneEntrada = true
const edadConcert = 20

if (edadConcert >= 18 && tieneEntrada) {
    console.log('Puede entrar al concierto')
}

console.log('');


// ============================================
// 3. IF...ELSE
// ============================================

console.log('--- IF...ELSE ---');
console.log(`
SINTAXIS:
if (condición) {
    // Código si condición es true
} else {
    // Código si condición es false
}

- if → ejecuta si condición es true
- else → ejecuta si condición es false
`);

// Ejemplos
const edad2 = 15

if (edad2 >= 18) {
    console.log('Eres mayor de edad')
} else {
    console.log('Eres menor de edad')
}

const numero2 = -5

if (numero2 > 0) {
    console.log('Positivo')
} else {
    console.log('Negativo o cero')
}

const hora = 14

if (hora < 12) {
    console.log('Buenos días')
} else {
    console.log('Buenas tardes/noches')
}

// Con operadores lógicos
const usuario = 'admin'
const password = '1234'

if (usuario === 'admin' && password === '1234') {
    console.log('Acceso concedido')
} else {
    console.log('Acceso denegado')
}

console.log('');


// ============================================
// 4. ELSE IF (MÚLTIPLES CONDICIONES)
// ============================================

console.log('--- ELSE IF ---');
console.log(`
SINTAXIS:
if (condición1) {
    // Código si condición1 es true
} else if (condición2) {
    // Código si condición2 es true
} else if (condición3) {
    // Código si condición3 es true
} else {
    // Código si ninguna condición es true
}

- Evalúa condiciones en orden
- Ejecuta el PRIMER bloque que sea true
- else es opcional (caso por defecto)
`);

// Ejemplo: Calificaciones
const nota = 85

if (nota >= 90) {
    console.log('Calificación: A (Excelente)')
} else if (nota >= 80) {
    console.log('Calificación: B (Muy bien)')
} else if (nota >= 70) {
    console.log('Calificación: C (Bien)')
} else if (nota >= 60) {
    console.log('Calificación: D (Suficiente)')
} else {
    console.log('Calificación: F (Reprobado)')
}

// Ejemplo: Rango de edades
const edadPersona = 25

if (edadPersona < 13) {
    console.log('Niño')
} else if (edadPersona < 18) {
    console.log('Adolescente')
} else if (edadPersona < 60) {
    console.log('Adulto')
} else {
    console.log('Adulto mayor')
}

// Ejemplo: Horario del día
const horaActual = 15

if (horaActual < 6) {
    console.log('Madrugada')
} else if (horaActual < 12) {
    console.log('Mañana')
} else if (horaActual < 18) {
    console.log('Tarde')
} else {
    console.log('Noche')
}

// Ejemplo: Estaciones del año (mes)
const mes = 8  // Agosto

if (mes === 12 || mes === 1 || mes === 2) {
    console.log('Invierno')
} else if (mes >= 3 && mes <= 5) {
    console.log('Primavera')
} else if (mes >= 6 && mes <= 8) {
    console.log('Verano')
} else if (mes >= 9 && mes <= 11) {
    console.log('Otoño')
} else {
    console.log('Mes inválido')
}

console.log('');


// ============================================
// 5. IF ANIDADOS (NESTED IF)
// ============================================

console.log('--- IF ANIDADOS ---');
console.log(`
IF ANIDADOS:
- Un if dentro de otro if
- Útil para condiciones complejas
- ⚠️ No abusar: puede hacer código difícil de leer

SINTAXIS:
if (condición1) {
    if (condición2) {
        // Código si ambas son true
    }
}
`);

// Ejemplo 1: Acceso al concierto
const edadC = 20
const tieneTicket = true
const tieneID = true

console.log('Ejemplo 1: Acceso al concierto');
if (edadC >= 18) {
    console.log('  - Edad verificada ✓')

    if (tieneTicket) {
        console.log('  - Ticket verificado ✓')

        if (tieneID) {
            console.log('  - ID verificado ✓')
            console.log('  → ACCESO CONCEDIDO')
        } else {
            console.log('  → ACCESO DENEGADO: Falta ID')
        }
    } else {
        console.log('  → ACCESO DENEGADO: No tiene ticket')
    }
} else {
    console.log('  → ACCESO DENEGADO: Menor de edad')
}

// Ejemplo 2: Sistema de descuentos
const esCliente = true
const compraMinima = 150
const tieneCupon = true

console.log('\nEjemplo 2: Sistema de descuentos');
if (esCliente) {
    console.log('  - Cliente verificado ✓')

    if (compraMinima >= 100) {
        console.log('  - Compra mínima alcanzada ✓')

        if (tieneCupon) {
            console.log('  - Cupón aplicado ✓')
            console.log('  → Descuento: 30%')
        } else {
            console.log('  → Descuento: 15%')
        }
    } else {
        console.log('  → Sin descuento (compra < $100)')
    }
} else {
    console.log('  → Sin descuento (no es cliente)')
}

// Ejemplo 3: Clasificación de números
const num = 42

console.log('\nEjemplo 3: Clasificación de números');
if (num !== 0) {
    if (num > 0) {
        console.log('  - Número positivo')

        if (num % 2 === 0) {
            console.log('  - Es par')
        } else {
            console.log('  - Es impar')
        }
    } else {
        console.log('  - Número negativo')

        if (num % 2 === 0) {
            console.log('  - Es par')
        } else {
            console.log('  - Es impar')
        }
    }
} else {
    console.log('  - El número es cero')
}

// Ejemplo 4: Login con múltiples verificaciones
const username = 'admin'
const pass = '1234'
const isActive = true
const isVerified = true

console.log('\nEjemplo 4: Sistema de login');
if (username === 'admin') {
    if (pass === '1234') {
        if (isActive) {
            if (isVerified) {
                console.log('  → LOGIN EXITOSO')
            } else {
                console.log('  → Cuenta no verificada')
            }
        } else {
            console.log('  → Cuenta desactivada')
        }
    } else {
        console.log('  → Contraseña incorrecta')
    }
} else {
    console.log('  → Usuario no encontrado')
}

console.log('');


// ============================================
// 6. IF ANIDADOS VS OPERADORES LÓGICOS
// ============================================

console.log('--- IF ANIDADOS VS OPERADORES LÓGICOS ---');
console.log(`
MISMO RESULTADO, DIFERENTE SINTAXIS:

ANIDADO:
if (condición1) {
    if (condición2) {
        // código
    }
}

CON &&:
if (condición1 && condición2) {
    // código
}

✅ Usar && es más limpio y legible
`);

// Comparación
const edad3 = 20
const licencia = true

// ❌ IF ANIDADO (más verboso)
console.log('IF ANIDADO:');
if (edad3 >= 18) {
    if (licencia) {
        console.log('  Puede conducir')
    }
}

// ✅ CON && (más limpio)
console.log('\nCON && (mejor):');
if (edad3 >= 18 && licencia) {
    console.log('  Puede conducir')
}

// Ejemplo con 3 condiciones
const esEstudiante = true
const tieneDescuento = true
const compraMayor50 = true

// ❌ ANIDADO
if (esEstudiante) {
    if (tieneDescuento) {
        if (compraMayor50) {
            console.log('\nAnidado: Descuento aplicado')
        }
    }
}

// ✅ CON &&
if (esEstudiante && tieneDescuento && compraMayor50) {
    console.log('Con &&: Descuento aplicado')
}

console.log('');


// ============================================
// 7. ELSE IF VS IF ANIDADOS
// ============================================

console.log('--- ELSE IF VS IF ANIDADOS ---');
console.log(`
DIFERENCIA CLAVE:

ELSE IF:
- Condiciones EXCLUYENTES (mutuamente exclusivas)
- Solo ejecuta UNA opción
- Se detiene en la primera condición true

IF ANIDADOS:
- Condiciones DEPENDIENTES
- Una condición dentro de otra
- Verifica condiciones en cascada
`);

// ELSE IF (excluyentes)
console.log('ELSE IF (una sola opción):');
const puntos = 85

if (puntos >= 90) {
    console.log('  Oro')
} else if (puntos >= 70) {
    console.log('  Plata')  // ← Ejecuta esto
} else if (puntos >= 50) {
    console.log('  Bronce')  // ← NO ejecuta (ya entró en anterior)
} else {
    console.log('  Sin medalla')
}

// IF ANIDADOS (dependientes)
console.log('\nIF ANIDADOS (condiciones en cascada):');
const edadU = 25
const tieneExp = true
const tieneTitulo = true

if (edadU >= 18) {
    console.log('  - Edad: OK')

    if (tieneExp) {
        console.log('  - Experiencia: OK')

        if (tieneTitulo) {
            console.log('  - Título: OK')
            console.log('  → CONTRATADO')
        } else {
            console.log('  → Rechazado: Sin título')
        }
    } else {
        console.log('  → Rechazado: Sin experiencia')
    }
} else {
    console.log('  → Rechazado: Menor de edad')
}

console.log('');


// ============================================
// 8. SWITCH (ALTERNATIVA A ELSE IF)
// ============================================

console.log('--- SWITCH ---');
console.log(`
SINTAXIS:
switch (expresión) {
    case valor1:
        // código
        break;
    case valor2:
        // código
        break;
    default:
        // código si no coincide ningún case
}

⚠️ IMPORTANTE:
- Usa 'break' para salir del switch
- Sin break, ejecuta casos siguientes (fall-through)
- 'default' es opcional (como else)
`);

// Ejemplo 1: Día de la semana
const dia = 3

console.log('Ejemplo 1: Día de la semana');
switch (dia) {
    case 1:
        console.log('  Lunes')
        break
    case 2:
        console.log('  Martes')
        break
    case 3:
        console.log('  Miércoles')
        break
    case 4:
        console.log('  Jueves')
        break
    case 5:
        console.log('  Viernes')
        break
    case 6:
        console.log('  Sábado')
        break
    case 7:
        console.log('  Domingo')
        break
    default:
        console.log('  Día inválido')
}

// Ejemplo 2: Menú de opciones
const opcion = 'B'

console.log('\nEjemplo 2: Menú');
switch (opcion) {
    case 'A':
        console.log('  Opción A seleccionada')
        break
    case 'B':
        console.log('  Opción B seleccionada')
        break
    case 'C':
        console.log('  Opción C seleccionada')
        break
    default:
        console.log('  Opción no válida')
}

// Ejemplo 3: Agrupación de casos (fall-through intencional)
const mesNum = 2

console.log('\nEjemplo 3: Días por mes');
switch (mesNum) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('  31 días')
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('  30 días')
        break
    case 2:
        console.log('  28 o 29 días')
        break
    default:
        console.log('  Mes inválido')
}

// Ejemplo 4: Calificación con rangos (switch con true)
const notaExamen = 75

console.log('\nEjemplo 4: Calificación (switch con true)');
switch (true) {
    case notaExamen >= 90:
        console.log('  A - Excelente')
        break
    case notaExamen >= 80:
        console.log('  B - Muy bien')
        break
    case notaExamen >= 70:
        console.log('  C - Bien')
        break
    case notaExamen >= 60:
        console.log('  D - Suficiente')
        break
    default:
        console.log('  F - Reprobado')
}

console.log('');


// ============================================
// 9. OPERADOR TERNARIO
// ============================================

console.log('--- OPERADOR TERNARIO ---');
console.log(`
SINTAXIS:
condición ? valorSiTrue : valorSiFalse

EQUIVALENTE A:
if (condición) {
    return valorSiTrue
} else {
    return valorSiFalse
}

✅ Útil para asignaciones simples
⚠️ No abusar: puede dificultar lectura
`);

// Ejemplo 1: Asignación simple
const edadT = 20
const tipo = edadT >= 18 ? 'Adulto' : 'Menor'
console.log('Tipo:', tipo)

// Ejemplo 2: En función
function obtenerMensaje(hora) {
    return hora < 12 ? 'Buenos días' : 'Buenas tardes'
}
console.log('Mensaje:', obtenerMensaje(10))

// Ejemplo 3: Ternario anidado (cuidado!)
const puntuacion = 85
const nivel = puntuacion >= 90 ? 'Oro' :
    puntuacion >= 70 ? 'Plata' :
        puntuacion >= 50 ? 'Bronce' : 'Sin medalla'
console.log('Nivel:', nivel)

// Ejemplo 4: Con operadores lógicos
const usuario2 = { nombre: 'Juan', premium: true }
const descuento = usuario2.premium ? 20 : 0
console.log('Descuento:', descuento + '%')

// Ejemplo 5: En JSX/React (muy común)
const estaLogueado = true
const mensaje = estaLogueado ? 'Bienvenido' : 'Por favor inicia sesión'
console.log('Estado:', mensaje)

console.log('');


// ============================================
// 10. VALORES TRUTHY Y FALSY
// ============================================

console.log('--- VALORES TRUTHY Y FALSY ---');
console.log(`
VALORES FALSY (se evalúan como false):
- false
- 0
- "" (string vacío)
- null
- undefined
- NaN

TODO LO DEMÁS ES TRUTHY:
- true
- Números diferentes de 0
- Strings no vacíos
- Objetos {}
- Arrays []
- Funciones
`);

// Ejemplos
const valor1 = 0
if (valor1) {
    console.log('Valor1 es truthy')
} else {
    console.log('Valor1 es falsy (0)')  // ← Ejecuta esto
}

const valor2 = ""
if (valor2) {
    console.log('Valor2 es truthy')
} else {
    console.log('Valor2 es falsy (string vacío)')  // ← Ejecuta esto
}

const valor3 = "Hola"
if (valor3) {
    console.log('Valor3 es truthy (string no vacío)')  // ← Ejecuta esto
}

const valor4 = []
if (valor4) {
    console.log('Valor4 es truthy (array vacío es truthy)')  // ← Ejecuta esto
}

// Uso común: valores por defecto
const nombre = ""
const nombreFinal = nombre || "Anónimo"
console.log('Nombre final:', nombreFinal)  // "Anónimo"

const edad4 = 0
const edadFinal = edad4 || 18
console.log('Edad final:', edadFinal)  // 18 (cuidado: 0 es falsy)

// Mejor: usar ?? (nullish coalescing)
const edad5 = 0
const edadFinal2 = edad5 ?? 18
console.log('Edad final con ??:', edadFinal2)  // 0 (solo null/undefined son nullish)

console.log('');


// ============================================
// 11. BUENAS PRÁCTICAS
// ============================================

console.log('--- BUENAS PRÁCTICAS ---');
console.log(`
✅ BUENAS PRÁCTICAS:

1. Usar === en lugar de ==
2. Evitar anidaciones profundas (max 2-3 niveles)
3. Usar operadores lógicos (&&, ||) en lugar de anidar
4. Usar return anticipado para reducir anidaciones
5. Preferir switch para múltiples valores exactos
6. Usar ternario solo para asignaciones simples
7. Nombres descriptivos para condiciones complejas
8. Comentar lógica compleja
`);

// ❌ MAL: Anidación profunda
console.log('❌ MAL (anidación profunda):');
function verificarAcceso1(edad, ticket, id, premium) {
    if (edad >= 18) {
        if (ticket) {
            if (id) {
                if (premium) {
                    return 'Acceso VIP'
                } else {
                    return 'Acceso general'
                }
            } else {
                return 'Falta ID'
            }
        } else {
            return 'Sin ticket'
        }
    } else {
        return 'Menor de edad'
    }
}

// ✅ BIEN: Return anticipado (early return)
console.log('✅ BIEN (early return):');
function verificarAcceso2(edad, ticket, id, premium) {
    if (edad < 18) return 'Menor de edad'
    if (!ticket) return 'Sin ticket'
    if (!id) return 'Falta ID'

    return premium ? 'Acceso VIP' : 'Acceso general'
}

console.log(verificarAcceso2(20, true, true, true))

// ❌ MAL: Condición compleja sin claridad
function calcularPrecio1(edad, esEstudiante, esMiembro) {
    if ((edad >= 18 && edad <= 65 && !esEstudiante) || (esEstudiante && edad >= 12) || esMiembro) {
        return 100
    }
    return 50
}

// ✅ BIEN: Variables descriptivas
function calcularPrecio2(edad, esEstudiante, esMiembro) {
    const esAdultoRegular = edad >= 18 && edad <= 65 && !esEstudiante
    const esEstudianteValido = esEstudiante && edad >= 12
    const tieneDescuento = esAdultoRegular || esEstudianteValido || esMiembro

    return tieneDescuento ? 100 : 50
}

console.log('Precio:', calcularPrecio2(25, false, true))

console.log('');


// ============================================
// 12. EJEMPLOS PRÁCTICOS
// ============================================

console.log('--- EJEMPLOS PRÁCTICOS ---');

// Ejemplo 1: Validación de formulario
console.log('Ejemplo 1: Validación de formulario');
function validarFormulario(email, password, edad) {
    if (!email) {
        return 'Email es requerido'
    }

    if (!email.includes('@')) {
        return 'Email inválido'
    }

    if (!password) {
        return 'Contraseña es requerida'
    }

    if (password.length < 8) {
        return 'Contraseña debe tener al menos 8 caracteres'
    }

    if (edad < 18) {
        return 'Debes ser mayor de 18 años'
    }

    return 'Formulario válido'
}

console.log(validarFormulario('juan@email.com', '12345678', 25))

// Ejemplo 2: Sistema de precios con descuentos
console.log('\nEjemplo 2: Sistema de precios');
function calcularPrecioFinal(precioBase, cantidad, esCliente, tieneCupon) {
    let precioFinal = precioBase * cantidad

    // Descuento por cantidad
    if (cantidad >= 10) {
        precioFinal *= 0.9  // 10% descuento
        console.log('  - Descuento por cantidad: 10%')
    }

    // Descuento por ser cliente
    if (esCliente) {
        precioFinal *= 0.95  // 5% descuento adicional
        console.log('  - Descuento por cliente: 5%')
    }

    // Descuento por cupón
    if (tieneCupon) {
        precioFinal *= 0.85  // 15% descuento adicional
        console.log('  - Descuento por cupón: 15%')
    }

    return precioFinal.toFixed(2)
}

console.log('  Precio final: $' + calcularPrecioFinal(100, 10, true, true))

// Ejemplo 3: Clasificador de temperatura
console.log('\nEjemplo 3: Clasificador de temperatura');
function clasificarTemperatura(temp) {
    if (temp < 0) {
        return { nivel: 'Muy frío', color: 'azul', recomendacion: 'Usa abrigo pesado' }
    } else if (temp < 15) {
        return { nivel: 'Frío', color: 'celeste', recomendacion: 'Usa chaqueta' }
    } else if (temp < 25) {
        return { nivel: 'Templado', color: 'verde', recomendacion: 'Clima agradable' }
    } else if (temp < 35) {
        return { nivel: 'Cálido', color: 'naranja', recomendacion: 'Ropa ligera' }
    } else {
        return { nivel: 'Muy caliente', color: 'rojo', recomendacion: 'Mantente hidratado' }
    }
}

const clima = clasificarTemperatura(28)
console.log(`  ${clima.nivel} (${clima.color}): ${clima.recomendacion}`)

console.log('');


// ============================================
// RESUMEN FINAL
// ============================================

console.log('--- RESUMEN FINAL ---');
console.log(`
🎯 CONDICIONALES EN JAVASCRIPT:

1. IF BÁSICO:
   if (condición) { código }

2. IF...ELSE:
   if (condición) { código } else { código }

3. ELSE IF:
   if (cond1) { } else if (cond2) { } else { }

4. IF ANIDADOS:
   if (cond1) {
       if (cond2) { }
   }

5. SWITCH:
   switch (expr) {
       case valor: break;
       default:
   }

6. OPERADOR TERNARIO:
   condición ? valorTrue : valorFalse

7. VALORES FALSY:
   false, 0, "", null, undefined, NaN

8. VALORES TRUTHY:
   Todo lo demás

📊 CUÁNDO USAR CADA UNO:

┌─────────────────┬──────────────────────────────┐
│ IF/ELSE         │ Condiciones simples          │
│ ELSE IF         │ Múltiples opciones exclusivas│
│ IF ANIDADOS     │ Condiciones dependientes     │
│ SWITCH          │ Múltiples valores exactos    │
│ TERNARIO        │ Asignaciones simples         │
└─────────────────┴──────────────────────────────┘

✅ BUENAS PRÁCTICAS:
   - Usar === (estricto)
   - Evitar anidaciones profundas
   - Return anticipado
   - Variables descriptivas
   - Usar && y || en lugar de anidar
   - Comentar lógica compleja
   - Preferir switch para muchos casos
   - Ternario solo para lo simple

⚠️ EVITAR:
   - Más de 2-3 niveles de anidación
   - Ternarios anidados complejos
   - Condiciones largas sin claridad
   - Usar == en lugar de ===
`);

console.log('\n✅ Archivo de estudio creado correctamente');
console.log('📚 Consulta este archivo para dominar las condicionales en JavaScript');
