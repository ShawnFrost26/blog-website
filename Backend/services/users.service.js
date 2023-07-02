const Users = require("../models/user.model");

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

  findAll = async () => {
    try {
      //   console.log("Finding all users...");
      const userResult = await Users.find({});
      //   console.log("Users found:", userResult);
      return userResult;
    } catch (error) {
      //   console.error("Error occurred while finding users:", error);
      throw error;
    }
  };
}
module.exports = UserService;
