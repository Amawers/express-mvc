const express = require('express');
const router = express.Router();

// const { registerUser, logInUser, logOutUser, updateUser } = require('../routes/user.route')
const { registerUser, logInUser, logOutUser, updateUser } = require('../controllers/user.controller')

// REGISTER USER
router.get('/', logInUser)

//

module.exports = router