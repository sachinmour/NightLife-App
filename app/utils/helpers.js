var Yelp = require('yelp');
 
var yelp = new Yelp({
  consumer_key: 'YTrtc6_DDIb73-uIPXLEGw',
  consumer_secret: '5EIaJnpXUQF9EVglXQ6oZvovs3s',
  token: '4ceCu_vpnEQLdo6QVJOlwu0QT9_hJqQi',
  token_secret: 'HIGe3rr5YN8rM5jot74E0ibQYgA',
});
 
// See http://www.yelp.com/developers/documentation/v2/search_api

var get_data = function(place) {
  var x = "";
  yelp.search({ term: 'food', location: 'Montreal' })
  .then(function (data) {
    x = data;
  })
  .catch(function (err) {
    x = err;
  });
  return x;
}

export default get_data;