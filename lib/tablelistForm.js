var { instanceDB } = require("../lib/db");
const url = require("url");
const { clearCache } = require("ejs");

const CoR = require("../routes/CoR/handler");

class TablelistForm extends CoR.Handler {
  constructor() {
    super();
    console.log('TableList Form created');
    this.successor = null;
  }

  HandleRequest(req, res, next) {
    console.log("Handle TableListForm");
    const connection = instanceDB.getConnection();
    connection.query("show tables", function (err, rows) {
      if (err) {
        req, flash("error", err);
        res.render("tablelist", { data: [] });
      } else {
        const listTable = [];
        const nameDatabase = rows.length > 0 ? Object.keys(rows[0])[0] : "";
        rows.map((item) => listTable.push(item[nameDatabase]));
        res.render("tablelist", { data: listTable });
      }
    });
  }
}

module.exports.TablelistForm = TablelistForm;
