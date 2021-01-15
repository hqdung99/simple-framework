const FactoryInterface = require("./FactoryInterface");
const constants = require("../../constants");

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
            case constants.login.login:
                return new LoginHandler();

            case constants.login.sessionLogin:
                return new SessionLogin();

            case constants.register.register:
                return new Register();

            case constants.table.addRowGetting:
                return new AddRowGetting();

            case constants.table.addRowPosting:
                return new AddRowPosting();

            case constants.table.deleteRowGetting:
                return new DeleteRowGetting();

            case constants.table.editRowGetting:
                return new EditRowGetting();

            case constants.table.editRowPosting:
                return new EditRowPosting();

            case constants.table.rowGetting:
                return new RowGetting();

            case constants.tableList.tableListShowing:
                return new TableListShowing();
        }

        console.log(" -> Handler factory: no Object type = " + name);
        return null;
    }
}

module.exports = HandlerFactory;