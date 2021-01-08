const mysql = require("mysql");
const { get } = require("../routes");

// Singleton Design Pattern
class DBConnection {
  connection = null;

  constructor() {
    if (!DBConnection.instance) {
      DBConnection.instance = this;
    }
    return DBConnection.instance;
  }

  setConnection(username, password) {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "brave",
      database: "nodelogin",
    });

    return this.connection;
  }

  getConnection() {
    return this.connection;
  }
}

const instanceDB = new DBConnection();
Object.seal(instanceDB);

module.exports = { instanceDB };
