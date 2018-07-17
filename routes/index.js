const router = require('express').Router();
const path = require('path');
require('dotenv').load();

router.get('/', function(req, res, next) {
    return res.sendFile(path.join(__dirname, '../wwwroot/index.html'));
});

module.exports = router;