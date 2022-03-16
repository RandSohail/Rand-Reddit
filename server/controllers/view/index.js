const { signUp } = require('./signUp');
const { logIn } = require('./logIn');
const { postPage } = require('./post');
const { profilePage } = require('./profile');

module.exports = {
  signUp, logIn, postPage, profilePage,
};
