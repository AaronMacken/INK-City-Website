// Require Package Vars //
const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"), 
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    flash = require("connect-flash");


// Require Model Vars //
const User = require("./models/user");

// App Configure //
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());
app.use(require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}));

// Connect MongoDB //
mongoose.connect(process.env.DATABASEURL || "mongodb://localhost:27017/INKSite", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected to DB!");
}).catch(err => {
    console.log("Error", err.message);
})


// Require Routes //
const indexRoutes = require("./routes/index");

// Use Routes
app.use(indexRoutes);

app.listen(process.env.PORT || 3000, () => console.log("Server is listening"));

