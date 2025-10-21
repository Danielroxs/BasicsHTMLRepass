/* ============================================
   EXPRESIONES REGULARES (RegEx)
   ============================================
   
   Archivo de estudio para entender las expresiones
   regulares en JavaScript, sus patrones, métodos
   y casos de uso prácticos en front-end.
   
   📌 RegEx = Patrones para buscar/validar texto
============================================ */


// ============================================
// 1. ¿QUÉ ES UNA EXPRESIÓN REGULAR?
// ============================================

console.log('--- ¿QUÉ ES REGEX? ---');
console.log(`
EXPRESIÓN REGULAR (RegEx):
- Patrón para buscar, validar o manipular texto
- Muy útil en front-end para validar formularios
- Se usa con strings en JavaScript

SINTAXIS:
/patron/banderas

EJEMPLOS:
/abc/        → Busca "abc"
/\d+/        → Busca uno o más dígitos
/[a-z]/i     → Busca letras (case-insensitive)
`);

console.log('');


// ============================================
// 2. CREAR EXPRESIONES REGULARES
// ============================================

console.log('--- CREAR REGEX ---');

// Forma 1: Literal (más común)
const regex1 = /hola/
console.log('Literal:', regex1)  // /hola/
console.log('Tipo:', typeof regex1)  // "object"

// Forma 2: Constructor
const regex2 = new RegExp('hola')
console.log('Constructor:', regex2)  // /hola/

// Con variables (solo con constructor)
const patron = 'mundo'
const regex3 = new RegExp(patron)
console.log('Con variable:', regex3)  // /mundo/

console.log('');


// ============================================
// 3. BANDERAS (FLAGS)
// ============================================

console.log('--- BANDERAS ---');
console.log(`
BANDERAS PRINCIPALES:

g - global: Busca TODAS las coincidencias (no solo la primera)
i - ignore case: Ignora mayúsculas/minúsculas
m - multiline: ^ y $ funcionan por línea

OTRAS BANDERAS:
s - dotAll: . también coincide con saltos de línea
u - unicode: Soporte completo para Unicode
y - sticky: Busca desde lastIndex
`);

const texto = 'Hola Mundo HOLA mundo'

// Sin banderas (solo primera, case-sensitive)
console.log('Sin banderas:', texto.match(/hola/))  // ["Hola"]

// Con 'g' (global - todas, case-sensitive)
console.log('Con g:', texto.match(/hola/g))  // ["ola"]

// Con 'i' (case-insensitive)
console.log('Con i:', texto.match(/hola/i))  // ["Hola"]

// Con 'gi' (global + case-insensitive)
console.log('Con gi:', texto.match(/hola/gi))  // ["Hola", "HOLA"]

console.log('');


// ============================================
// 4. MÉTODOS PRINCIPALES
// ============================================

console.log('--- MÉTODOS PRINCIPALES ---');

const texto1 = 'Hola mundo, hola JavaScript'
const regex = /hola/gi

// 1. test() - Verifica si existe (retorna true/false)
console.log('test():', regex.test(texto1))  // true

// 2. exec() - Extrae información detallada
const resultado = /hola/i.exec(texto1)
console.log('exec():', resultado)  // ["Hola", index: 0, ...]

// 3. match() - Método de String, extrae coincidencias
console.log('match():', texto1.match(/hola/gi))  // ["Hola", "hola"]

// 4. search() - Método de String, retorna índice
console.log('search():', texto1.search(/mundo/))  // 5

// 5. replace() - Método de String, reemplaza texto
console.log('replace():', texto1.replace(/hola/gi, 'adiós'))
// "adiós mundo, adiós JavaScript"

// 6. split() - Método de String, divide por patrón
const texto2 = 'uno,dos;tres:cuatro'
console.log('split():', texto2.split(/[,;:]/))
// ["uno", "dos", "tres", "cuatro"]

console.log('');


// ============================================
// 5. CARACTERES ESPECIALES
// ============================================

