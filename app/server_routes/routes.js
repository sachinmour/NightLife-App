'use strict';
var yelp_search = require('../utils/yelpSearch');

module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        console.log(req.user);
        res.sendFile(__dirname + '/public/index.html');
    });
    
    app.get('/auth/twitter', passport.authenticate('twitter'));
    
    app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { successRedirect: '/',
                                     failureRedirect: '/' }));
    
    app.post('/yelpsearch', function (req, res) {
        yelp_search(req.body.place, res);
    });
    
    app.get('/getUser', isLoggedIn, function(req, res) {
        console.log('getUser');
        res.json(req.user);
    });
    
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/auth/twitter');
}