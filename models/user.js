// Require Package Vars
const mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

// Mongoose User Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Include passport-local-mongoose package functionality into the User Schema
userSchema.plugin(passportLocalMongoose);

// Export User Model
module.exports = mongoose.model("User", userSchema);

