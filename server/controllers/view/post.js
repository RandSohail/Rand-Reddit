const { join } = require('path');

const postPage = (request, response) => {
  response.sendFile(join(__dirname, '..', '..', '..', 'client', 'html', 'post.html'));
};

module.exports = { postPage };
