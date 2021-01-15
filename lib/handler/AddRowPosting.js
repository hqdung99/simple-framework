const Handler = require("./Handler");
var { instanceDB } = require("../db");
const url = require("url");

class AddRowPosting extends Handler {
    constructor() {
        super();
    }

    HandleRequest(req, res, next) {
        console.log(" -> AddRowPosting");

        let errors = false;
        const obj = req.body;
        const keys = Object.keys(obj);

        for (let i = 1; i < keys.length; i++) {
            if (obj[keys[i]].length === 0) {
                errors = true;

                req.flash("error", `Please input all the fields.`);
                res.redirect(`/table/add?table=${obj.table_name}`);
            }
        }

        // if no error
        if (!errors) {
            const form_data = {};
            for (let i = 1; i < keys.length; i++) {
                form_data[keys[i]] = obj[keys[i]];
            }
            const connection = instanceDB.getConnection();
            // insert query
            connection.query(
                `INSERT INTO ${obj.table_name} SET ?`,
                form_data,
                function (err, result) {
                    //if(err) throw err
                    if (err) {
                    req.flash("error", err.sqlMessage);

                    // render to add.ejs
                    res.redirect(`/table/add?table=${obj.table_name}`);
                    } else {
                        req.flash("success", `${obj.table_name} successfully added`);
                        res.redirect(`/table?table=${obj.table_name}`);
                    }
                }
            );
        }
    }
}

module.exports = AddRowPosting;