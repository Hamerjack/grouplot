var express = require('express');
var router = express.Router();

var dataHandler = require("../lib/dataHandler");

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("get Registration view");
  res.render('registration', { title: 'Registration' });
});

router.post('/', function(req, res, next) {
	console.log("post Registration view");
	
	console.log("req type = " + req.get('content-type'));
	
	console.log("req firstName = " + req.body.firstName);
	
	console.log("req firstName = " + req.body.email);	
	
	console.log("index page post " + JSON.stringify(req.body));
	
	console.dir(req.body,{depth:null})

	var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

	console.log("users ip = " + ip);
	
	//dataHandler.echo();
	
	//dataHandler.connection.connect(function(err) {
	//	if (err) return console.error(err);
	  console.log("Connected!");
	  var sql = 'INSERT INTO user_details (`first_name`,`last_name`,`email_id`,`profession`,`phone_number`,' + 
	  '`address`,`city`,`province`,`postal_code`,`tcppc`,`password`,`data_time`) VALUES ("' + req.body.firstName+ 
	  '","' + req.body.lastName + '","' + req.body.email+ '","' + req.body.profession + '","' + req.body.telephone +
	   '","' + req.body.address+ '","' + req.body.city + '","' + req.body.province + '","' + req.body.postal +
	   '","' + ip + '","' + req.body.password + '","' + new Date() +'")';
	   
	   dataHandler.connection.query(sql, function (err, result) {
		if (err) return console.error(err);
		console.log("1 record inserted");

	  });


//});

console.log("*************" + dataHandler.favoriteAuthor)
	
  res.render('play', { title: 'Play Lottery' });
});

module.exports = router;