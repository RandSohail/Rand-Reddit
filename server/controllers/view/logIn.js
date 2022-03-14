const { join } = require('path');

const logIn = (request, response) => {
  if (request.userId) {
    response.redirect('/');
  } else {
    response.sendFile(join(__dirname, '..', '..', '..', 'client', 'html', 'logIn.html'));
  }
};

module.exports = { logIn };
