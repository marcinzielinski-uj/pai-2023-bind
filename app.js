var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv').config();

const cors = require('cors');

/*var corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}*/

const indexRouter = require('./api/v1/routes/index');
const usersRouter = require('./api/v1/routes/users');

const worldRouter = require('./api/v1/routes/world');

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Glowny router
app.use('/', indexRouter);

// API v1 path
const api_path_v1 = '/api/v1';

// User API v1
app.use(api_path_v1 + '/users', usersRouter);

// World API v1
app.use(api_path_v1 + '/world', worldRouter);

module.exports = app;
