const router = require('express').Router();
require('dotenv').load();

const connection = require('mysql').createPool({
    multipleStatements: true,
    host:     process.env.SQL_SERVER,
    user:     process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DB
});

module.exports = router;