var express = require('express');
var utility = require('../modules/utility');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//Log In
router.post('/log_in', utility.verify_user);

//Register
router.post('/register',utility.register);

//home
router.get('/home/:id',function(req,res,next){
  res.render('home');
});

//add issue
router.get('/add_issue/',utility.get_projects);
router.get('/add_issue/:id',utility.get_issue);

router.post('/save_issue',utility.save_issue);
// router.get('/add_issue/:id',function(req,res,next){
//   res.render('add_issue');
// });

//add project
router.post('/save_project/:id',utility.save_project);

//get issue
router.get('/get_issue/:project_id',utility.get_issue_id);
//router.post('/get_issue/:project_id',utility.get_issue_id);
module.exports = router;
