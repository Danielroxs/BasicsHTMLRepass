// * Operador Sprea - Permite tomar los elementos de una arreglo u objeto y expandirlos en otro sitio.

const frutas = ['manzana', 'plátano', 'fresa', 'mango', 'kiwi'];
const comidaFavorita = ['arroz', 'pollo', 'verduras', ...frutas]
console.log(comidaFavorita)

const datosLogin = {
    nombre: 'Fer',
    email: 'daniel@example.com',
    pass: '123'
}

const usuario = {
    nombre: 'Daniel', // puedo sobreescribir cuando aplico spread operator (Fer), - aqui iria ...datosLogin, 
    ...datosLogin,    // para que no se sobreescriba primero pon el spread y luego propiedad nombre - aqui iria nombre: 'Daniel'
    edad: 27,
}
console.log(usuario)


// * Parametro Rest - Permite que una funcion contenga un numero indefinido de argumentos.
// * Los argumentos extra que encuentre los convertira en un arreglo.

const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales.toString())
}

registrarUsuario('Dan', 'email@email.com')
registrarUsuario('Alex', 'alex@email.com', 28, 'Mexico')


// * Destructuracion de Objetos - Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
const amigos = ['Luis', 'Jose', 'Luigui']
// const primerAmigo = amigos[0];
// const segundoAmigo = amigos[1];

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(primerAmigo, tercerAmigo)

const persona = {
    nombre: 'Carlos',
    edad: 27,
    pais: 'Mexico'
}

const { nombre, edad, pais } = persona
console.log(pais, nombre)

const mostrarEdad = ({ nombre, edad }) => { // Del objeto persona destructuro la variable "persona" y "edad"
    console.log(`Hola soy ${nombre} y mi edad es ${edad}`)
}

mostrarEdad(persona) // mando el objeto completo para posteriormente destructurarlo en los parametros de la funcion.