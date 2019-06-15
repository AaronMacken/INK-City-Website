// Index Routes File

// Require Vars
const express = require("express"),
    router = express.Router();

// Landing Route
router.get("/", (req, res) => {
    res.render("indexViews/landing");
});

module.exports = router;