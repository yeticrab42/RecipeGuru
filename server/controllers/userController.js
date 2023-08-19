const User = require('./models/userModel');
const userController = {};

//create user
userController.createUser = async (req, res, next) => {
  //console.log("createUser called");
  try {
    const { username, password } = req.body; 
    //check if both requirements are included
    if (!username || !password) {
      return next({
        log: "Missing username or password in userController.createUser.",
        status: 400,
        message: { err: "Username and Password required" },
      });
    }
   
    const user = await User.create({ username, password });
    res.locals.username = user.username; //to persist if we choose to chain middleware
    // console.log(res.locals.username);
    return next();
  } catch (err) {
    return next({
      log: "Error occurred in userController.createUser.",
      status: 500,
      message: { err: "An error occurred" },
    });
  }
};