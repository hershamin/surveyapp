module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Vote', {
		userName: DataTypes.STRING,
	}, {
		classMethods: {
			// class methods: Vote.<method>
			/*
			countThings: function(vars, callback) {
				// Method implementation
				return 0 or callback && callback()
			}
			*/
		},
		instanceMethods: {
			// instance methods: vote.<method>
			/*
			Same syntax as above
			*/
		}
	})
}
