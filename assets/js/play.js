const button = document.getElementById('show');
const div = document.getElementsByClassName('modal-part')[0];
button.addEventListener('click', () => {
  setTimeout(() => {
    button.style.display = 'none';
    div.classList.remove('modal-part');
  }, 1000);
});
