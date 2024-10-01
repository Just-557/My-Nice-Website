const= document.getElementById('spacecanvas')
const= canvas.getContext('2d')


canvas.width = window.outerwidth
canvas.height = window.outerheight

document.addEventListener('keydown', (e) => {
    if (e.key === 'f') { // Press 'f' to toggle full-screen
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
});
