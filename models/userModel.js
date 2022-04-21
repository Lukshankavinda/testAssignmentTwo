module.exports = (sequelize, DataTypes) =>{

	// Creating the model User
	const User = sequelize.define("user", {
	    seller_id: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    user_name: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    password: {
	      type: DataTypes.STRING,
	      allowNull: false
	    }
	});

	return User

}