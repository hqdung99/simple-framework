var express = require("express");
var router = express.Router();
const TableForm = require("../lib/manager/TableForm");

const constants = require("../constants");
const config = constants.Handlers;
const nameMgr = constants.nameMgr;

const SetterInjection = require("../lib/IoC/SetterInjection");
const setterInjection = SetterInjection.getInstance();


// Setter Injection : begin ----------------------------------------

const tableForm = new TableForm();
setterInjection.setHandlers(tableForm, nameMgr.tableForm);

// Setter Injection : end ----------------------------------------

// display table page
router.get("/", function (req, res, next) {
  tableForm.doHandler(req, res, next, config.rowGetting);
});

// display add row
router.get("/add", function (req, res, next) {
  tableForm.doHandler(req, res, next, config.addRowGetting);
});

// post add row
router.post("/add", function (req, res, next) {
  tableForm.doHandler(req, res, next, config.addRowPosting);
});

// get edit row
router.get("/edit", function (req, res, next) {
  tableForm.doHandler(req, res, next, config.editRowGetting);
});

// post edit row
router.post("/update", function (req, res, next) {
  tableForm.doHandler(req, res, next, config.editRowPosting);
});

// delete row
router.get("/delete", function (req, res, next) {
  tableForm.doHandler(req, res, next, config.deleteRowGetting);
});

module.exports = router;
