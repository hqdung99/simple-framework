var express = require("express");
var router = express.Router();
const { TableForm } = require("../lib/tableForm");

const tableForm = new TableForm();

// display table page
router.get("/", function (req, res, next) {
  tableForm.getListRows(req, res, next);
});

// display add row
router.get("/add", function (req, res, next) {
  tableForm.getAdd(req, res, next);
});

// post add row
router.post("/add", function (req, res, next) {
  tableForm.postAdd(req, res, next);
});

// get edit row
router.get("/edit", function (req, res, next) {
  tableForm.getEdit(req, res, next);
});

// post edit row
router.post("/update", function (req, res, next) {
  tableForm.postEdit(req, res, next);
});

// delete row
router.get("/delete", function (req, res, next) {
  tableForm.getDelete(req, res, next);
});

module.exports = router;
