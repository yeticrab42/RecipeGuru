const User = require('../models/userModel');
const Favorites = require('../models/favoritesModel');

const favoritesController = {};

favoritesController.addFavorite = async (req, res, next) => {
  console.log('inside favoritesController.addFavorite');
  const { image, title, usedIngredients, missedIngredients } = req.body;
  console.log(image, title, usedIngredients, missedIngredients);

  try {
    const newFavorite = await Favorites.create({
      image,
      title,
      usedIngredients,
      missedIngredients,
    });
    await newFavorite.save();
    console.log(newFavorite);

    const foundUser = await User.findOne({ username: 'user1' });
    //   .populate(newFavorite)
    // console.log('between creating documents');
    console.log(foundUser);
    // newFavorite.favoriters.push(foundUser);
    // newFavorite.save();

    foundUser.favorited.push(newFavorite);
    foundUser.save();

    console.log(foundUser);

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = favoritesController;
