var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Bar = require('./bars.js');

var userSchema = new Schema ({
  displayName  : String,
  username     : String,
  location     : String,
  bar_ids      : [{ type: Schema.ObjectId, ref: 'Bar' }]
});

var User = mongoose.model('User', userSchema);

userSchema.methods.bars = function(cb) {
    return Bar.find({ user_ids: this._id }, cb);
};

userSchema.methods.going = function(bar, cb) {
  return Bar.find({_id: bar, user_ids: this._id}, cb);
};

module.exports = User;