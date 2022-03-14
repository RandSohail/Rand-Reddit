const apiRoutes = require('express').Router();

const { signUp, logIn, postPage } = require('../controllers');
const { checkAuthentication } = require('../utils');

apiRoutes.use(checkAuthentication);
apiRoutes.get('/signUp', signUp);
apiRoutes.get('/logIn', logIn);
apiRoutes.get('/post', postPage);

module.exports = apiRoutes;
