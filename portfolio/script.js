const list = document.querySelector('.list');
const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', () => {
  console.log('object');
  list.classList.toggle('show');
});