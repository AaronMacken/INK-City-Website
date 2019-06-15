// Require Vars //
const express = require("express"),
    app = express(),
    bodyParser = require("body-parser");



// App Configure //
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

// Require Routes //
const indexRoutes = require("./routes/index");

// Use Routes
app.use(indexRoutes);

app.listen(process.env.PORT || 3000, () => console.log("Server is listening"));

