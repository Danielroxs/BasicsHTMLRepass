/* ============================================
   OBJETOS EN JAVASCRIPT
   ============================================
   
   Archivo de estudio completo sobre objetos:
   creación, propiedades, métodos, acceso,
   recorrido, destructuring y conceptos avanzados.
   
   📌 Objeto = Estructura de datos clave-valor
============================================ */


// ============================================
// 1. ¿QUÉ ES UN OBJETO?
// ============================================

console.log('--- ¿QUÉ ES UN OBJETO? ---');
console.log(`
OBJETO EN JAVASCRIPT:
- Colección de propiedades (pares clave-valor)
- Puede contener datos y funciones (métodos)
- Es un tipo de dato por referencia
- Todo en JS (excepto primitivos) es un objeto

SINTAXIS:
{
    clave1: valor1,
    clave2: valor2,
    metodo: function() { }
}
`);

// Ejemplo básico
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
}

console.log('Objeto persona:', persona)
console.log('Tipo:', typeof persona)  // "object"

console.log('');


// ============================================
// 2. CREAR OBJETOS
// ============================================

console.log('--- FORMAS DE CREAR OBJETOS ---');

// Forma 1: Literal de objeto (más común)
const coche1 = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020
}
console.log('Literal:', coche1)

// Forma 2: Constructor Object
const coche2 = new Object()
coche2.marca = 'Honda'
coche2.modelo = 'Civic'
coche2.año = 2021
console.log('Constructor:', coche2)

// Forma 3: Object.create()
const prototipo = {
    saludar: function () {
        return 'Hola'
    }
}
const objeto = Object.create(prototipo)
objeto.nombre = 'Dan'
console.log('Object.create:', objeto)
console.log('Hereda:', objeto.saludar())  // 'Hola'

// Forma 4: Función constructora
function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}
const persona1 = new Persona('María', 25)
console.log('Función constructora:', persona1)

// Forma 5: Clase (ES6)
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre
        this.tipo = tipo
    }
}
const perro = new Animal('Rex', 'Perro')
console.log('Clase:', perro)

console.log('');


// ============================================
// 3. PROPIEDADES DE UN OBJETO
// ============================================

console.log('--- PROPIEDADES ---');
console.log(`
PROPIEDAD:
- Par clave-valor dentro de un objeto
- Clave (key): nombre de la propiedad
- Valor (value): dato asociado

TIPOS DE CLAVES:
- String (más común): { nombre: 'Juan' }
- Con espacios: { 'mi nombre': 'Juan' }
- Con guiones: { 'mi-edad': 25 }
- Números: { 1: 'uno', 2: 'dos' }
- Símbolos: { [Symbol()]: 'valor' }
`);

// Ejemplos de propiedades
const usuario = {
    nombre: 'Dan',                    // String normal
    'mi edad': 25,                    // String con espacios
    'correo-electronico': 'dan@email.com',  // String con guiones
    1: 'primero',                     // Número (se convierte a string)
    activo: true,                     // Boolean
    hobbies: ['programar', 'leer'],   // Array
    direccion: {                      // Objeto anidado
        calle: 'Gran Vía',
        ciudad: 'Madrid'
    }
}

console.log('Usuario completo:', usuario)
console.log('');


// ============================================
// 4. ACCEDER A PROPIEDADES
// ============================================

console.log('--- ACCEDER A PROPIEDADES ---');
console.log(`
3 FORMAS DE ACCESO:

1. NOTACIÓN DE PUNTO (.)
   objeto.propiedad

2. NOTACIÓN DE CORCHETES CON STRING LITERAL
   objeto['propiedad']

3. NOTACIÓN DE CORCHETES CON VARIABLE
   objeto[variable]
`);

const producto = {
    nombre: 'Laptop',
    precio: 1000,
    'en-stock': true,
    'fecha de compra': '2025-10-22'
}

// 1. Notación de punto
console.log('Punto:', producto.nombre)  // 'Laptop'
console.log('Punto:', producto.precio)  // 1000

