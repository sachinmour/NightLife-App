import React from 'react';
import yelp from 'node-yelp';

var client = yelp.createClient({
  oauth: {
    "consumer_key": process.env.Consumer_Secret,
    "consumer_secret": process.env.Consumer_Key,
    "token": process.env.Token,
    "token_secret": process.env.Token_Secret
  }
});

client.search({
  terms: "Café de la presse",
  location: "BELGIUM"
}).then(function (data) {
  var businesses = data.businesses;
  var location = data.region;
});