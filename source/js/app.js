const toogleButtonElement = document.querySelector('.main-header__toogle');
const navigationElement = document.querySelector('.main-nav');

const onToogleButtonClick = () => {
  navigationElement.classList.toggle('visually-hidden');
  toogleButtonElement.classList.toggle('main-header__toogle--open');
  toogleButtonElement.classList.toggle('main-header__toogle--close');
}

toogleButtonElement.addEventListener('click', onToogleButtonClick);
