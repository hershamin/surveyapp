// Dependencies
var express = require('express');
var app = express();

// Express setup
//

// Routing
app.get('/', function (req, res) {
	res.end('Not Found!');
});

// Listen to clients
var server = app.listen(1027, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Survey App listening on IP %s and Port %s', host, port);
});