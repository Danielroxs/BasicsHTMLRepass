/* ============================================
   * MÉTODOS Y PROPIEDADES DE STRINGS *
   ============================================
   Demostración de métodos y propiedades de strings en JavaScript.
   
   📌// * PROPIEDADES:
   - .length: Devuelve el número de caracteres en una cadena de texto
   
   📌// * MÉTODOS DE BÚSQUEDA:
   - .indexOf(): Devuelve el índice de la primera aparición de un carácter o subcadena
   - .lastIndexOf(): Devuelve el índice de la última aparición de un carácter o subcadena
   
   📌// * MÉTODOS DE MANIPULACIÓN:
   - .slice(): Retorna un fragmento de una cadena de texto, sin modificar la original
   - .replace(): Devuelve una nueva cadena donde se reemplaza un valor por otro
   - .split(): Convierte una cadena de texto en un arreglo, usando un separador
   
   📌// * MÉTODOS DE TRANSFORMACIÓN:
   - .toLowerCase(): Convierte todos los caracteres a minúsculas
   - .toUpperCase(): Convierte todos los caracteres a mayúsculas
   
   Nota: Estos métodos son útiles para comparar cadenas sin importar el caso de las letras.
============================================ */


// ============================================
//* 1.PROPIEDAD .length
// ============================================
// Devuelve el número de caracteres en una cadena de texto

const texto = 'Hola soy Daniel';
console.log('--- .length (PROPIEDAD) ---');
console.log(texto.length);  // 15
console.log('Nota: Las propiedades NO llevan paréntesis ()');
console.log('');


// ============================================
//* 2. MÉTODOS .indexOf() y .lastIndexOf()
// ============================================
// Devuelven el índice del primer/último carácter especificado

const texto1 = 'Hola soy Daniel';

console.log('--- .indexOf() y .lastIndexOf() ---');
console.log('Texto:', texto1);
console.log('Primera "o":', texto1.toLowerCase().indexOf('o'));      // 1
console.log('Última "o":', texto1.lastIndexOf('o'));                 // 5
console.log('Nota: Puedes encadenar métodos (method chaining)');
console.log('');


// ============================================
//* 3. MÉTODO .slice()
// ============================================
// Retorna un fragmento de una cadena de texto
// Parámetros:
//   1er: índice desde donde queremos cortar
//   2do (opcional): índice hasta donde queremos cortar

const texto3 = 'rara Hola soy Fer!';

console.log('--- .slice() - Ejemplo 1 ---');
console.log('Texto:', texto3);

const indice = texto3.indexOf('F');
const ultimoIndice = texto3.lastIndexOf('r');

console.log('Desde "F" hasta última "r":', texto3.slice(indice, ultimoIndice + 1));
// Nota: +1 para incluir el último caracter (Fe → Fer)
console.log('Original no cambia:', texto3);  // No muta la cadena
console.log('');

// Ejemplo 2: Usando índices negativos
const cadena = 'Hola yo soy Carlos';

console.log('--- .slice() - Ejemplo 2 (índices negativos) ---');
console.log('Texto:', cadena);

// Índices negativos cuentan desde el final
const cadenaNueva = cadena.slice(-6);  // Sin 2do parámetro = hasta el final
console.log('Últimos 6 caracteres:', cadenaNueva);  // 'Carlos'

// ⚠️ Importante: Para llegar hasta el final, omite el 2do parámetro
// cadena.slice(-6, -1) → 'Carlo' (excluye el último)
// cadena.slice(-6)     → 'Carlos' ✅ (hasta el final)
console.log('');


// ============================================
//* 4. MÉTODO .replace()
// ============================================
// Devuelve una cadena de texto donde reemplaza un valor por otro
// Parámetros:
//   1er: el texto que queremos reemplazar
//   2do: el texto que queremos poner

const nuevoTexto = 'Hola yo soy Fer';

console.log('--- .replace() ---');
console.log('Original:', nuevoTexto);
console.log('Reemplazado:', nuevoTexto.replace('Fer', 'Dan'));  // 'Hola yo soy Dan'
console.log('Nota: Solo reemplaza la primera aparición');
console.log('');


// ============================================
//* 5. MÉTODO .split()
// ============================================
// Convierte una cadena de texto en un arreglo
// Parámetro: El carácter que funcionará como separador

const nuevoTexto2 = 'Hola yo soy Luis';

console.log('--- .split() ---');
console.log('Original:', nuevoTexto2);
console.log('Dividido por espacios:', nuevoTexto2.split(' '));
// Resultado: ['Hola', 'yo', 'soy', 'Luis']
console.log('');


// ============================================
//* 6. MÉTODOS .toUpperCase() y .toLowerCase()
// ============================================
// Devuelven una cadena de texto en mayúsculas/minúsculas

console.log('--- .toUpperCase() y .toLowerCase() ---');
console.log('Original:', cadena);
console.log('Mayúsculas:', cadena.toUpperCase());         // 'HOLA YO SOY CARLOS'
console.log('Minúsculas:', cadena.toLowerCase());         // 'hola yo soy carlos'
console.log('Útil para: Comparaciones sin importar mayúsculas/minúsculas');
console.log('');


// ============================================
//! RESUMEN DE CONCEPTOS CLAVE
// ============================================
console.log('--- RESUMEN ---');
console.log(`
✅ PROPIEDADES vs MÉTODOS:
   - Propiedades: NO llevan paréntesis → .length
   - Métodos: SÍ llevan paréntesis → .toUpperCase()

✅ INMUTABILIDAD:
   - Los métodos de strings NO modifican el original
   - Siempre retornan una nueva cadena

✅ METHOD CHAINING:
   - Puedes encadenar métodos → .toLowerCase().indexOf('x')

✅ ÍNDICES NEGATIVOS en .slice():
   - Cuentan desde el final
   - Omite el 2do parámetro para llegar hasta el final
`);
