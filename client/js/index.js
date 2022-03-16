/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable no-console */

const logInButton = document.querySelector('.logInButton');
const signUpButton = document.querySelector('.signUpButton');
const createPost = document.querySelector('.createPost');
const dropdown = document.querySelector('.dropdown');
const userName = document.querySelector('.user-name');

if (document.cookie) {
  logInButton.className = 'hide-element';
  signUpButton.className = 'hide-element';
  createPost.classList.remove('hide-element');
  dropdown.classList.remove('hide-element');
}

// function to decoded cookies and get the user id
function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
  return JSON.parse(jsonPayload);
}

const { id } = parseJwt(document.cookie);

// render user name on the button
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

// get all posts
fetch('/api/v1/getAllPosts', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
}).then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
