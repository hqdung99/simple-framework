const constants = require("../../constants");
const config = constants.Handlers;

const LoginHandler = require("../handler/LoginHandler");
const HandlerManager = require("./HandlerManager");

class LoginForm extends HandlerManager {
  constructor() {
      super();
  }

  initHandlers() {
      this.handlers[config.login] = new LoginHandler();
  }
}

module.exports = LoginForm;
