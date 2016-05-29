'use strict';
var yelp_search = require('../utils/yelpSearch');
var handleBar = require('../utils/handleBar');
var serverRender = require("../utils/serverRendering");

var Bar = require("../models/bars");

module.exports = function(app, passport) {
    
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        serverRender.handleRender(req, res);
    });
    
    app.get('/auth/twitter', passport.authenticate('twitter'));
    
    app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { successRedirect: '/',
                                     failureRedirect: '/' }));
    
    app.post('/yelpsearch', function (req, res) {
        if (req.isAuthenticated()) {
            req.user.location = req.body.place;
            req.user.save();
        }
        yelp_search(req.body.place, res);
    });
    
    app.get('/getUser', LoggedInAjax, function(req, res) {
        res.json(req.user);
    });
    
    app.get('/barCount/:name', function(req, res) {
        Bar.findOne({name: req.params.name}, function(err, data) {
            if (err) throw err;
            if (data) {
                res.json({count: data.count});
            } else {
                res.json({count: 0});
            }
        });
    });
    
    app.get('/addbar/:name', LoggedInAjax, function(req, res) {
        handleBar.addBar(req, res);
    });
    
    app.get('/removebar/:name', LoggedInAjax, function(req, res) {
        handleBar.removeBar(req, res);
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

function LoggedInAjax(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.json({redirect: "/auth/twitter"});
}