require('env2')('.env');
const { join } = require('path');

const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const { serverError, pageNotFound } = require('./controllers');
const apiRoutes = require('./routes/api');
const viewsRoutes = require('./routes/view');
const staticRoutes = require('./routes/static');

const app = express();

app.set('port', process.env.PORT || 8800);

app.disabled('x-powered-by');
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'client')));

app.use('/api/v1/', apiRoutes);
app.use(viewsRoutes);
app.use(staticRoutes);

app.use(pageNotFound);
app.use(serverError);

module.exports = app;
