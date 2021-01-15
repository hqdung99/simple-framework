const constants = require("../../constants");
const config = constants.Handlers;

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
    this.handlers[config.rowGetting] = sessionLogin;

    var addRowGetting = new AddRowGetting();
    sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(addRowGetting);
    this.handlers[config.addRowGetting] = sessionLogin;

    var addRowPosting = new AddRowPosting();
    sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(addRowPosting);
    this.handlers[config.addRowPosting] = sessionLogin;

    var editRowGetting = new EditRowGetting();
    sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(editRowGetting);
    this.handlers[config.editRowGetting] = sessionLogin;

    var editRowPosting = new EditRowPosting();
    sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(editRowPosting);
    this.handlers[config.editRowPosting] = sessionLogin;

    var deleteRowGetting = new DeleteRowGetting();
    sessionLogin = new SessionLogin();
    sessionLogin.setSuccessor(deleteRowGetting);
    this.handlers[config.deleteRowGetting] = sessionLogin;
  }
}

module.exports = TableForm;