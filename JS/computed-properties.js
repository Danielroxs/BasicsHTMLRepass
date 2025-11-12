// ================================
// COMPUTED PROPERTIES (PROPIEDADES COMPUTADAS)
// ================================

/*
Las Computed Properties permiten crear propiedades de objetos con nombres DINÁMICOS
usando expresiones entre corchetes [].

En lugar de tener nombres fijos, el nombre de la propiedad se calcula en tiempo de ejecución.
*/

// ================================
// 1. SINTAXIS BÁSICA
// ================================

// SIN Computed Properties (nombre FIJO):
const objetoEstatico = {
    nombre: 'Dan',
    edad: 25
}

// CON Computed Properties (nombre DINÁMICO):
const propiedad = 'nombre'
const objetoDinamico = {
    [propiedad]: 'Dan'  // ← Los [] calculan el nombre
}

console.log(objetoDinamico)
// { nombre: 'Dan' }

// ================================
// 2. COMPARACIÓN: ESTÁTICO VS DINÁMICO
// ================================

// ESTÁTICO - Nombre de propiedad fijo
const usuario1 = {
    nombre: 'Dan',
    email: 'dan@correo.com'
}

// DINÁMICO - Nombre de propiedad variable
const campo1 = 'nombre'
const campo2 = 'email'

const usuario2 = {
    [campo1]: 'Dan',           // Se convierte en: nombre: 'Dan'
    [campo2]: 'dan@correo.com' // Se convierte en: email: 'dan@correo.com'
}

console.log(usuario2)
// { nombre: 'Dan', email: 'dan@correo.com' }

// ================================
// 3. CASO DE USO PRINCIPAL: FORMULARIOS EN REACT
// ================================

/*
El uso más común es manejar múltiples inputs con un solo handler
*/

// ❌ SIN Computed Properties (código repetitivo):
const handleChangeSinComputed = (e) => {
    const { name, value } = e.target

    if (name === 'nombre') {
        setFormData({ ...formData, nombre: value })
    } else if (name === 'email') {
        setFormData({ ...formData, email: value })
    } else if (name === 'telefono') {
        setFormData({ ...formData, telefono: value })
    } else if (name === 'mensaje') {
        setFormData({ ...formData, mensaje: value })
    }
    // Tienes que agregar un if por cada campo nuevo ❌
}

// ✅ CON Computed Properties (una sola línea):
const handleChangeConComputed = (e) => {
    const { name, value } = e.target
    setFormData({
        ...formData,
        [name]: value  // ← Funciona para TODOS los campos ✅
    })
}

/*
Ejemplo de ejecución:
Si el usuario escribe en el input con name="email":
- name = 'email'
- value = 'dan@correo.com'
- [name]: value se convierte en email: 'dan@correo.com'
*/

// ================================
// 4. EJEMPLOS CON VARIABLES
// ================================

// Ejemplo 1: Variable simple
const campoNombre = 'usuario'
const persona = {
    [campoNombre]: 'Dan Rox',
    edad: 25
}
console.log(persona)
// { usuario: 'Dan Rox', edad: 25 }

// Ejemplo 2: Múltiples variables
const key1 = 'nombre'
const key2 = 'apellido'
const key3 = 'edad'

const datos = {
    [key1]: 'Dan',
    [key2]: 'Rox',
    [key3]: 30
}
console.log(datos)
// { nombre: 'Dan', apellido: 'Rox', edad: 30 }

// ================================
// 5. EJEMPLOS CON EXPRESIONES
// ================================

// Ejemplo 1: Concatenación
const prefijo = 'producto'
const numero = 1

const catalogo = {
    [prefijo + numero]: 'Laptop',
    [prefijo + (numero + 1)]: 'Mouse',
    [prefijo + (numero + 2)]: 'Teclado'
}
console.log(catalogo)
// { producto1: 'Laptop', producto2: 'Mouse', producto3: 'Teclado' }

// Ejemplo 2: Template strings
const id = 5
const categoria = 'electronica'

const producto = {
    [`${categoria}_${id}`]: 'Smartphone',
    [`precio_${id}`]: 500
}
console.log(producto)
// { electronica_5: 'Smartphone', precio_5: 500 }

// Ejemplo 3: Operaciones matemáticas
const base = 10
const config = {
    [base * 2]: 'valor20',
    [base + 5]: 'valor15',
    [base / 2]: 'valor5'
}
console.log(config)
// { 20: 'valor20', 15: 'valor15', 5: 'valor5' }

// ================================
// 6. EJEMPLOS CON FUNCIONES
// ================================

// Ejemplo 1: Función que retorna el nombre de la propiedad
const getTipoCampo = () => 'email'

const formulario = {
    [getTipoCampo()]: 'dan@correo.com'
}
console.log(formulario)
// { email: 'dan@correo.com' }

