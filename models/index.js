const dbConfig = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require('sequelize');

//  assing parameters separately  to mysql2
const sequelize = new Sequelize(
	dbConfig.DB,
	dbConfig.USER,
	dbConfig.PASSWORD, {
		host: dbConfig.HOST,
		dialect: dbConfig.dialect,
		operatorsAliases: false,

		pool: {
			max: dbConfig.pool.max,
			min: dbConfig.pool.min,
			acquire: dbConfig.pool.acquire,
			idle: dbConfig.pool.idle
		}
	}
)

sequelize.authenticate()
.then(() =>{
	console.log('connected..')
})
.catch(err =>{
	console.log('Error'.err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.sellers = require('./sellerModel.js')(sequelize, DataTypes)
db.users = require('./userModel.js')(sequelize, DataTypes)
db.profiles = require('./profileModel.js')(sequelize, DataTypes)
db.advertisements = require('./advertisementModel.js')(sequelize, DataTypes)


db.sequelize.sync({ force: false})
.then(() => {
	console.log('yes re-sync done!')
})

module.exports = db