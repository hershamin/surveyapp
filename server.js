// Dependencies
var express = require('express');
var app = express();
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json','utf8'));
var dbOperations = require('./dbOps.js');

// Set DB
app.set('models', require('./models'))

// Set body parser for post request
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Set views & public directory
var path = require('path');
app.use(express.static(path.join(__dirname, 'views', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Routing
app.get('/', function (req, res) {
	res.render('index');
});

app.get('/admin', function (req, res) {
	res.render('admin');
});

app.get('/polls', function (req, res) {
	res.render('polls');
});

app.post('/question', function (req, res) {
	if (!req.body) return res.sendStatus(400);
	dbOperations.postQuestion(req, res, app);
});

app.get('/question/:userName', function (req, res) {
	dbOperations.getQuestion(req, res, app);
});

app.post('/vote/:question/:userName', function (req, res) {
	if (!req.body) return res.sendStatus(400);
	dbOperations.voteQuestion(req, res, app);
});

// Listen to clients
var server = app.listen(config.port, config.ip, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Survey App listening on IP ' + host + ' and Port ' + port);
});