// 2. Corchetes con string literal (comillas)
console.log('Corchetes literal:', producto['nombre'])  // 'Laptop'
console.log('Corchetes literal:', producto['en-stock'])  // true (con guiones SOLO así)
console.log('Corchetes literal:', producto['fecha de compra'])  // '2025-10-22' (con espacios SOLO así)

// 3. Corchetes con variable (sin comillas)
const propiedad = 'precio'
console.log('Corchetes variable:', producto[propiedad])  // 1000 (usa el VALOR de propiedad)

// Comparación
console.log('\nComparación:');
console.log('producto.nombre:', producto.nombre)         // 'Laptop'
console.log('producto["nombre"]:', producto['nombre'])   // 'Laptop'
const prop = 'nombre'
console.log('producto[prop]:', producto[prop])           // 'Laptop'

// ERROR COMÚN
// console.log(producto[nombre])  // ❌ Error: nombre is not defined
// JavaScript busca una VARIABLE llamada 'nombre', no la propiedad

console.log('');


// ============================================
// 5. AGREGAR, MODIFICAR Y ELIMINAR PROPIEDADES
// ============================================

console.log('--- MODIFICAR OBJETOS ---');

const libro = {
    titulo: 'JavaScript',
    autor: 'Autor Original',
    año: 2020
}

console.log('Original:', libro)

// AGREGAR propiedades
libro.paginas = 500
libro['editorial'] = 'Editorial XYZ'
console.log('Después de agregar:', libro)

// MODIFICAR propiedades
libro.autor = 'Nuevo Autor'
libro['año'] = 2025
console.log('Después de modificar:', libro)

// ELIMINAR propiedades
delete libro.editorial
console.log('Después de eliminar editorial:', libro)

// Verificar si existe propiedad
console.log('\nVerificar existencia:');
console.log('¿Tiene "titulo"?', 'titulo' in libro)      // true
console.log('¿Tiene "editorial"?', 'editorial' in libro) // false
console.log('¿Tiene "paginas"?', libro.hasOwnProperty('paginas'))  // true

console.log('');


// ============================================
// 6. MÉTODOS DE UN OBJETO
// ============================================

console.log('--- MÉTODOS ---');
console.log(`
MÉTODO:
- Función que es propiedad de un objeto
- Se define como: nombreMetodo: function() { }
- O en ES6: nombreMetodo() { }
`);

// Objeto con métodos
const calculadora = {
    sumar: function (a, b) {
        return a + b
    },
    restar: function (a, b) {
        return a - b
    },
    // Sintaxis ES6 (más corta)
    multiplicar(a, b) {
        return a * b
    },
    dividir(a, b) {
        return b !== 0 ? a / b : 'Error: División por cero'
    }
}

console.log('Sumar:', calculadora.sumar(5, 3))           // 8
console.log('Restar:', calculadora.restar(10, 4))        // 6
console.log('Multiplicar:', calculadora.multiplicar(4, 5)) // 20
console.log('Dividir:', calculadora.dividir(10, 2))      // 5

