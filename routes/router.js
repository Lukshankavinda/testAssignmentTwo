const router = require('express').Router()
const jwt = require('jsonwebtoken');
const db = require('../config/dbConfig.js');

const sellerController = require('../controllers/sellerController.js');
const profileController = require('../controllers/profileController.js');
const userController = require('../controllers/userController.js');

//  http://localhost:5000/api/login
router.post('/login',userController.login)

// http://localhost:5000/api/register
router.post('/register',sellerController.register) 

// http://localhost:5000/api/addProfileImage 
router.post('/addProfileImage',profileController.uploadProfileImage, profileController.addProfileImage) 

module.exports = router