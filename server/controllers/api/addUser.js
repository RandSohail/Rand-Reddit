const { hash } = require('bcryptjs');
const { signUpSchema, CustomizedError, signAsync } = require('../../utils');
const { addUserQuery, checkEmailQuery } = require('../../database/queries');

const addUser = (request, response, next) => {
  const {
    username, email, password,
  } = request.body;
  signUpSchema.validateAsync({ username, email, password })
    .then(() => checkEmailQuery(email))
    .then(({ rowCount }) => {
      if (rowCount === 1) {
        throw CustomizedError('Email is used Try Another one', 400);
      }
      return hash(password, 10);
    }).then((hashedPassword) => addUserQuery(username, email, hashedPassword))
    .then(({ rows }) => signAsync({ id: rows[0].id }))
    .then((result) => {
      response.status(200).cookie('Token', result).json({ message: 'Sign Up successfully' });
    })
    .catch((error) => {
      if (error.details) {
        next(CustomizedError(error.details[0].message, 400));
      } else {
        next(error);
      }
    });
};

module.exports = { addUser };
