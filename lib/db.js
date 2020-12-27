const mysql = require("mysql");
const { get } = require("../routes");

class DBConnection {
  connection = null;

  constructor() {}

  setConnection(username, password) {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: username,
      password: password,
      database: "nodelogin",
    });

    return this.connection;
  }

  getConnection() {
    return this.connection;
  }
}

const instanceDB = new DBConnection();

module.exports = { instanceDB };
