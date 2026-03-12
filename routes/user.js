const express = require("express");
const router = express.Router(); 
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

// Signup: Handles Company, Employee, and Customer registration
router.route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));

// Login: Authenticates all user types
router.route("/login")
    .get(userController.renderLoginForm)
    .post(
        saveRedirectUrl, 
        passport.authenticate("local", { 
            failureRedirect: "/login",  
            failureFlash: true 
        }), 
        userController.login
    );

// Logout
router.get("/logout", userController.logout);

/**
 * FUTURE EXPANSION:
 * Since you have 3 platforms, you might want to add a profile route later.
 * router.get("/profile", isLoggedIn, userController.renderProfile);
 */

module.exports = router;