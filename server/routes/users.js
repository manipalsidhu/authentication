// <!-- File: user.js Created by: Manipal Singh Sidhu - Student Number: 300859319 - Created on: October 22, 2021 -->

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { 
    title: 'Users',
    userName: 'Manipal Singh Sidhu'
   });
});

module.exports = router;
