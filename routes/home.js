const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

const passport = require("passport");

router.get("/", (req, res, next) => {
  res.render("home");
});

router
  .get("/login", notLoggedIn, (req, res, next) => {
    res.render("login");
  })
  .post(() => {
    // do something
  });

router.post(
  "/login",
  notLoggedIn,
  passport.authenticate("local-login", {
    successRedirect: "/user/profile",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.get("/user/profile", isLoggedIn, (req, res, next) => {
  res.render("profile");
});

router.get("/sign-up", notLoggedIn, (req, res, next) => {
  res.render("sign-up");
});

router.post(
  "/sign-up",
  notLoggedIn,
  passport.authenticate("local-signup", {
    successRedirect: "/user/profile",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.get("/logout", isLoggedIn, function (req, res, next) {
  req.logout();
  res.redirect("/");
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

function notLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}
