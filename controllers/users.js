const User = require("../models/user");

module.exports.renderSingupForm = (req, res) => {
  res.render("users/singup.ejs");
};

module.exports.registerUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Wellcome To Wanderlust!");
      res.redirect("/listings");
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/singup");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.loginUser = async (req, res) => {
  try {
    req.flash("success", "Wellcome To Wanderlust! You Are Logged-In");
    res.redirect(res.locals.redirectUrl || "/listings");
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/login");
  }
};

module.exports.logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Logged out successfully");
    res.redirect("/listings");
  });
};
