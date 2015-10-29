// Dependencies
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
	process.exit(1); // Exit nodejs process
});

// Load models
var models = [
	'Question',
	'Choice',
	'Vote'
]
models.forEach(function (model) {
	module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// Describe relationships
(function (m) { // Question can have many Choices, Each Choice can have many Votes
	m.Choice.belongsTo(m.Question);
	m.Question.hasMany(m.Choice); // Each question can have many choices
	m.Vote.belongsTo(m.Choice);
	m.Choice.hasMany(m.Vote); // Each choice can have many votes
})(module.exports);

// Export connection
module.exports.sequelize = sequelize