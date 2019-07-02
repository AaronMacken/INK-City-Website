var User = require("../models/user");

// Add middleware here
var middlewareObj = {};

// Middleware to ensure user is logged in before performing user actions
middlewareObj.isLoggedIn = function(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You must sign in to do that.");
    res.redirect("/login");
}

// Middleware to redirect the login page is user is already signed in
middlewareObj.isAlreadyLoggedin = function(req, res, next) {
    if(req.isAuthenticated()) {
        req.flash("error", "You are already signed in.");
        res.redirect("/indexJuicer");
    } else {
        return next();
    }
}

// Middleware to redirect logged out users if a request hits the logout route
middlewareObj.isLoggedOut = function(req, res, next) {
    if(!req.isAuthenticated()) {
        req.flash("error", "You are already signed out.");
        res.redirect("/login");
    }else {
        return next();
    }
}

// Export the middleware object to be required and used in different files
module.exports = middlewareObj;