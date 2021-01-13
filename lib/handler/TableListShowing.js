var { instanceDB } = require("../db");
const Handler = require("./Handler");

class TableListShowing extends Handler {
  constructor() {
    super();
  }

  HandleRequest(req, res, next) {
    console.log(" -> TableListForm");

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

module.exports = TableListShowing;
