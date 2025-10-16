const nombres = ['Carlos', 'Daniel', 'Jose', 'Luigui'];

/*
  📌 Ciclo for (JavaScript)
  Repite un bloque de código mientras se cumpla una condición.

  Sintaxis:
  for (expresion1; expresion2; expresion3) {
    // bloque de código
  }

  Expresión 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
  Expresión 2: Una condición; mientras sea true se ejecutará el bloque de código.
  Expresión 3: Se ejecuta siempre después de cada iteración del bloque de código.
*/

for (let i = 0; i < nombres.length; i++) { // i = i + 5
    console.log(nombres[i])
}