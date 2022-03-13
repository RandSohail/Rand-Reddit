/* eslint-disable no-unused-vars */
const { compare } = require('bcryptjs');
const { logInSchema, CustomizedError, signAsync } = require('../../utils');
const { checkUserNameQuery } = require('../../database/queries');

const logInUser = (request, response, next) => {
  console.log(request.body);
  let userId;
  const { username, password } = request.body;
  logInSchema.validateAsync({ username, password })
    .then(() => checkUserNameQuery(username))
    .then((databaseResult) => {
      if (databaseResult.rowCount === 0) throw new Error(CustomizedError('UserName not Found Sign Up', 403));
      userId = databaseResult.rows[0].id;
      return compare(password, databaseResult.rows[0].password);
    }).then((compareResult) => {
      if (!compareResult) throw new Error(CustomizedError('Password you have entered is incorrect', 403));
      return signAsync({ id: userId });
    })
    .then((result) => {
      response.status(202).cookie('Token', result).json({ message: 'Log In successfully' });
    })
    .catch((error) => {
      if (error.details) {
        next(CustomizedError(error.details[0].message, 400));
      }
      next(error);
    });
};

module.exports = { logInUser };
