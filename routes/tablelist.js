const express = require("express");
const router = express.Router();
const TableListForm = require("../lib/manager/TableListForm");

const constants = require("../constants");
const config = constants.Handlers;
const nameMgr = constants.nameMgr;

const SetterInjection  = require("../lib/IoC/SetterInjection");
const setterInjection = SetterInjection.getInstance();


// Setter Injection : begin ----------------------------------------

var tableListForm = new TableListForm();
setterInjection.setHandlers(tableListForm, nameMgr.tableListForm);

// Setter Injection : end ----------------------------------------


// display table list
router.get("/", function (req, res, next) {
  tableListForm.doHandler(req, res, next, config.tableListShowing);
});

module.exports = router;
