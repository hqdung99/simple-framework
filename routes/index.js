const express = require("express");
const { connect } = require("../app");
const router = express.Router();
const { instanceDB } = require("../lib/db");

/* GET Login */
router.get("/", function (req, res, next) {
  if (req.session.loggedIn) {
    res.redirect("/books");
  }

  res.render("login", {});
});

router.post("/auth", function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const connection = instanceDB.setConnection(username, password);
  connection.connect(function (err) {
    if (err) {
      res.redirect("/");
    } else {
      console.log("connection success");
      req.session.loggedIn = true;
      req.session.username = username;
      res.redirect("/books");
    }
  });
});

module.exports = router;
