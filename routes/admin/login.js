var express = require('express');
var router = express.Router();
var con = require("../../lib/dataHandler");
var sess;

router.get('/', function(req, res, next) {
    res.render('admin-login', { title: 'Login' });
  });

router.post('/',function(req,res,next){
 
  let data = req.body;
  let sql = 'select * from  admin where emailid = "'+ data.email +'"';
  con.query(sql,function (err, result) {
    if (err) throw err;
     let userData = result[0];
     console.log(userData);
     sess = req.session;
     sess.email = userData.emailid;
     sess.admin = true;
     res.redirect('/admin/dashboard');
  });
})
  
  module.exports = router;