/* eslint-disable max-len */
// const  = require('./api');
const { signUp, logIn, postPage } = require('./view');
const {
  addUser, logInUser, addPost, getAllPostsData, getUserInformation, logOut, deletePost,
} = require('./api');
const { serverError, pageNotFound } = require('./error');

module.exports = {
  signUp,
  addUser,
  serverError,
  pageNotFound,
  logIn,
  logInUser,
  postPage,
  addPost,
  getAllPostsData,
  getUserInformation,
  logOut,
  deletePost,
};
