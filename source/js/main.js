const toogleButtonElement = document.querySelector('.main-header__toogle');
const navigationElement = document.querySelector('.main-nav');

toogleButtonElement.classList.remove('visually-hidden');
// navigationElement.classList.add('visually-hidden');

const onToogleButtonClick = () => {
  navigationElement.classList.toggle('visually-hidden');
  navigationElement.classList.add('main-nav--js-active');
  toogleButtonElement.classList.toggle('main-header__toogle--open');
  toogleButtonElement.classList.toggle('main-header__toogle--close');
}

toogleButtonElement.addEventListener('click', onToogleButtonClick);
