var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('review', { title: 'Review' });
});


router.post('/', function(req, res, next) {
  
  //const data = dataHandler.registerUser(con, req.body);

    console.log("post Registration view");
    
    console.log("req type = " + req.get('content-type'));
    
    console.log("req firstName = " + req.body.firstName);
    
    console.log("req firstName = " + req.body.email);	
    
    console.log("index page post " + JSON.stringify(req.body));
    
    console.dir(req.body,{depth:null})
  
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  
    console.log("users ip = " + ip);
    
    //dataHandler.echo();
    
    con.connect(function(err) {
      if (err) return console.error(err);
      console.log("Connected!");
      var sql = 'INSERT INTO lottery_group (`first_name`,`last_name`,`email_id`,`profession`,`phone_number`,' + 
      '`address`,`city`,`province`,`postal_code`,`tcppc`,`password`,`data_time`) VALUES ("' + req.body.firstName+ 
      '","' + req.body.lastName + '","' + req.body.email+ '","' + req.body.profession + '","' + req.body.telephone +
       '","' + req.body.address+ '","' + req.body.city + '","' + req.body.province + '","' + req.body.postal +
       '","' + ip + '","' + req.body.password + '","' + new Date() +'")';

       con.query(sql, function (err, result) {
        if (err) return console.error(err);
        console.log("1 record inserted");
    
        con.end();
        });       

       sql = 'INSERT INTO lottery_payment (`first_name`,`last_name`,`email_id`,`profession`,`phone_number`,' + 
       '`address`,`city`,`province`,`postal_code`,`tcppc`,`password`,`data_time`) VALUES ("' + req.body.firstName+ 
       '","' + req.body.lastName + '","' + req.body.email+ '","' + req.body.profession + '","' + req.body.telephone +
        '","' + req.body.address+ '","' + req.body.city + '","' + req.body.province + '","' + req.body.postal +
        '","' + ip + '","' + req.body.password + '","' + new Date() +'")';       
       
        con.query(sql, function (err, result) {
          if (err) return console.error(err);
          console.log("1 record inserted");
      
          con.end();
          });
  
  
      }); 
  
  res.render('review', { title: 'Review & Payment' });
});

module.exports = router;