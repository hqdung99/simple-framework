const Handler = require("./Handler");
var { instanceDB } = require("../db");
const url = require("url");
const { clearCache } = require("ejs");

class AddRowGetting extends Handler {
    constructor() {
        super();
    }

    HandleRequest(req, res, next) {
        console.log(" -> AddRowGetting");

        const connection = instanceDB.getConnection();
        const url_parts = url.parse(req.url, true);
        const query = url_parts.query;

        connection.query(`DESCRIBE ${query.table}`, function (err, rows) {
            if ((err, rows)) {
                if (err) {
                    console.log("Select table properties error: ", err);
                } else {
                    const tableProperties = [];
                    rows.map((item) => tableProperties.push(item.Field));

                    // render to add.ejs
                    res.render("table/add", {
                        table_name: query.table,
                        table_properties: tableProperties,
                    });
                }
            }
        });
    }
}

module.exports = AddRowGetting;