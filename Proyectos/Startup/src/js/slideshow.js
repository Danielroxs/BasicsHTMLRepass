const slideshow = document.getElementById('slideshow');
const slides = document.getElementById('slides')
const indicadores = document.getElementById('indicadores')
const btnCambiar = document.getElementById('cambiar')

const siguienteSlide = () => {
    const primerSlide = slides.children[0];
    const ancho = primerSlide.offsetWidth;
    const velocidad = '300'

    slides.style.transition = `ease-out ${velocidad}ms all`
    slides.style.transform = `translateX(-${ancho}px)`

    setTimeout(() => {
        slides.appendChild(primerSlide)
        slides.style.transition = 'none';
        slides.style.transform = `translateX(0)`
    }, velocidad);
}

setInterval(() => {
    siguienteSlide()
}, 5000)