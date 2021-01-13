const express = require("express");
const router = express.Router();
const LoginForm = require("../lib/manager/LoginForm");
const FormRegister = require("../lib/manager/RegisterForm");
const config = require("../constants");
const RegisterForm = require("../lib/manager/RegisterForm");

const loginForm = new LoginForm();
const formRegister = new FormRegister;

/* GET Login */
router.get("/", function (req, res, next) {
  res.redirect("/tablelist");
});

router.get("/login", function (req, res, next) {
  res.render("login", {});
});

router.get("/register", function (req, res, next) {
  res.render("register", {});
});

router.post("/register", function (req, res, next) {
  formRegister.doHandler(req, res, next, config.register.register);
});

router.post("/auth", function (req, res, next) {
  loginForm.doHandler(req, res, next, config.login.login);
});

module.exports = router;
