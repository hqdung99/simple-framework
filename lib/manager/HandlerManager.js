class HandlerManager {
    constructor() {
        this.handlers = {};
        this.initHandlers();
    }

    initHandlers() {
        throw error;
    }

    doHandler(req, res, next, typeHandler) {
        var handler = this.handlers[typeHandler];
        if (handler === undefined) {
          console.log(" -> error: no handler type = " + typeHandler);
        } else {
          handler.HandleRequest(req, res, next);
        }
    }
}

module.exports = HandlerManager;