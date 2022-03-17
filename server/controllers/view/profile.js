const { join } = require('path');

const profilePage = (request, response) => {
  response.sendFile(join(__dirname, '..', '..', '..', 'client', 'html', 'profile.html'));
};

module.exports = { profilePage };
