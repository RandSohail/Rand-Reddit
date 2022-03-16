const { addUser } = require('./addUser');
const { logInUser } = require('./logInUser');
const { addPost } = require('./addPost');
const { getAllPostsData } = require('./getAllPostData');
const { getUserInformation } = require('./getUserInformation');
const { logOut } = require('./logOut');
const { deletePost } = require('./deletePost');

module.exports = {
  addUser, logInUser, addPost, getAllPostsData, getUserInformation, logOut, deletePost,
};
