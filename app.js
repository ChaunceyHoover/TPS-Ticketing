const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const path = require('path');

// loads .env file
require('dotenv').load();

var port = process.env.PORT || 8080;

// sets view engine to pug
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');
server.locals.basedir = path.join(__dirname, 'wwwroot'); // sets root directory for pug files

// processes request bodies
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false}));

// processes URLs (routes, api, etc)
server.use(require('./routes/index')); // allows for custom URLs to show any page (aka not needing file extensions in URL)
server.use(express.static(path.join(__dirname, 'wwwroot'))); // public / root folder
server.use('/api', require('./routes/api')); // put all API into separate file and access all API routes via /api/*

// starts server
server.listen(port);
console.log("Successfully started TPS-Ticket on port " + port);