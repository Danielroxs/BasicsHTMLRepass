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


var numero = 1;

var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;
    console.log(`${nombre} tiene ${numero} letras`);

    var funcionAnidada = () => {
        console.log(numero);
    };
    funcionAnidada();
};

obtenerNumeroLetras('Alex');


// console.log(numero);
// ============================================
// EJEMPLO 2: SCOPE LOCAL AVANZADO
// ============================================
// Las variables locales no afectan variables externas con el mismo nombre

var numero = 10; // Variable global

var mostrarNumeroLocal = () => {
    var numero = 5; // Variable local, diferente de la global
    console.log('Dentro de la función:', numero); // imprime 5
}

mostrarNumeroLocal();
console.log('Fuera de la función:', numero); // imprime 10

// ============================================
// EJEMPLO 3: SCOPE LOCAL EN FUNCIONES ANIDADAS
// ============================================

var funcionExterna = () => {
    var mensaje = 'Hola desde la función externa';

    var funcionInterna = () => {
        var mensajeInterno = 'Hola desde la función interna';
        console.log(mensaje); // Puede acceder a 'mensaje' de la función externa
        console.log(mensajeInterno); // Puede acceder a 'mensajeInterno'
    }

    funcionInterna();
    // console.log(mensajeInterno); // Error: mensajeInterno no existe aquí
}

funcionExterna();

// ============================================
// EJEMPLO 4: ORDEN DE BÚSQUEDA (SCOPE CHAIN)
// ============================================
/* JavaScript busca variables en este orden:
   1. PRIMERO: Scope local (dentro de la función)
   2. SEGUNDO: Scope del padre (si está anidada)
   3. TERCERO: Scope global (fuera de todas las funciones)
*/

const nombre = 'GLOBAL';  // Variable global

const funcion1 = () => {
    const nombre = 'LOCAL';  // Variable local (SOMBREA la global)
    console.log('🔍 Busca primero en local:', nombre);  // LOCAL
    // ✅ Encuentra 'nombre' en scope local, NO busca más arriba
};

funcion1();
console.log('🌍 Fuera de la función:', nombre);  // GLOBAL


// ============================================
// EJEMPLO 5: CUANDO NO EXISTE EN LOCAL, BUSCA EN GLOBAL
// ============================================

const ciudad = 'Madrid';  // Variable global

const mostrarCiudad = () => {
    // No hay variable 'ciudad' local
    console.log('🔍 No existe local, busca en global:', ciudad);  // Madrid
    // ✅ No encuentra 'ciudad' en scope local, busca en global y la encuentra
};

mostrarCiudad();


// ============================================
// EJEMPLO 6: SHADOWING (Sombreado) - MISMO NOMBRE
// ============================================
/* ⚠️ SHADOWING: Variable local "sombrea" (oculta) la global */

let precio = 100;  // Variable GLOBAL

const calcularDescuento = () => {
    let precio = 50;  // Variable LOCAL (sombrea la global)
    console.log('Precio dentro:', precio);  // 50 (usa la LOCAL)
    return precio * 0.9;
};

console.log('Descuento:', calcularDescuento());  // 45 (50 * 0.9)
console.log('Precio fuera:', precio);  // 100 (la global NO cambió)

/* 
   ⚠️ La variable local 'precio' SOMBREA la global
   - Dentro de la función solo ve la local (50)
   - La global (100) sigue existiendo pero está oculta
   - Fuera de la función solo existe la global (100)
*/


// ============================================
// EJEMPLO 7: MODIFICAR GLOBAL vs CREAR LOCAL
// ============================================

let contador = 0;  // Variable GLOBAL

// ❌ MAL: Modifica la variable global (sin let/const/var)
const incrementarMal = () => {
    contador = contador + 1;  // modifica la GLOBAL
    console.log('Contador (global modificado):', contador);
};

incrementarMal();  // 1
incrementarMal();  // 2
console.log('Contador global:', contador);  // 2 (se modificó)

// ✅ BIEN: Crea variable local (con let/const/var)
const incrementarBien = () => {
    let contador = 10;  // crea variable LOCAL (no afecta global)
    contador = contador + 1;
    console.log('Contador local:', contador);  // 11
    return contador;
};

incrementarBien();  // 11
incrementarBien();  // 11 (cada vez crea nuevo scope)
console.log('Contador global no cambió:', contador);  // 2


// ============================================
// EJEMPLO 8: SCOPE CHAIN CON FUNCIONES ANIDADAS
// ============================================

const nivel1 = 'GLOBAL';

const externa = () => {
    const nivel2 = 'EXTERNA';

    const interna = () => {
        const nivel3 = 'INTERNA';

        console.log('🔍 Nivel 3 (local):', nivel3);    // INTERNA
        console.log('🔍 Nivel 2 (padre):', nivel2);    // EXTERNA
        console.log('🔍 Nivel 1 (global):', nivel1);   // GLOBAL

        // Busca en este orden:
        // 1. Scope de interna() ✅
        // 2. Scope de externa() ✅
        // 3. Scope global ✅
    };

    interna();
    // console.log(nivel3);  // ❌ ERROR: nivel3 no existe aquí
};

externa();


// ============================================
// BUENAS PRÁCTICAS: NOMBRES DE VARIABLES
// ============================================
/*
❌ EVITAR: Usar el mismo nombre para variables locales y globales
   - Causa confusión
   - Dificulta el debugging
   - Puede llevar a errores

✅ RECOMENDADO: Usar nombres diferentes y descriptivos
   - Código más claro
   - Fácil de mantener
   - Evita errores
*/

// ❌ MAL: Mismo nombre confunde
let total = 1000;  // global

const procesarPago = () => {
    let total = 500;  // local (¿cuál es cuál?)
    return total * 0.9;
};

// ✅ BIEN: Nombres descriptivos diferentes
let totalGlobal = 1000;

const procesarPago2 = () => {
    let totalPago = 500;  // más claro
    return totalPago * 0.9;
};


// ============================================
// EJEMPLO 9: CUÁNDO SÍ USAR VARIABLES GLOBALES
// ============================================

// ❌ MAL: Abusar de variables globales
let usuarioActual = 'Daniel';
let edadUsuario = 30;
let ciudadUsuario = 'Madrid';

// ✅ BIEN: Agrupar en objeto o pasar como parámetros
const usuario = {
    nombre: 'Daniel',
    edad: 30,
    ciudad: 'Madrid'
};

const procesarUsuario = (user) => {
    // Recibe datos por parámetro, no depende de globales
    return `${user.nombre} tiene ${user.edad} años`;
};

console.log(procesarUsuario(usuario));


// ============================================
// RESUMEN: REGLAS DE ORO
// ============================================
/*
1. ✅ JavaScript busca variables en este orden:
   LOCAL → PADRE → GLOBAL

2. ✅ La variable local tiene PRIORIDAD (sombrea la global)

3. ❌ EVITA usar el mismo nombre en local y global:
   - Causa confusión
   - Dificulta debugging

4. ✅ USA nombres descriptivos y diferentes:
   totalLocal, totalGlobal, totalPago, etc.

5. ✅ PREFIERE parámetros sobre variables globales:
   - Funciones más puras
   - Código más testeable
   - Menos errores

6. ✅ Declara SIEMPRE con let/const/var:
   - Sin declaración modifica la global
   - Con declaración crea nueva local

7. ✅ MINIMIZA variables globales:
   - Solo usa globales para configuración
   - Prefiere scope local
*/