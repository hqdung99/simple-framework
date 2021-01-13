var express = require("express");
var router = express.Router();
const TableForm = require("../lib/manager/TableForm");
const config = require("../constants");

const tableForm = new TableForm();

// display table page
router.get("/", function (req, res, next) {
  tableForm.doHandler(req, res, next, config.table.rowGetting);
});

// display add row
router.get("/add", function (req, res, next) {
  tableForm.doHandler(req, res, next, config.table.addRowGetting);
});

// post add row
router.post("/add", function (req, res, next) {
  tableForm.doHandler(req, res, next, config.table.addRowPosting);
});

// get edit row
router.get("/edit", function (req, res, next) {
  tableForm.doHandler(req, res, next, config.table.editRowGetting);
});

// post edit row
router.post("/update", function (req, res, next) {
  tableForm.doHandler(req, res, next, config.table.editRowPosting);
});

// delete row
router.get("/delete", function (req, res, next) {
  tableForm.doHandler(req, res, next, config.table.deleteRowGetting);
});

module.exports = router;
