const { userProfileDataQuery } = require('../../database/queries');

const userProfileData = (request, response, next) => {
  const { username } = request.params;
  userProfileDataQuery(username)
    .then((result) => response.json(result.rows))
    .catch((error) => next(error));
};

module.exports = { userProfileData };
