/* eslint-disable no-unused-vars */
const { join } = require('path');

const serverError = (error, request, response, next) => {
  response.sendFile(join(__dirname, '..', '..', '..', 'client', 'html', 'error', 'serverError.html'));
};

module.exports = { serverError };