console.log('--- CARACTERES ESPECIALES ---');
console.log(`
METACARACTERES:

.  → Cualquier caracter (excepto salto de línea)
\\d → Dígito (0-9)
\\D → No dígito
\\w → Alfanumérico (a-z, A-Z, 0-9, _)
\\W → No alfanumérico
\\s → Espacio en blanco (espacio, tab, salto)
\\S → No espacio en blanco
\\b → Límite de palabra
\\B → No límite de palabra

ESCAPAR CARACTERES ESPECIALES:
\\. \\* \\+ \\? \\[ \\] \\{ \\} \\( \\) \\^ \\$ \\| \\\\
`);

// Ejemplos
console.log('Ejemplos de caracteres especiales:');
console.log('Dígitos:', 'Tengo 25 años'.match(/\d+/g))  // ["25"]
console.log('Alfanuméricos:', 'abc_123'.match(/\w+/))  // ["abc_123"]
console.log('Espacios:', 'hola mundo'.match(/\s/g))  // [" "]

// Escapar punto literal
console.log('Punto literal:', 'archivo.txt'.match(/\./))  // ["."]
console.log('Cualquier caracter:', 'archivo.txt'.match(/./g))  // ["a","r","c",...]

console.log('');


// ============================================
// 6. CUANTIFICADORES
// ============================================

console.log('--- CUANTIFICADORES ---');
console.log(`
CUANTIFICADORES:

*  → 0 o más veces
+  → 1 o más veces
?  → 0 o 1 vez (opcional)
{n}   → Exactamente n veces
{n,}  → n o más veces
{n,m} → Entre n y m veces

EJEMPLOS:
/a*/     → "", "a", "aa", "aaa"
/a+/     → "a", "aa", "aaa" (al menos uno)
/a?/     → "", "a" (opcional)
/a{3}/   → "aaa" (exactamente 3)
/a{2,4}/ → "aa", "aaa", "aaaa"
`);

// Ejemplos prácticos
const texto3 = 'goool gol goooool'
console.log('o* (0 o más):', texto3.match(/go*l/g))  // ["gol", "gol", "gol"]
console.log('o+ (1 o más):', texto3.match(/go+l/g))  // ["goool", "gol", "goooool"]
console.log('o{2} (exactamente 2):', texto3.match(/go{2}l/g))  // ["gool"]
console.log('o{2,4} (entre 2 y 4):', texto3.match(/go{2,4}l/g))  // ["goool"]

// Validar formato
const telefono = '555-1234'
console.log('Teléfono válido:', /\d{3}-\d{4}/.test(telefono))  // true

console.log('');


// ============================================
// 7. CLASES DE CARACTERES
// ============================================

console.log('--- CLASES DE CARACTERES ---');
console.log(`
CLASES DE CARACTERES:

[abc]   → a, b, o c
[^abc]  → Cualquiera EXCEPTO a, b, c
[a-z]   → Letras minúsculas
[A-Z]   → Letras mayúsculas
[0-9]   → Dígitos
[a-zA-Z] → Letras (mayúsculas y minúsculas)
[a-zA-Z0-9] → Alfanuméricos

EJEMPLOS:
[aeiou]     → Vocales
[^aeiou]    → Consonantes
[0-9a-f]    → Dígitos hexadecimales
`);

// Ejemplos
const texto4 = 'Hola123'
console.log('Solo letras:', texto4.match(/[a-zA-Z]+/g))  // ["Hola"]
console.log('Solo números:', texto4.match(/[0-9]+/g))  // ["123"]
console.log('Vocales:', texto4.match(/[aeiou]/gi))  // ["o", "a"]

