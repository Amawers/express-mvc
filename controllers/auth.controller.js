const models = require('../models/index')
const jwt = require('jsonwebtoken')

const duration = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({id}, 'test', {
    expiresIn: duration
  })
}

const registerUser = async (req, res) => {
  const { name, age } = req.body
  try {
    const user = await models.User.create({ name, age })
    const token = createToken(user.id);
    res.cookie('jwt', token, { httpOnly: true, duration: duration*1000})
    res.json({
       message: "Successfully registered.",
       success: true, 
       token
      })
  } catch (error) {
    res.send(error)
  }
}

const logInUser = async (req, res) => {
  res.send('hey')
}

const logOutUser = async (req, res) => {
  const user = await models.User.findAll()
  res.json({ user })
}

module.exports = { registerUser, logInUser, logOutUser }
