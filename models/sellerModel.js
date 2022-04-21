module.exports = (sequelize, DataTypes) =>{

	// Creating the model for Seller 
	const Seller = sequelize.define("seller", {
	    seller_id: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    seller_name: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    seller_email: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    seller_city: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    seller_tpno: {
	      type: DataTypes.STRING,
	      allowNull: false
	    }
	});

	return Seller

}