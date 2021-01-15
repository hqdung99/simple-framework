const constants = require("../../constants");
const config = constants.Handlers;

const Register = require("../handler/Register");
const HandlerManager = require("./HandlerManager");

class RegisterForm extends HandlerManager {
  constructor() {
      super();
  }

  initHandlers() {
    this.handlers[config.register] = new Register();
  }
}

module.exports = RegisterForm;