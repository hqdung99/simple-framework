const express = require("express");
const { connect } = require("../app");
const router = express.Router();
const { LoginForm } = require("../lib/loginForm");
const { FormRegister } = require("../lib/registerForm");

const loginForm = new LoginForm();
const formRegister = new FormRegister();

/* GET Login */
router.get("/", function (req, res, next) {
  if (req.session.loggedIn) {
    res.redirect("/tablelist");
  }
  else {
    res.render("login", {});
  }
});

router.get("/login", function (req, res, next) {
  res.render("login", {});
});

router.get("/register", function (req, res, next) {
  res.render("register", {});
});

router.post("/register", function (req, res, next) {
  formRegister.register(req, res, next);
});

router.post("/auth", function (req, res, next) {
  loginForm.connectToDatabase(req, res, next);
});

module.exports = router;
