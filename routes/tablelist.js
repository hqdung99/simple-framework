var express = require("express");
var router = express.Router();
var { instanceDB } = require("../lib/db");

// display table list
router.get("/", function (req, res, next) {
  if (req.session.loggedIn) {
    const connection = instanceDB.getConnection();

    connection.query("show tables", function (err, rows) {
      if (err) {
        req, flash("error", err);
        res.render("tablelist", { data: [] });
      } else {
        const listTable = [];
        rows.map((item) => listTable.push(item.Tables_in_nodelogin));
        res.render("tablelist", { data: listTable });
      }
    });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
