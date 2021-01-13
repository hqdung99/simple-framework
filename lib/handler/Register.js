var { instanceDB } = require("../db");
const Handler = require("./Handler");

class Register extends Handler {
    constructor() {
        super();
    }

    HandleRequest(req, res, next) {
        console.log(" -> Register");

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

module.exports = Register;