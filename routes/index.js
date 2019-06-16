// Require Vars
const express = require("express"),
    router = express.Router();


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

module.exports = router;