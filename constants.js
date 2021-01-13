const DB = {
    host: "sql12.freemysqlhosting.net",
    user: "sql12386459",
    password: "JjtW3b9AcN",
    database: "sql12386459",
}

const LoginHandlers = {
    login : 0
}

const RegisterHandlers = {
    register : 0
}

const TableListHandlers = { 
    tableListShowing : 0
}

const TableHandlers = {
    rowGetting    : 0,
    addRowGetting : 1,
    addRowPosting : 2,
    editRowGetting: 3,
    editRowPosting: 4,
    deleteRowGetting: 5
}

module.exports = {
    DB : DB, 
    login: LoginHandlers, 
    register: RegisterHandlers, 
    tableList: TableListHandlers, 
    table: TableHandlers
};