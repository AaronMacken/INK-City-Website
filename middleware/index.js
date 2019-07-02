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


// Export the middleware object to be required and used in different files
module.exports = middlewareObj;