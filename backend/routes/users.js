var express = require('express');
var router = express.Router();
var login = require('../public/javascripts/loginServer/login')
/* GET users listing. */
router.post('/api/user/login', function(req, res, next) {
   console.log("123",req.body);
    res.json(login.login(req.body));
});

module.exports = router;
