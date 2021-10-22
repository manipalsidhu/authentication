// <!-- File: about.js Created by: Manipal Singh Sidhu - Student Number: 300859319 - Created on: October 22, 2021 -->

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about', { 
    title: 'About Me',
    userName: 'Manipal Singh Sidhu', 
    displayName: req.user ? req.user.displayName : ''
   });
});

module.exports = router;
