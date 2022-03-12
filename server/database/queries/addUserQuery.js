const connection = require('../config/connection');

const addUserQuery = (username, email, password, profileImage) => connection.query('INSERT INTO users (username, email, password, profile_image) VALUES ($1, $2, $3, $4) RETURNING id', [username, email, password, profileImage]);

module.exports = { addUserQuery };
