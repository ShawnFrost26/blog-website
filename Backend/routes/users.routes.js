const userRouter = require("express").Router()
const {
    registerUser, getAllUsers} = require('../controllers/users.controller')


userRouter.post('/register', registerUser)
userRouter.get('/', getAllUsers)


module.exports = userRouter;