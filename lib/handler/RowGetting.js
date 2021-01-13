const Handler = require("./Handler");
var { instanceDB } = require("../db");
const url = require("url");

class RowGetting extends Handler {
    constructor() {
        super();
    }

    HandleRequest(req, res, next) {
        const url_parts = url.parse(req.url, true);
        const query = url_parts.query;
        this.name_table = query.table;
        const connection = instanceDB.getConnection();

        connection.query(
            `show keys from ${query.table} where key_name = 'primary'`,
            function (err, rows_primary_key) {
                connection.query(
                    `SELECT * FROM ${query.table} ORDER BY ${rows_primary_key[0].Column_name} desc`,
                    function (err, row_table) {
                        connection.query(
                            `DESCRIBE ${query.table}`,
                            function (error, rows) {
                                const table_properties = [];
                                rows.map((item) => table_properties.push(item.Field));

                                if (err) {
                                    req.flash("error", err);
                                    res.render("table", {
                                        primary_key: rows_primary_key[0].Column_name,
                                        table_name: query.table,
                                        data_properties: table_properties,
                                        data: [],
                                    });
                                } else {
                                    res.render("table", {
                                        primary_key: rows_primary_key[0].Column_name,
                                        table_name: query.table,
                                        data_properties: table_properties,
                                        data: row_table,
                                    });
                                }
                            }
                        );
                    }
                );
            }
        );
    }
}

module.exports = RowGetting;