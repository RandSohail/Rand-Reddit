const { deletePostQuery } = require('../../database/queries');

const deletePost = (request, response) => {
  const { id } = request.params;
  deletePostQuery(id).then(() => response.status(202).json({ message: 'Deleted Post successfully!' }));
};

module.exports = { deletePost };
