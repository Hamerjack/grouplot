var express = require('express');
var router = express.Router();

// get company 
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Login' });
});

  module.exports = router;