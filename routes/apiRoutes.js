var express = require('express');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config');

// get an instance of the router for api routes
var apiRoutes = express.Router();


// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) {
    res.json({ message: 'Welcome to the coolest API on earth!' });
});


apiRoutes.post('/signup', function(req, res, next) {

    var username = req.body.username;
    var password =  req.body.password;

    console.log(username, password);

    var newUser = new User({
        username: username,
        password: password
    });

    newUser.save(function(err) {
        if (err) return next(err);
        res.send({ message: 'User has been added'});
    })

});



apiRoutes.post('/auth', function(req, res){

    // find the user
    User.findOne({
        username: req.body.username
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });

        } else if (user) {


            // test a matching password
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (err) throw err;
                if (!isMatch) {

                    res.json({ success: false, message: 'Authentication failed. Wrong password.' });

                } else {

                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign(user, config.secretToken, {
                        expiresInMinutes: 1440 // expires in 24 hours
                    });

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token
                    });
                }
            });


        }

    });

});


export default apiRoutes;