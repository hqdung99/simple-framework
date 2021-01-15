const DB = {
    host: "sql12.freemysqlhosting.net",
    user: "sql12386459",
    password: "JjtW3b9AcN",
    database: "sql12386459",
}

const Handlers = {
    login : "login",
    sessionLogin: "sessionLogin",
    register : "register",
    tableListShowing : "tableListShowing",
    rowGetting    : "rowGetting",
    addRowGetting : "addRowGetting",
    addRowPosting : "addRowPosting",
    editRowGetting: "editRowGetting",
    editRowPosting: "editRowPosting",
    deleteRowGetting: "deleteRowGetting"
}

const NameMgr = {
    loginForm : "loginForm",
    registerForm : "registerForm",
    tableForm : "tableForm",
    tableListForm: "tableListForm"
}

module.exports = {
    DB : DB, 
    Handlers: Handlers,
    pathToJson: "./config.json",
    nameMgr : NameMgr
};