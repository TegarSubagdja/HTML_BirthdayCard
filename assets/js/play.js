const button = document.getElementById('show');
const div = document.getElementsByClassName('modal-part')[0];
button.addEventListener('click', () => {
  setTimeout(() => {
    button.style.display = 'none';
    div.classList.remove('modal-part');
    var audio = new Audio("assets/musik/musik.mp3");
    audio.oncanplaythrough = function () {
      audio.play();
    }
    audio.loop = true;
    audio.onended = function () {
      audio.play();
    }
  }, 1000);
});

