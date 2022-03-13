/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
console.log(222);
const userNameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const profileImageInput = document.querySelector('#profileImage');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/api/v1/addUser', {
    method: 'post',
    body: JSON.stringify({
      username: userNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      profileImage: profileImageInput.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  }).then((result) => result.json())
    .then((res) => {
      console.log('response from frontend', res);
    }).catch((error) => {
      console.log(error);
    });
  // window.location.href = '/';
});
