// Dependencies
var app = require('express')();
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json','utf8'));

// Set DB
app.set('models', require('./models'))

// Routing
app.get('/', function (req, res) {
	res.end('Not Found!');
});

// Listen to clients
var server = app.listen(config.port, config.ip, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Survey App listening on IP ' + host + ' and Port ' + port);
});