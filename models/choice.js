module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Choice', {
		choiceText: DataTypes.STRING,
		//
	}, {
		instanceMethods: {
			// methods
		}
	})
}