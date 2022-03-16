const { join } = require('path');

const signUp = (request, response) => {
  if (request.userId) {
    response.redirect('/');
  } else {
    response.sendFile(join(__dirname, '..', '..', '..', 'client', 'html', 'signUp.html'));
  }
};

module.exports = { signUp };
