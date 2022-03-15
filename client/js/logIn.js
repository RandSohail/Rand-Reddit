/* eslint-disable no-console */
console.log(222);
const submitButton = document.querySelector('#submitButton');
const userNameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/api/v1/logInUser', {
    method: 'post',
    body: JSON.stringify({
      username: userNameInput.value,
      password: passwordInput.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  }).then((result) => result.json())
    .then((response) => {
      window.location.href = '/';
      console.log('response', response);
    })
    .catch((error) => {
      console.log('1111', error);
    });
});
