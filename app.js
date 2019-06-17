// Require Package Vars //
const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"), 
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    flash = require("connect-flash"),
    User = require("./models/user");


// Require Routes //
const indexRoutes = require("./routes/index");


// Connect MongoDB //
mongoose.connect(process.env.DATABASEURL || "mongodb://localhost:27017/INKSite", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected to DB!");
}).catch(err => {
    console.log("Error", err.message);
});



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

// Passport Configure //
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Variables available to all templates // 
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});


// Use Routes
app.use(indexRoutes);


app.listen(process.env.PORT || 3000, () => console.log("Server is listening"));

