const config = require("../../constants");

const RowGetting = require("../handler/RowGetting");
const AddRowGetting = require("../handler/AddRowGetting");
const AddRowPosting = require("../handler/AddRowPosting");
const SessionLogin = require("../handler/SessionLogin");

const HandlerManager = require("./HandlerManager");

class TableForm extends HandlerManager {
  constructor() {
    super();
  }

  initHandlers() {
    var rowGetting = new RowGetting();
    var sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(rowGetting);
    this.handlers[config.table.rowGetting] = rowGetting;

    var addRowGetting = new AddRowGetting();
    sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(addRowGetting);
    this.handlers[config.table.addRowGetting] = addRowGetting;

    var addRowPosting = new AddRowPosting();
    sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(addRowPosting);
    this.handlers[config.table.addRowPosting] = addRowPosting;
  }
}

module.exports = TableForm;
