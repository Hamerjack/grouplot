var express = require("express");
var router = express.Router();
var nodemailer = require('nodemailer');

require("util").inspect.defaultOptions.depth = null;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'navspecial214@gmail.com',
    pass: 'Dashmesh1234'
  }
});

router.use("/login", require("./login"));
router.use("/registration", require("./registration"));
router.use("/lotteries", require("./lotteries"));
router.use("/about", require("./about"));
router.use("/faq", require("./faq"));
router.use("/contact-us", require("./contact-us"));
router.use("/play", require("./play"));
router.use("/review", require("./review"));
router.use("/privacy-policy", require("./privacy-policy"));
router.use("/terms-conditions", require("./terms-conditions"));



/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

/* POST home page. */
router.post("/", function(req, res, next) {
    var mailOptions = {
        from: 'youremail@gmail.com',
        to: 'navtej.sohal7@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'Test email!'
    };
	
	console.log("index page post " + JSON.stringify(req.body));
	
	console.dir(req.body,{depth:null})

  /*  transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });*/

    res.render("index", { title: "Express" });
});

module.exports = router;
