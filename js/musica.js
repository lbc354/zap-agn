const audio = document.querySelector('#audio')
const playMsc = document.querySelector('#playMsc')
const pauseMsc = document.querySelector('#pauseMsc')

playMsc.addEventListener("click", function() {
    audio.play()
})
pauseMsc.addEventListener("click", function() {
    audio.pause()
})