const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()

const User = require('../model/user')

loginRouter.post('/', async (request, response) => {
  const { userEmail, userPassword } = request.body
    console.log(userEmail)
  try{
  const user = await User.findOne({ userEmail : userEmail })
  console.log(`the user is ${user}`)
  console.log(`the password is ${user.userPassword}`)
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(userPassword, user.userPassword)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }
  console.log("password is valid")

  const userForToken = {
    userEmail: user.userEmail,
    id: user._id,
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  response
    .status(200)
    .send({ token, user: user})
    }
    catch(err){
      console.log(error)
    }
})

module.exports = loginRouter