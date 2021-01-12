var { instanceDB } = require("../lib/db");
const url = require("url");
const { clearCache } = require("ejs");

class TablelistForm {
  constructor() {}

  showTables(req, res, next) {
    if (req.session.loggedIn) {
      const connection = instanceDB.getConnection();

      connection.query("show tables", function (err, rows) {
        if (err) {
          req, flash("error", err);
          res.render("tablelist", { data: [] });
        } else {
          const listTable = [];
          rows.map((item) => {
            listTable.push(item.Tables_in_sql12386459);
            console.log(item.Tables_in_sql12386459);
          });
          res.render("tablelist", { data: listTable });
        }
      });
    } else {
      res.redirect("/");
    }
  }
}

module.exports.TablelistForm = TablelistForm;