// Validar código hexadecimal
const color = '#FF5733'
console.log('Color hex válido:', /^#[0-9A-Fa-f]{6}$/.test(color))  // true

console.log('');


// ============================================
// 8. ANCLAS Y LÍMITES
// ============================================

console.log('--- ANCLAS Y LÍMITES ---');
console.log(`
ANCLAS:

^  → Inicio de string (o línea con flag m)
$  → Final de string (o línea con flag m)
\\b → Límite de palabra
\\B → No límite de palabra

EJEMPLOS:
/^Hola/   → String que EMPIEZA con "Hola"
/mundo$/  → String que TERMINA con "mundo"
/\\bcat\\b/ → Palabra completa "cat"
`);

// Ejemplos
console.log('Empieza con "Hola":', /^Hola/.test('Hola mundo'))  // true
console.log('Empieza con "Hola":', /^Hola/.test('Adiós Hola'))  // false

console.log('Termina con "mundo":', /mundo$/.test('Hola mundo'))  // true
console.log('Termina con "mundo":', /mundo$/.test('mundo Hola'))  // false

// Límite de palabra
const texto5 = 'cat catch scattered'
console.log('Palabra completa "cat":', texto5.match(/\bcat\b/g))  // ["cat"]
console.log('Contiene "cat":', texto5.match(/cat/g))  // ["cat", "cat", "cat"]

console.log('');


// ============================================
// 9. GRUPOS Y CAPTURA
// ============================================

console.log('--- GRUPOS Y CAPTURA ---');
console.log(`
GRUPOS:

(abc)     → Grupo de captura
(?:abc)   → Grupo sin captura
(a|b)     → Alternancia (a O b)

EJEMPLOS:
/(\\d{3})-(\\d{4})/  → Captura código de área y número
/(?:http|https):\\/\\// → http:// o https:// sin captura
`);

// Grupo de captura
const email = 'Contacto: dan@email.com'
const regex4 = /(\w+)@(\w+\.\w+)/
const resultado2 = email.match(regex4)

console.log('Email completo:', resultado2[0])  // "dan@email.com"
console.log('Usuario:', resultado2[1])  // "dan"
console.log('Dominio:', resultado2[2])  // "email.com"

// Alternancia
const texto6 = 'Me gusta JavaScript y Python'
console.log('Lenguajes:', texto6.match(/JavaScript|Python|Java/g))
// ["JavaScript", "Python"]

// Grupo sin captura (más eficiente)
const url = 'https://example.com'
console.log('URL válida:', /^(?:http|https):\/\//.test(url))  // true

console.log('');


// ============================================
// 10. LOOKAHEAD Y LOOKBEHIND
// ============================================

console.log('--- LOOKAHEAD Y LOOKBEHIND ---');
console.log(`
LOOKAHEAD (mirar adelante):

(?=...)   → Lookahead positivo (debe seguir)
(?!...)   → Lookahead negativo (no debe seguir)

LOOKBEHIND (mirar atrás):

(?<=...)  → Lookbehind positivo (debe preceder)
(?<!...)  → Lookbehind negativo (no debe preceder)

EJEMPLOS:
/\\d(?= pesos)/     → Número seguido de " pesos"
/\\d(?! pesos)/     → Número NO seguido de " pesos"
/(?<=\\$)\\d+/      → Número precedido por $
/(?<!\\$)\\d+/      → Número NO precedido por $
`);

// Lookahead positivo
const texto7 = 'Tengo 100 pesos y 50 dólares'
console.log('Número antes de "pesos":', texto7.match(/\d+(?= pesos)/))  // ["100"]

// Lookahead negativo
console.log('Número NO antes de "pesos":', texto7.match(/\d+(?! pesos)/g))  // ["10", "5"]

// Lookbehind positivo
const texto8 = 'Precio: $100 y 50 unidades'
console.log('Número después de $:', texto8.match(/(?<=\$)\d+/))  // ["100"]

console.log('');


// ============================================
// 11. VALIDACIONES COMUNES EN FRONT-END
// ============================================

console.log('--- VALIDACIONES COMUNES ---');

// 1. Validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

console.log('Email válido:', validarEmail('dan@email.com'))  // true
console.log('Email inválido:', validarEmail('email-invalido'))  // false

// 2. Validar teléfono (formato: 555-123-4567)
function validarTelefono(tel) {
    const regex = /^\d{3}-\d{3}-\d{4}$/
    return regex.test(tel)
}

console.log('Teléfono válido:', validarTelefono('555-123-4567'))  // true
console.log('Teléfono inválido:', validarTelefono('1234567890'))  // false

// 3. Validar contraseña fuerte
// Mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número
function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    return regex.test(password)
}

console.log('Password fuerte:', validarPassword('Password123'))  // true
console.log('Password débil:', validarPassword('password'))  // false

// 4. Validar URL
function validarURL(url) {
    const regex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b/
    return regex.test(url)
}

console.log('URL válida:', validarURL('https://example.com'))  // true
console.log('URL inválida:', validarURL('no-es-url'))  // false

// 5. Validar código postal (5 dígitos)
function validarCP(cp) {
    const regex = /^\d{5}$/
    return regex.test(cp)
}

console.log('CP válido:', validarCP('12345'))  // true
console.log('CP inválido:', validarCP('1234'))  // false

// 6. Validar nombre (solo letras y espacios)
function validarNombre(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
    return regex.test(nombre)
}

console.log('Nombre válido:', validarNombre('Juan Pérez'))  // true
console.log('Nombre inválido:', validarNombre('Juan123'))  // false

console.log('');


// ============================================
// 12. EXTRAER INFORMACIÓN
// ============================================

console.log('--- EXTRAER INFORMACIÓN ---');

// Extraer todos los números
const texto9 = 'Tengo 25 años, peso 70 kg y mido 175 cm'
const numeros = texto9.match(/\d+/g)
console.log('Números:', numeros)  // ["25", "70", "175"]

// Extraer emails
const texto10 = 'Contactos: juan@email.com, maria@test.com'
const emails = texto10.match(/[\w.-]+@[\w.-]+\.\w+/g)
console.log('Emails:', emails)  // ["juan@email.com", "maria@test.com"]

// Extraer hashtags
const texto11 = 'Me gusta #JavaScript #CSS #HTML'
const hashtags = texto11.match(/#\w+/g)
console.log('Hashtags:', hashtags)  // ["#JavaScript", "#CSS", "#HTML"]

// Extraer menciones (@usuario)
const texto12 = 'Hola @dan y @maria'
const menciones = texto12.match(/@\w+/g)
console.log('Menciones:', menciones)  // ["@dan", "@maria"]

// Extraer URLs
const texto13 = 'Visita https://example.com y http://test.com'
const urls = texto13.match(/https?:\/\/[\w.-]+\.\w+/g)
console.log('URLs:', urls)  // ["https://example.com", "http://test.com"]

console.log('');


// ============================================
// 13. REEMPLAZAR TEXTO
// ============================================

console.log('--- REEMPLAZAR TEXTO ---');

// Reemplazo simple
const texto14 = 'Hola mundo, hola JavaScript'
console.log('Reemplazar primera:', texto14.replace(/hola/i, 'Adiós'))
// "Adiós mundo, hola JavaScript"

console.log('Reemplazar todas:', texto14.replace(/hola/gi, 'Adiós'))
// "Adiós mundo, Adiós JavaScript"

// Reemplazo con función
const texto15 = 'tengo 100 pesos y 50 dólares'
const resultado3 = texto15.replace(/\d+/g, (numero) => {
    return parseInt(numero) * 2
})
console.log('Duplicar números:', resultado3)
// "tengo 200 pesos y 100 dólares"

// Usar grupos de captura en reemplazo
const fecha = '2025-10-21'
const fechaFormateada = fecha.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1')
console.log('Fecha formateada:', fechaFormateada)  // "21/10/2025"

// Capitalizar palabras
const texto16 = 'hola mundo javascript'
const capitalizado = texto16.replace(/\b\w/g, (letra) => letra.toUpperCase())
console.log('Capitalizado:', capitalizado)  // "Hola Mundo Javascript"

console.log('');


// ============================================
// 14. EJEMPLO PRÁCTICO: VALIDADOR DE FORMULARIO
// ============================================

console.log('--- VALIDADOR DE FORMULARIO ---');

function validarFormulario(datos) {
    const errores = []

    // Validar nombre (solo letras y espacios)
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(datos.nombre)) {
        errores.push('Nombre inválido (solo letras)')
    }

    // Validar email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
        errores.push('Email inválido')
    }

    // Validar teléfono (10 dígitos)
    if (!/^\d{10}$/.test(datos.telefono)) {
        errores.push('Teléfono inválido (10 dígitos)')
    }

    // Validar edad (número entre 1-120)
    if (!/^(?:[1-9]|[1-9]\d|1[01]\d|120)$/.test(datos.edad)) {
        errores.push('Edad inválida (1-120)')
    }

    // Validar contraseña (min 8, 1 mayúscula, 1 número)
    if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(datos.password)) {
        errores.push('Contraseña débil (min 8 caracteres, 1 mayúscula, 1 número)')
    }

    return {
        valido: errores.length === 0,
        errores: errores
    }
}

