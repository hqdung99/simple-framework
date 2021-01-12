var { instanceDB } = require("../lib/db");
const url = require("url");

class FormRegister {
  constructor() {}

  register(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    const connection = instanceDB.getConnection();
    connection.query(
      `INSERT INTO accounts (username, password) values ('${username}', '${password}')`,
      function (err, rows) {
        if (err) {
          req.flash("error", err.sqlMessage);
          res.redirect("/register");
        } else {
          res.redirect("/login");
        }
      }
    );
  }
}

module.exports.FormRegister = FormRegister;
