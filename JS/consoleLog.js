/* ============================================
   SCOPE LOCAL (Ámbito Local)
   ============================================
   - Son las variables declaradas dentro de una función
   - Solo podemos acceder a ellas dentro de la función
   - No existen fuera de la función
============================================ */

// ============================================
// EJEMPLO 1: SCOPE LOCAL BÁSICO
// ============================================
var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;  // 'numero' solo existe aquí dentro
    console.log(numero);         // imprime 3
}

obtenerNumeroLetras('Dan');
// console.log(numero);  // ❌ ERROR: numero is not defined (no existe fuera)


// ============================================
// EJEMPLO 2: MALA PRÁCTICA - console.log DENTRO
// ============================================
/* ❌ PROBLEMA: Solo puedes imprimir, no reutilizar el valor */

const calcularLetras_MalaPractica = (nombre) => {
    const cantidadLetras = nombre.length;
    console.log(cantidadLetras);  // solo imprime
    // No retorna nada (undefined)
};

calcularLetras_MalaPractica('Daniel');  // imprime: 6

// ❌ No puedes usar el valor para nada más:
const resultado = calcularLetras_MalaPractica('Daniel');
console.log('Resultado:', resultado);  // undefined
// const doble = resultado * 2;  // NaN (undefined * 2)


// ============================================
// EJEMPLO 3: BUENA PRÁCTICA - RETURN (Recomendado)
// ============================================
/* ✅ FLEXIBLE: Retornas el valor y decides fuera qué hacer */

const calcularLetras_BuenaPractica = (nombre) => {
    const cantidadLetras = nombre.length;
    return cantidadLetras;  // retorna el valor
    // No imprime nada, solo devuelve el resultado
};

// Ahora SÍ puedes reutilizar el valor:
const letras = calcularLetras_BuenaPractica('Daniel');
console.log('Letras:', letras);  // 6

// Puedes usarlo en operaciones:
const doble = letras * 2;
console.log('Doble:', doble);  // 12

// Puedes usarlo en condicionales:
if (letras > 5) {
    console.log('Nombre largo');
}

// Puedes usarlo directamente:
console.log('El nombre tiene', calcularLetras_BuenaPractica('Ana'), 'letras');  // 3


// ============================================
// EJEMPLO 4: COMPARACIÓN DIRECTA
// ============================================

// ❌ Con console.log dentro:
const sumar_ConLog = (a, b) => {
    console.log(a + b);
};

sumar_ConLog(5, 3);  // imprime: 8
// Pero no puedes hacer: const total = sumar_ConLog(5, 3) * 2;  ❌

// ✅ Con return:
const sumar_ConReturn = (a, b) => {
    return a + b;
};

const total = sumar_ConReturn(5, 3);  // 8
const triple = total * 3;             // 24
console.log('Triple:', triple);       // puedes usar el valor


// ============================================
// EJEMPLO 5: SCOPE LOCAL - Variables no escapan
// ============================================

const procesarNombre = (nombreCompleto) => {
    const nombre = nombreCompleto.toUpperCase();      // scope local
    const longitud = nombreCompleto.length;           // scope local
    const primeraLetra = nombreCompleto.charAt(0);    // scope local

    console.log('Dentro de la función:');
    console.log('- Nombre:', nombre);
    console.log('- Longitud:', longitud);
    console.log('- Primera letra:', primeraLetra);

    return {
        nombre,
        longitud,
        primeraLetra
    };
};

const info = procesarNombre('Daniel');
console.log('Fuera de la función:', info);

// ❌ Estas variables NO existen fuera:
// console.log(nombre);         // ERROR: nombre is not defined
// console.log(longitud);       // ERROR: longitud is not defined
// console.log(primeraLetra);   // ERROR: primeraLetra is not defined


// ============================================
// EJEMPLO 6: FUNCIÓN PURA vs FUNCIÓN CON EFECTOS
// ============================================

// ✅ FUNCIÓN PURA (solo calcula y retorna)
const calcularArea = (base, altura) => {
    return base * altura;
};

// Fuera decides qué hacer:
console.log('Área:', calcularArea(5, 10));           // imprimir
const area1 = calcularArea(5, 10);                   // guardar
const areaTotal = calcularArea(5, 10) + calcularArea(3, 8);  // operar

// ❌ FUNCIÓN CON EFECTOS (hace más de una cosa)
const calcularYMostrarArea = (base, altura) => {
    const area = base * altura;
    console.log('El área es:', area);  // efecto secundario
    return area;
};


// ============================================
// REGLA DE ORO (Buena Práctica)
// ============================================
/*
✅ Las funciones deben RETORNAR valores
✅ Fuera de la función decides qué hacer (imprimir, guardar, enviar, etc.)
✅ Esto hace tu código más flexible y reutilizable

❌ Evita poner console.log dentro de funciones de cálculo
❌ Solo usa console.log dentro si la función ES específicamente para mostrar
*/


// ============================================
// EJEMPLO 7: TU EJERCICIO MEJORADO
// ============================================

// Versión mejorada de tu función original:
const obtenerNumeroLetras_Mejorado = (nombre) => {
    return nombre.length;  // retorna el valor
};

// Ahora puedes hacer muchas cosas:
const letrasEnDan = obtenerNumeroLetras_Mejorado('Dan');
console.log('Dan tiene', letrasEnDan, 'letras');  // 3

const letrasEnDaniel = obtenerNumeroLetras_Mejorado('Daniel');
console.log('Daniel tiene', letrasEnDaniel, 'letras');  // 6

const diferencia = letrasEnDaniel - letrasEnDan;
console.log('Diferencia:', diferencia, 'letras');  // 3

// Uso directo en condicional:
if (obtenerNumeroLetras_Mejorado('Dan') < 5) {
    console.log('Nombre corto');
}