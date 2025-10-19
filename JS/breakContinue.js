/* ============================================
   BREAK y CONTINUE en Ciclos
   ============================================
   
   📌 BREAK:
   - Sirve para salir de bloques tipo Switch
   - También sirve para FORZAR la salida de un ciclo
   - Detiene completamente el ciclo cuando se ejecuta
   
   📌 CONTINUE:
   - Sirve para SALTAR a la siguiente iteración
   - No detiene el ciclo, solo omite el código restante de esa vuelta
   - Continúa con la siguiente iteración del ciclo
============================================ */


// ============================================
// 1. BREAK - Salir de un ciclo
// ============================================
/* 
   Break detiene el ciclo COMPLETAMENTE cuando se encuentra.
   Útil cuando queremos detener la búsqueda al encontrar algo.
*/

const nombres = ['Arturo', 'Andres', 'Alejandro', 'Roberto', 'Adrian', 'Antonio', 'Angel'];

console.log('--- EJEMPLO DE BREAK ---');
console.log('Verificando nombres que empiezan con "A"...\n');

for (let i = 0; i < nombres.length; i++) {
    // Si el primer caracter NO es 'A', detiene el ciclo
    if (nombres[i][0] !== 'A') {
        console.log('⛔ Alto! Hay un nombre que no empieza por la letra A:');
        console.log('   Nombre encontrado:', nombres[i]);
        console.log('   Deteniendo el ciclo con BREAK\n');
        break;  // ← Sale del ciclo inmediatamente
    }
    console.log('✅', nombres[i]);
}

console.log('Ciclo terminado (se detuvo en "Roberto")\n');
console.log('');


// ============================================
// 2. CONTINUE - Saltar a la siguiente iteración
// ============================================
/* 
   Continue omite el código restante de la iteración actual
   y pasa directamente a la siguiente vuelta del ciclo.
   Útil para filtrar elementos sin detener el ciclo.
*/

const invitados = ['Carlos', 'Christian', 'Christopher', 'Jorge', 'Estefania', 'Erika', 'Manuel'];

console.log('--- EJEMPLO DE CONTINUE ---');
console.log('Lista de invitados (excluyendo a Jorge):\n');

for (let i = 0; i < invitados.length; i++) {
    // Si el nombre es 'jorge', salta esta iteración
    if (invitados[i].toLowerCase() === 'jorge') {
        console.log('⏭️  Saltando a', invitados[i], '(con CONTINUE)');
        continue;  // ← Salta al siguiente elemento sin ejecutar el código de abajo
    }
    // Este console.log NO se ejecuta cuando es 'jorge'
    console.log('✅', invitados[i]);
}

console.log('\nCiclo terminado (Jorge fue omitido pero el ciclo continuó)');
console.log('');


// ============================================
// COMPARACIÓN: BREAK vs CONTINUE
// ============================================
console.log('--- COMPARACIÓN ---');
console.log(`
┌──────────────┬─────────────────────────────────────────┐
│ BREAK        │ CONTINUE                                │
├──────────────┼─────────────────────────────────────────┤
│ ⛔ DETIENE   │ ⏭️  SALTA                               │
│ el ciclo     │ a la siguiente iteración                │
│ completo     │                                         │
├──────────────┼─────────────────────────────────────────┤
│ Sale del     │ Omite el código restante                │
│ ciclo        │ de esa vuelta                           │
├──────────────┼─────────────────────────────────────────┤
│ No ejecuta   │ Continúa con las siguientes             │
│ más          │ iteraciones                             │
│ iteraciones  │                                         │
└──────────────┴─────────────────────────────────────────┘

EJEMPLO VISUAL:

Array: [1, 2, 3, 4, 5]

Con BREAK en 3:
  1 ✅ → 2 ✅ → 3 ⛔ BREAK (se detiene)
  Resultado: procesa solo [1, 2]

Con CONTINUE en 3:
  1 ✅ → 2 ✅ → 3 ⏭️ SKIP → 4 ✅ → 5 ✅
  Resultado: procesa [1, 2, 4, 5] (omite el 3)
`);


// ============================================
// CASOS DE USO COMUNES
// ============================================
console.log('--- CASOS DE USO ---');

// BREAK: Buscar un elemento y detener cuando lo encuentres
const numeros = [5, 12, 8, 130, 44];
let encontrado = false;

console.log('\nBuscando número mayor a 100...');
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 100) {
        console.log('✅ Encontrado:', numeros[i]);
        encontrado = true;
        break;  // Ya encontramos uno, no necesitamos seguir buscando
    }
}

// CONTINUE: Procesar solo elementos que cumplan condición
const edades = [12, 25, 17, 30, 16, 45, 19];

console.log('\nMayores de edad (>= 18):');
for (let i = 0; i < edades.length; i++) {
    if (edades[i] < 18) {
        continue;  // Salta menores de edad
    }
    console.log('✅', edades[i], 'años');
}

console.log('');


// ============================================
// RESUMEN
// ============================================
console.log('--- RESUMEN ---');
console.log(`
✅ BREAK:
   - Uso: Cuando quieres DETENER el ciclo
   - Ejemplo: Buscar algo y parar cuando lo encuentres
   - Efecto: Sale completamente del ciclo

✅ CONTINUE:
   - Uso: Cuando quieres OMITIR ciertos elementos
   - Ejemplo: Filtrar elementos sin detener el ciclo
   - Efecto: Salta a la siguiente iteración

⚠️ IMPORTANTE:
   - Ambos solo funcionan DENTRO de ciclos (for, while)
   - No se pueden usar fuera de ciclos
   - BREAK también funciona en switch
`);