// Probar validador
const formulario1 = {
    nombre: 'Juan Pérez',
    email: 'juan@email.com',
    telefono: '5551234567',
    edad: '25',
    password: 'Password123'
}

const formulario2 = {
    nombre: 'Juan123',
    email: 'email-invalido',
    telefono: '123',
    edad: '200',
    password: 'pass'
}

console.log('Formulario válido:', validarFormulario(formulario1))
// { valido: true, errores: [] }

console.log('Formulario inválido:', validarFormulario(formulario2))
// { valido: false, errores: [...] }

console.log('');


// ============================================
// 15. TABLA DE REFERENCIA RÁPIDA
// ============================================

console.log('--- TABLA DE REFERENCIA ---');
console.log(`
┌────────────────┬──────────────────────────────────────┐
│ PATRÓN         │ DESCRIPCIÓN                          │
├────────────────┼──────────────────────────────────────┤
│ .              │ Cualquier caracter                   │
│ \\d             │ Dígito (0-9)                         │
│ \\w             │ Alfanumérico (a-z, A-Z, 0-9, _)      │
│ \\s             │ Espacio en blanco                    │
│ [abc]          │ a, b, o c                            │
│ [^abc]         │ Cualquiera EXCEPTO a, b, c           │
│ [a-z]          │ Rango de letras                      │
│ ^              │ Inicio de string                     │
│ $              │ Final de string                      │
│ *              │ 0 o más veces                        │
│ +              │ 1 o más veces                        │
│ ?              │ 0 o 1 vez (opcional)                 │
│ {n}            │ Exactamente n veces                  │
│ {n,m}          │ Entre n y m veces                    │
│ (abc)          │ Grupo de captura                     │
│ (?:abc)        │ Grupo sin captura                    │
│ (a|b)          │ a O b                                │
│ (?=...)        │ Lookahead positivo                   │
│ (?!...)        │ Lookahead negativo                   │
└────────────────┴──────────────────────────────────────┘

BANDERAS:
g - global
i - ignore case
m - multiline

MÉTODOS:
test()    → true/false
exec()    → información detallada
match()   → array de coincidencias
search()  → índice de coincidencia
replace() → reemplazar texto
split()   → dividir string
`);


