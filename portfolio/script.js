const list = document.querySelector('.list');
const burgerBtn = document.querySelector('.burger-btn');
const btn = document.querySelector('.btn');

burgerBtn.addEventListener('click', () => {
  console.log('object');
  list.classList.toggle('show');
});

btn.addEventListener('click', () => {
   window.location.href = "https://drive.google.com/file/d/1G5XqSQoDHKPxJebmMogPyHeaXJgOU3sg/view?usp=sharing";
  
});
