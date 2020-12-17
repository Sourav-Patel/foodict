const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

const passport = require("passport");

router.get("/", (req, res, next) => {
  res.render("home");
});

router
  .get("/login", (req, res, next) => {
    res.render("login");
  })
  .post(() => {
    // do something
  });

router.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/profile",
    failureRedirect: "/user/login",
    failureFlash: true,
  })
);

router.get("profile", (req, res, next) => {
    res.send("hello profie")
})

router.get("/sign-up", (req, res, next) => {
  res.render("sign-up");
});

router.post("/sign-up", passport.authenticate("local-signup", {
    successRedirect: "/profile",
    failureRedirect: "/user/login",
    failureFlash: true,
  }) );

module.exports = router;
