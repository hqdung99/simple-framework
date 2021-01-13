const express = require("express");
const router = express.Router();
const { LoginForm } = require("../lib/loginForm");
const { FormRegister } = require("../lib/registerForm");

const loginForm = new LoginForm();
const formRegister = new FormRegister();

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
  formRegister.register(req, res, next);
});

router.post("/auth", function (req, res, next) {
  loginForm.connectToDatabase(req, res, next);
});

module.exports = router;
