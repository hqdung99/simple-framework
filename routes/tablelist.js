const express = require("express");
const router = express.Router();
const { instanceDB } = require("../lib/db");
const { TablelistForm } = require("../lib/tablelistForm");

const tablelistForm = new TablelistForm();

// display table list
router.get("/", function (req, res, next) {
  tablelistForm.showTables(req, res, next);
});

module.exports = router;
