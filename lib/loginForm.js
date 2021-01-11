var { instanceDB } = require("../lib/db");
const url = require("url");

class LoginForm {
  constructor() {}

  connectToDatabase(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    const connection = instanceDB.getConnection();

    connection.query(
      `select exists(select * from accounts where username='${username}' and password='${password}')`,
      function (err, rows) {
        if (rows[0][Object.keys(rows[0])[0]] === 0) {
          res.redirect("/");
          console.log("hahahahhahaa");
        } else {
          console.log("connection success");
          req.session.loggedIn = true;
          req.session.username = username;
          res.redirect("/tablelist");
        }
      }
    );
  }
}

module.exports.LoginForm = LoginForm;
