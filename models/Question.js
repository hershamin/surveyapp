module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Question', {
		questionText: DataTypes.STRING,
	}, {
		classMethods: {
			// class methods: Question.<method>
			/*
			countThings: function(vars, callback) {
				// Method implementation
				return 0 or callback && callback()
			}
			*/
		},
		instanceMethods: {
			// instance methods: question.<method>
			/*
			Same syntax as above
			*/
		}
	})
}
