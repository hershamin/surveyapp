module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Question', {
		questionText: DataTypes.STRING,
		//
	}, {
		instanceMethods: {
			// methods
		}
	})
}