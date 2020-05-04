var express = require('express');
var router = express.Router();

/* GET Contact Us page. */
router.get('/', function(req, res, next) {

    res.render('contact', {
        title: 'Contact Us'
    });
});

module.exports = router;
