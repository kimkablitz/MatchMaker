var friendList = require("../data/friends");

module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    // console.log("Server GET friends");
    // console.log(res.json(friends));
    res.json(friendList);
  });

  app.post("/api/friends", function(req, res) {
    
      friendList.push(req.body);
     
    });
  };

//emptying friends here
