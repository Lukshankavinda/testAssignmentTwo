const router = require('express').Router()
const auth = require('./auth.js');
const jwt = require('jsonwebtoken');
const db = require('../config/dbConfig.js');

const sellerController = require('../controllers/sellerController.js');
const profileController = require('../controllers/profileController.js');
const userController = require('../controllers/userController.js');
const advertisementController = require('../controllers/advertisementController.js');

// http://localhost:5000/api/seller/addProImg
router.post('/addProImg',auth,profileController.uploadProfileImage, profileController.addProfileImage) 

// http://localhost:5000/api/seller/addAdv
router.post('/addAdv',auth,advertisementController.uploadAdvImage, advertisementController.addAdvertisement) 

// http://localhost:5000/api/seller/getMyAd
router.get('/getMyAd',auth, advertisementController. getAllMyAdvertisements) 

// http://localhost:5000/api/seller/getOneAd/:adv_id
router.get('/getOneAd/:adv_id',auth,advertisementController.getSingleAdvertisement) 

// http://localhost:5000/api/seller/delAd/:adv_id
router.delete('/delAd/:adv_id',auth,advertisementController.deleteAdvertisement) 



module.exports = router