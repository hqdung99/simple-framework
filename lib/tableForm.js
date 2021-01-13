var { instanceDB } = require("./db");
const url = require("url");

class TableForm {
  constructor() {
    this.handlers = {};
    this.initHandlers();
  }
  
  initHandlers() {
    
  }

  getListRows(req, res, next) {
    if (req.session.loggedIn) {
      
    } else {
      res.redirect("/");
    }
  }

  getAdd(req, res, next) {
    if (req.session.loggedIn) {
      
    } else {
      res.redirect("/");
    }
  }

  postAdd(req, res, next) {
    if (req.session.loggedIn) {
      
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
    } else {
      res.redirect("/");
    }
  }
}

module.exports.TableForm = TableForm;
