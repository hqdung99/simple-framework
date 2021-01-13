class HandlerInterface {
    constructor() {}
    setSuccessor (successor) {}
    HandleRequest(request, response, next) {}
}

class Handler extends HandlerInterface {
    constructor() {
        super();
        this.successor = null;
    }
    
    setSuccessor (successor) {
        this.successor = successor
    }

    HandleRequest(request, response, next) {}
}

class SessionLogin extends Handler {
    constructor() {
        super();
    }

    HandleRequest(request, response, next) {
        if (!request.session.loggedIn) {
            response.render("login", {});
        } else {
            console.log('SessionLogin calls his successor')
            this.successor.HandleRequest(request, response, next)
        }
    }
}

module.exports = {
    "Handler" : Handler,
    "SessionLogin" : SessionLogin,
};