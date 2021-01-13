const express = require("express");
const router = express.Router();
const { instanceDB } = require("../lib/db");
const { TablelistForm } = require("../lib/tablelistForm");
const CoR = require("./CoR/handler");

var sessionLogin = new CoR.SessionLogin();
var tablelistForm = new TablelistForm();
sessionLogin.setSuccessor(tablelistForm);

// display table list
router.get("/", function (req, res, next) {
  sessionLogin.HandleRequest(req, res, next);
});

module.exports = router;
