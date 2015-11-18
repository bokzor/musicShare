// Babel ES6/JSX Compiler
require('babel-core/register');
require("babel-polyfill");

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var colors = require('colors');
var mongoose = require('mongoose');
var request = require('request');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var swig  = require('swig');
var xml2js = require('xml2js');


var cookieParser = require('cookie-parser');
var reactCookie = require('react-cookie');

var RoutingContext = Router.RoutingContext;


var routes = require('./app/routes');
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
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes for the api
app.use('/api', apiRoutes);



app.use(function(req, res) {
  reactCookie.plugToRequest(req, res);
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});



app.use(function(err, req, res, next) {
  console.log(err.stack.red);
  res.status(err.status || 500);
  res.send({ message: err.message });
});


app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});


