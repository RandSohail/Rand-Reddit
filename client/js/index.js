const logInButton = document.querySelector('.logInButton');
const signUpButton = document.querySelector('.signUpButton');
const createPost = document.querySelector('.createPost');
const dropdown = document.querySelector('.dropdown');
const userName = document.querySelector('#username');

if (document.cookie) {
  logInButton.className = 'hide-element';
  signUpButton.className = 'hide-element';
  createPost.classList.remove('hide-element');
  dropdown.classList.remove('hide-element');
}

fetch('/api/v1/userInformation', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
}).then((response) => response.json())
  .then((data) => {
    userName.textContent = data[0].username;
  })
  .catch((error) => {
    console.log(error);
  });

// // function to decoded cookies and get the user id
// function parseJwt(token) {
//   const base64Url = token.split('.')[1];
//   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
// eslint-disable-next-line max-len
//   const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
//   return JSON.parse(jsonPayload);
// }

// const { id } = parseJwt(document.cookie);
