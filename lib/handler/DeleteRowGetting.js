const Handler = require("./Handler");
var { instanceDB } = require("../db");
const url = require("url");

class DeleteRowGetting extends Handler {
    constructor() {
        super();
    }

    HandleRequest(req, res, next) {
        console.log(" -> DeleteRowGetting");

        const url_parts = url.parse(req.url, true);
        const query = url_parts.query;
  
        const connection = instanceDB.getConnection();
  
        connection.query(
            `show keys from ${query.table_name} where key_name = 'primary'`,
            function (err, rows_primary_key) {
                connection.query(
                `DELETE FROM ${query.table_name} WHERE ${rows_primary_key[0].Column_name} = '${query.id}'`,
                function (err, result) {
                    //if(err) throw err
                    if (err) {
                        // set flash message
                        req.flash("error", err.sqlMessage);
                        // redirect to books page
                        res.redirect(`/table?table=${query.table_name}`);
                    } else {
                        // set flash message
                        req.flash(
                            "success",
                            `${query.table_name} successfully deleted! ID = ${query.id}`
                        );
                        // redirect to books page
                        res.redirect(`/table?table=${query.table_name}`);
                    }
                }
                );
            }
        );
    }
}

module.exports = DeleteRowGetting;