// Ejemplo 2: Función con parámetros
const generarClave = (tipo, numero) => `${tipo}_${numero}`

const inventario = {
    [generarClave('producto', 1)]: 'Laptop',
    [generarClave('producto', 2)]: 'Mouse',
    [generarClave('categoria', 1)]: 'Electrónica'
}
console.log(inventario)
// { producto_1: 'Laptop', producto_2: 'Mouse', categoria_1: 'Electrónica' }

// ================================
// 7. CASO PRÁCTICO: ACTUALIZAR ESTADO EN REACT
// ================================

/*
Escenario: Tienes un formulario con múltiples campos y quieres
actualizar el estado dinámicamente
*/

// Estado inicial
const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
})

// Handler único para todos los inputs
const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
        ...formData,      // Copia todo el estado anterior
        [name]: value     // Actualiza solo el campo que cambió
    })
}

/*
HTML correspondiente:
<input 
    type="text"
    name="nombre"     ← Este valor se usa como clave
    value={formData.nombre}
    onChange={handleChange}
/>

<input 
    type="email"
    name="email"      ← Este valor se usa como clave
    value={formData.email}
    onChange={handleChange}
/>

Flujo de ejecución:
1. Usuario escribe "Dan" en el input con name="nombre"
2. Se ejecuta handleChange
3. name = 'nombre', value = 'Dan'
4. [name]: value se convierte en nombre: 'Dan'
5. El estado se actualiza: { nombre: 'Dan', email: '', ... }
*/

// ================================
// 8. COMBINACIÓN CON SPREAD OPERATOR
// ================================

// Actualizar un objeto manteniendo las propiedades existentes
const estadoInicial = {
    nombre: 'Dan',
    edad: 25,
    ciudad: 'CDMX'
}

const campo = 'edad'
const nuevoValor = 26

const estadoActualizado = {
    ...estadoInicial,  // Copia todas las propiedades
    [campo]: nuevoValor // Actualiza solo 'edad'
}

console.log(estadoActualizado)
// { nombre: 'Dan', edad: 26, ciudad: 'CDMX' }

// ================================
// 9. EJEMPLOS AVANZADOS
// ================================

// Ejemplo 1: Crear múltiples propiedades dinámicamente
const campos = ['nombre', 'email', 'telefono']
const valores = ['Dan', 'dan@correo.com', '1234567890']

const usuarioCompleto = {}
campos.forEach((campo, index) => {
    usuarioCompleto[campo] = valores[index]
})

console.log(usuarioCompleto)
// { nombre: 'Dan', email: 'dan@correo.com', telefono: '1234567890' }

// Ejemplo 2: Con reduce (más funcional)
const usuarioReducido = campos.reduce((acc, campo, index) => {
    acc[campo] = valores[index]
    return acc
}, {})

console.log(usuarioReducido)
// { nombre: 'Dan', email: 'dan@correo.com', telefono: '1234567890' }

// Ejemplo 3: Computed Properties en métodos
const contador = {
    valor: 0,
    ['incrementar']() {
        this.valor++
    },
    ['decrementar']() {
        this.valor--
    },
    [`obtener${Math.random() > 0.5 ? 'Doble' : 'Triple'}`]() {
        return this.valor * (Math.random() > 0.5 ? 2 : 3)
    }
}

console.log(contador)
// { valor: 0, incrementar: [Function], decrementar: [Function], ... }

// ================================
// 10. COMPUTED PROPERTIES CON SYMBOLS
// ================================

// Los Symbols pueden usarse como claves únicas
const id = Symbol('id')
const nombre = Symbol('nombre')

const usuario = {
    [id]: 12345,
    [nombre]: 'Dan'
}

console.log(usuario[id])     // 12345
console.log(usuario[nombre]) // 'Dan'

// ================================
// 11. CASOS DE USO COMUNES
// ================================

// a) Construir objetos de configuración dinámicamente
const ambiente = 'desarrollo' // o 'produccion'
const config = {
    [`url_${ambiente}`]: 'http://localhost:3000',
    [`debug_${ambiente}`]: true
}

// b) Mapear arrays a objetos
const usuarios = [
    { id: 1, nombre: 'Dan' },
    { id: 2, nombre: 'Ana' }
]

const usuariosPorId = usuarios.reduce((acc, usuario) => {
    acc[usuario.id] = usuario
    return acc
}, {})
// { 1: { id: 1, nombre: 'Dan' }, 2: { id: 2, nombre: 'Ana' } }

// c) Normalizar datos de API
const respuestaAPI = [
    { id: 'user_1', data: { ...} },
    { id: 'user_2', data: { ...} }
]

