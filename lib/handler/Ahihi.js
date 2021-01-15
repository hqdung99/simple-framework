const Handler = require("./Handler");

class Ahihi extends Handler {
    constructor() {
        super();
    }

    HandleRequest(req, res, next) {
        console.log(" -> Ahihi");
        this.successor.HandleRequest(req, res, next);
    }
}

module.exports = Ahihi;