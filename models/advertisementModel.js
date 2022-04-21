module.exports = (sequelize, DataTypes) =>{

	// Creating the model
	const Advertisement = sequelize.define("advertisement", {
	    seller_id: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    advertisement_id: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    condition: {
	      type: DataTypes.ENUM("new", "used"),
	      allowNull: false
	    },
	    city: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    category: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    topic: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    description: {
	      type: DataTypes.TEXT,
	      allowNull: false
	    },
	    price: {
	      type: DataTypes.INTEGER,
	      allowNull: false
	    },
	    nagotiable: {
	      type: DataTypes.ENUM("yes", "no"),
	      defaultValue: "no",
	      allowNull: false
	    },
	    Photo: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    name: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    email: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    tpno: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    hide_tpno: {
	      type: DataTypes.ENUM("yes", "no"),
	      defaultValue: "no",
	      allowNull: false
	    }

	});

	return Advertisement

}