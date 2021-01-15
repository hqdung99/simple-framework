const constants = require("../../constants");
const HandlerFactory = require("../factory/HandlerFactory");
const fs = require("fs");
const DIInterface = require("./DIInterface");

class SetterInjection extends DIInterface {
    constructor() {
        super();
        this.json = null;
        this.handlerFactory = new HandlerFactory();
        this.readJsonFile(constants.pathToJson);
    }

    readJsonFile(path) {
        let rawdata = fs.readFileSync(path);
        this.json = JSON.parse(rawdata);
        console.log(this.json);
    }

    setHandlers(object, name) {
        console.log(name);
        let chainOfHandlerList = this.json.chainOfHandler[name];

        for (let count = 0; count < chainOfHandlerList.length; ++count) {

            let chain = chainOfHandlerList[count];

            let name = chain.idHandler;
            let arr = chain.reverseChain;

            let handler = null;

            for (let i = 0; i < arr.length; ++i) {

                let newHandler = this.handlerFactory.create(arr[i]);

                newHandler.setSuccessor(handler);
                
                handler = newHandler;
            }

            object.setHandlers(name, handler);
        }
    }
}

var instanceOfSetterInjection = null;

SetterInjection.getInstance = function(){
    if (instanceOfSetterInjection == null) {
        instanceOfSetterInjection = new SetterInjection();
    }
    return instanceOfSetterInjection;
}

module.exports = SetterInjection;
