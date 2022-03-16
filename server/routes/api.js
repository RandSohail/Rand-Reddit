const apiRoutes = require('express').Router();

const {
  addUser, logInUser, addPost, getAllPostsData, getUserInformation,
} = require('../controllers');

const { checkAuthentication } = require('../utils');

apiRoutes.post('/addUser', addUser);
apiRoutes.post('/logInUser', logInUser);
apiRoutes.get('/getAllPosts', getAllPostsData);

apiRoutes.use(checkAuthentication);
apiRoutes.post('/addPost', addPost);
apiRoutes.get('/userInformation', getUserInformation);

module.exports = apiRoutes;
