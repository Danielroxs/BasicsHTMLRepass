function saludo(nombre) {
    console.log(`Hola, ${nombre}`);
}

saludo("Daniel");  // ✅ Funciona - pasas el string directamente
// Resultado: Hola, Daniel

// ================================================ //

function saludo(nombre) {
    console.log(`Hola, ${nombre}`);
}

// ================================================ //

const miNombre = "Daniel";
saludo(miNombre);  // ✅ Funciona - pasas la variable
// Resultado: Hola, Daniel

// ================================================ //

function saludo(nombre) {
    console.log(`Hola, ${nombre}`);
}

saludo("Da" + "niel");           // ✅ Funciona - concatenación
saludo(miNombre.toUpperCase());  // ✅ Funciona - método
saludo(2 + 2);                   // ✅ Funciona - operación
// Resultado: Hola, DANIEL y Hola, 4

// ================================================ //

function obtenerNombre() {
    return "Daniel";
}

function saludo(nombre) {
    console.log(`Hola, ${nombre}`);
}

saludo(obtenerNombre());  // ✅ Funciona - resultado de función
// Resultado: Hola, Daniel

// ================================================ //

function ejecutar(callback, mensaje) {
    callback(mensaje);  // ejecuta la función que le pasaste
}

ejecutar(console.log, "Hola mundo");  // ✅ Funciona
// Resultado: Hola mundo

// ================================================ //

function saludo(nombre = "Invitado") {
    console.log(`Hola, ${nombre}`);
}

saludo();            // Resultado: Hola, Invitado
saludo("Daniel");    // Resultado: Hola, Daniel

// ================================================ //

function saludarCompleto(nombre, apellido) {
    console.log(`Hola, ${nombre} ${apellido}`);
}

saludarCompleto("Daniel", "García"); // Resultado: Hola, Daniel García

/* 
Parámetro:
Es una variable que se declara en la definición de una función. Representa un valor que la función espera recibir cuando se llama. Ejemplo: en function saludo(nombre), nombre es un parámetro.

Argumento:
Es el valor real que se pasa a la función cuando la llamas. Ejemplo: en saludo("Daniel"), "Daniel" es el argumento.

Resumen:

Parámetro = variable en la definición de la función
Argumento = valor que se pasa al llamar la función
*/

/* 
Resumen rápido:
Puedes pasar:

✅ Strings literales: "Daniel"
✅ Variables: miNombre
✅ Números: 42
✅ Expresiones: 2 + 2
✅ Resultados de funciones: obtenerNombre()
✅ Objetos: { nombre: "Daniel" }
✅ Arrays: [1, 2, 3]
✅ Otras funciones: console.log
*/

/* 
function saludo(nombre) {
    console.log(`Hola, ${nombre}`);
}

// Todas estas formas funcionan:
saludo("Daniel");                    // string directo
saludo(miNombre);                    // variable
saludo("Dan" + "iel");              // expresión
saludo(obtenerNombre());            // función
saludo(prompt("¿Tu nombre?"));      // input del usuario
*/

/* 
Single Responsibility Principle (SRP)
También se conoce como: "Una función, una tarea" o "Separación de responsabilidades"
*/