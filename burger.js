const burger = document.getElementById('burger'),
  menu = document.getElementById('menu');
//   title = document.querySelector('.header__titles'),
//   subtitles = document.querySelector('.header__subtitles');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
//   body.classList.toggle('lock');
//   title.classList.toggle('lock');
//   subtitles.classList.toggle('lock');
})