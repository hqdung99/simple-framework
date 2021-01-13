const config = require("../../constants");
const LoginHandler = require("../handler/LoginHandler");
const HandlerManager = require("./HandlerManager");

class LoginForm extends HandlerManager {
  constructor() {
      super();
  }

  initHandlers() {
      this.handlers[config.login.login] = new LoginHandler();
  }
}

module.exports = LoginForm;
