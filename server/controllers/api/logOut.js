const logOut = (request, response) => {
  response.clearCookie('Token').redirect('/');
};

module.exports = { logOut };
