const agregarCaja = () => {
    // * Crear el elemento - createElment() - Recibe como parametro una cadena de texto con la etiqueta que queremos crear.

    const nuevaCaja = document.createElement('div');

    // * Agregamos texto y atributos - 
    nuevaCaja.innerText = 'Nueva Caja';
    //nuevaCaja.setAttribute('id', 'nuevo-id'); se repetiria id, mala practica.
    nuevaCaja.setAttribute('class', 'caja activa');

    // * Agregar elemento al DOM
    const contenedor = document.getElementById('contenedor1');

    // .appendChild() - Agrega un elemento al final
    // contenedor.appendChild(nuevaCaja); 

    // * .insertAdjacentElement() - Nos permite agregar un elemento:
    // Valores: 
    //      afterbegin - como primer elemento
    //      beforebegin - antes del elemento padre
    //      beforeend - como ultimo elemento
    //      afterend - despues del elemento padre

    // contenedor.insertAdjacentElement('afterbegin', nuevaCaja)

    // * replaceWith() - Nos permite reemplazar el elemento por otro
    document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja)
}
