/* eslint-disable no-console */
console.log(222);
const submitButton = document.querySelector('#submitButton');
const userNameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

console.log(document.cookie);

// fetch('/logIn', {
//   method: 'get',
//   headers: { 'Content-Type': 'application/json' },
// })
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

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
      console.log('response', response);
    })
    .catch((error) => {
      console.log('1111', error);
    });
});
