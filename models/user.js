// Require Package Vars
const mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

// Mongoose User Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String, 
    profilePictureURL: {type: String, default: "https://www.villascitemirabel.com/wp-content/uploads/2016/07/default-profile.png"},
    // --------------------------------------------------------------- Need to set 150 char limit -------------------------------------------------------------------- // 
    about: {type: String, default: "Write something about yourself!"},
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

