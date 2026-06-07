const express = require("express");
const { route } = require("./listing");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/users");

// singup page route (to render singup form)
// User register route (to register user into db)
router
  .route("/singup")
  .get(userController.renderSingupForm)
  .post(wrapAsync(userController.registerUser));

// login page route(to render login form)
// login user route (to login the user to website)
router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.loginUser,
  );

// logout route (to make the user logged out form website)
router.get("/logout", userController.logoutUser);

module.exports = router;
