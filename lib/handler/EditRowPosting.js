const Handler = require("./Handler");
var { instanceDB } = require("../db");
const url = require("url");

class EditRowPosting extends Handler {
    constructor() {
        super();
    }

    HandleRequest(req, res, next) {
        console.log(" -> EditRowPosting");

        const url_parts = url.parse(req.url, true);
        const query = url_parts.query;
        let errors = false;

        const obj = req.body;
        const keys = Object.keys(obj);

        for (let i = 0; i < keys.length; i++) {
            if (obj[keys[i]].length === 0) {
            errors = true;

            // set flash message
            req.flash("error", "Please enter all input field");
            // render to add.ejs with flash message
            res.render("table/edit", {
                table_properties: keys,
                table_name: query.table_name,
                id: query.id,
                data: obj,
            });
            break;
            }
        }

        // if no error
        if (!errors) {
            const connection = instanceDB.getConnection();
            // update query

            connection.query(
                `show keys from ${query.table_name} where key_name = 'primary'`,
                function (err, rows_primary_key) {
                    connection.query(
                        `UPDATE ${query.table_name} SET ? WHERE ${rows_primary_key[0].Column_name} =  '${query.id}'`,
                        obj,
                        function (err, result) {
                            //if(err) throw err
                            if (err) {
                                // set flash message
                                req.flash("error", err.sqlMessage);
                                // render to edit.ejs
                                res.render("table/edit", {
                                    table_properties: keys,
                                    table_name: query.table_name,
                                    id: query.id,
                                    data: obj,
                                });
                            } else {
                                req.flash(
                                    "success",
                                    `${query.table_name}Book successfully updated`
                                );
                                res.redirect(`/table?table=${query.table_name}`);
                            }
                        }
                    );
                }
            );
        }
    }
}

module.exports = EditRowPosting;