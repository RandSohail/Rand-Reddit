require('env2')('.env');
const { join } = require('path');

const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const app = express();

app.set('port', process.env.PORT || 8800);

app.disabled('x-powered-by');
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'client')));
// Stop the user to reach the protected routes "ONLY FOR PROTECTED ROUTES"
app.get('client/html/signUp.html', (request, response) => {
  response.sendFile(join(__dirname, '..', 'client', 'html', 'signUp.html'));
});

module.exports = app;
