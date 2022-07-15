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
        const username = req.body.user_name;
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
                where: {user_name:username}
            })
            if(!result){
                return res.status(400).send({
                    msg: 'Please enter valid user name  '
                });
            }else{
                // check password
                bcrypt.compare(password, result['password'],(bErr, bResult) => {
                    // wrong password
                    if (bErr) {
                        return res.status(401).send({
                            msg: 'Username or password is incorrect!'
                        });
                        throw bErr;
                    }
                    if (bResult) {
                        const token = jwt.sign({
                            username: username,
                            userId: result.seller_id
                        },
                        "SECRETKEY",
                        {expiresIn:'1d'});
                        return res.status(200).send({
                            msg: 'ok ',
                            username,
                            password,
                            token,
                        });
                    }
                    return res.status(401).send({
                        msg: 'Please enter valid user password '
                    });
                });
            }
        }
    }
}

module.exports = {
	login
}

