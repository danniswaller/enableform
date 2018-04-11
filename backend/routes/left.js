
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/api/xx/:id/:pwd',function (req,res,next) {
    let userId =  req.params.id ;
    console.log(req.params);
    next();
},function (req,res,next) {
     next();
    }
);
router.get('/api/xx/:id/:pwd',function (req,res,next) {
     res.send('123');
})

module.exports = router;