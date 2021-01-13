class Handler {
    constructor() {}
    setSuccessor (successor) {}
    HandleRequest(request, response, next) {}
}

class SessionLogin extends Handler {
    constructor() {
        super()
        console.log('SessionLogin created');
        this.successor = null;
    }

    setSuccessor (successor) {
        this.successor = successor
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