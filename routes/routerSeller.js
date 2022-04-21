const router = require('express').Router()
const jwt = require('jsonwebtoken');
const db = require('../config/dbConfig.js');

const sellerController = require('../controllers/sellerController.js');
const profileController = require('../controllers/profileController.js');
const userController = require('../controllers/userController.js');
const advertisementController = require('../controllers/advertisementController.js');

// http://localhost:5000/api/seller/addProfileImage 
router.post('/addProfileImage',profileController.uploadProfileImage, profileController.addProfileImage) 

// http://localhost:5000/api/seller/addAdvertisement
router.post('/addAdvertisement',advertisementController.uploadAdvImage, advertisementController.addAdvertisement) 

// http://localhost:5000/api/seller/getMyAd/:id
router.get('/getMyAd/:id', advertisementController. getAllMyAdvertisements) 

// http://localhost:5000/api/seller/getOneAd/:adv_id
router.get('/getOneAd/:adv_id',advertisementController.getSingleAdvertisement) 


module.exports = router