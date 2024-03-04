const form = document.querySelector('form');
const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () => {
  location.reload();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
