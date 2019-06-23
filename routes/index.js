// Require Package Vars
const express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    User = require("../models/user");


// ------------ Basic Routes ------------ //

// Landing Route
router.get("/", (req, res) => {
    res.render("indexViews/landing");
});

// Juicer route
router.get("/browse", (req, res) => {
    res.render("indexViews/browse");
});


// ------------ Register Routes ------------ //

// Show register form
router.get("/register", (req, res) => {
    res.render("authViews/register");
});

// Register POST route
router.post("/register", (req, res) => {
    // New user var w/ username & email contents, obtained from body-parser (req.body)
    var newUser = new User({ 
        username: req.body.username,
        email: req.body.email
    });

    // use passport register method to register new user
    User.register(newUser, req.body.password, (err, user) => {
        if(err) {
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


// ------------ User Routes ------------ //

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

// User profile route
// temporarily loading a static profile page, this will be changed later.
router.get("/profile", (req, res) => {
    res.render("authViews/profile");
});

module.exports = router;