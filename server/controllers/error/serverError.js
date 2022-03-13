/* eslint-disable no-unused-vars */
const { join } = require('path');

const serverError = (error, request, response, next) => {
  if (error.status) {
    response.json({ message: error.message, status: error.status });
  } else {
    response.sendFile(join(__dirname, '..', '..', '..', 'client', 'html', 'error', 'serverError.html'));
  }
};

module.exports = { serverError };
