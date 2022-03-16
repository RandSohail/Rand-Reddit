/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
console.log(222);
const userNameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const feedback = document.querySelector('.feedback');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (userNameInput.value === '' || emailInput.value === '' || passwordInput.value === '' || confirmPasswordInput.value === '') {
    console.log('error');
  } else {
    fetch('/api/v1/addUser', {
      method: 'post',
      body: JSON.stringify({
        username: userNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((result) => result.json())
      .then((response) => {
        if (response.status) {
          feedback.textContent = response.message;
        } else {
          window.location.href = '/';
        }
      }).catch((error) => {
        // feedback.textContent = error.message;
      });
  }
});
