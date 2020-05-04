var express = require('express');
var router = express.Router();
var faqData = require("../data/faq")

/* GET home page. */
router.get('/', function(req, res, next) {
    let cardCounter = 0;

    res.render('faq', {
        title: 'Frequently Ask Questions',
        faqs: faqData,
        cardCounter: cardCounter
    });
});

module.exports = router;
