var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var async = require('async');
var request = require('request');
var cookieParser = require('cookie-parser');
var reactCookie = require('react-cookie');
var swig = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');

var mongoose = require('mongoose');
var Music = require('./models/music').model;

var config = require('./config');
var apiRoutes = require('./routes/apiRoutes');

mongoose.connect(config.database);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.database);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

var app = express();
app.use(cookieParser())

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// routes for the api
app.use('/api', apiRoutes);





app.use(function (req, res) {
  Router.run(routes, req.path, function (Handler) {
    reactCookie.plugToRequest(req, res);
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', {html: html});
    res.send(page);
  });
});


app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});


