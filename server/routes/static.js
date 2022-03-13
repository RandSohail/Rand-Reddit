// const { join } = require('path');
const staticRoutes = require('express').Router();
const { signUp, logIn } = require('../controllers');

staticRoutes.get('/client/html/signUp.html', signUp);
staticRoutes.get('/client/html/logIn.html', logIn);

module.exports = staticRoutes;
