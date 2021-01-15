const DB = {
    host: "sql12.freemysqlhosting.net",
    user: "sql12386459",
    password: "JjtW3b9AcN",
    database: "sql12386459",
}

const LoginHandlers = {
    login : 000,
    sessionLogin: 001,
}

const RegisterHandlers = {
    register : 100
}

const TableListHandlers = { 
    tableListShowing : 200
}

const TableHandlers = {
    rowGetting    : 300,
    addRowGetting : 301,
    addRowPosting : 302,
    editRowGetting: 303,
    editRowPosting: 304,
    deleteRowGetting: 305
}

module.exports = {
    DB : DB, 
    login: LoginHandlers, 
    register: RegisterHandlers, 
    tableList: TableListHandlers, 
    table: TableHandlers
};