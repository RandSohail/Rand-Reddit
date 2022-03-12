const { join } = require('path');

// eslint-disable-next-line no-unused-vars
const pageNotFound = (request, response) => {
  response.sendFile(join(__dirname, '..', '..', '..', 'client', 'html', 'error', 'pageNotFound.html'));
};

module.exports = { pageNotFound };
