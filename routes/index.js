// Require Package Vars
const express = require("express"),
    router = express.Router(),
    passport = require("passport");


// ------------ Basic Routes ------------ //

// Landing Route
router.get("/", (req, res) => {
    res.render("indexViews/landing");
});

// Juicer route
router.get("/browse", (req, res) => {
    res.render("indexViews/browse");
});

// ------------ Login Logout Routes ------------ //

// Show login form
router.get("/login", (req, res) => {
    res.render("authViews/login");
});

// Login POST route
router.post("/login", 
// Use passport local strategy to authenticate user
passport.authenticate("local", {
    successRedirect: "/browse",
    failureRedirect: "/login",
    // Flash message for login errors.
    successFlash: "Welcome!",
    failureFlash: "Username or password incorrect."
}), (req, res) => {});

// Logout route
router.get("/logout", (req, res) => {
    // Flash message upon logout. 
    req.flash("success", "See you next time " + req.user.username + ".");
    // use passport's logout function.
    req.logout();
    res.redirect("/browse");
});

module.exports = router;