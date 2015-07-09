var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  console.log("hey");


    var db = req.db;
    var model = req.model;
    model.find(function (err, docs) {
        console.log(docs);
        res.render('userlist', {
            "userlist" : docs
        });
    });


    // var collection = db.get('usercollection');
    // collection.find({},{},function(e,docs){
    // });
});


module.exports = router;
