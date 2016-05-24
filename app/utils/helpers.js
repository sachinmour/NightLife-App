var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: process.env.Consumer_Key,
  consumer_secret: process.env.Consumer_Secret,
  token: process.env.Token,
  token_secret: process.env.Token_Secret
});
 
// See http://www.yelp.com/developers/documentation/v2/search_api

var get_yelp_data = function(place, res) {
  yelp.search({ term: 'food', location: 'Montreal' })
  .then(function (data) {
    res.json(data);
  })
  .catch(function (err) {
    res.json(err);
  });
};

module.exports = get_yelp_data;