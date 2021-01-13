const express = require("express");
const router = express.Router();
const TableListForm = require("../lib/manager/TableListForm");
const config = require("../constants");

var tableListForm = new TableListForm();

// display table list
router.get("/", function (req, res, next) {
  tableListForm.doHandler(req, res, next, config.tableList.tableListShowing);
});

module.exports = router;
