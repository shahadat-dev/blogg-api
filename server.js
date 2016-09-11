'use strict';

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var routes = require('./routes');

var PORT = process.env.PORT || 3002;

//application
var app = express();

var server = http.createServer(app);

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//routes
routes(app);

// connect with db
var uri = 'mongodb://localhost/blogg';
// var uri = 'mongodb://root:root@ds019876.mlab.com:19876/shahadat_test_db';
mongoose.connect(uri);


var db = mongoose.connection;
db.on('error', function(){
	console.log("Error connecting with " + uri, err);
});
db.once('open', function(){
	console.log("Server connected with " + uri);
})

//listen
server.listen(PORT, function(){
	console.log("Blogg app, server started at " + PORT);
});