// Método con 'this'
const persona2 = {
    nombre: 'Ana',
    edad: 28,
    saludar: function () {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`
    },
    cumplirAños() {
        this.edad++
        return `Ahora tengo ${this.edad} años`
    }
}

console.log('\nCon this:');
console.log(persona2.saludar())      // "Hola, soy Ana y tengo 28 años"
console.log(persona2.cumplirAños())  // "Ahora tengo 29 años"
console.log(persona2.edad)           // 29

console.log('');


// ============================================
// 7. THIS EN OBJETOS
// ============================================

console.log('--- THIS ---');
console.log(`
THIS:
- Referencia al objeto actual
- Permite acceder a otras propiedades del mismo objeto
- Su valor depende del contexto de ejecución

⚠️ CUIDADO:
- Arrow functions NO tienen su propio 'this'
- 'this' en arrow function toma el valor del contexto exterior
`);

// Ejemplo con this
const cuentaBancaria = {
    titular: 'Juan Pérez',
    saldo: 1000,
    depositar(cantidad) {
        this.saldo += cantidad
        return `Nuevo saldo: $${this.saldo}`
    },
    retirar(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad
            return `Retiro exitoso. Saldo: $${this.saldo}`
        } else {
            return 'Saldo insuficiente'
        }
    },
    consultarSaldo() {
        return `Titular: ${this.titular}, Saldo: $${this.saldo}`
    }
}

console.log(cuentaBancaria.consultarSaldo())  // "Titular: Juan Pérez, Saldo: $1000"
console.log(cuentaBancaria.depositar(500))    // "Nuevo saldo: $1500"
console.log(cuentaBancaria.retirar(300))      // "Retiro exitoso. Saldo: $1200"

// Arrow function vs función normal
const objeto1 = {
    nombre: 'Objeto1',
    funcionNormal: function () {
        return this.nombre  // 'this' apunta al objeto
    },
    funcionFlecha: () => {
        return this.nombre  // 'this' NO apunta al objeto (apunta al contexto global)
    }
}

console.log('\nthis en funciones:');
console.log('Función normal:', objeto1.funcionNormal())  // "Objeto1"
console.log('Arrow function:', objeto1.funcionFlecha())  // undefined

console.log('');


// ============================================
// 8. OBJETOS ANIDADOS
// ============================================

console.log('--- OBJETOS ANIDADOS ---');

const empresa = {
    nombre: 'Tech Corp',
    fundacion: 2010,
    direccion: {
        calle: 'Calle Principal 123',
        ciudad: 'Madrid',
        pais: 'España',
        codigoPostal: '28001'
    },
    empleados: [
        { nombre: 'Juan', puesto: 'Developer', salario: 50000 },
        { nombre: 'Ana', puesto: 'Designer', salario: 45000 },
        { nombre: 'Pedro', puesto: 'Manager', salario: 60000 }
    ],
    proyectos: {
        activos: ['Proyecto A', 'Proyecto B'],
        completados: ['Proyecto X', 'Proyecto Y']
    }
}

console.log('Empresa:', empresa.nombre)
console.log('Ciudad:', empresa.direccion.ciudad)
console.log('Primer empleado:', empresa.empleados[0].nombre)
console.log('Proyectos activos:', empresa.proyectos.activos)

// Acceso profundo
console.log('\nAcceso profundo:');
console.log('CP:', empresa.direccion.codigoPostal)
console.log('Salario de Ana:', empresa.empleados[1].salario)
console.log('Primer proyecto activo:', empresa.proyectos.activos[0])

console.log('');


// ============================================
// 9. RECORRER OBJETOS
// ============================================

console.log('--- RECORRER OBJETOS ---');
console.log(`
FORMAS DE RECORRER:

1. for...in        → Recorre claves (keys)
2. Object.keys()   → Array de claves
3. Object.values() → Array de valores
4. Object.entries() → Array de [clave, valor]
`);

const estudiante = {
    nombre: 'Carlos',
    edad: 20,
    curso: 'JavaScript',
    nota: 9.5
}

// 1. for...in
console.log('1. for...in:');
for (let clave in estudiante) {
    console.log(`${clave}: ${estudiante[clave]}`)
}

// 2. Object.keys()
console.log('\n2. Object.keys():');
const claves = Object.keys(estudiante)
console.log('Claves:', claves)  // ["nombre", "edad", "curso", "nota"]
claves.forEach(clave => {
    console.log(`${clave}: ${estudiante[clave]}`)
})

// 3. Object.values()
console.log('\n3. Object.values():');
const valores = Object.values(estudiante)
console.log('Valores:', valores)  // ["Carlos", 20, "JavaScript", 9.5]

// 4. Object.entries()
console.log('\n4. Object.entries():');
const entradas = Object.entries(estudiante)
console.log('Entradas:', entradas)
// [["nombre", "Carlos"], ["edad", 20], ...]

entradas.forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`)
})

console.log('');


// ============================================
// 10. COPIAR OBJETOS
// ============================================

