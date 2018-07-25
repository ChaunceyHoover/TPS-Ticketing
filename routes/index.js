const router = require('express').Router();
const path = require('path');
require('dotenv').load();

router.get('/', function(req, res, next) {
    return res.render('index', { moment: require('moment'), title: "Home" });
});

router.get('/login', function(req, res, next) {
    return res.render('login', { title: 'Login' });
});

module.exports = router;