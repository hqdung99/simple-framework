class HandlerInterface {
    constructor() {}
    setSuccessor (successor) {}
    HandleRequest(request, response, next) {}
}

module.exports = HandlerInterface;