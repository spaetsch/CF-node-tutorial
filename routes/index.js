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
  var db = req.db;
  var model = req.model;
  model.find(function (err, docs) {
    console.log(docs);
    res.render('userlist', {
        "userlist" : docs
    });
  });
});


/* PUT */
/* Model.update(conditions, update, [options], [callback]) */
/* Model.findByIdAndUpdate(id, [update], [options], [callback]) */
router.put ('/userlist', function(req, res){
  var db = req.db;
  var model = req.model;
  // model.update();

});


/* DELETE */
/* Model.findByIdAndRemove(id, [options], [callback]) */
/* Model.remove(conditions, [callback]) */



module.exports = router;
