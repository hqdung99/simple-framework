const config = require("../../constants");

const RowGetting = require("../handler/RowGetting");

const AddRowGetting = require("../handler/AddRowGetting");
const AddRowPosting = require("../handler/AddRowPosting");

const EditRowGetting = require("../handler/EditRowGetting");
const EditRowPosting = require("../handler/EditRowPosting");

const DeleteRowGetting = require("../handler/DeleteRowGetting");

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
    this.handlers[config.table.rowGetting] = sessionLogin;

    var addRowGetting = new AddRowGetting();
    sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(addRowGetting);
    this.handlers[config.table.addRowGetting] = sessionLogin;

    var addRowPosting = new AddRowPosting();
    sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(addRowPosting);
    this.handlers[config.table.addRowPosting] = sessionLogin;

    var editRowGetting = new EditRowGetting();
    sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(editRowGetting);
    this.handlers[config.table.editRowGetting] = sessionLogin;

    var editRowPosting = new EditRowPosting();
    sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(editRowPosting);
    this.handlers[config.table.editRowPosting] = sessionLogin;

    var deleteRowGetting = new DeleteRowGetting();
    sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(deleteRowGetting);
    this.handlers[config.table.deleteRowGetting] = sessionLogin;
  }
}

module.exports = TableForm;
