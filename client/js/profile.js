/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-console */
const nameUser = window.location.href.split('/')[4];
console.log(nameUser);
document.title = `${nameUser} (u/${nameUser})`;

fetch(`/api/v1/profile/${nameUser}`, {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
}).then((response) => response.json())
  .then((data) => {
    if (data.length === 0) {
      renderAuthProfileData(nameUser);
    } else {
      data.forEach((element) => {
        renderProfilePage(nameUser, element.user_id, element.id, element.title, element.content, element.profile_image);
      });
    }
  });
