module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Vote', {
		userName: DataTypes.STRING,
		//
	}, {
		instanceMethods: {
			// methods
		}
	})
}