var express = require('express');
var router = express.Router();
var login = require('../public/javascripts/loginServer/login')
/* GET users listing. */
router.get('/api/user/:name/:password', function(req, res, next) {
   console.log("123");
   console.log(login.login(req.params));

    res.json(login.login(req.params));
});

module.exports = router;
