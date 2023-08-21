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
};

userController.removeFavorite = async (req, res, next) => {
  console.log('inside userController.removeFavorite');
  const { image, title, usedIngredients, missedIngredients } = req.body;

  try {
    const foundItem = await Favorites.findOne({
      image,
      title,
      usedIngredients,
      missedIngredients,
    });

    const arr = [];
    const user = await User.findOne({ username: 'user1' });
    for (let i = 0; i < user.favorited.length; i++) {
      if (user.favorited[i].toString() === foundItem._id.toString()) {
        console.log(i);
      } else {
        arr.push(user.favorited[i]);
      }
    }
    await User.updateOne({ username: 'user1' }, { favorited: arr });

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = userController;
