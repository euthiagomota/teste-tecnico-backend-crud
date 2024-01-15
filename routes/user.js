const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const checkToken = require('../middleware/checkToken')

router.get('/users', UserController.findAllUsers)
router.post('/register', UserController.register)
router.put('/user/:id',checkToken, UserController.update)
router.delete('/user/:id',checkToken, UserController.delete)

router.post('/authenticate', UserController.login)

module.exports = router

