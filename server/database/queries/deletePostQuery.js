const connection = require('../config/connection');

const deletePostQuery = (id) => connection.query('DELETE FROM posts where id=$1', [id]);

module.exports = { deletePostQuery };
