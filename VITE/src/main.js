import cargarContador from '../../contador';
import bosque from '../assets/bosque.png'
import '../../estilos.css'
import clases from '../.././imagen.module.css'


console.log('Hola mundo');

document.querySelector('#app').innerHTML = `
<h1> Hola Carlos!</h1>

<img src="${bosque}" alt="imagen de bosque" id="imagen" class="${clases.imagen}" />
<h2> Veces clickeado: <span id="cuenta">0</span></h2>
`

cargarContador();
