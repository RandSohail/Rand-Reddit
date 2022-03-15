const { addPostQuery } = require('../../database/queries');

const addPost = (request, response, next) => {
  const { title, content } = request.body;
  const { userId } = request;
  addPostQuery(title, content, userId)
    .then(() => response.json({ message: 'Your post added successfully' }))
    .catch((error) => {
      next(error);
    });
};

module.exports = { addPost };
