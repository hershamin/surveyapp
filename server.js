// Dependencies
var express = require('express');
var app = express();
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json','utf8'));

// Set DB
app.set('models', require('./models'))

// Set views & public directory
var path = require('path');
app.use(express.static(path.join(__dirname, 'views', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Routing
app.get('/', function (req, res) {
	res.render('index');
});

// Listen to clients
var server = app.listen(config.port, config.ip, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Survey App listening on IP ' + host + ' and Port ' + port);
});