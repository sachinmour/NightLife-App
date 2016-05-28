var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Bar = require('./bars.js');

var userSchema = new Schema ({
  displayName  : String,
  username     : String,
  location     : {type: String, default: ""},
  bar_ids      : [{ type: String, ref: 'Bar' }]
});

var User = mongoose.model('User', userSchema);

module.exports = User;