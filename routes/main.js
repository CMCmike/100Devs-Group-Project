const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')

//  controller for watching
const watchingController = require('../controllers/watchingShows')

 //controller for watched
 const watchedController = require('../controllers/watchedShows')

const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

// watching
router.get('/watching', watchingController.getWatching)

//watched
router.get('/finished', watchedController.getWatched)

module.exports = router