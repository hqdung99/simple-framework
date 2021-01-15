const express = require("express");
const router = express.Router();
const TableListForm = require("../lib/manager/TableListForm");
const constants = require("../constants");
const config = constants.Handlers;

var tableListForm = new TableListForm();

// display table list
router.get("/", function (req, res, next) {
  tableListForm.doHandler(req, res, next, config.tableListShowing);
});

module.exports = router;
