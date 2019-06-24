// Require Package Vars
const express = require("express"),
  router = express.Router(),
  User = require("../models/user");

// ------------ User Registration Routes ------------ //

// User Index


// User New
router.get("/new", (req, res) => {
  res.render("authViews/register");
});

// User Create
router.post("/", (req, res) => {
  // New user var w/ username & email contents, obtained from body-parser (req.body)
  var newUser = new User({
    username: req.body.username,
    email: req.body.email
  });

  // use passport register method to register new user
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      // Use connect-flash var defined in app.JS - res.locals code to display
      // a flash message if an error occurs in the registration process.
      req.flash("error", "Username or e-mail may already be in use.");
      // Redirect user back to the register form
      return res.redirect("/register");
    }
    // Welcome user with flash message and direct them to login page.
    req.flash("success", "Welcome to the community! Please sign in.");
    res.redirect("/login");
  });
});

// User Show

// User profile route
// temporarily loading a static profile page, this will be changed later.
router.get("/:id", (req, res) => {
  res.render("authViews/profile");
  // add user find by id
});

module.exports = router;