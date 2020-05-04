var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dataHandler = require("../lib/dataHandler");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "lottery"
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('play', { title: 'Play Lottery' });
});

router.post('/', function(req, res, next) {
  
  //const data = dataHandler.registerUser(con, req.body);
  
  res.render('play', { title: 'Play Lottery' });
});

module.exports = router;
