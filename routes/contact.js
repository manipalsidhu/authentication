var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Me',
    userName: 'Manipal Singh Sidhu'
   });
});

module.exports = router;
