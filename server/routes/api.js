const apiRoutes = require('express').Router();

const { addUser } = require('../controllers');

apiRoutes.post('/addUser', addUser);

module.exports = apiRoutes;
