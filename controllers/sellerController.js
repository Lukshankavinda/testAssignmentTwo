const db = require('../models')
const jwt = require("jsonwebtoken");

//create main modele Seller & User
const Seller = db.sellers
const User = db.users

//1. register Seller and validation
const register = async (req, res) =>{

	const seller_id = Date.now().toString();
	const seller_name = req.body.seller_name;
   	const seller_email = req.body.seller_email;
   	const seller_city = req.body.seller_city;
   	const seller_tpno = req.body.seller_tpno;

	// username min length 3
	if (!req.body.user_name || req.body.user_name.length < 3) {
		return res.status(400).send({
		  msg: 'Please enter a username with min. 5 chars'
		});
	}
	else{
		const user_name = req.body.user_name;

		//check user name is already used or not
		let result = await User.findOne({ where: {user_name:user_name}})
		if(result){
			return res.status(400).send({
				msg: 'this user name is already used'
			});
		}
		else{
			// password min 6 chars
			if (!req.body.password || req.body.password.length < 6) {
				return res.status(400).send({
					msg: 'Please enter a password with min. 6 chars'
			});
			} 
			else{
				const password = req.body.password;
				const re_Password = req.body.re_Password;
				// password (repeat) does not match
				if ( !re_Password || password != re_Password ) {
					return res.status(400).send({
						msg: 'Both passwords must match'
					});
				} else{
					Seller.create({
						seller_id: seller_id,
						seller_name: seller_name,
						seller_email: seller_email,
						seller_city: seller_city,
						seller_tpno: seller_tpno
					});

					User.create({
						seller_id: seller_id,
						user_name: user_name,
						password: password
					});
						
					return res.status(200).send({
						msg: 'A new Seller is registed'
					});
				}
			}
		}
	}	
}


module.exports = {
	register
}