const Users = require('../models/user.model')

class UserService {
  register = async (user) => {
    try {
    //   console.log("Registering user:", user);
      const { name, email, password } = user;
      const newUser = new Users({ name, email, password });
    //   console.log("Saving new user:", newUser);
      const result = await newUser.save();
    //   console.log("User saved successfully:", result);
      return result;
    } catch (error) {
    //   console.error("Error occurred while registering user:", error);
      throw error;
    }
  };
}

module.exports = UserService;
