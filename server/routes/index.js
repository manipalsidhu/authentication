var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);


/* Route to display the Login Page. */
router.get('/login', indexController.displayLoginPage);

/* Route to process Login Page. */
router.post('/login', indexController.processLoginPage);


/* Route to display the  Register page */
router.get('/register', indexController.displayRegisterPage);

/* Route to process the Register page */
router.post('/register', indexController.processRegisterPage);

/* Route to perform User Logout */
router.get('/logout', indexController.performLogout);


module.exports = router;


























/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Home' });
// });

// /* GET about me page. */
// router.get('/about', function(req, res, next) {
//   res.render('index', { title: 'About Me' });
// });

// /* GET projects page. */
// router.get('/projects', function(req, res, next) {
//   res.render('index', { title: 'Projects' });
// });

// /* GET services page. */
// router.get('/services', function(req, res, next) {
//   res.render('index', { title: 'Services' });
// });

// /* GET contact me page. */
// router.get('/contact', function(req, res, next) {
//   res.render('index', { title: 'Contact Me' });
// });

// module.exports = router;
