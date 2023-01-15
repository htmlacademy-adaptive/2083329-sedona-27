const toggleButtonElement = document.querySelector('.main-nav__toggle');
const mainNavElement = document.querySelector('.main-nav');
const mainHeaderElement = document.querySelector('.main-header');

mainHeaderElement.classList.remove('main-header--nojs');

toggleButtonElement.addEventListener('click', () => {
  if (mainNavElement.classList.contains('main-nav--closed')) {
    mainNavElement.classList.remove('main-nav--closed');
    mainNavElement.classList.add('main-nav--opened');
  } else {
    mainNavElement.classList.add('main-nav--closed');
    mainNavElement.classList.remove('main-nav--opened');
  }
});
