const HandlerInterface = require("./HandlerInterface");

class Handler extends HandlerInterface {
    constructor() {
        super();
        this.successor = null;
    }
    
    setSuccessor (successor) {
        this.successor = successor;
    }

    HandleRequest(request, response, next) {}
}

module.exports = Handler;
