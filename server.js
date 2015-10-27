// Dependencies
var app = require('express')();

// MySql (Sequelize) setup
var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://localhost:1028/dbName', {});
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
var server = app.listen(1027, 'localhost', function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Survey App listening on IP ' + host + ' and Port ' + port);
});