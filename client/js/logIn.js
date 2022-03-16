/* eslint-disable no-console */

const submitButton = document.querySelector('#submitButton');
const userNameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const feedback = document.querySelector('.feedback');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (userNameInput.value === '' || passwordInput.value === '') {
    feedback.textContent = 'all inputs are required';
  } else {
    fetch('/api/v1/logInUser', {
      method: 'post',
      body: JSON.stringify({
        username: userNameInput.value,
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
      })
      .catch((error) => {
        feedback.textContent = error.message;
      });
  }
});
