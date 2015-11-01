// Dependencies
var express = require('express');
var app = express();
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json','utf8'));
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var dbOperations = require('./dbOps.js');

// Setup authentication strategy
passport.serializeUser(function (user, done) {
	done(null, user);
});
passport.deserializeUser(function (user, done) {
	done(null, user);
});
passport.use(new LocalStrategy({
					usernameField: 'username',
					passwordField: 'password'},

					function (username, password, done) {
						if (username != config.adminUserName || password != config.adminPassword) {
							return done(null, false, {message:'Incorrect Username and/or Password'})
						} else {
							return done(null, {username:config.adminUserName, password:config.adminPassword});
						}
					})
);
app.use(passport.initialize());
app.use(passport.session());
function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) { return next(); }
	res.redirect('/login');
}

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

app.get('/login', function (req, res, next) {
	res.render('login');
});

app.post('/login', function (req, res, next) {
	passport.authenticate('local', function (err, user, info) {
		if (err) { return next(err) }
		if (!user) { return res.redirect('/login') }
		req.logIn(user, function (err) {
			if (err) { return next(err) }
			return res.redirect(req.redirect('/admin'));
		})
	})(req, res, next)
});

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/login');
})

app.get('/admin', ensureAuthenticated, function (req, res, next) {
	res.render('admin');
});

app.get('/polls', function (req, res) {
	res.render('polls');
});

app.post('/question', ensureAuthenticated, function (req, res, next) {
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