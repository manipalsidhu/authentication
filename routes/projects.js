var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects',
    userName: 'Manipal Singh Sidhu'
   });
});

module.exports = router;
