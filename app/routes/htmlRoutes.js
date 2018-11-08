var path = require("path");

module.exports = function(app) {



  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  // if no matching rout is found
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/home.html"));
  });
};
