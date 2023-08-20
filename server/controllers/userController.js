const User = require('../models/userModel');

const userController = {};

userController.createUser = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return next({
          log: "Missing username or password in userController.createUser.",
          status: 400,
          message: { err: "Username and Password required" },
        });
      }
     
      const user = await User.create({ username, password });
    //   res.locals.username = user.username; //for coookies
    //   console.log(res.locals.username);
      return next();
    } catch (err) {
      return next({
        log: "Error occurred in userController.createUser.",
        status: 500,
        message: { err: "An error occurred" },
      });
    }
  };


module.exports = userController;