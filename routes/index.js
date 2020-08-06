var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/reg', function(req, res, next) {

  var b = req.body;
  var _user={
    username: b.username,
    password: b.password
  }

  var user=new User(_user);

  user.save(function(err,user){
    if (err) {
      console.log(err);
      return;
    }
    console.log('注册成功');
    res.send('注册成功,可以访问 /users');
  })
});

module.exports = router;
