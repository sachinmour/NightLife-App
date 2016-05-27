var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./users.js');

var barSchema = new Schema ({
  name         : String,
  count        : {type: Number, default: 0},
  user_ids      : [{ type: Schema.ObjectId, ref: 'User' }]
});

var Bar = mongoose.model('Bar', barSchema);

barSchema.methods.users = function(cb) {
  return User.find({ bar_ids: this._id }, cb);
};

module.exports = Bar;