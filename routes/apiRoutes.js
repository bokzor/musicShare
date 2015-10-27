const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Music = require('../models/music').model;

const config = require('../config');

// get an instance of the router for api routes
const apiRoutes = express.Router();


// route to create a new user
apiRoutes.post('/signup', function (req, res, next) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
    username: username,
    email: email,
    password: password
  });

  newUser.save(function (err) {
    if (err) return next(err);
    // we create a new token
    const token = jwt.sign({user: { username : newUser.username }}, config.secretToken, {
      expiresInMinutes: 1440 // expires in 24 hours
    });

    // let's fetch it to get the expires param
    const decoded = jwt.decode(token);

    res.status(201).send({
      message: 'Registration Successfull',
      token: token,
      user: {id: newUser.id, username: newUser.username},
      expires: decoded.exp
    });

  })
});

// route to authenticate an user. Return a token
apiRoutes.post('/auth', function (req, res) {

  const username = req.body.username;
  const password = req.body.password;

  // find the user
  User.findOne({
    username: username
  }, function (err, user) {
    if (err) throw err;

    if (!user) {
      res.status(404).json({success: false, message: 'Authentication failed. User not found.'});

    } else if (user) {
      // test a matching password
      user.comparePassword(password, function (err, isMatch) {
        if (err) throw err;
        if (!isMatch) {
          res.status(401).json({success: false, message: 'Authentication failed. Wrong password.'});
        } else {
          // if user is found and password is right
          // create a token
          const token = jwt.sign({user: { username: user.username}}, config.secretToken, {
            expiresIn: 86400 // expires in 24 hours
          });
          const decoded = jwt.decode(token);

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Welcome ' + user.username,
            token: token,
            expires: decoded.exp
          });
        }
      });

    }
  });

});


// route middleware to verify a token
apiRoutes.use(function (req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-xsrf-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.secretToken, function (err, decoded) {
      if (err) {
        return res.json({success: false, message: 'Failed to authenticate token.'});
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
});


apiRoutes.post('/addMusic', function (req, res) {
  let music = new Music();
  music.name = req.body.music.completeName;
  music.title = req.body.music.title;
  music.artist = req.body.music.artist;
  music.img = req.body.music.image;
  music.isMix = req.body.music.isMix;
  music.duration = req.body.music.duration;
  music.url = req.body.music.url;
  music.genres = req.body.music.genres;
  music.hostType = req.body.music.hostType;
  music.tags = req.body.music.tags;

  User.findOne({
    username: req.decoded.user.username
  }, function (err, user) {
    console.log(user);
    user.musics.push(music);
    user.save(err => {
      if(err) {
        res.status(400).json({
          success: 'false',
          error: err
        });
      } else {
        res.status(201).json({
          message: 'Music added',
          success: 'true'
        });
      }

    })
  });

  app.get('/profile', function (req, res) {
    //User.findOne({ username: req.decoded.user.username }, function (err, user) {
    User.findOne({ username: 'aa' }, function (err, user) {
      if (err) return next(err);
      if (!user) {
        return res.status(404).send({ message: 'User not found.' });
      }
      res.send(user);
    });
  });

});


export default apiRoutes;