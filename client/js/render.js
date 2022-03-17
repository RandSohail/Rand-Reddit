/* eslint-disable no-unused-vars */
const renderPostData = (name, title, post, postId, userId, userNameQ) => {
  const container = document.querySelector('.container');

  const card = document.createElement('div');
  card.className = 'card';

  const vote = document.createElement('div');
  vote.className = 'vote';
  card.appendChild(vote);

  const up = document.createElement('i');
  up.className = 'fa fa-angle-up';
  up.style.fontSize = '25px';
  vote.appendChild(up);

  const voteRate = document.createElement('span');
  voteRate.textContent = '0';
  vote.appendChild(voteRate);

  const down = document.createElement('i');
  down.className = 'fa fa-angle-down';
  down.style.fontSize = '25px';
  vote.appendChild(down);

  const content = document.createElement('div');
  content.className = 'content';
  card.appendChild(content);

  const internalContent = document.createElement('div');
  internalContent.className = 'header-post style-spaces';
  content.appendChild(internalContent);

  const userInformation = document.createElement('div');
  userInformation.className = 'user-info';
  internalContent.appendChild(userInformation);

  const span = document.createElement('span');
  span.textContent = 'Posted by ';
  userInformation.appendChild(span);

  const username = document.createElement('a');
  username.textContent = name;
  username.className = 'post-owner';
  fetch(`/u/${userNameQ}`, {
    method: 'get',
  }).then(() => {
    username.href = `/u/${userNameQ}`;
  });
  userInformation.appendChild(username);

  const deletePost = document.createElement('div');
  deletePost.className = 'delete';
  internalContent.appendChild(deletePost);

  // delete function
  if (document.cookie) {
    fetch('/api/v1/userInformation', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json())
      .then((data) => {
        const authUserId = data[0].id;
        if (userId === authUserId) {
          const deleteBtn = document.createElement('i');
          deleteBtn.className = 'fa fa-trash';
          deleteBtn.style.fontSize = '25px';
          deletePost.appendChild(deleteBtn);
          deleteBtn.addEventListener('click', () => {
            fetch(`/api/v1/deletePost/${postId}`, {
              method: 'delete',
            }).then(() => {
              card.remove();
            });
          });
        }
      });
  }

  const titlePost = document.createElement('h3');
  titlePost.textContent = title;
  titlePost.className = 'style-spaces';
  content.appendChild(titlePost);

  const postData = document.createElement('p');
  postData.textContent = post;
  postData.className = 'style-spaces';
  content.appendChild(postData);

  container.appendChild(card);
};