const datosNormalizados = respuestaAPI.reduce((acc, item) => {
    acc[item.id] = item.data
    return acc
}, {})

// d) Traducción/internacionalización
const idioma = 'es' // o 'en'
const traducciones = {
    [`titulo_${idioma}`]: idioma === 'es' ? 'Bienvenido' : 'Welcome',
    [`mensaje_${idioma}`]: idioma === 'es' ? 'Hola' : 'Hello'
}

// ================================
// 12. ERRORES COMUNES
// ================================

// ❌ ERROR 1: Olvidar los corchetes
const error1 = {
    name: 'Dan'  // Esto crea una propiedad llamada "name"
}

// ✅ CORRECTO: Con variable
const campo = 'name'
const correcto1 = {
    [campo]: 'Dan'  // Esto usa el VALOR de la variable 'campo'
}

// ❌ ERROR 2: Usar computed properties donde no se necesitan
const error2 = {
    ['nombre']: 'Dan'  // No necesitas [] para strings literales
}

// ✅ CORRECTO:
const correcto2 = {
    nombre: 'Dan'  // Más simple y claro
}

// ❌ ERROR 3: No entender la diferencia
const miCampo = 'email'
const obj1 = { miCampo: 'dan@correo.com' }      // { miCampo: '...' }
const obj2 = { [miCampo]: 'dan@correo.com' }    // { email: '...' }

console.log(obj1)  // { miCampo: 'dan@correo.com' }
console.log(obj2)  // { email: 'dan@correo.com' }

// ================================
// 13. BUENAS PRÁCTICAS
// ================================

/*
1. ✅ Usa computed properties cuando el nombre es realmente dinámico
   const campo = getUserInput()
   const obj = { [campo]: valor }

2. ❌ No uses computed properties para strings literales
   const obj = { ['nombre']: 'Dan' }  // Innecesario
   const obj = { nombre: 'Dan' }      // Mejor

3. ✅ Úsalos en handlers de formularios para evitar código repetitivo
   const handleChange = (e) => {
       setData({ ...data, [e.target.name]: e.target.value })
   }

4. ✅ Úsalos para construir objetos basados en configuración
   const config = {
       [`url_${process.env.NODE_ENV}`]: getUrl()
   }

5. ✅ Combínalos con spread operator para actualizar estados
   setState({ ...state, [field]: newValue })
*/

// ================================
// 14. EJERCICIOS PRÁCTICOS
// ================================

// Ejercicio 1: Handler de formulario completo
/*
Crea un handler que maneje estos inputs:
- nombre (text)
- email (email)
- edad (number)
- pais (select)

Debe actualizar un estado con la estructura:
{ nombre: '', email: '', edad: '', pais: '' }
*/

// Ejercicio 2: Construir objeto desde arrays
/*
Dados dos arrays:
const keys = ['id', 'nombre', 'precio']
const values = [1, 'Laptop', 1000]

Crea un objeto: { id: 1, nombre: 'Laptop', precio: 1000 }
*/

// Ejercicio 3: Normalizar datos
/*
Dado un array de productos:
const productos = [
    { id: 'prod_1', nombre: 'Laptop' },
    { id: 'prod_2', nombre: 'Mouse' }
]

Crea un objeto:
{
    prod_1: { id: 'prod_1', nombre: 'Laptop' },
    prod_2: { id: 'prod_2', nombre: 'Mouse' }
}
*/

// ================================
// RESUMEN FINAL
// ================================

/*
🎯 COMPUTED PROPERTIES:
- Permiten nombres de propiedades DINÁMICOS usando []
- El nombre se calcula en tiempo de ejecución
- Muy útil para formularios y actualización de estados

📝 SINTAXIS:
const variable = 'clave'
const obj = {
    [variable]: 'valor'  // ← Los [] hacen la magia
}

✅ CASOS DE USO:
1. Handlers de formularios en React
2. Actualizar estados dinámicamente
3. Normalizar/transformar datos
4. Configuración dinámica
5. Mapear arrays a objetos

🔑 VENTAJA PRINCIPAL:
Escribir MENOS código y hacerlo más FLEXIBLE

⚠️ RECUERDA:
- Sin []: nombre de propiedad LITERAL
  { nombre: 'Dan' }  → crea propiedad "nombre"

- Con []: nombre de propiedad CALCULADO
  { [variable]: 'Dan' }  → usa el VALOR de 'variable'
*/

// ================================
// RECURSOS ADICIONALES
// ================================

/*
📚 MDN Web Docs:
- Computed Property Names: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names

🎓 Conceptos relacionados:
- Object destructuring
- Spread operator (...)
- Dynamic object keys
- ES6 object enhancements

💡 Casos reales:
- React forms
- Redux reducers
- Estado de componentes
- Normalización de datos de APIs
*/
