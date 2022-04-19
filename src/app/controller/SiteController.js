// const res = require("express/lib/response");

const Course = require("../models/Course");

class SiteController {
  // [GET] /
  index(req, res) {

    Course.find({}, function(err, courses){
      if(!err) return res.json(courses);
      res.status(400).json({ error:'error!' });
    });
    // res.render("home");
  }
  //GET /search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
