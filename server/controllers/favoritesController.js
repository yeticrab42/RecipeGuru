const User = require('../models/userModel');
const Favorites = require('../models/favoritesModel');

const favoritesController = {};

favoritesController.addFavorite = async (req, res, next) => {
  console.log('inside favoritesController.addFavorite');
  const { image, title, usedIngredients, missedIngredients } = req.body;
  console.log(image, title, usedIngredients, missedIngredients);

  try {
    let newFavorite = await Favorites.findOne({
      image,
      title,
      usedIngredients,
      missedIngredients,
    });

    if (!newFavorite) {
      newFavorite = await Favorites.create({
        image,
        title,
        usedIngredients,
        missedIngredients,
      });
    }
    await newFavorite.save();
    // console.log(newFavorite);

    const foundUser = await User.findOne({ username: 'user1' });

    foundUser.favorited.push(newFavorite);
    foundUser.save();

    console.log(foundUser);

    return next();
  } catch (error) {
    return next(error);
  }
};

favoritesController.getFavorite = async (req, res, next) => {
  console.log('inside favoritesController.getFavorite');
  try {
    const foundUser = await User.findOne({ username: 'user1' });
    const arr = [];

    foundUser.favorited.forEach((el) => {
      Favorites.findById(el).then((foundItem) => {
        const obj = {};
        obj.image = foundItem.image;
        obj.title = foundItem.title;
        obj.usedIngredients = foundItem.usedIngredients;
        obj.missedIngredients = foundItem.missedIngredients;
        arr.push(obj);

        res.locals.favorited = [...arr];
        if (arr.length === foundUser.favorited.length) return next();
      });
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = favoritesController;
