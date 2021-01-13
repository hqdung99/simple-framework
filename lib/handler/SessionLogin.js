const Handler = require("./Handler");

class SessionLogin extends Handler {
    constructor() {
        super();
    }

    HandleRequest(request, response, next) {
        if (!request.session.loggedIn) {
            response.render("login", {});
        } else {
            console.log(' -> SessionLogin')
            this.successor.HandleRequest(request, response, next)
        }
    }
}

module.exports = SessionLogin;