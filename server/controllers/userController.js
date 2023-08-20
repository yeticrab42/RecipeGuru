const User = require('../models/userModel');
const Favorites = require('../models/favoritesModel');

const userController = {};

userController.addUser = async (req, res, next) => {
  console.log('inside userController.addUser');
  const { username, password } = req.body;

  try {
    const createdUser = await User.create({
      username,
      password,
    });
    console.log(createdUser);
    return next();
  } catch (error) {
    return next(error);
  }
  //   User.create({
  //     username,
  //     password,
  //   })
  //     .then((createdUser) => {
  //       console.log(createdUser);
  //       return next();
  //     })
  //     .catch((err) => {
  //       return next(err);
  //     });
};

module.exports = userController;
