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

  setConnection() {
    this.connection = mysql.createConnection({
      host: "sql12.freemysqlhosting.net",
      user: "sql12386459",
      password: "JjtW3b9AcN",
      database: "sql12386459",
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
