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

module.exports = {
    DB : DB, 
    Handlers: Handlers
};