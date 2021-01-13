const mysql = require("mysql");
const config = require("../constants");
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
    this.connection = mysql.createConnection(config.DB);
    return this.connection;
  }

  getConnection() {
    return this.connection;
  }
}

const instanceDB = new DBConnection();
Object.seal(instanceDB);

module.exports = { instanceDB };
