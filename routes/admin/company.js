var express = require('express');
var router = express.Router();
// get company 
router.get('/', function(req, res, next) {
    res.render('company');
});

// add company 
router.post('/add-company', function(req, res, next) {
    res.render('add-company');
});

// edit company
router.post('/edit-company', function(req, res, next) {
    res.send(' edit company page');
});
  

  
  module.exports = router;