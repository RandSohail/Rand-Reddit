/* eslint-disable prefer-template */
/* eslint-disable no-undef */

// function to decoded cookies and get the user id
let userId;

if (document.cookie) {
  const parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(jsonPayload);
  };
  const { id } = parseJwt(document.cookie);
  userId = id;
}

console.log('user ID', userId);

// get all posts
fetch('/api/v1/getAllPosts', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
}).then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      renderPostData(element.username, element.title, element.content);
    });
  });
