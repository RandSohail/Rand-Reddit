/* eslint-disable no-undef */

// get all posts
fetch('/api/v1/getAllPosts', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
}).then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      renderPostData(element.username, element.title, element.content);
    });
  })
  .catch(() => {
  });
