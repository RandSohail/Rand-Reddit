const apiRoutes = require('express').Router();

const { signUp, logIn } = require('../controllers');

apiRoutes.get('/signUp', signUp);
apiRoutes.get('/logIn', logIn);

module.exports = apiRoutes;
