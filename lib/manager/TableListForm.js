const config = require("../../constants");

const SessionLogin = require("../handler/SessionLogin");
const TableListShowing = require("../handler/TableListShowing");

const HandlerManager = require("./HandlerManager");

class TableListForm extends HandlerManager {
  constructor() {
    super();
  }

  initHandlers() {
    var tableListShowing = new TableListShowing();
    var sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(tableListShowing);
    this.handlers[config.tableList.tableListShowing] = sessionLogin;
  }
}

module.exports = TableListForm;
