const connection = require('../config/connection');

const addPostQuery = (title, content, userId) => connection.query('INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3)', [title, content, userId]);

module.exports = { addPostQuery };
