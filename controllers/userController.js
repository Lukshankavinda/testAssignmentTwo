const db = require('../models')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

//create main modele User
const User = db.users

// login 
const login = async (req, res) =>{

    // username is input or not
	if (!req.body.user_name ) {
		return res.status(400).send({
		    msg: 'Please enter a username '
		});
	}
	else{
        const user_name = req.body.user_name;
        // password is input or not
        if (!req.body.password ) {
            return res.status(400).send({
                msg: 'Please enter a password '
            });
        }
        else{
            const password = req.body.password;
            let result = await User.findOne({ 
                attributes:['seller_id','password'],
                where: {user_name:user_name}
            })
            if(!result){
                return res.status(400).send({
                    msg: 'Please enter valid user name  '
                });
            }else{
                if( await bcrypt.compare(password, User.password) ){
                    return res.status(400).send({
                        msg: 'Please enter valid user password '
                    });
                }else{
                    const token = jwt.sign({
                        username: user_name,
                        userId: result.seller_id
                    },
                    "SECRETKEY",
                    {expiresIn:'1d'}
                    );
                    return res.status(200).send({
                        msg: 'ok ',
                        user_name,
                        password,
                        token,
                    });
                }

            }
        }
    }
}

module.exports = {
	login
}

