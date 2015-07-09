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
/* renders userlist on page */
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
router.put ('/userlist/:id', function(req, res){
  var db = req.db;
  var model = req.model;
  var id = req.params.id;
  var updates = {"username" : "testy"};
  console.log("updating/putting this id:", id);
  console.log("with this info:", updates);
  model.update(id, updates, function(err){
    if (err) return console.log(err);
  });
  return res.sendStatus(202);
});

/* DELETE */
router.delete ('/userlist/:id', function(req, res){
  var db = req.db;
  var model = req.model;
  var idToRemove = req.params.id;
  console.log("deleting this id:", idToRemove);
  model.remove({_id : idToRemove}, function(err){
    if (err) return console.log(err);
  });
  return res.sendStatus(202);
});


module.exports = router;
