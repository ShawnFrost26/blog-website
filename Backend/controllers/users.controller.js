const UserService = require("../services/users.service");
const UserServiceInstance = new UserService();

const registerUser = async (req, res) => {
  try {
    // console.log("Attempting to register user...");
    const result = await UserServiceInstance.register(req.body);
    // console.log("User registration successful:", result);
    res.json(result);
  } catch (error) {
    // console.error("An error occurred while registering the user:", error);
    if (error.code === 11000) {
      //   console.log("User already exists in the database");
      res.status(409).json({
        message: "Failed to create new user",
        reason: "Already exists in DB",
      });
    } else {
      //   console.log("Failed to create new user:", error);
      res.status(500).json({ message: "Failed to create new user", error });
    }
  }
};

const getAllUsers = async (req, res) => {
  try {
    // console.log("Fetching all users...");
    const userResult = await UserServiceInstance.findAll();
    if (userResult) {
      //   console.log("Users found:", userResult);
      res.json(userResult);
    } else {
      //   console.log("No users found");
      res.status(404).json({ message: "No Users found" });
    }
  } catch (error) {
    // console.error("Error occurred while fetching user details:", error);
    res.status(500).json({ message: "Error fetching user details", error });
  }
};

module.exports = {
  registerUser,
  getAllUsers,
};
