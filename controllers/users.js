const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async (req, res, next) => {
    try {
        let { 
            username, 
            email, 
            password, 
            phone, 
            location, 
            role, 
            companyName, 
            skills, 
            industry 
        } = req.body;

        // 1. Initialize the base user object
        const newUserData = {
            username,
            email,
            phone,
            location,
            role
        };

        // 2. Add Role-Specific Data conditionally
        if (role === "company") {
            newUserData.companyDetails = {
                name: companyName,
                industry: industry
            };
        } else if (role === "employee") {
            newUserData.employeeDetails = {
                // Convert comma-separated string from form to an array
                skills: skills ? skills.split(",").map(s => s.trim()) : []
            };
        }

        const newUser = new User(newUserData);

        // 3. Register with Passport-Local-Mongoose
        const registeredUser = await User.register(newUser, password);

        // 4. Log in and Redirect
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            
            // Custom welcome message based on role
            let welcomeMsg = "Welcome to RuralTrust!";
            if(role === "company") welcomeMsg = "Welcome! Start building your company profile.";
            if(role === "employee") welcomeMsg = "Welcome! Your professional portfolio is live.";
            
            req.flash("success", welcomeMsg);
            res.redirect("/home/listings");
        });

    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
    req.flash("success", `Welcome back to RuralTrust, ${req.user.username}!`);
    let redirectUrl = res.locals.redirectUrl || "/home/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Successfully logged out. See you soon!");
        res.redirect("/home/listings");
    });
};