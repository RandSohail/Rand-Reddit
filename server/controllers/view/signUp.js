const { join } = require('path');

const signUp = (request, response) => {
  response.sendFile(join(__dirname, '..', '..', '..', 'client', 'html', 'signUp.html'));
};

module.exports = signUp;