// ============================================
// RESUMEN FINAL
// ============================================

console.log('--- RESUMEN FINAL ---');
console.log(`
🎯 EXPRESIONES REGULARES EN JAVASCRIPT:

1. CREAR:
   /patron/banderas  o  new RegExp('patron', 'banderas')

2. BANDERAS:
   g - global (todas las coincidencias)
   i - ignore case (mayúsculas/minúsculas)
   m - multiline (por línea)

3. MÉTODOS:
   regex.test(str)      → true/false
   regex.exec(str)      → información detallada
   str.match(regex)     → array de coincidencias
   str.replace(regex)   → reemplazar
   str.split(regex)     → dividir

4. CARACTERES ESPECIALES:
   \\d → dígito    \\w → alfanumérico    \\s → espacio
   .  → cualquier  ^  → inicio          $  → final

5. CUANTIFICADORES:
   * → 0 o más    + → 1 o más    ? → opcional
   {n} → exactamente n    {n,m} → entre n y m

6. GRUPOS:
   (abc) → captura    (?:abc) → sin captura    (a|b) → alternancia

7. VALIDACIONES COMUNES:
   Email: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
   Teléfono: /^\\d{3}-\\d{3}-\\d{4}$/
   Password: /^(?=.*[A-Z])(?=.*\\d).{8,}$/

8. CASOS DE USO EN FRONT-END:
   ✅ Validar formularios
   ✅ Extraer información (emails, URLs, números)
   ✅ Formatear texto
   ✅ Buscar y reemplazar

⚠️ IMPORTANTE:
   - Usa /i para ignorar mayúsculas/minúsculas
   - Usa /g para encontrar todas las coincidencias
   - Escapa caracteres especiales con \\
   - Prueba tus regex en regex101.com
`);

console.log('\n✅ Archivo de estudio creado correctamente');
console.log('📚 Consulta este archivo para entender RegEx en JavaScript');
console.log('🔍 Practica en: https://regex101.com');
