const express = require('express');
const jwt = require('jsonwebtoken');
const _ = require('lodash');


const User = require('../models/user');
const Music = require('../models/music').model;

const config = require('../config');


const nbPerPage = 30;

// get an instance of the router for api routes
const apiRoutes = express.Router();

// route to create a new user
apiRoutes.post('/signup', (req, res, next) => {
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
apiRoutes.post('/auth', (req, res) => {
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
apiRoutes.use((req, res, next) => {

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

apiRoutes.post('/addMusic', (req, res) => {
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

  music.userId = req.decoded.user.id;

  music.save(err => {
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


// use in Profile component
apiRoutes.get('/profile/:username', function (req, res) {


  var followed = false;

  User.findOne({username: req.params.username}, 'username followedBy followedByCount')
    .exec((err, user) => {
      if (err) {
        res.status(400).json({
          success: 'false',
          error: err
        });
      }

      if (user) {
        Music.find({userId: user.id})
          .sort({'createdAt': -1})
          .limit(nbPerPage)

          .exec((err, musics) => {
            if (user.followedBy.indexOf(req.decoded.user.id) > -1)
              followed = true;

            var newUser = {
              followed: followed,
              user,
              musics: musics
            };

            res.send(newUser);
          });
      }
    });
});


// use in Profile component
apiRoutes.get('/profile/:username/:page', function (req, res) {

  if (!req.params.page)
    var page = 0;

  User.findOne({username: req.params.username}, 'username')
    .exec((err, user) => {
      if (user) {
        Music.find({userId: user.id})
          .sort({'createdAt': -1})
          .limit(nbPerPage)
          .skip(nbPerPage * page)

          .exec((err, musics) => {
            res.send(musics);
          });
      }
    });
});

apiRoutes.post('/follow', (req, res) => {
  const toFollow = req.body.username;

  User.findOne(req.decoded.user.id, 'followingCount following')
    .exec((err, currentUser) => {
      if (currentUser) {
        User.findOne({username: toFollow}, 'followedByCount followedBy')
          .exec((err, user) => {
            if (user) {

              currentUser.followingCount++;
              currentUser.following.addToSet(user);
              currentUser.save();

              user.followedByCount++;
              user.followedBy.addToSet(currentUser);
              user.save();

              res.send(currentUser);
            }
          });
      }
    });
});


apiRoutes.post('/unfollow', (req, res) => {
  const toFollow = req.body.username;

  User.findOne(req.decoded.user.id, 'followingCount following')
    .exec((err, currentUser) => {
      if (currentUser) {

        User.findOne({username: toFollow}, 'followedByCount followedBy')
          .exec((err, user) => {
            if (user) {

              currentUser.followingCount--;
              currentUser.following.remove(user);
              currentUser.save();

              user.followedByCount--;
              user.followedBy.remove(currentUser);
              user.save();

              res.send(currentUser);
            }
          });
      }
    });
});


apiRoutes.get('/test', (req, res) => {

  for (var i = 0; i < 1000; i++) {
    let music = new Music();
    music.name = 'Maceo Plex Boiler Room Berlin DJ Set';
    music.title = 'Maceo Plex Boiler Room Berlin DJ Set';
    music.artist = 'Maceo';
    music.img = 'https://i.ytimg.com/vi/5vHRUsP20dQ/sddefault.jpg'
    music.isMix = true;
    music.duration = 200000;
    music.url = 'https://youtu.be/v/5vHRUsP20dQ';
    music.genres = ['Techno'];
    music.hostType = 'soudncloud';

    music.userId = req.decoded.user.id;

    music.save();
  }


  /*  User.findOne({username: 'bokzor'}, 'following username')
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
   });*/
});

apiRoutes.get('/friends', (req, res) => {
  User
    .findById(req.decoded.user.id, 'following username')
    .populate('following', 'username')
    .exec(function (err, user) {
      res.send(user);
    });
});

apiRoutes.get('/musicSearch', (req, res) => {
  let pattern = req.query.search;
  User
    .findById(req.decoded.user.id, 'following username')
    .exec(function (err, user) {

      console.log(user);
      Music.find({
          $and: [
            {userId: {$in: user.following}},
            {name: {$regex: pattern, $options: "i"}}
          ]
        })
        .sort({createdAt: -1})
        .limit(30).exec((err, musics) => {
        res.send(musics);
      })
    });
});

apiRoutes.get('/discover', (req, res) => {
  User
    .findById(req.decoded.user.id, 'following username')
    .exec(function (err, user) {
      Music.find({userId: {$in: user.following}})
        .sort({createdAt: -1})
        .limit(50).exec((err, musics) => {
        res.send(musics);
      })
    });
});

apiRoutes.get('/userSearch', (req, res) => {
  User
    .find({username: new RegExp(req.query.search, "i")}, 'username').limit(5)
    .exec((err, users) => {
      res.send(users);
    });
});


apiRoutes.get('/genreMusics', (req, res) => {
  const genre = req.query.genre;
  User
    .findById(req.decoded.user.id, 'following username')
    .exec(function (err, user) {
      Music.find({
          $and: [
            {userId: {$in: user.following}},
            {genres: genre}
          ]
        })
        .sort({createdAt: -1})
        .limit(50).exec((err, musics) => {
        res.send(musics);
      })
    });
});


export default apiRoutes;