// const  = require('./api');
const { signUp } = require('./view');
const { addUser } = require('./api');
const { serverError, pageNotFound } = require('./error');

module.exports = {
  signUp, addUser, serverError, pageNotFound,
};
