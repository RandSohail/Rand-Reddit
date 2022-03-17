/* eslint-disable max-len */
/* eslint-disable spaced-comment */
const connection = require('../config/connection');

const userProfileDataQuery = (username) => connection.query('SELECT posts.id, posts.user_id, users.profile_image,  posts.title, posts.content FROM posts JOIN users ON (posts.user_id = users.id) WHERE users.username= $1', [username]);

module.exports = { userProfileDataQuery };