console.log('--- COPIAR OBJETOS ---');
console.log(`
TIPOS DE COPIA:

1. ASIGNACIÓN (=)
   - NO copia, solo referencia
   - Cambios afectan ambos

2. COPIA SUPERFICIAL (shallow copy)
   - Object.assign()
   - Spread operator (...)
   - Copia primer nivel, objetos anidados son referencias

3. COPIA PROFUNDA (deep copy)
   - JSON.parse(JSON.stringify())
   - structuredClone()
   - Librerías como lodash
`);

const original = {
    nombre: 'Original',
    edad: 30,
    direccion: {
        ciudad: 'Madrid'
    }
}

// 1. Asignación (solo referencia)
const referencia = original
referencia.nombre = 'Modificado'
console.log('Original:', original.nombre)      // "Modificado" (afectado)
console.log('Referencia:', referencia.nombre)  // "Modificado"

// 2. Copia superficial - Object.assign()
const copia1 = Object.assign({}, original)
copia1.nombre = 'Copia1'
console.log('\nObject.assign():');
console.log('Original:', original.nombre)      // "Modificado" (no afectado)
console.log('Copia1:', copia1.nombre)          // "Copia1"

// Pero objetos anidados son referencias
copia1.direccion.ciudad = 'Barcelona'
console.log('Original ciudad:', original.direccion.ciudad)  // "Barcelona" (¡afectado!)

// 3. Copia superficial - Spread operator
const original2 = { nombre: 'Test', edad: 25 }
const copia2 = { ...original2 }
copia2.nombre = 'Copia2'
console.log('\nSpread operator:');
console.log('Original2:', original2.nombre)    // "Test" (no afectado)
console.log('Copia2:', copia2.nombre)          // "Copia2"

// 4. Copia profunda - JSON
const original3 = {
    nombre: 'Original',
    datos: {
        edad: 30,
        ciudad: 'Madrid'
    }
}
const copiaP = JSON.parse(JSON.stringify(original3))
copiaP.datos.ciudad = 'Valencia'
console.log('\nCopia profunda (JSON):');
console.log('Original3 ciudad:', original3.datos.ciudad)  // "Madrid" (no afectado)
console.log('CopiaP ciudad:', copiaP.datos.ciudad)        // "Valencia"

// 5. Copia profunda - structuredClone() (moderno)
const original4 = {
    nombre: 'Test',
    datos: { valor: 100 }
}
const copiaP2 = structuredClone(original4)
copiaP2.datos.valor = 200
console.log('\nstructuredClone():');
console.log('Original4:', original4.datos.valor)  // 100 (no afectado)
console.log('CopiaP2:', copiaP2.datos.valor)      // 200

console.log('');


// ============================================
// 11. DESTRUCTURING DE OBJETOS
// ============================================

console.log('--- DESTRUCTURING ---');
console.log(`
DESTRUCTURING:
- Extraer propiedades de un objeto a variables
- Sintaxis: const { prop1, prop2 } = objeto
`);

const usuario2 = {
    nombre: 'María',
    edad: 28,
    email: 'maria@email.com',
    ciudad: 'Barcelona'
}

// Destructuring básico
const { nombre, edad } = usuario2
console.log('Nombre:', nombre)  // "María"
console.log('Edad:', edad)      // 28

// Con renombre
const { email: correo, ciudad: city } = usuario2
console.log('Correo:', correo)  // "maria@email.com"
console.log('City:', city)      // "Barcelona"

// Con valores por defecto
const { pais = 'España', telefono = 'No disponible' } = usuario2
console.log('País:', pais)          // "España" (por defecto)
console.log('Teléfono:', telefono)  // "No disponible" (por defecto)

// Destructuring anidado
const persona3 = {
    nombre: 'Pedro',
    direccion: {
        calle: 'Calle Mayor',
        numero: 10,
        ciudad: 'Madrid'
    }
}

const { direccion: { calle, numero } } = persona3
console.log('Calle:', calle)    // "Calle Mayor"
console.log('Número:', numero)  // 10

// En funciones
function mostrarUsuario({ nombre, edad }) {
    return `${nombre} tiene ${edad} años`
}

console.log('\nEn funciones:');
console.log(mostrarUsuario(usuario2))  // "María tiene 28 años"

console.log('');


