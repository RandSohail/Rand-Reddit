const logInButton = document.querySelector('.logInButton');
// const signUpButton = document.querySelector('.signUpButton');

console.log('test');
if (document.cookie) {
  logInButton.textContent = 'Create Post';
  logInButton.href = '/post';
}
