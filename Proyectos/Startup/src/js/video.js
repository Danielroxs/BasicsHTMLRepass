const btnVideo = document.getElementById('btn-video');
const overlayVideo = document.getElementById('overlay-video')
const videoIframe = document.querySelector('#overlay-video iframe')

btnVideo.addEventListener('click', () => {
    overlayVideo.classList.add('active')
})

overlayVideo.addEventListener('click', () => {
    overlayVideo.classList.remove('active')

    const src = videoIframe.src;
    videoIframe.src = '';
    videoIframe.src = src;

})