// ============================================
// 12. MÉTODOS ÚTILES DE OBJECT
// ============================================

console.log('--- MÉTODOS DE OBJECT ---');

const objeto2 = {
    a: 1,
    b: 2,
    c: 3
}

// Object.keys() - Array de claves
console.log('Object.keys():', Object.keys(objeto2))  // ["a", "b", "c"]

// Object.values() - Array de valores
console.log('Object.values():', Object.values(objeto2))  // [1, 2, 3]

// Object.entries() - Array de [clave, valor]
console.log('Object.entries():', Object.entries(objeto2))  // [["a", 1], ["b", 2], ["c", 3]]

// Object.freeze() - Congelar (no se puede modificar)
const congelado = { x: 10 }
Object.freeze(congelado)
congelado.x = 20  // No hace nada
console.log('Congelado:', congelado.x)  // 10

// Object.seal() - Sellar (no se pueden agregar/eliminar propiedades)
const sellado = { y: 10 }
Object.seal(sellado)
sellado.y = 20      // ✅ Se puede modificar
sellado.z = 30      // ❌ No se puede agregar
delete sellado.y    // ❌ No se puede eliminar
console.log('Sellado:', sellado)  // { y: 20 }

// Object.assign() - Combinar objetos
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const combinado = Object.assign({}, obj1, obj2)
console.log('Object.assign():', combinado)  // { a: 1, b: 2, c: 3, d: 4 }

// Spread operator (alternativa a assign)
const combinado2 = { ...obj1, ...obj2 }
console.log('Spread:', combinado2)  // { a: 1, b: 2, c: 3, d: 4 }

// Object.fromEntries() - Crear objeto desde array
const entries = [['nombre', 'Juan'], ['edad', 30]]
const objFromEntries = Object.fromEntries(entries)
console.log('fromEntries:', objFromEntries)  // { nombre: "Juan", edad: 30 }

console.log('');


// ============================================
// 13. PROPIEDADES COMPUTADAS
// ============================================

console.log('--- PROPIEDADES COMPUTADAS ---');
console.log(`
PROPIEDADES COMPUTADAS:
- Nombre de propiedad se calcula dinámicamente
- Sintaxis: { [expresion]: valor }
`);

// Nombre de propiedad dinámico
const propiedad1 = 'nombre'
const propiedad2 = 'edad'

const persona4 = {
    [propiedad1]: 'Ana',
    [propiedad2]: 25
}
console.log('Propiedades computadas:', persona4)  // { nombre: "Ana", edad: 25 }

// Con expresiones
const prefijo = 'user'
const usuario3 = {
    [prefijo + 'Name']: 'Dan',
    [prefijo + 'Age']: 30,
    [`${prefijo}Email`]: 'dan@email.com'
}
console.log('Con expresiones:', usuario3)
// { userName: "Dan", userAge: 30, userEmail: "dan@email.com" }

// Uso práctico: formularios dinámicos
function crearObjetoDesdeFormulario(campo, valor) {
    return {
        [campo]: valor
    }
}

const campo1 = crearObjetoDesdeFormulario('nombre', 'Juan')
const campo2 = crearObjetoDesdeFormulario('email', 'juan@email.com')
console.log('Campo1:', campo1)  // { nombre: "Juan" }
console.log('Campo2:', campo2)  // { email: "juan@email.com" }

console.log('');


// ============================================
// 14. COMPARAR OBJETOS
// ============================================

console.log('--- COMPARAR OBJETOS ---');
console.log(`
COMPARACIÓN DE OBJETOS:
- Objetos se comparan por REFERENCIA, no por contenido
- Dos objetos con el mismo contenido son DIFERENTES

⚠️ obj1 === obj2 solo es true si apuntan a la misma referencia
`);

const obj1Comp = { a: 1, b: 2 }
const obj2Comp = { a: 1, b: 2 }
const obj3Comp = obj1Comp

console.log('obj1 === obj2:', obj1Comp === obj2Comp)  // false (diferentes referencias)
console.log('obj1 === obj3:', obj1Comp === obj3Comp)  // true (misma referencia)

