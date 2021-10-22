// <!-- File: index.js Created by: Manipal Singh Sidhu - Student Number: 300859319 - Created on: October 22, 2021 -->

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//User Model instance
let userModel = require('../models/user');
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home', displayName: req.user ? req.user.displayName : ''});
}


// module to diplay login page
module.exports.displayLoginPage = (req, res, next) => {
    // if the user is already logged in
    if(!req.user)
    {
        res.render('authentication/login', 
        {
           title: "Login",
           messages: req.flash('loginMessage'),
           displayName: req.user ? req.user.displayName : '' 
        })
    }
    else
    {
        return res.redirect('/');
    }
}

// module to process login page
module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        // if any error comes
        if(err)
        {
            return next(err);
        }
        // if user login information is inccorect
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error! User not exist');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // if any error comes
            if(err)
            {
                return next(err);
            }

            const payload = 
            {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }

            return res.redirect('/contact-list');
        });
    })(req, res, next);
}

// module to perform logout
module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}