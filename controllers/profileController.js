const db = require('../models')

//image upload
const multer = require('multer')
const path = require('path')


//create main modele for upload image
const Seller = db.sellers
const Profile = db.profiles


// upload image for profile image

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/images/profile_images')
	},
	filename:(req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname))
	}
})

const uploadProfileImage = multer({
	storage: storage,
	limits: { fileSize: '2000000'},
	fileFilter:(req, file, cb) =>{
		const fileTypes = /jpeg|jpg|png|gif/
		const mimeType = fileTypes.test(file.mimetype)
		const extname = fileTypes.test(path.extname(file.originalname))

		if(mimeType && extname){
			return cb(null, true)
		}
		cb('input correct file format to image')
	}
}).single('photo')


const addProfileImage = async (req, res) =>{

   		const seller_id = req.body.seller_id;
   		const photo = req.file.path;

   		Profile.create({
   			seller_id: seller_id,
		    photo: photo
	   		
    	});
}


module.exports = {
	uploadProfileImage,
	addProfileImage
}