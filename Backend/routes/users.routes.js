const userRouter = require("express").Router();
const {
  registerUser,
  getAllUsers,
} = require("../controllers/users.controller");
const {userValidationSchema} = require('../validators/users.validator');
const {validateSchema} = require('../middlewares/validate.middleware')

const validateUser = validateSchema(userValidationSchema)

userRouter.post("/register", validateUser, registerUser);
userRouter.get("/", getAllUsers);

module.exports = userRouter;
