const apiRoutes = require('express').Router();

const { addUser, logInUser } = require('../controllers');

apiRoutes.post('/addUser', addUser);
apiRoutes.post('/logInUser', logInUser);

module.exports = apiRoutes;
