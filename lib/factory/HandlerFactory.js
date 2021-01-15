const FactoryInterface = require("./FactoryInterface");
const constants = require("../../constants");
const config = constants.Handlers;

const SessionLogin = require("../handler/SessionLogin");
const Register = require("../handler/Register");
const AddRowGetting = require("../handler/AddRowGetting");
const AddRowPosting = require("../handler/AddRowPosting");
const DeleteRowGetting = require("../handler/DeleteRowGetting");
const EditRowGetting = require("../handler/EditRowGetting");
const EditRowPosting = require("../handler/EditRowPosting");
const RowGetting = require("../handler/RowGetting");
const LoginHandler = require("../handler/LoginHandler");
const TableListShowing = require("../handler/TableListShowing");

class HandlerFactory extends FactoryInterface {
    constructor() {
        super();
    }

    create(name) {
        switch(name) {
            case config.login:
                return new LoginHandler();

            case config.sessionLogin:
                return new SessionLogin();

            case config.register:
                return new Register();

            case config.addRowGetting:
                return new AddRowGetting();

            case config.addRowPosting:
                return new AddRowPosting();

            case config.deleteRowGetting:
                return new DeleteRowGetting();

            case config.editRowGetting:
                return new EditRowGetting();

            case config.editRowPosting:
                return new EditRowPosting();

            case config.rowGetting:
                return new RowGetting();

            case config.tableListShowing:
                return new TableListShowing();
        }

        console.log(" -> Handler factory: no Object type = " + name);
        return null;
    }
}

module.exports = HandlerFactory;