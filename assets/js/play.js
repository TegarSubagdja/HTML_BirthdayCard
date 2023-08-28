const button = document.getElementById('button');

document.addEventListener('keydown', function (Event) {
    if (Event.keyCode == 83) {
        alert('Makasih sayang!');
    }
})

button.addEventListener('click', () => {
    var audio = document.getElementById("myaudio");
    audio.currentTime = 0.3 * 60;
    audio.play();
});