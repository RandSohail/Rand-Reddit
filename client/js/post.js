/* eslint-disable no-console */
const submitButton = document.querySelector('#submitButton');
const titleInput = document.querySelector('.title');
const contentInput = document.querySelector('.content');
const feedback = document.querySelector('.feedback');
console.log('object');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (titleInput.value === '' || contentInput.value === '') {
    feedback.textContent = 'all inputs are required';
  } else {
    fetch('/api/v1/addPost', {
      method: 'post',
      body: JSON.stringify({
        title: titleInput.value,
        content: contentInput.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((result) => result.json())
      .then((response) => {
        feedback.textContent = response.message;
      }).catch((error) => {
        console.log(error);
      });
  }
});
