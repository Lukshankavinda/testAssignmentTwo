module.exports = (sequelize, DataTypes) =>{

	// Creating the model upload profile image
	const Profile = sequelize.define("profile", {
	    seller_id: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    photo: {
	      type: DataTypes.STRING,
	      allowNull: false
	    }
	});

	return Profile

}