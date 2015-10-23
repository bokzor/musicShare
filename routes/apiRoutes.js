var express = require('express');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config');

// get an instance of the router for api routes
var apiRoutes = express.Router();


//apiRoutes.post('/checkToken')


apiRoutes.post('/signup', function(req, res, next) {

    var username = req.body.username;
    var email = req.body.email;
    var password =  req.body.password;

    var newUser = new User({
        username: username,
        email: email,
        password: password
    });

    newUser.save(function(err) {
        if (err) return next(err);

        var token = jwt.sign({user: newUser.username}, config.secretToken, {
            expiresInMinutes: 1440 // expires in 24 hours
        });

        res.send({
            message: 'User has been added',
            token: token
        });

    })

});


apiRoutes.post('/auth', function(req, res){

    let username = req.body.username;
    let password = req.body.password;
    // find the user
    User.findOne({
        username: username
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.status(404).json({ success: false, message: 'Authentication failed. User not found.' });

        } else if (user) {


            // test a matching password
            user.comparePassword(password, function(err, isMatch) {
                if (err) throw err;
                if (!isMatch) {

                    res.status(401).json({ success: false, message: 'Authentication failed. Wrong password.' });

                } else {

                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign({user: user.username}, config.secretToken, {
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


// route middleware to verify a token
apiRoutes.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, config.secretToken, function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
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

// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) {
    res.json({ message: 'Welcome to the coolest API on earth!' });
});



export default apiRoutes;