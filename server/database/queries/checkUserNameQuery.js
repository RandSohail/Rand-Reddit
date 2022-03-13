const connection = require('../config/connection');

const checkUserNameQuery = (username) => connection.query('SELECT * FROM users WHERE username=$1', [username]);

module.exports = { checkUserNameQuery };
