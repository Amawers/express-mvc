const express = require('express')
const router = express.Router()
const { registerUser, logInUser, logOutUser } = require('../controllers/auth.controller')

// REGISTER USER
router.post('/register', registerUser)

// LOGIN USER
router.post('/login', logInUser)

// LOGOUT USER
router.get('/logout', logOutUser)

module.exports = router;
