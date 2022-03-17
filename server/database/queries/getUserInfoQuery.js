const connection = require('../config/connection');

const getUserInfoQuery = (userId) => connection.query('SELECT id, username, profile_image  FROM users where id=$1;', [userId]);

module.exports = { getUserInfoQuery };
