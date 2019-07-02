// Require Package Vars
const express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    middleware = require("../middleware");


// ------------ Basic Routes ------------ //

// Landing route
router.get("/", (req, res) => {
    res.render("indexViews/landing");
});

// Browse route
router.get("/browse", (req, res) => {
    res.render("indexViews/browse");
});

// Juicer route
router.get("/indexJuicer", (req, res) => {
    res.render("indexViews/indexJuicer");
});

// ------------ Login Logout Routes ------------ //

// Show login form
router.get("/login", middleware.isAlreadyLoggedin, (req, res) => {
    res.render("authViews/login");
});

// Login POST route
router.post("/login", 
// Use passport local strategy to authenticate user
passport.authenticate("local", {
    successRedirect: "/indexJuicer",
    failureRedirect: "/login",
    // Flash message for login errors.
    successFlash: "Welcome!",
    failureFlash: "Username or password incorrect."
}), (req, res) => {});

// Logout route
router.get("/logout", middleware.isLoggedOut, (req, res) => {
    // Flash message upon logout. 
    req.flash("success", "See you next time " + req.user.username + ".");
    // use passport's logout function.
    req.logout();
    res.redirect("/indexJuicer");
});

module.exports = router;