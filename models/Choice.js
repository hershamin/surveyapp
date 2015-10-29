module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Choice', {
		choiceText: DataTypes.STRING,
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
