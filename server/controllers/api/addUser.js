const { hash } = require('bcryptjs');
const { signUpSchema, CustomizedError, signAsync } = require('../../utils');
const { addUserQuery, checkEmailQuery } = require('../../database/queries');

const addUser = (request, response, next) => {
  const {
    username, email, password, profileImage,
  } = request.body;
  signUpSchema.validateAsync({ username, email, password })
    .then(() => checkEmailQuery(email))
    .then(({ rowCount }) => {
      if (rowCount === 1) {
        return new Error(CustomizedError('Email is used Try Another one !!', 401));
      }
      return hash(password, 10);
    }).then((hashedPassword) => addUserQuery(username, email, hashedPassword, profileImage))
    .then(({ rows }) => signAsync({ id: rows[0].id }))
    .then((result) => {
      response.status(201).cookie('signUpToken', result).json({ message: 'Sign Up successfully' });
    })
    .catch((error) => {
      if (error.details) {
        throw new Error(CustomizedError(error.details[0].message, 400));
      }
      next();
    });
};

module.exports = addUser;
