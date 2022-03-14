// const { join } = require('path');
const staticRoutes = require('express').Router();
const { signUp, logIn, postPage } = require('../controllers');

staticRoutes.get('/client/html/signUp.html', signUp);
staticRoutes.get('client/html/logIn.html', logIn);
staticRoutes.get('client/html/post.html', postPage);

module.exports = staticRoutes;
