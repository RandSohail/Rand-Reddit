/* eslint-disable no-unused-vars */
const { verifyAsync } = require('../jsonwebtokenAsync');
const { CustomizedError } = require('../customizedError');

const checkAuthentication = (request, response, next) => {
  const { Token } = request.cookies;
  if (Token) {
    verifyAsync(Token)
      .then(({ id }) => {
        request.userId = id;
        next();
      })
      .catch((error) => {
        next(CustomizedError(' Un Authorized Please log In or Sign Up ', 401));
        // eslint-disable-next-line max-len
        // response.clearCookie('Token').status(401).json({ message: 'Un Authorized Please log in or sign up' });
      });
  } else { next(); }
};

module.exports = { checkAuthentication };
