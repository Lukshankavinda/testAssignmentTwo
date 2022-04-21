const router = require('express').Router()
const jwt = require('jsonwebtoken');
const db = require('../config/dbConfig.js');

const sellerController = require('../controllers/sellerController.js');
const profileController = require('../controllers/profileController.js');
const userController = require('../controllers/userController.js');
const advertisementController = require('../controllers/advertisementController.js');

//  http://localhost:5000/api/login
router.post('/login',userController.login)

// http://localhost:5000/api/register
router.post('/register',sellerController.register) 

// http://localhost:5000/api/getAllAd
router.get('/getAllAd',advertisementController.getAllAdvertisements) 

// http://localhost:5000/api/getCategoryAd/:category
router.get('/getCategoryAd/:category',advertisementController.getAllAdvertisementsByCategory) 

// http://localhost:5000/api/getOneAd/:adv_id
router.get('/getOneAd/:adv_id',advertisementController.getSingleAdvertisement) 

// http://localhost:5000/api/home/:page
router.get('/home/:page',advertisementController.AdvertisementPerPage) 

module.exports = router