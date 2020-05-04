var express = require("express");
var router = express.Router();
var auth = require('../lib/auth');

router.use('/login',require('./admin/login'));
router.use('/dashboard',auth,require('./admin/dashboard'));
router.use('/company',auth,require('./admin/company'));
router.use('/lottery-ticket',auth,require('./admin/lottery-ticket'));
router.use('/lottery-status',auth,require('./admin/lottery-status'));

module.exports = router;