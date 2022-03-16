/* eslint-disable no-unused-vars */
const renderPostData = (name, title, post) => {
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
  internalContent.className = 'style-spaces';
  content.appendChild(internalContent);
  const span = document.createElement('span');
  span.textContent = 'Posted by ';
  internalContent.appendChild(span);

  const username = document.createElement('a');
  username.textContent = name;
  username.className = 'post-owner';
  username.href = '/u/:username';
  internalContent.appendChild(username);

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
