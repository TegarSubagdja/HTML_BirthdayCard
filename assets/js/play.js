const button = document.getElementById('button');
var touchStartTime;

document.addEventListener('touchstart', function (event) {
    touchStartTime = new Date().getTime();
});

document.addEventListener('touchend', function (event) {
    var touchEndTime = new Date().getTime();
    var touchDuration = touchEndTime - touchStartTime;

    if (touchDuration >= 2000) {
        alert('Anda menahan layar selama 2 detik atau lebih.');
    }
});

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