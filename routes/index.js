const express = require("express");
const router = express.Router();
const LoginForm = require("../lib/manager/LoginForm");
const LogoutForm = require("../lib/manager/LoginForm");
const FormRegister = require("../lib/manager/RegisterForm");

const constants = require("../constants");
const config = constants.Handlers;
const nameMgr = constants.nameMgr;

const SetterInjection = require("../lib/IoC/SetterInjection");
const setterInjection = SetterInjection.getInstance();

// Setter Injection : begin ----------------------------------------

const loginForm = new LoginForm();
setterInjection.setHandlers(loginForm, nameMgr.loginForm);

const formRegister = new FormRegister();
setterInjection.setHandlers(formRegister, nameMgr.registerForm);

// Setter Injection : end ----------------------------------------

/* GET Login */
router.get("/", function (req, res, next) {
  res.redirect("/tablelist");
});

router.get("/login", function (req, res, next) {
  res.render("login", {});
});

router.get("/logout", function (req, res, next) {
  req.session.loggedIn = false;
  req.session.username = "";
  res.render("login", {});
});

router.get("/register", function (req, res, next) {
  res.render("register", {});
});

router.post("/register", function (req, res, next) {
  formRegister.doHandler(req, res, next, config.register);
});

router.post("/auth", function (req, res, next) {
  loginForm.doHandler(req, res, next, config.login);
});

module.exports = router;
