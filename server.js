// Dependencies
var app = require('express')();
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json','utf8'));

// MySql (Sequelize) setup
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.dbURI, {});
// Check db connection
sequelize.authenticate().then(function (result) {
	console.log('MySQL local instance connected')
}, function (err) { // Unable to connect
	console.log('Error --> name : ' + err.name + ' , message : ' + err.message)
});

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