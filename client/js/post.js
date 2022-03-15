/* eslint-disable no-console */
const submitButton = document.querySelector('#submitButton');
const titleInput = document.querySelector('.title');
const contentInput = document.querySelector('.content');
const feedback = document.querySelector('.feedback');

console.log(2222, contentInput.value);

submitButton.addEventListener('click', () => {
  if (titleInput.value === '' || contentInput.value === '') {
    console.log('error');
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

  titleInput.textContent = '';
  contentInput.textContent = '';
});
