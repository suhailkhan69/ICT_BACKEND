const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../model/user')

usersRouter.post('/', async (request, response) => {
  let { userName,userAge,userEmail,userPassword, userMobile
     } = request.body

  const saltRounds = 10
  userPassword = await bcrypt.hash(userPassword, saltRounds)
  const user = new User({
    userName,
    userAge,
    userEmail,
    userPassword,
    userMobile
   
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

module.exports = usersRouter