const { join } = require('path');

const signUp = (request, response) => {
  if (request.userId) {
    response.json({ message: 'You have an account' });
  } else {
    response.sendFile(join(__dirname, '..', '..', '..', 'client', 'html', 'signUp.html'));
  }
};

module.exports = { signUp };
