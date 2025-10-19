/* ============================================
   CICLOS WHILE y DO-WHILE
   ============================================
   
   📌 WHILE:
   - Evalúa la condición ANTES de ejecutar el código
   - Si la condición es false desde el inicio, NO se ejecuta ni una vez
   - Más simple que FOR (solo necesita una condición)
   
   📌 DO-WHILE:
   - Ejecuta el código PRIMERO, luego evalúa la condición
   - Se ejecuta AL MENOS UNA VEZ (incluso si la condición es false)
   - Útil cuando necesitas que el código se ejecute mínimo una vez
============================================ */


// ============================================
// 1. CICLO WHILE
// ============================================
/* 
   ESTRUCTURA:
   while (condición) {
       // código a ejecutar
       // actualización del contador
   }
   
   ⚠️ IMPORTANTE: Debes actualizar el contador manualmente
                   o el ciclo será INFINITO
*/

console.log('--- CICLO WHILE ---');
console.log('Contando del 0 al 10:\n');

let contador = 0;                // 1. Inicialización (antes del ciclo)
while (contador <= 10) {         // 2. Condición (se evalúa ANTES de cada iteración)
    console.log(contador);       // 3. Código a ejecutar
    contador++;                  // 4. Actualización (IMPORTANTE para evitar ciclo infinito)
}

console.log('Ciclo terminado. Contador final:', contador);
console.log('');


// ============================================
// 2. CICLO DO-WHILE
// ============================================
/* 
   ESTRUCTURA:
   do {
       // código a ejecutar
       // actualización del contador
   } while (condición);
   
   ⚠️ DIFERENCIA CLAVE: El código se ejecuta PRIMERO,
                        luego se evalúa la condición
*/

console.log('--- CICLO DO-WHILE ---');
console.log('Intentando contar del 100 al 10:\n');

let i = 100;                     // Inicialización: i = 100
do {
    console.log(i);              // Se ejecuta PRIMERO (imprime 100)
    i++;                         // i pasa a ser 101
} while (i <= 10);               // Luego evalúa: ¿101 <= 10? → false

console.log('Ciclo terminado. Valor de i:', i);
console.log('⚠️ Nota: Se ejecutó UNA vez aunque la condición era falsa desde el inicio');
console.log('');


// ============================================
// COMPARACIÓN: WHILE vs DO-WHILE
// ============================================
console.log('--- COMPARACIÓN ---');
console.log(`
┌─────────────────┬─────────────────────────────────────┐
│ WHILE           │ DO-WHILE                            │
├─────────────────┼─────────────────────────────────────┤
│ Evalúa ANTES    │ Evalúa DESPUÉS                      │
│ de ejecutar     │ de ejecutar                         │
├─────────────────┼─────────────────────────────────────┤
│ Puede NO        │ Se ejecuta AL MENOS                 │
│ ejecutarse      │ UNA VEZ                             │
│ ninguna vez     │                                     │
├─────────────────┼─────────────────────────────────────┤
│ while (cond) {  │ do {                                │
│   código        │   código                            │
│ }               │ } while (cond);                     │
└─────────────────┴─────────────────────────────────────┘
`);


// ============================================
// EJEMPLO PRÁCTICO: Diferencia clave
// ============================================
console.log('--- EJEMPLO DE LA DIFERENCIA ---');

// WHILE: No se ejecuta si la condición es false desde el inicio
console.log('\nWHILE con condición falsa desde el inicio:');
let x = 10;
while (x < 5) {
    console.log('Este mensaje NO aparecerá');
    x++;
}
console.log('✅ WHILE no se ejecutó porque x=10 no cumple x<5');

// DO-WHILE: Se ejecuta UNA vez aunque la condición sea false
console.log('\nDO-WHILE con condición falsa desde el inicio:');
let y = 10;
do {
    console.log('⚠️ Este mensaje SÍ aparece (y =', y + ')');
    y++;
} while (y < 5);
console.log('✅ DO-WHILE se ejecutó UNA vez antes de evaluar la condición');
console.log('');


// ============================================
// COMPARACIÓN: WHILE vs FOR
// ============================================
console.log('--- WHILE vs FOR ---');
console.log(`
WHILE:
  - Solo tiene condición
  - Más flexible
  - Útil cuando no sabes cuántas iteraciones necesitas
  - Ejemplo: while (usuario !== "salir")

FOR:
  - Tiene inicialización, condición y actualización juntas
  - Más compacto
  - Útil cuando sabes cuántas iteraciones necesitas
  - Ejemplo: for (let i = 0; i < 10; i++)
`);


// ============================================
// CASOS DE USO
// ============================================
console.log('--- CASOS DE USO ---');

// WHILE: Menú que se repite hasta que el usuario elija salir
console.log('\nEjemplo WHILE - Procesamiento hasta cumplir condición:');
let numero = 1;
let suma = 0;
while (suma < 100) {
    suma += numero;
    console.log(`Sumando ${numero}: suma total = ${suma}`);
    numero++;
}
console.log('✅ Total alcanzado:', suma);

// DO-WHILE: Pedir datos al usuario (debe ejecutarse al menos una vez)
console.log('\nEjemplo DO-WHILE - Validación que debe ejecutarse mínimo una vez:');
let intento = 0;
let numeroSecreto = 7;
let numeroUsuario;

do {
    intento++;
    numeroUsuario = Math.floor(Math.random() * 10) + 1; // Simulando entrada de usuario
    console.log(`Intento ${intento}: Usuario ingresó ${numeroUsuario}`);

    if (numeroUsuario === numeroSecreto) {
        console.log('🎉 ¡Correcto!');
    } else {
        console.log('❌ Incorrecto, intenta de nuevo');
    }
} while (numeroUsuario !== numeroSecreto);

console.log('✅ Juego terminado en', intento, 'intentos');
console.log('');


// ============================================
// ADVERTENCIA: CICLOS INFINITOS
// ============================================
console.log('--- ⚠️ CUIDADO CON CICLOS INFINITOS ---');
console.log(`
❌ CICLO INFINITO (NO EJECUTAR):

let contador = 0;
while (contador < 10) {
    console.log(contador);
    // ⚠️ OLVIDASTE contador++ 
    // El ciclo NUNCA termina porque contador siempre será 0
}

✅ SOLUCIÓN:
Siempre actualiza tu contador/condición dentro del ciclo:

let contador = 0;
while (contador < 10) {
    console.log(contador);
    contador++;  // ← IMPORTANTE
}
`);


// ============================================
// RESUMEN
// ============================================
console.log('--- RESUMEN ---');
console.log(`
✅ WHILE:
   - Evalúa condición ANTES
   - Puede NO ejecutarse
   - Uso: Cuando no sabes cuántas iteraciones necesitas
   - Ejemplo: while (hayDatos) { procesar() }

✅ DO-WHILE:
   - Evalúa condición DESPUÉS
   - Se ejecuta AL MENOS UNA VEZ
   - Uso: Menús, validaciones que deben ejecutarse mínimo una vez
   - Ejemplo: do { pedirOpcion() } while (opcion !== "salir")

✅ FOR:
   - Todo junto (inicialización, condición, actualización)
   - Más estructurado
   - Uso: Cuando sabes cuántas iteraciones necesitas
   - Ejemplo: for (let i = 0; i < 10; i++) { ... }

⚠️ IMPORTANTE:
   - SIEMPRE actualiza el contador en WHILE/DO-WHILE
   - Sin actualización = CICLO INFINITO ♾️
   - DO-WHILE termina con punto y coma (;)
`);