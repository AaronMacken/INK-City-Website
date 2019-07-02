var User = require("../models/user");

// Add middleware here
var middlewareObj = {};

// Middleware to check user ownership before modifying user data or friends

middlewareObj.checkUserOwnership = function(req, res, next) {
    if(req.isAuthenticated()) {
        User.findById(req.params.id, (err, foundUser) => {
            if(err) {
                req.flash("error", "You do not have permission to do that.");
                res.redirect("back");
            } else {
                if(foundUser._id.equals(req.user._id)) {
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be signed in to do that.");
        res.redirect("back");
    }
}

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