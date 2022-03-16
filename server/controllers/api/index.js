const { addUser } = require('./addUser');
const { logInUser } = require('./logInUser');
const { addPost } = require('./addPost');
const { getAllPostsData } = require('./getAllPostData');
const { getUserInformation } = require('./getUserInformation');

module.exports = {
  addUser, logInUser, addPost, getAllPostsData, getUserInformation,
};
