const { join } = require('path');

const logIn = (request, response) => {
  response.sendFile(join(__dirname, '..', '..', '..', 'client', 'html', 'logIn.html'));
};

module.exports = { logIn };
