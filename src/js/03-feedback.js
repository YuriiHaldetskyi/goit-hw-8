import throttle from 'lodash.throttle';

const inputMail = document.querySelector('input');
const massage = document.querySelector('textarea');
const form = document.querySelector('form');

const KEY_LOCAL = 'feedback-form-state';

let formData = {};

form.addEventListener('input', onInput);
form.addEventListener('submit', throttle(onSubmit, 500));

function onInput(e) {
  localStorage.setItem(
    KEY_LOCAL,
    JSON.stringify({ email: inputMail.value, message: massage.value })
  );
}

function onSubmit(e) {
  e.preventDefault();
  console.log({ email: inputMail.value, message: massage.value });
  localStorage.removeItem(KEY_LOCAL);
  e.currentTarget.reset();
}

try {
  formData = JSON.parse(localStorage.getItem(KEY_LOCAL));
  if (formData !== null) {
    inputMail.value = formData.email;
    massage.value = formData.message;
  }
} catch (error) {
  console.log(error);
}
