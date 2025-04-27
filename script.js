// const hamburger = document.querySelector('.hamburger');
// const crosshamburger = document.querySelector('.crosshamburger');

// // Добавляем обработчик события на клик гамбургера
// hamburger.addEventListener('click', () => {
//   hamburger.style.opacity = 0;  // Плавно скрываем гамбургер
//   crosshamburger.style.opacity = 1;  // Плавно показываем крестик

//   // Меняем z-index, чтобы крестик оказался на переднем плане
//   hamburger.style.zIndex = -1;
//   crosshamburger.style.zIndex = 1;
// });

// // Добавляем обработчик события на клик крестика
// crosshamburger.addEventListener('click', () => {
//   crosshamburger.style.opacity = 0;  // Плавно скрываем крестик
//   hamburger.style.opacity = 1;  // Плавно показываем гамбургер

//   // Меняем z-index, чтобы гамбургер снова оказался на переднем плане
//   crosshamburger.style.zIndex = -1;
//   hamburger.style.zIndex = 1;
// });



// **********************************************************

// const hamburger = document.querySelector('.hamburger');
// const crosshamburger = document.querySelector('.crosshamburger');
// const squareMenu = document.querySelector('.square-menu');

// // Добавляем обработчик события на клик гамбургера
// hamburger.addEventListener('click', () => {

//     hamburger.classList.add('hide');
//     crosshamburger.classList.remove add('hide');
//     hamburger.style.display = block;
//     crosshamburger.style.zIndex = 1;
 
//   squareMenu.classList.add('show');  // Добавляем класс для показа
// });

// Добавляем обработчик события на клик крестика
// crosshamburger.addEventListener('click', () => {
//   crosshamburger.style.opacity = 0;  // Плавно скрываем крестик
//   hamburger.style.opacity = 1;  // Плавно показываем гамбургер
//   crosshamburger.style.zIndex = -1;
//   hamburger.style.zIndex = 1;

//   // Скрываем блок меню
//   squareMenu.classList.remove('show');  // Убираем класс для скрытия
// });



// ************************************************************
// const hamburger = document.querySelector('.hamburger');
// const crosshamburger = document.querySelector('.crosshamburger');
// const squareMenu = document.querySelector('.square-menu');

// // Добавляем обработчик события на клик гамбургера
// hamburger.addEventListener('click', () => {
//   hamburger.classList.add('hide');  // Скрываем гамбургер
//   crosshamburger.classList.remove('hide');  // Показываем крестик

//   squareMenu.classList.add('show');  // Показываем меню
// });

// // Добавляем обработчик события на клик крестика
// crosshamburger.addEventListener('click', () => {
//   crosshamburger.classList.add('hide');  // Скрываем крестик
//   hamburger.classList.remove('hide');  // Показываем гамбургер

//   squareMenu.classList.remove('show');  // Скрываем меню
// });



const hamburger = document.querySelector('.hamburger');
const crosshamburger = document.querySelector('.crosshamburger');
const squareMenu = document.querySelector('.square-menu');
const menuLinks = document.querySelectorAll('.square-menu .menu a');  // Все ссылки в меню

// Обработчик для гамбургера
hamburger.addEventListener('click', () => {
  hamburger.classList.add('hide');
  crosshamburger.classList.remove('hide');
  squareMenu.classList.add('show');  // Показываем меню
});

// Обработчик для крестика
crosshamburger.addEventListener('click', () => {
  hamburger.classList.remove('hide');
  crosshamburger.classList.add('hide');
  squareMenu.classList.remove('show');  // Скрываем меню
});

// Обработчик для всех ссылок в меню
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('hide');  // Показываем гамбургер
    crosshamburger.classList.add('hide');  // Скрываем крестик
    squareMenu.classList.remove('show');  // Скрываем меню
  });
});