module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Choice', {
		choiceText: DataTypes.STRING,
	}, {
		classMethods: {
			// class methods: Choice.<method>
			/*
			countThings: function(vars, callback) {
				// Method implementation
				return 0 or callback && callback()
			}
			*/
		},
		instanceMethods: {
			// instance methods: choice.<method>
			/*
			Same syntax as above
			*/
		}
	})
}
