var express = require('express');
var router = express.Router();

/* GET users listing.
* app.use('/users', usersRouter);
* 结果路由/users加上当前文件的路由
* */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
