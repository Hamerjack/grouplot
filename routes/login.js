var express = require('express');
var router = express.Router();

var dataHandler = require("../lib/dataHandler");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});


router.post('/', function(req, res, next) {
	console.log("post Registration view");
	
	console.log("req type = " + req.get('content-type'));
	
	console.log("req email = " + req.body.email);
	
	console.log("req email = " + req.body.password);
	
	console.log("index page post " + JSON.stringify(req.body));
	
	console.dir(req.body,{depth:null})
	
	console.log("*****" + dataHandler.favoriteBook());
	
	var count = 0;
	
	//con.connect(function(err) {
	//	if (err) return console.error(err);
	  console.log("Connected!");
	  var sql = 'select count(*) as ct from user_details where email_id = "' + req.body.email +
	   '" and password = "' + req.body.password + '"';
	   dataHandler.connection.query(sql, function (err, result) {
		if (err) return console.error(err);
		console.log("1 record selected");
		console.log(result[0].ct);
		count = result[0].ct;
		
		console.dir(result,{depth:null})


		if(count > 0){
		  
			console.log("count = " + count);
		res.render('play', { title: 'Play Lottery' });
		}else{
		  res.render('login', { title: 'Login' });
		}
		
	  });
	 // });	

	//con.end();  
	  

	  

});

module.exports = router;
