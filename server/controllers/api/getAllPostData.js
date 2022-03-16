const { getAllPostsQuery } = require('../../database/queries');

const getAllPostsData = (request, response, next) => {
  getAllPostsQuery()
    .then((result) => response.json(result.rows))
    .catch((error) => next(error));
};

module.exports = { getAllPostsData };
