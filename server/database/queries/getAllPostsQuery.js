const connection = require('../config/connection');

const getAllPostsQuery = () => connection.query('SELECT posts.id, users.username, posts.user_id, posts.title, posts.content  FROM posts JOIN users on (posts.user_id = users.id);');

module.exports = { getAllPostsQuery };
