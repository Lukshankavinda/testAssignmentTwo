const db = require('../models')

//image upload
const multer = require('multer')
const path = require('path')


//create main modele for upload image
const Advertisement = db.advertisements

// upload image for  Advertisement

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/images/advertisements_images')
	},
	filename:(req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname))
	}
})

const uploadAdvImage = multer({
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
}).single('Photo')

//1. add  new Advertisement
const addAdvertisement = async (req, res) =>{

   		const seller_id = req.body.seller_id;
        const advertisement_id = seller_id+'_'+Date.now().toString();
        const condition = req.body.condition;
        const city = req.body.city;
        const category = req.body.category;
        const topic = req.body.topic;
        const description = req.body. description;
        const price = req.body.price;
        const nagotiable = req.body.nagotiable;
        const Photo = req.file.path;
        const seller_name = req.body.seller_name;
        const email = req.body.email;
        const tpno = req.body.tpno;
        const hide_tpno = req.body.hide_tpno;
   		

   		Advertisement.create({
            seller_id: seller_id,
		    advertisement_id: advertisement_id,
            condition: condition,
            city: city,
            category: category,
            topic: topic,
            description: description,
            price: price,
            nagotiable: nagotiable,
            Photo: Photo,
            name: seller_name,
            email: email,
            tpno: tpno,
            hide_tpno: hide_tpno,
    	});

        return res.status(200).send({
            msg: ' A new Advertisement added sucsessfully'
        });
}

//2. get all Advertisements
const getAllAdvertisements = async (req,res) =>{
    let adv = await Advertisement.findAll({
        attributes:['topic','city','category','Photo','price']
    })
    res.status(200).send(adv)
}

//3. get all Advertisements by category
const getAllAdvertisementsByCategory = async (req,res) =>{
    let category =req.params.category
    let adv = await Advertisement.findAll({
        attributes:['topic','city','category','Photo','price'], 
        where: {category:category}})
    res.status(200).send(adv)
}

//4. get all Advertisements by seller_id
const getAllMyAdvertisements = async (req,res) =>{
    let seller_id =req.params.id
    let adv = await Advertisement.findAll({ 
        attributes:['topic','city','category','Photo','price'],
        where: {seller_id:seller_id}})
    res.status(200).send(adv)
}

//5. get single Advertisements using advertisement_id
const getSingleAdvertisement = async (req,res) =>{
    let advertisement_id =req.params.adv_id
    let adv = await Advertisement.findOne({ where: {advertisement_id:advertisement_id}})
    res.status(200).send(adv)
}

//6. Update the Advertisement using advertisement_id

//7. Delete the Advertisement using advertisement_id
const deleteAdvertisement = async (req,res)=>{
    let id =req.params.id
    await Item.destroy({where :{advertisement_id :id}})
    res.status(200).send('Advertisement is deleted !')
}

//8.  Advertisement per page
const AdvertisementPerPage = async (req,res) =>{
    let limit =3;
    let offset =0;

    Advertisement.findAndCountAll()
    .then((data)=>{
        let page =req.params.page;
        let pages = Math.ceil(data.count/limit);

        offset =limit*(page-1);

        Advertisement.findAll({
            attributes:['topic','city','category','Photo','price'],
            limit: limit,
            offset: offset,
            $sort: { id: 1 }
        })
        .then((users)=>{
            res.status(200).json({'result': users, 'count': data.count, 'pages': pages});
        });
    })
}


module.exports = {
	uploadAdvImage,
	addAdvertisement,
    getAllAdvertisements,
    getAllAdvertisementsByCategory,
    getSingleAdvertisement,
    getAllMyAdvertisements,
    deleteAdvertisement,
    AdvertisementPerPage
}