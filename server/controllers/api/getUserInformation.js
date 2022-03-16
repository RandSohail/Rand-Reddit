const { getUserInfoQuery } = require('../../database/queries');

const getUserInformation = (request, response, next) => {
  const { userId } = request;
  getUserInfoQuery(userId)
    .then((result) => response.json(result.rows))
    .catch((error) => next(error));
};

module.exports = { getUserInformation };
