// Require Package Vars
const express = require("express"),
  router = express.Router(),
  User = require("../models/user");

// ------------ Restful Routes - User ------------ //

// ------------ Index - user ------------ //
router.get("/", (req, res) => {
  User.find({}, (err, user) => {
    if(err) {
      console.log("Something went wrong when retrieving users.")
    } else {
      res.render("userViews/userIndex", {user: user});
    }
  });
});

// ------------ New - user ------------ //
router.get("/new", (req, res) => {
  res.render("authViews/register");
});

// ------------ Create - user ------------ //
router.post("/", (req, res) => {
  // New user var w/ username & email contents, obtained from body-parser (req.body)
  var newUser = new User({
    username: req.body.username,
    email: req.body.email
  });

  // use passport register method to register new user
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      // Use connect-flash var defined in app.JS - res.locals code to display
      // a flash message if an error occurs in the registration process.
      req.flash("error", "Username or e-mail may already be in use.");
      // Redirect user back to the register form
      return res.redirect("/register");
    }
    // Welcome user with flash message and direct them to login page.
    req.flash("success", "Welcome to the community! Please sign in.");
    res.redirect("/login");
  });
});

// ------------ Add Friend Route - Push a user reference to currentUser's friends array ------------ //
router.post("/newFriend", (req, res) => {
  // Find the currently logged in user
  User.findById(req.user._id, (err, user) => {
    if(err){
      console.log(err);
    } else {
      // console.log("Current User: " + req.user._id)
      // console.log("Sent user ID: " + req.body.newFriend.id);
      // push to the currently logged in user's array of friends
      // the ID of the user we wish to follow.
      user.friends.push(req.body.newFriend.id);
      user.save();
      res.redirect("/users");
    }
  });
});


// ------------ Show - user ------------ //
router.get("/:id", (req, res) => {
  // Find user based off of req.params.id that is passed in through the nav profile button
  // Nav profile button uses currentUser._id which is coming from res.locals statement in app.js
  User.findById(req.params.id).populate("friends").exec((err, foundUser) => {
    if(err){
      // ---------------------------------------------------- CREATE A MIDDLEWARE HERE -------------------------------------------------- //
      console.log(err);
    } else {
      // render profile page and pass in dynamically loaded data from returned DB object
      res.render("userViews/userShow", {user:foundUser});
    }
  })
});


// ------------ Edit - user ------------ //
// The edit route (show update form) is included as a modal on the userShow page.

// ------------ Update - user ------------ //
router.put("/:id", (req, res) => {
  let userUpdates = {
    profilePictureURL: req.body.userInfo.profilePictureURL,
    about: req.body.userInfo.about
  }
  User.findByIdAndUpdate(req.params.id, userUpdates, (err, updatedUser) => {
    if(err) {
      console.log(err);
    } else {
      res.redirect("/users/" + req.params.id);
    }
  });
});


// ------------ Destroy - user ------------ //

module.exports = router;