// Comparar contenido manualmente
function compararObjetos(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) return false

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) return false
    }

    return true
}

console.log('Comparar contenido:', compararObjetos(obj1Comp, obj2Comp))  // true

// Comparar con JSON (simple pero limitado)
console.log('Con JSON:', JSON.stringify(obj1Comp) === JSON.stringify(obj2Comp))  // true

console.log('');


// ============================================
// 15. EJEMPLO PRÁCTICO: GESTIÓN DE PRODUCTOS
// ============================================

console.log('--- EJEMPLO PRÁCTICO ---');

const tienda = {
    nombre: 'Tech Store',
    productos: [
        { id: 1, nombre: 'Laptop', precio: 1000, stock: 5 },
        { id: 2, nombre: 'Mouse', precio: 25, stock: 15 },
        { id: 3, nombre: 'Teclado', precio: 75, stock: 10 }
    ],

    // Método para buscar producto
    buscarProducto(id) {
        return this.productos.find(p => p.id === id)
    },

    // Método para agregar producto
    agregarProducto(producto) {
        this.productos.push(producto)
        return `Producto "${producto.nombre}" agregado`
    },

    // Método para calcular inventario total
    valorInventario() {
        return this.productos.reduce((total, p) => {
            return total + (p.precio * p.stock)
        }, 0)
    },

    // Método para listar productos
    listarProductos() {
        return this.productos.map(p =>
            `${p.nombre} - $${p.precio} (Stock: ${p.stock})`
        )
    }
}

console.log('Tienda:', tienda.nombre)
console.log('Productos:', tienda.listarProductos())
console.log('Valor inventario:', `$${tienda.valorInventario()}`)

const laptop = tienda.buscarProducto(1)
console.log('Buscar laptop:', laptop)

tienda.agregarProducto({ id: 4, nombre: 'Monitor', precio: 300, stock: 8 })
console.log('Después de agregar:', tienda.productos.length, 'productos')

console.log('');


// ============================================
// RESUMEN FINAL
// ============================================

console.log('--- RESUMEN FINAL ---');
console.log(`
🎯 OBJETOS EN JAVASCRIPT:

1. CREAR:
   - Literal: { clave: valor }
   - Constructor: new Object()
   - Object.create(prototipo)
   - Clase: class + new

2. ACCEDER A PROPIEDADES:
   - Punto: obj.propiedad
   - Corchetes literal: obj['propiedad']
   - Corchetes variable: obj[variable]

3. MODIFICAR:
   - Agregar: obj.nueva = valor
   - Modificar: obj.existente = nuevoValor
   - Eliminar: delete obj.propiedad

4. MÉTODOS:
   - Función en propiedad: metodo() { }
   - 'this' apunta al objeto
   - ⚠️ Arrow functions NO tienen 'this' propio

5. RECORRER:
   - for...in
   - Object.keys() / values() / entries()

6. COPIAR:
   - Superficial: {...obj} o Object.assign()
   - Profunda: structuredClone() o JSON

7. DESTRUCTURING:
   - const { prop1, prop2 } = obj

8. MÉTODOS ÚTILES:
   - Object.keys() / values() / entries()
   - Object.freeze() / seal()
   - Object.assign()

9. COMPARACIÓN:
   - Por referencia, NO por contenido
   - obj1 === obj2 solo si misma referencia

⚠️ DIFERENCIAS CLAVE:
┌────────────────┬──────────────────────────────┐
│ obj.prop       │ Acceso directo (punto)       │
│ obj['prop']    │ String LITERAL (con comillas)│
│ obj[variable]  │ VARIABLE (sin comillas)      │
└────────────────┴──────────────────────────────┘

📌 IMPORTANTE:
   - Objetos son por REFERENCIA
   - Propiedades pueden ser cualquier tipo
   - Métodos usan 'this' para acceder al objeto
   - Usar === para comparar referencias
   - Usar destructuring para código limpio
`);

console.log('\n✅ Archivo de estudio creado correctamente');
console.log('📚 Consulta este archivo para dominar los objetos en JavaScript');
