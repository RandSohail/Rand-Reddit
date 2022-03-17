/* eslint-disable max-len */
const { addUserQuery } = require('./addUserQuery');
const { checkEmailQuery } = require('./checkEmail');
const { checkUserNameQuery } = require('./checkUserNameQuery');
const { addPostQuery } = require('./addPost');
const { getAllPostsQuery } = require('./getAllPostsQuery');
const { getUserInfoQuery } = require('./getUserInfoQuery');
const { deletePostQuery } = require('./deletePostQuery');
const { userProfileDataQuery } = require('./userProfileDataQuery');

module.exports = {
  addUserQuery,
  checkEmailQuery,
  checkUserNameQuery,
  addPostQuery,
  getAllPostsQuery,
  getUserInfoQuery,
  deletePostQuery,
  userProfileDataQuery,
};
