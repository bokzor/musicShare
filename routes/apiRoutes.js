const express = require('express');
const jwt = require('jsonwebtoken');
const _ = require('lodash');


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
    const token = jwt.sign({user: {username: newUser.username}}, config.secretToken, {
      expiresIn: 1440 * 60 // expires in 24 hours
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
  const email = req.body.email;
  const password = req.body.password;

  // find the user
  User.findOne({
    email: email
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
          const token = jwt.sign({user: {username: user.username, id: user.id}}, config.secretToken, {
            expiresIn: 86400 // expires in 24 hours
          });
          const decoded = jwt.decode(token);

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Welcome ' + user.username,
            user: {id: user.id, username: user.username},
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

  User.findById(req.decoded.user.id, function (err, user) {
    user.musics.push(music);
    user.save(err => {
      if (err) {
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
});


// use in Profile component
apiRoutes.get('/profile/:username',function (req, res) {
  User.findOne({ username: req.params.username },'username musics')
    .sort( { 'musics.createdAt': -1 } )
    .exec((err, user) => {
    if (err) {
      return res.status(400).send({message: err});
    }
    if (!user) {
      return res.status(404).send({message: 'User not found.'});
    }
    res.send(user);
  });
});

// use in App component
/*apiRoutes.get('/user', function (req, res) {
  User.findOne({ username: req.decoded.user.username }, { 'password': 0, 'musics': 0 }, function (err, user) {
    if (err) {
      return res.status(400).send({ message: err });
    }
    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }
    res.send(user);
  });
});*/

apiRoutes.get('/test', function (req, res) {

  User.findOne({username: 'bokzor'}, 'following username')
    .then(userAdri => {

      User.findOne({username: 'max'}, 'following username')
        .then(user => {
          userAdri.following.push(user);
        });

      User.findOne({username: 'maxime'}, 'following username')
        .then(user => {
          userAdri.following.push(user);
          userAdri.save();
        });
    });
});

apiRoutes.get('/friends', function (req, res) {
  User
    .findById(req.decoded.user.id, 'following username')
    .populate('following', 'username')
    .exec(function (err, user) {
      res.send(user);
    });
});


apiRoutes.get('/discover', function (req, res) {
  User
    .findById(req.decoded.user.id, 'following username')
    .populate('following', 'musics')
    .exec(function (err, user) {
      let musics = [];
      for (var people of user.following) {
        musics.push(people.musics);
      }

      res.send(_.sortBy(musics, 'createdAt'));
    });
});



apiRoutes.get('/userSearch', function (req, res) {
  User
    .find({username: new RegExp(req.query.search, "i")}, 'username').limit(5)
    .exec((err, users) => {
      res.send(users);
    });
});

export default apiRoutes;