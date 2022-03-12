/* eslint-disable no-unused-vars */
console.log(222);
// username email password confirmPassword

const userNameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const profileImageInput = document.querySelector('#profileImage');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/addUser', {
    method: 'post',
    body: JSON.stringify({
      username: userNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      profileImage: profileImageInput.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  }).then((result) => {
    console.log('result', result);
  }).catch((error) => {
    console.log('error', error.message);
  });
});
