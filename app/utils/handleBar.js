var Bar = require("../models/bars");
var User = require("../models/users");

module.exports = {
  
  addBar(req, res) {
    Bar.findOne({name: req.params.name}, function(err, bar) {
      if (err) throw err;
      else if(!bar) {
        bar = new Bar();
        bar.name = req.params.name;
      }
      bar.count+=1;
      bar.save();
      req.user.bar_ids.push(bar.name);
      req.user.save();
      var response = {count: bar.count, going: true };
      res.json(response);
    });
  },
  
  removeBar(req, res) {
    Bar.findOne({name: req.params.name}, function(err, bar) {
      if (err) throw err;
      if (bar) {
        bar.count-=1;
        bar.save();
        var index = req.user.bar_ids.indexOf(bar.name);
        if (index > -1) {
          req.user.bar_ids.splice(index, 1);
        }
        req.user.save();
        var response = {count: bar.count, going: false };
        res.json(response);
      } else {
        res.json({});
      }
    });
  }
  
};


  // this.getBar = function(req, res) {
  //   var response = {count: 0, going: false}
  //   if (req.isAuthenticated()) {
  //     Bar.findOne({name: req.params.name}, function(err, bar) {
  //       if (err) throw err;
  //       req.user.bar_ids
  //     })
  //   } else {
      
  //   }
  // };