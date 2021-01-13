const Handler = require("./Handler");
var { instanceDB } = require("../db");
const url = require("url");

class EditRowGetting extends Handler {
    constructor() {
        super();
    }

    HandleRequest(req, res, next) {
        console.log(" -> EditRowGetting");

        const url_parts = url.parse(req.url, true);
        const query = url_parts.query;

        const connection = instanceDB.getConnection();

        connection.query(
            `show keys from ${query.table_name} where key_name = 'primary'`,
            function (err, rows_primary_key) {
            connection.query(
                `SELECT * FROM ${query.table_name} WHERE ${rows_primary_key[0].Column_name} =  '${query.id}'`,
                function (err, rows, fields) {
                    if (err) throw err;

                    // if user not found
                    if (rows.length <= 0) {
                        req.flash(
                            "error",
                            `${query.table_name} not found with ${rows_primary_key[0].Column_name} =  ${query.id}'`
                        );
                        res.redirect(`/table?table=${query.table_name}`);
                    }
                    // if book found
                    else {
                        const table_properties = Object.keys(rows[0]);
                        // render to edit.ejs
                        res.render("table/edit", {
                            table_properties: table_properties,
                            table_name: query.table_name,
                            id: query.id,
                            data: rows[0],
                        });
                    }
                    }
                );
            }
        );
    }
}

module.exports = EditRowGetting;