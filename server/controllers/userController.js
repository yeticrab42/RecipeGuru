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
  const {ssid} = req.cookies

  try {
    const foundItem = await Favorites.findOne({
      image,
      title,
      usedIngredients,
      missedIngredients,
    });

    const arr = [];
    const user = await User.findOne({ _id: ssid });
    for (let i = 0; i < user.favorited.length; i++) {
      if (user.favorited[i].toString() === foundItem._id.toString()) {
        console.log(i);
      } else {
        arr.push(user.favorited[i]);
      }
    }
    await User.updateOne({  _id: ssid }, { favorited: arr });

    return next();
  } catch (error) {
    return next(error);
  }
};

userController.verifyUser = (req, res, next) => {

  try {
    //find method return the data as an array
    User.find({ username: req.body.username }).then((data) => {
      //because the username is unique, we grab the first element of data
      if (req.body.password === data[0].password) {
        res.locals.id = data[0]._id.toString();
        res.locals.verified = true;
      }
      else {
        res.locals.verified = false;
      }
     
      return next();
    });
  } catch(err) {
    return next(err);
  }
};

userController.setSSIDCookie = (req, res, next) => {
  const userId = res.locals.id
  res.cookie('ssid', userId)
  return next();
}

module.exports = userController;