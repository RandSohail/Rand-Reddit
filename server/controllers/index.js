// const  = require('./api');
const { signUp, logIn } = require('./view');
const { addUser, logInUser } = require('./api');
const { serverError, pageNotFound } = require('./error');

module.exports = {
  signUp, addUser, serverError, pageNotFound, logIn, logInUser,
};
