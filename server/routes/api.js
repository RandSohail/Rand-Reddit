const apiRoutes = require('express').Router();

const { addUser, logInUser, addPost } = require('../controllers');

const { checkAuthentication } = require('../utils');

apiRoutes.post('/addUser', addUser);
apiRoutes.post('/logInUser', logInUser);

apiRoutes.use(checkAuthentication);
apiRoutes.post('/addPost', addPost);

module.exports = apiRoutes;
