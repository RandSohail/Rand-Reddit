const apiRoutes = require('express').Router();

const { signUp } = require('../controllers');

apiRoutes.get('/signUp', signUp);

module.exports = apiRoutes;
