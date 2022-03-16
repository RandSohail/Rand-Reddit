const CustomizedError = (message, statusCode) => {
  const myError = new Error(message);
  myError.status = statusCode;
  return myError;
};

module.exports = { CustomizedError };
