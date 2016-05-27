var TwitterStrategy = require('passport-twitter').Strategy
  , User = require('../models/users');

module.exports = function (passport) {
	passport.use(new TwitterStrategy({
    consumerKey: process.env.Twitter_api_key,
    consumerSecret: process.env.Twitter_api_secret,
    callbackURL: "http://clementine-sachinmour.c9users.io/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    User.findOrCreate({username: profile.username}, function(err, user) {
      if (err) { return done(err); }
      user.displayName = profile.displayName;
      user.save(function(err) {
      	if (err)
          throw err;
        return done(null, user);
      });
    });
  }
));
};