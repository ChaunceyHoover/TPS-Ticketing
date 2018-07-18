const router = require('express').Router();
const path = require('path');
require('dotenv').load();

router.get('/', function(req, res, next) {
    return res.render('index', /*{ key: var }*/);
});

module.exports = router;