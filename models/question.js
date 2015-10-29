module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Question', {
		questionText: DataTypes.STRING,
	}, {
		instanceMethods: {
			// methods
			/*
			countThings: function() {
				// Method implementation
				return 0 // return something
			}
			*/
		}
	})
}