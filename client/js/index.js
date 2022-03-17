/* eslint-disable prefer-template */
const logInButton = document.querySelector('.logInButton');
const signUpButton = document.querySelector('.signUpButton');
const createPost = document.querySelector('.createPost');
const dropdown = document.querySelector('.dropdown');
const userName = document.querySelector('#username');
const logout = document.querySelector('.logout');
const profile = document.querySelector('.profile');

if (document.cookie) {
  logInButton.className = 'hide-element';
  signUpButton.className = 'hide-element';
  createPost.classList.remove('hide-element');
  dropdown.classList.remove('hide-element');

  fetch('/api/v1/userInformation', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json())
    .then((data) => {
      const name = data[0].username;
      userName.textContent = name;
      profile.href = `/user/${name}`;
    });

  logout.addEventListener('click', () => {
    fetch('/api/v1/logOut')
      .then((response) => response.json());
  });
}
