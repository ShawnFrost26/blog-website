const userRouter = require("express").Router()
const {registerUser} = require('../controllers/users.controller')


userRouter.post('/register', registerUser)


module.exports = userRouter;