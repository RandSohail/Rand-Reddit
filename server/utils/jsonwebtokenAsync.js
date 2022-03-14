const { sign, verify } = require('jsonwebtoken');

const signAsync = (text) => new Promise((resolve, reject) => {
  sign(text, process.env.SECRET, (error, token) => {
    if (error) return reject(error);
    return resolve(token);
  });
});

const verifyAsync = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET, (error, decoded) => {
    if (error) return reject(error);
    return resolve(decoded);
  });
});

module.exports = { signAsync, verifyAsync };
