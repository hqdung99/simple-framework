const config = require("../../constants");
const Register = require("../handler/Register");
const HandlerManager = require("./HandlerManager");

class RegisterForm extends HandlerManager {
  constructor() {
      super();
  }

  initHandlers() {
    this.handlers[config.register.register] = new Register();
  }
}

module.exports = RegisterForm;