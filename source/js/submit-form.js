const feedbackFormElement = document.querySelector('.feedback-form');
const successModalElement = document.querySelector('.modal-container--success');
const errorModalElement = document.querySelector('.modal-container--error');
const buttonErrorElement = document.querySelector('.modal__button--error');
const buttonSuccessElement = document.querySelector('.modal__button--success');

function cancelSuccessMessage() {
  successModalElement.classList.remove('modal-container--display');
  document.removeEventListener('click', onOutSuccessElementClick);
}

function cancelErrorMessage() {
  errorModalElement.classList.remove('modal-container--display');
  document.removeEventListener('click', onOutErrorElementClick);
}

const onOutSuccessElementClick = (evt) => {
  if (evt.target === successModalElement) {
    cancelSuccessMessage();
  }
};

const onOutErrorElementClick = (evt) => {
  if (evt.target === errorModalElement) {
    cancelErrorMessage();
  }
};

const showSuccessMessage = () => {
  successModalElement.classList.add('modal-container--display');
  document.addEventListener('click', onOutSuccessElementClick);
};

const showErrorMessage = () => {
  errorModalElement.classList.add('modal-container--display');
  document.addEventListener('click', onOutErrorElementClick);
}

feedbackFormElement.setAttribute("novalidate", "true");

const isValidForm = () => {
  let formValid = true;
  document.querySelectorAll('input').forEach((inputElement) => {
    if (inputElement.hasAttribute('required') && inputElement.value === '') {
      formValid = false;
    }
  })
  return formValid;
}

buttonErrorElement.addEventListener('click', cancelErrorMessage);
buttonSuccessElement.addEventListener('click', cancelSuccessMessage);

feedbackFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValidForm()) {
    feedbackFormElement.reset();
    showSuccessMessage();
  } else {
    showErrorMessage();
  }
});
