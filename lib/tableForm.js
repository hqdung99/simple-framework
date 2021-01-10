var { instanceDB } = require("../lib/db");
const url = require("url");

class TableForm {
  constructor() {}

  getListRows(req, res, next) {
    const url_parts = url.parse(req.url, true);
    const query = url_parts.query;

    this.name_table = query.table;
    this.db_connection = instanceDB.getConnection();

    if (req.session.loggedIn) {
      this.db_connection.query(
        `SELECT * FROM ${query.table} ORDER BY id desc`,
        function (err, rows1) {
          if (err) {
            req.flash("error", err);
            res.render("table", {
              table_name: query.table,
              data_properties: Object.keys(rows1[0]),
              data: [],
            });
          } else {
            res.render("table", {
              table_name: query.table,
              data_properties: Object.keys(rows1[0]),
              data: rows1,
            });
          }
        }
      );
    } else {
      res.redirect("/");
    }
  }

  getAdd(req, res, next) {
    if (req.session.loggedIn) {
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
    } else {
      res.redirect("/");
    }
  }

  postAdd(req, res, next) {
    if (req.session.loggedIn) {
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
    } else {
      res.redirect("/");
    }
  }

  getEdit(req, res, next) {
    if (req.session.loggedIn) {
      const url_parts = url.parse(req.url, true);
      const query = url_parts.query;

      const connection = instanceDB.getConnection();
      connection.query(
        `SELECT * FROM ${query.table_name} WHERE id =  ${query.id}`,
        function (err, rows, fields) {
          if (err) throw err;

          // if user not found
          if (rows.length <= 0) {
            req.flash(
              "error",
              `${query.table_name} not found with id =  ${query.id}`
            );
            res.redirect(`/table?table=${query.table_name}`);
          }
          // if book found
          else {
            const table_properties = Object.keys(rows[0]);
            console.log("--------------------: ", rows[0]);
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
    } else {
      res.redirect("/");
    }
  }

  postEdit(req, res, next) {
    if (req.session.loggedIn) {
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
          `UPDATE ${query.table_name} SET ? WHERE id =  ${query.id}`,
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
    } else {
      res.redirect("/table");
    }
  }

  getDelete(req, res, next) {
    if (req.session.loggedIn) {
      const url_parts = url.parse(req.url, true);
      const query = url_parts.query;

      const connection = instanceDB.getConnection();
      connection.query(
        `DELETE FROM ${query.table_name} WHERE id = ${query.id}`,
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
    } else {
      res.redirect("/");
    }
  }
}

module.exports.TableForm = TableForm;
