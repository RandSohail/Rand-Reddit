const { sign } = require('jsonwebtoken');

const signAsync = (text) => new Promise((resolve, reject) => {
  sign(text, process.env.SECRET, (error, token) => {
    if (error) return reject(error);
    return resolve(token);
  });
});

module.exports = { signAsync };
