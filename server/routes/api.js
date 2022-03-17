const apiRoutes = require('express').Router();

const {
  addUser,
  logInUser,
  addPost,
  getAllPostsData,
  getUserInformation,
  logOut,
  deletePost,
  userProfileData,
} = require('../controllers');

const { checkAuthentication } = require('../utils');

apiRoutes.post('/addUser', addUser);
apiRoutes.post('/logInUser', logInUser);
apiRoutes.get('/getAllPosts', getAllPostsData);
apiRoutes.get('/profile/:username', userProfileData);

apiRoutes.use(checkAuthentication);
apiRoutes.post('/addPost', addPost);
apiRoutes.get('/userInformation', getUserInformation);
apiRoutes.get('/logOut', logOut);
apiRoutes.delete('/deletePost/:id', deletePost);

module.exports = apiRoutes;
