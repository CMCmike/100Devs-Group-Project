const express = require('express')
const router = express.Router()

const watchController = require('../controllers/watch')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//apparently not working?

//watch incomplete not used
router.get('/watch', watchController.getWatching)

// watching
router.get('/watching', watchController.getWatching)
// watched
router.get('/finished', watchController.getWatched)
// toWatch
router.get('/toWatch', watchController.getToWatch)

router.post('/createWatch', watchController.createWatch)

router.put('/markWatched', watchController.markWatched)

router.put('/markIsWatching', watchController.markIsWatching)

router.delete('/deleteWatch', watchController.deleteWatch)



module.exports = router