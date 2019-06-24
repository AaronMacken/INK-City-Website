// Require Package Vars
const mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

// Mongoose User Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String, 
    profilePicture: String,
    about: String,
    following: [],
    friends: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ]
});

// Include passport-local-mongoose package functionality into the User Schema
userSchema.plugin(passportLocalMongoose);

// Export User Model
module.exports = mongoose.model("User", userSchema);

