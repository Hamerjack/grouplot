var express = require('express');
var router = express.Router();
// get company 
router.get('/', function(req, res, next) {
    res.send('lottery status page');
});

  module.exports = router;