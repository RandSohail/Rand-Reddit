// const  = require('./api');
const { signUp, logIn, postPage } = require('./view');
const { addUser, logInUser, addPost } = require('./api');
const { serverError, pageNotFound } = require('./error');

module.exports = {
  signUp, addUser, serverError, pageNotFound, logIn, logInUser, postPage, addPost,
};
