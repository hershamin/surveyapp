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
//

// Describe relationships
//

// Export connection
module.exports.sequelize = sequelize